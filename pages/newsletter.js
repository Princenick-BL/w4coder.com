import React, { useState } from 'react'
import styles from './index.module.scss'
import DefaultLayout from '../layouts/default'

export default function Newsletter({isBreakpoint}) {

    const [email,setEmail] = useState(false)

    return (
        <DefaultLayout
            title={"w4coder"}
            description={""}
            isBreakpoint={isBreakpoint}
        >
            <h1 style={{textAlign:"center"}}>Inscrivez-vous à notre newsletter.</h1>
            <br></br>
            <p style={{lineHeight:"1.5",textAlign:"center",margin:"1rem"}}>Ne manquez aucun de nos article, story ou tutoriel avec notre newsletter hebdomadaire.</p>
            <form className={styles.newLetterForm}>
                <input type={"email"} placeholder={"Email"} onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type={"submit"} value="S'inscrire"/>
            </form>     
        </DefaultLayout>
    )
}
