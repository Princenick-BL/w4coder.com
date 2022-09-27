import React, { Component } from 'react'
import style from './rating.module.scss'

export default class Rating extends Component {
    render() {
        return (
            <div className={style.global}>
                <div className={style.stars}>
                    <div className={style.star}></div>
                    <div className={style.star}></div>
                    <div className={style.star}></div>
                    <div className={style.star}></div>
                    <div className={style.star}></div>
                </div>
            </div>
        )
    }
}
