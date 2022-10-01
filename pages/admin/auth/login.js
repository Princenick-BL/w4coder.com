import React ,{useState } from 'react'
import styles from './index.module.scss'
import { useGlobalContext } from '../../../contexts/global.context';
import { config } from '../../../constants';
import axios from 'axios'
import {useRouter} from 'next/router'
//import {notification} from 'antd'
import {GlobalProvider} from '../../../contexts/global.context'
import {ArticleProvider} from '../../../contexts/article.context'
import Logo from '../../../components/Logo'


export function LoginV2() {

    const [active,setActice] = useState(false)
    const [showPass,setShowPass] = useState(false);
    const [loginId,setLoginId] = useState("")
    const [loginPwd,setLoginPwd] = useState("")
    const {state,dispatch} = useGlobalContext()
    const Router = useRouter();
    const [error,setError] = useState(false)

    const {redirect} = Router.query

    
    const login = async (e) =>{
        e.preventDefault()
        try{

            const res = await axios.post(`${config.API_ENDPOINT}/auth/login`,{
                email : loginId,
                password : loginPwd
            })
            if(!res.data?.error){
                window.localStorage.setItem("access_token", res?.data?.token);
                dispatch({ //onClose(false)
                    // setNotification({
                    //     text : res.data.message,
                    //     type:"success"
                    // })
                    
                    type:"LOGIN",
                    payload:res?.data?.token,
                })
                // notification.success({
                //     message:res.data.message,
                // })
                Router.push(redirect)
               
            }
            if(res.data?.error){
                setError(res.data?.message)
                // setNotification({
                //     text : res.data?.message,
                //     type:"error"
                // })
            }
        }catch(e){
            setError(e?.message)

        }
        
    }

    const toggleForm = (e)=>{
        e.preventDefault()
        setActice(!active)
    }

    return (
        <div className={styles.loginV2}>
            <div className={styles.error}>
                {error}
            </div>
            <section>
                <div className={styles.container +" "+ (active ? styles.active : "")}>
                <div className={styles.user+" "+styles.signinBx}>
                    <div className={styles.imgBx}>
                        <Logo style={{maxWidth: "max-content",fontSize:"2rem",color:"#fff"}}/>
                        {/* <img src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img1.jpg" alt="" /> */}
                    </div>
                    <div className={styles.formBx}>
                    <form action="" onSubmit={(e)=>{login(e)}}>
                        <h2>Sign In</h2>
                        <input type={"text"} name="email" placeholder='Email' value={loginId} onChange={(e)=>{setLoginId(e.target.value)}} />
                        <input type="password" name="password" placeholder="Password" value={loginPwd}  onChange={(e)=>{setLoginPwd(e.target.value)}}/>
                        <input type="submit" name="" value="Login" />
                        <p className={styles.signup}>
                        Don't have an account ?
                        <a rel="noreferrer" href="#" onClick={(e)=>{toggleForm(e)}}>Sign Up.</a>
                        </p>
                    </form>
                    </div>
                </div>
                <div className={styles.user+" "+styles.signupBx}>
                    <div className={styles.formBx}>
                    <form action="" onSubmit={(e)=>{login(e)}}>
                        <h2>Create an account</h2>
                        <input type="text" name="" placeholder="Username" />
                        <input type="email" name="" placeholder="Email Address" />
                        <input type="password" name="" placeholder="Create Password" />
                        <input type="password" name="" placeholder="Confirm Password" />
                        <input type="submit" name="" value="Sign Up" />
                        <p className={styles.signup}>
                        Already have an account ?
                        <a href="#" rel='noreferrer' onClick={(e)=>{toggleForm(e)}}>Sign in.</a>
                        </p>
                    </form>
                    </div>
                    <div className={styles.imgBx}>
                        <Logo style={{maxWidth: "max-content",fontSize:"2rem",color:"#fff"}}/>
                        {/* <img src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img2.jpg" alt="" /> */}
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}


export default function LoginPage() {
  return (
    <GlobalProvider>
        <ArticleProvider>
            {/* <Login/> */}
            <LoginV2/>
        </ArticleProvider>
    </GlobalProvider>
  )
}
