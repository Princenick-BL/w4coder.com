import React, { Component } from 'react'
import style from './header.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../Logo'

export default class header extends Component {
    render() {
        return (
            <div className={style.headerContainer}>
                <div className={style.header}>

                    <div className={style.translucide}>
                        <Link href={"/read"}>
                            <a>
                                <Logo style={{fontSize:"2rem"}}/>
                            </a>
                        </Link>
                        <br></br>
                        {/* <div className={style.discoverText}>Découvrez mes compétences de A à Z !!!</div> */}
                        <div className={style.script}>
                            <div className={style}></div>
                            {"<"}<div>script</div> {">"}
                            <p>L'ingénierie web</p>
                            {"</"}<div>script</div> {">"}
                        </div>

                    </div>
                    
                </div>
            </div>

        )
    }
}


export function NewHead() {
  return (
    <div>
        <Link href={"/read"}>
            <a>
                <Logo/>
            </a>
        </Link>
    </div>
  )
}
