import React,{useState} from 'react'
import Head from 'next/head'
import styles from './index.module.scss'
import StickyMenu from '../../StickyMenu'
import Logo from '../../Logo'
import ThemeChanger from '../../ThemeChanger'
import {MdWebStories} from 'react-icons/md'
import Image from 'next/image'
import Link from 'next/link'


export default function StoriesPage({setCurrentView,toggleTheme}) {
    const [stories,setStories] = useState([
        {
            url: "https://wsdemos.uc.r.appspot.com/ampfest/s1",
            poster : 'https://picsum.photos/400/534?random=1',
            color : '#FF6F32',
            title : 'Q&A with ZOE Newman'
        },
        {
            url: "https://wsdemos.uc.r.appspot.com/ampfest/s2",
            poster : "https://picsum.photos/400/534?random=2" ,
            color :"#E6AD1C" ,
            title : "24 Hours in New York City"
        },
        {
            url: "https://wsdemos.uc.r.appspot.com/ampfest/s3",
            poster : "https://picsum.photos/400/534?random=3" ,
            color : "#466FFF",
            title : "The Next King of the Sea"
        },
        {
            url: "https://wsdemos.uc.r.appspot.com/ampfest/s4",
            poster : "https://picsum.photos/400/534?random=4",
            color : "#4CA47C",
            title : "Spark a Passion for Reading Spark a Passion for Reading Spark a Passion for Reading Spark a Passion for Reading Spark a Passion for Reading" 
        },
        {
            url: "https://wsdemos.uc.r.appspot.com/ampfest/s1",
            poster : 'https://picsum.photos/400/534?random=1',
            color : '#FF6F32',
            title : 'Q&A with ZOE Newman'
        },
        {
            url: "https://wsdemos.uc.r.appspot.com/ampfest/s2",
            poster : "https://picsum.photos/400/534?random=2" ,
            color :"#E6AD1C" ,
            title : "24 Hours in New York City"
        },
        {
            url: "https://wsdemos.uc.r.appspot.com/ampfest/s3",
            poster : "https://picsum.photos/400/534?random=3" ,
            color : "#466FFF",
            title : "The Next King of the Sea"
        },
        {
            url: "https://wsdemos.uc.r.appspot.com/ampfest/s4",
            poster : "https://picsum.photos/400/534?random=4",
            color : "#4CA47C",
            title : "Spark a Passion for Reading Spark a Passion for Reading Spark a Passion for Reading Spark a Passion for Reading Spark a Passion for Reading" 
        },
        {
            url: "https://wsdemos.uc.r.appspot.com/ampfest/s1",
            poster : 'https://picsum.photos/400/534?random=1',
            color : '#FF6F32',
            title : 'Q&A with ZOE Newman'
        },
        {
            url: "https://wsdemos.uc.r.appspot.com/ampfest/s2",
            poster : "https://picsum.photos/400/534?random=2" ,
            color :"#E6AD1C" ,
            title : "24 Hours in New York City"
        },
        {
            url: "https://wsdemos.uc.r.appspot.com/ampfest/s3",
            poster : "https://picsum.photos/400/534?random=3" ,
            color : "#466FFF",
            title : "The Next King of the Sea"
        },
        {
            url: "https://wsdemos.uc.r.appspot.com/ampfest/s4",
            poster : "https://picsum.photos/400/534?random=4",
            color : "#4CA47C",
            title : "Spark a Passion for Reading Spark a Passion for Reading Spark a Passion for Reading Spark a Passion for Reading Spark a Passion for Reading" 
        },
        {
            url: "https://wsdemos.uc.r.appspot.com/ampfest/s1",
            poster : 'https://picsum.photos/400/534?random=1',
            color : '#FF6F32',
            title : 'Q&A with ZOE Newman'
        },
        {
            url: "https://wsdemos.uc.r.appspot.com/ampfest/s2",
            poster : "https://picsum.photos/400/534?random=2" ,
            color :"#E6AD1C" ,
            title : "24 Hours in New York City"
        },
        {
            url: "https://wsdemos.uc.r.appspot.com/ampfest/s3",
            poster : "https://picsum.photos/400/534?random=3" ,
            color : "#466FFF",
            title : "The Next King of the Sea"
        },
        {
            url: "https://wsdemos.uc.r.appspot.com/ampfest/s4",
            poster : "https://picsum.photos/400/534?random=4",
            color : "#4CA47C",
            title : "Spark a Passion for Reading Spark a Passion for Reading Spark a Passion for Reading Spark a Passion for Reading Spark a Passion for Reading" 
        }
    ])

    return (
        <>
            <Head>

            </Head>
            <div id="storiesTop">
                <main className={styles.main} >
                    <StickyMenu setCurrentView={setCurrentView}/>
                    <div className={styles.head} id="#top">
                        <Logo style={{fontSize:"2rem"}}/>
                        {/* <h3>Main articles</h3> */}
                        <ThemeChanger toggleTheme={toggleTheme}/>
                    </div>
                    <div className={styles.titleHead}>
                        <MdWebStories size={24}/> <h1>Web Stories</h1>
                    </div>
                    <div className={styles.subSectionList} >
                        {stories && stories.map((story,index)=>{
                            return(
                                <div className={styles.preview} key={index}>
                                    <Link href={`/api/web-story/${story?._id}/${story?.slug}`}>
                                        <a>
                                            <Image
                                                src={story?.poster || "https://picsum.photos/400/534?random=5"}
                                                width={400}
                                                height={534}
                                                layout={"fill"}
                                            />
                                            <div className={styles.publisherLog}>
                                                <Image
                                                    src={"https://picsum.photos/400/534?random=7"}
                                                    width={50}
                                                    height={50}
                                                    layout={"fill"}
                                                />
                                            </div>
                                            <div className={styles.details}>
                                                <div>{story?.title}</div>
                                            </div>
                                        </a>
                                    </Link>
                                </div>

                            )
                        })}
                    </div>
                </main>
            </div>
        </>
    )
}
