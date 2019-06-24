import React, { Component } from "react"

class Register extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            password: "",
            confirm_password: "",
            errors: {}
        }
    }
}