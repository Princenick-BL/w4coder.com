import React,{useState} from 'react'
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';
import Head from 'next/head';
import styles from './index.module.scss'
import ProjectCard from '../../components/ProjectCard';

export default function Projets() {

  const [show_auth,setShowAuth]=useState(false)

  return (
    <div className={styles.container}>
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <meta charSet="UTF-8"/>
        <title>PROJETS</title>
        <meta name="description" content="Projet logiciels" />
        <meta name="theme-color" content="#fff"/>

        {
          /* Lien font googlr */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://princenickballo.fr" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="PROJETS" />
        <meta property="og:description" content="Projet logiciels" />
        <meta property="og:image" content="/images/preview.png" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="princenickballo.fr" />
        <meta property="twitter:url" content="https://princenickballo.fr" />
        <meta name="twitter:title" content="PROJETS" />
        <meta name="twitter:description" content="Projet logiciels" />
        <meta name="twitter:image" content="/images/preview.png" />

        {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}

      </Head>

      <div className={styles.four}>
        <div className={styles.portfolio}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <div>
              <p>{new Date().toDateString()}</p>
              <h1 style={{color:"var(--color-primary)"}}>MES PROJETS</h1>
            </div>
            <Link href={"/"}>
              <a>
                <FaHome fontSize={24}/>
              </a>
            </Link>
          </div>
          <div className={styles.projets}>
            <ProjectCard
              data = {{
                url : "/images/phenix.jpg",
                title : "A-Recruit ( Confidentiel )",
                desc : "Il s'agit de la création avec une équipe de developpeur, d'un logiciel embarquant plusieurs outils de travail et plusieurs fonctionnalités pour les besoins de l'entreprise.",
                cat : "Professionnel"
              }}
            />

            <ProjectCard
              odd={true}
              data = {{
                url : "/images/my-app.png",
                title : "Mon site web",
                desc : "Il s'agit de cette page que vous consultez. Je l'ai réalisé avec le framework Next.js avec les langages comme le HTML, le CSS, le JavaScript et en utilisant les outils de photoshop.",
                cat : "Personnel"
              }}
            />
          
          
            <ProjectCard
              odd={true}
              color="#3da8dd"
              data = {{
                cat : "Professionnel",
                url : "/images/ga-eilco.png",
                title : "GA-EILCO",
                desc : "A la tête d'une équipe de développeur, il fallait developper un outil centralisé, du système de gestion des absences d'une université ."
              }}
            />
        

            <ProjectCard
              odd={true}
              color="rgb(91, 117, 215)"
              data = {{
                cat:"Personnel",
                url : "/images/cv.png",
                title : "Mes début avec React.js ( CV React)",
                desc :"Prise en main de React.js avec la réalisation , d'un cv web."
              }}
            />

            <ProjectCard
              data = {{
                cat : "Personnel",
                url : "/images/auth.png",
                title : "Google - Facebook authentification",
                desc :"Il est question ici d'une application"+
                " permettant de s'authentifier en utilisant"+
                " son compte google ou facebook."
              }}
            />

            <ProjectCard
              odd={true}
              color="blue"
              data = {{
                cat : "Personnel",
                url : "/images/covid.png",
                title : " Gestion de cas COVID en entreprise",
                desc :"C'est une application pour le suivi de "+
                "l'évolution de la covid-19 au sein d'une "+
                "entreprise et de la gestion du personnel. "+
                "Elle a été réalisée en équipe avec la mise "+
                "en pratique des méthodes agiles."
              }}
            />

          </div>

          
        </div>
      </div>
          
    </div>
  )
}
