import Link from 'next/link'
import Image from 'next/image'
import React, { Component } from 'react'
import style from './media.left.module.scss'

export default class MediaLeft extends Component {
    render() {
        return (
            <div className={style.global}>
                <p>Prince Nick BALLO</p>
                <Link href="https://github.com/Princenick-BL">
                    <a>
                        <div className={style.media}>
                            <Image width={25} height={25} src="/icons/github.jpeg" alt="github"/>
                        </div>
                    </a>
                </Link>
                <Link href="https://www.linkedin.com/in/prince-nick-ballo">
                    <a>
                        <div className={style.media }>
                            <Image width={25} height={25} src="/icons/linked.jpeg" alt="linkedIn"/>
                        </div>
                    </a>
                </Link>
                <Link href="mailto:princenickballo@gmail.com?subject=Prise de contact">
                    <a>
                        <div className={style.media}>
                            <Image width={25} height={25} src="/icons/mail.jpeg" alt="gmail"/>                         
                        </div>
                    </a>
                </Link>
                {/* <Link href="tel:+33754509649">
                    <a>
                        <div className={style.media}>
                            <Image width={25} height={25} src="/icons/tel.jpeg" alt="phone"/>
                        </div>
                    </a>
                </Link> */}
            </div>
        )
    }
}
