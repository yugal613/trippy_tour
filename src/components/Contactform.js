import "../components/contactform.css"

import React, { Component } from 'react'

export class Contactform extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fname: "",
            email: "",
            subject: "",
            message: "",
        }
    }
    fnamehandler = (event) => {
        this.setState({
            fname: event.target.value
        })
    }

    emailhandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    subjectHandler = (event) => {
        this.setState({
            subject: event.target.value
        })
    }

    messageHandler = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    submitHandelr = (event) => {
        alert(`Form Has Been Submitted Successfully`)
        alert(`welcome ${this.state.fname}`)
    }
    render() {

        
        return (
            <div className="form-container">
                <h1>Send A Message To Us</h1>
                <form onSubmit={() => { "/" }}>

                    <input placeholder="Name" value={this.state.fname} onChange={this.fnamehandler}></input>

                    <input placeholder="Email" value={this.state.email} onChange={this.emailhandler}></input>

                    <input placeholder="Subject" value={this.state.subject} onChange={this.subjectHandler}></input>

                    <textarea placeholder="Message" rows="4" value={this.state.message} onChange={this.messageHandler}></textarea>

                    <button onClick={this.submitHandelr} >Send Message</button>
                </form>
            </div>
        )
    }
}

export default Contactform