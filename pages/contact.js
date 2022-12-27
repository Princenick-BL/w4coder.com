import React from 'react'
import styles from './index.module.scss'
import DefaultLayout from '../layouts/default'

export default function Contact({isBreakpoint}) {
  return (
    <DefaultLayout
      title={"w4coder"}
      description={""}
      isBreakpoint={isBreakpoint}
    >
        <h1 style={{marginTop:"1rem"}}>Contactez nous</h1>
        <p>Nous sommes à votre écoute</p>
        <div className={styles.contact}>
            <div>
                <h3 style={{display:"flex",alignItems:"center"}}>Service client</h3>
                <br></br>
                <p>Vous avez une recommendation pour ou nous ou une requête à nous soumettre ? N'hésitez pas notre service client étudiera votre message avec soin et attention.
                    <br></br>Merci à vous !!!</p>
                <a href='mailto:contact@w4coder.com'>Email : contact@w4coder.com</a>
            </div>
            <form className={styles.contactForm}>
                <input type={"text"} name="name" placeholder="Full Name"/>
                <input type={"email"} name="Email" placeholder="Email"/>
                <textarea 
                    placeholder="Your message"
                    rows={6}
                >

                </textarea>
                <input type={"submit"} value={"Submit"}/>
            </form>
        </div> 
    </DefaultLayout>
  )
}
