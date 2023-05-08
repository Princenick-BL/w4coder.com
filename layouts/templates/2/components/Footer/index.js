import React from 'react'
import styles from './footer.module.scss'
import Image from 'next/image'
import Logo from '../../../../../components/Logo'
import { menu } from '@/constants'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

export default function Footer({toggleTheme}) {
    const { t } = useTranslation()

    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <div>
                        <Logo style={{margin:"0 .2rem",marginTop:"4px"}} w={25} h={25} />
                    </div>
                   
                </div>
                <div className={styles.right}>
                    <p className={styles.h3}>Stay Updated</p>
                    <p>Stay informed of the news and don't miss anything</p>
                    <form className={styles.newsletterbox}>
                        <input type='text' placeholder='Type your email ...'/>
                        <input type='submit' value={'subscribe'}/>
                    </form>
                    <div className={styles.navigation}>
                        {/* <ul className={styles.submenu}>
                            {menu?.map((m,i)=>{
                            return <li key={i}><Link href={m.slug}>{t(m.name)}</Link></li>
                            })}
                        </ul> */}
                        <div className={styles.nav_sub}>
                            <div className={styles.nav_sub_top}>

                            </div>
                            
                        </div>
                    </div>
                   
                </div>
                
            </div>
            <div className={styles.cr}>
                <div>
                    Copyright © 2022 w4coder. All rights reserved.
                </div>
                <div style={{display:"flex",alignItems:"center"}}>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.a}
                    >
                        Powered by{' '} Nick's corp
                        
                    </a>
                    <div className={styles.themeChanger}>
                        <div>
                            <svg className="sun-and-moon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
                                <circle className="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor" />
                                <g className="sun-beams" stroke="currentColor">
                                    <line x1="12" y1="1" x2="12" y2="3" />
                                    <line x1="12" y1="21" x2="12" y2="23" />
                                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                    <line x1="1" y1="12" x2="3" y2="12" />
                                    <line x1="21" y1="12" x2="23" y2="12" />
                                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                                </g>
                            </svg>
                        </div>
                        <select onChange={(e)=>{toggleTheme(e)}}>
                            <option value={"system"}>System</option>
                            <option value={"lignt"}>Light</option>
                            <option value={"dark"}>Dark</option>
                        </select>
                    </div>
                </div>
            </div>
   
        </footer>
    )
}
