import React, { Component } from 'react'

export default class Typingscript extends Component {
    render() {
        return (
            <div className="script">
                <div className="balise">
                    {"<"}<div>script</div> {">"}
                </div>
                <p> 
                    {this.props.text}
                </p>
                <div className="balise">
                    {"</"}<div>script</div> {">"}
                </div>
            </div>
        )
    }
}
