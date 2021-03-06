const validator = require('validator')
const isEmpty = require('is-empty')

module.exports = function validateRegisterInput(data) {
    let errors = {}

    data.name = isEmpty(data.name) ? "" : data.name
    data.email = isEmpty(data.email) ? "" : data.email
    data.password = isEmpty(data.password) ? "" : data.password
    data.confirm_password = isEmpty(data.confirm_password) ? "" : data.confirm_password

    if (validator.isEmpty(data.name)) {
        errors.name = "Name field is required"
    }

    if (validator.isEmpty(data.email)) {
        errors.email = "Email field is required"
    }

    if (validator.isEmpty(data.password)) {
        errors.password = "Password field is required"
    }

    if (validator.isEmpty(data.confirm_password)) {
        errors.confirm_password = "Confirm Password field is required"
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}