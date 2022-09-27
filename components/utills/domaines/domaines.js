import React, { Component } from 'react'
import Image from 'next/image'
import style from './domaines.module.scss'

export default class Domaines extends Component {
    render() {
        return (
            <div className={style.global} style={this.props.style}>
                <div className={style.img}>
                    <Image  src={this.props.src} width={50} height={50} alt="image"/>
                </div>
                <div className={style.textZone}>
                    <div>{this.props.title1}</div>
                    <div className={style.text}>{this.props.title2}</div>
                </div>
            </div>
        )
    }
}
