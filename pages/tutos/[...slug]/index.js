import React from 'react'
import { NextSeo } from 'next-seo'
import TutuosLayout from '../../../layouts/tutosLayout'
import styles from './index.module.scss'
import { getTuto, getTutoById } from '../../../services/tutos'
import axios from 'axios'
import { config as endpoint } from '../../../constants'
import { getSection } from '../../../utils/tutuo-utils'

export default function index({isBreakpoint,tuto}) {
    console.log(tuto?.sections)
    return (
        <>
            <NextSeo
                title="w4coder || Tutos"
                description="This example uses more of the available config options."
                canonical="https://w4coder.com"
                openGraph={{
                url: 'https://w4coder.com',
                description: 'Open Graph Description',
                // images: [
                //   {
                //     url: 'https://www.example.ie/og-image-01.jpg',
                //     width: 800,
                //     height: 600,
                //     alt: 'Og Image Alt',
                //     type: 'image/jpeg',
                //   },
                //   {
                //     url: 'https://www.example.ie/og-image-02.jpg',
                //     width: 900,
                //     height: 800,
                //     alt: 'Og Image Alt Second',
                //     type: 'image/jpeg',
                //   },
                //   { url: 'https://www.example.ie/og-image-03.jpg' },
                //   { url: 'https://www.example.ie/og-image-04.jpg' },
                // ],
                siteName: 'w4coder',
                }}
                
            />
        <TutuosLayout isBreakpoint={isBreakpoint}>
            <h1>{tuto?.title}</h1>
            <br></br>
            {tuto?.sections && tuto?.sections?.map((s,i)=>{
                return(
                    <div className={styles.sections} key={i} dangerouslySetInnerHTML={{__html: getSection(s)}}/>
                )
            })}

        </TutuosLayout>
        </>
    )
}

export async function getServerSideProps(context) {
    const {slug} = context.params
    const tutoId = slug[0]
    const tuto = await getTutoById(tutoId)
    return {
      props: {tuto :tuto?.data}, // will be passed to the page component as props
    }
}
  