import React, { useState } from 'react'
import Script from 'next/script'

import Head from 'next/head'
export const config = { amp: true }

export default function WebStories({stories}) {
  const [show,setShow]=useState(false)
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet"/> 
        <script dangerouslySetInnerHTML={{__html:`
          const player = document.body.querySelector("amp-story-player");
          const lightboxEl = document.querySelector(".lightbox");
          
          if (player.isReady) {
            initializeCarousel();
          } else {
            player.addEventListener("ready", () => {
              initializeCarousel();
            });
          }
          
          function initializeCarousel() {
            const stories = player.getStories();
          
            const thumbnails = document.querySelectorAll(
              ".entry-point-card-container img"
            );
          
            thumbnails.forEach((img, idx) => {
              img.addEventListener("click", () => {
                player.show(stories[idx].href);
                player.play();
                lightboxEl.classList.toggle("show");
              });
            });
          }
          
          player.addEventListener("amp-story-player-close", () => {
            player.pause();
            lightboxEl.classList.toggle("show");
          });
          
        ` }}></script>
        <style dangerouslySetInnerHTML={{__html:` 
        
        .entry-point-container {
          margin-top: 40px;
          margin-bottom: 50px;
        }
        
        .entry-point-card-title {
          margin-top: 10px;
          font-weight: 500;
          font-family: Poppins;
          font-size: 11px;
          line-height: 15px;
          text-align: center;
          display: inline-block;
          color: #fff;
        }
        
        .lightbox {
          position: absolute;
          background-color: rgb(0, 0, 0, 0.7);
          z-index: -99999;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          opacity: 0;
          visibility: hidden;
          transition: visibility 0.2s linear, opacity 0.2s linear;
        }
        
        .lightbox.show {
          visibility: visible;
          z-index: 99999;
          opacity: 1;
        }
        
        amp-story-player.my-player {
          width: 100%;
          height: 100%;
          /*   margin: 70px auto; */
        }
        
        .entry-points {
          width: 100%;
          display: flex;
          left: -20px;
          padding: 0px 60px;
          padding-bottom: 10px;
        }
        
        .circular-entry-point img {
          cursor: pointer;
          width: 100px;
          height: 100px;
          border-radius: 100%;
          background-clip: content-box;
          border: 2px solid;
          padding: 3px;
        }
        
        .entry-point-card-container {
          position: relative;
          padding-right: 25px;
          transition: transform 0.3s;
        }
        
        /* Extra stuff that makes sample aesthetic. */
        
        body h1 {
          font-weight: 600;
          font-size: 18px;
          line-height: 27px;
          color: white;
          font-family: Poppins;
          margin-bottom: 35px;
          margin-left: 20px;
        }
        
        .fake-content {
          width: 320px;
          height: 427px;
          top: -178px;
          margin: auto;
        
          background: #24242d;
          box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
          border-radius: 16px;
        }
        
        .viewport {
          position: absolute;
          display: flex;
          flex-direction: column;
          /*   border-radius: 10px; */
          padding: 20px;
          margin: auto;
          width: 360px;
          height: 800px;
          background-color: #202029;
          overflow: hidden;
        }
        
        ` }}>

        </style>
      </Head>
      <div>
      <div class="viewport">
        <div class="fake-content"></div>
        <div class="entry-point-container">
          <h1> Web Stories </h1>
          <div class="circular-entry-point">
            <div class="entry-points">
              <div class="entry-point-card-container">
                <img src="https://assets.codepen.io/1780597/4.png" style={{borderColor:"#FF6F32"}}/>
                <span class="entry-point-card-title">Q&A with ZOE Newman</span>
              </div>
              <div class="entry-point-card-container">
                <img src="https://assets.codepen.io/1780597/1.png" style={{borderColor:"#E6AD1C"}}/>
                <span class="entry-point-card-title">24 Hours in New York City</span>
              </div>
              <div class="entry-point-card-container">
                <img src="https://assets.codepen.io/1780597/3.png" style={{borderColor:"#466FFF"}}/>
                <span class="entry-point-card-title">The Next King of the Sea</span>
              </div>
              <div class="entry-point-card-container">
                <img src="https://assets.codepen.io/1780597/2.png" style={{borderColor:"#4CA47C"}}/>
                <span class="entry-point-card-title">Spark a Passion for Reading</span>
              </div>
            </div>
          </div>
        </div>
        <div class="fake-content"></div>

        <div class="lightbox">
          <amp-story-player class="my-player">
            <script type="application/json">{`
              {
                "behavior": {
                  "autoplay": false,
                  "pageScroll": false
                },
                "controls": [{
                  "name": "close",
                  "position": "start"
                }]
              }`}
            </script>

            <a href="https://wsdemos.uc.r.appspot.com/ampfest/s1"></a>
            <a href="https://wsdemos.uc.r.appspot.com/ampfest/s2"></a>
            <a href="https://wsdemos.uc.r.appspot.com/ampfest/s3"></a>
            <a href="https://wsdemos.uc.r.appspot.com/ampfest/s4"></a>
          </amp-story-player>
        </div>
      </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  // Fetch data from external API

  

  //console.log(res.length)

  return { 
      props: {
        stories : [
          "https://w4coder.com/blog/web-story/632f345c62740dca9e49910d/top-javascript-programmation-framework-for-web-app-creation",
          "https://w4coder.com/blog/web-story/632f345c62740dca9e49910d/top-javascript-programmation-framework-for-web-app-creation",
          "https://w4coder.com/blog/web-story/632f345c62740dca9e49910d/top-javascript-programmation-framework-for-web-app-creation",
          "https://w4coder.com/blog/web-story/632f345c62740dca9e49910d/top-javascript-programmation-framework-for-web-app-creation",
          "https://w4coder.com/blog/web-story/632f345c62740dca9e49910d/top-javascript-programmation-framework-for-web-app-creation"
        ]
      } 
  }
}