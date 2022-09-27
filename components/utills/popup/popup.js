import Link from 'next/link'
import React, { Component } from 'react'
import style from './popup.module.scss'

export default class Popup extends Component {
    
    render() {
        return (
            <div className={style.popup} onClick={(e)=>this.props.callback()}>
                <div className={style.children}>
                    <div className={style.dimiss} onClick={(e)=>this.props.callback()}>&#10005;</div>
                    <br></br>
                    {this.props.children}
                    <br></br>
                    <br></br>
                    <Link href="https://www.linkedin.com/posts/prince-nick-ballo_reactdeveloper-reactjs-nodejs-activity-6784459989013684224-N_P5">
                        <a>
                            Lien vers le poste sur linkedin &#x2192;
                        </a>
                    </Link>
                </div>
            </div>
        )
    }
}
