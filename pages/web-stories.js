import React from 'react'
import styles from './index.module.scss'
import { getStories } from '../services/stories'
import Image from 'next/image'
import DefaultLayout from '../layouts/default'

export default function WebStories({isBreakpoint,stories}) {
  return (
    <DefaultLayout
        title={"w4coder"}
        description={""}
        isBreakpoint={isBreakpoint}
    >
        <div className={styles.cats}>
            {stories.map((s,i)=>{
                return(
                    <div 
                        className="entry-point-card-container"  
                        key={i} 
                        style={{borderRadius:"10px",overflow:"hidden"}} 
                    >
                        <a href={`/blog/web-story/${s._id}/${s.slug}`}>
                        <div 
                            className={'img-container ' + styles.singleStory}
                        >
                            <Image 
                                className='img' 
                                src={s.posterP}
                                alt={s.title} 
                                layout={"fill"}
                            />
                            <div className='entry-point-card-content'>
                                <h2 className="entry-point-card-title" style={{fontSize:"1.2rem",lineHeight:"1.5"}}>{s.title}</h2>
                            </div>
                        </div>
                        </a>
                    </div>
                )
            })}
        </div>      
    </DefaultLayout>
  )
}

export async function getServerSideProps({locale}) {
    // Fetch data from external API

    const stories =  await getStories({filter:{
        page : 1,
        lang:locale
    }})
  
    //console.log(res.length)
  
    return { 
        props: {
            stories : stories || [],
        } 
    }
  }
