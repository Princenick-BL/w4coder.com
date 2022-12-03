import React,{useEffect} from 'react'
import { NextSeo } from 'next-seo'
import TutuosLayout from '../../../layouts/tutosLayout'
import styles from './index.module.scss'
import { getTuto, getTutoById } from '../../../services/tutos'
import axios from 'axios'
import { config as endpoint } from '../../../constants'
import { getSection } from '../../../utils/tutuo-utils'
import Prism from 'prismjs';
import "prismjs/themes/prism-tomorrow.css";

const code = `const App = props => {
    return (
      <div>
        <h1> React App </h1>
        <div>Awesome code</div>
      </div>
    );
  };`;

export default function TutosDynamic({isBreakpoint,tuto}) {

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <>
            <NextSeo
                title={tuto?.title}
                description={tuto?.description}
                canonical={`https://w4coder.com/tutos/${tuto?._id}/${tuto?.slug}`}
                openGraph={{
                    url: `https://w4coder.com/tutos/${tuto?._id}/${tuto?.slug}`,
                    description: tuto?.description,
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
                    <div key={i} className={styles.sections}>
                    {getSection(s)}
                    </div>
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
  