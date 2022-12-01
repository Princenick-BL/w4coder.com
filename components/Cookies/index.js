import React, { useState ,useEffect} from 'react'
import styles from './index.module.scss'

export default function Cookies() {

    const [cookies,setCookies] = useState({
        accept : false,
        all : true,
    })

    function setTheme(accept) {
        sessionStorage.setItem('used-cookies', {
            accept : accept,
            all : true,
        });
        setCookies({
            accept : accept,
            all : true,
        })
    }
    useEffect(() => {
        const cookie = sessionStorage.getItem('used-cookies')
        setCookies(cookie)
    }, [])
    
    return (
        <>
        {!cookies && (
        <div className={styles.cookies +  " cookies"}>
            
            <div className={styles.info}>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%"}}>
                    <h4 style={{width:"max-content",minWidth:"max-content"}}>Mais d’abord, les cookies 🍪</h4>
                    <span className={styles.essentials} onClick={(e)=>{setTheme(false)}}>Accepter uniquement les cookies essentiels</span>
                </div>

                <div className={styles.txt}>
                    <span>
                        Nous utilisons des cookies et des méthodes similaires pour reconnaître les visiteurs et mémoriser leurs préférences. Nous les utilisons également pour mesurer l'efficacité des campagnes publicitaires, cibler les annonces et analyser le trafic du site. Pour en savoir plus sur ces méthodes, y compris sur la manière de les désactiver, consultez notre politique en matière de cookies.                
                    </span>
                    
                    <br></br>
                    <span>
                        En cliquant sur "accepter", vous consentez à l'utilisation de ces méthodes par nous et par des tiers. Vous pouvez toujours modifier vos préférences en matière de suivi en consultant notre politique en matière de cookies.                
                    </span>

                </div>
                <div className={styles.buttons}>
                    <button onClick={(e)=>{setTheme(true)}}>TOUT ACCEPTER</button>
                </div>
            </div>
        </div>

        )}
        </>
    )
}
