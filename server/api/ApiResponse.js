'use strict';
const jwt = require("jsonwebtoken");

module.exports = class ApiResponse {
    constructor(code, message) {
        this.__obj = {
            code,
            message,
            status: true,
            data: {},
            auth: ""
        }
    }

    setContext(data) {
        this.__obj.data = data;
    }

    setMessage(message) {
        this.__obj.message = message;
    }

    setFailedStatus(message) {
        this.__obj.status = false;
        this.__obj.message = message;
    }

    sendAuthToken(message) {
        this.__obj.auth = jwt.sign({
            email: message.email,
            username: message.username,
            admin: message.admin
        });
    }

    json() {
        return { ...this.__obj };
    }
}