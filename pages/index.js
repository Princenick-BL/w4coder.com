
import styles from './index.module.scss'
import HomePage from '@/layouts/templates/2/HomePage'
import { getTopArticles,getArticle } from '../services/articles'
import {getStories} from '@/services/stories'
import { useRouter } from 'next/router'
import DefaultLayout from '@/layouts/templates/1'
import Template2 from '@/layouts/templates/2'
const YOUTUBE_PLAYLIST_ITEMS_API = 'https://youtube.googleapis.com/youtube/v3/search';
const theme = 2
export default function Home({isBreakpoint,page1,topA,toggleTheme,stories}) {
  // console.log("Stories",page1)
  const router = useRouter()
  const lang = router.locale
  if(theme===1){
    return (
      <DefaultLayout
        title={"w4coder"}
        description={""}
        isBreakpoint={isBreakpoint}
      >
        <HomePage isBreakpoint={isBreakpoint} topA={topA} page1={page1} stories={stories} lang={lang}/>      
      </DefaultLayout>
    )
  }else{
    return(
      <Template2
        title={"w4coder"}
        description={""}
        isBreakpoint={isBreakpoint}
        stories={stories}
        topA={topA} 
        page1={page1} 
        lang={lang}
      >
        <HomePage isBreakpoint={isBreakpoint} topA={topA} page1={page1} stories={stories} lang={lang}/>      
      </Template2>
    )
  }
}

export async function getServerSideProps({locale}) {
  // Fetch data from external API
  if(process.env.NEXT_PUBLIC_APP_IS_DEV){
    return { 
      props: {
        page1 : [
          {
            "author": {
              "name": "w4coder"
            },
            "_id": "639cfebef6aa92d185f96959",
            "title": "Vercel la solution pour héberger gratuitement vos sites web en",
            "category": "634073ed063b8b4f69856b33",
            "slug": "comment-crer-une-application-web-full-stack-avec-nextjs-et-nodejs",
            "sections": [
              {
                "pos": 1,
                "type": "TEXT_BLOCK",
                "content": "<p>Creating a React JS Project from Scratch</p><p>React is a popular JavaScript library for building user interfaces. It's used for creating single-page applications, mobile apps, and complex user interfaces. In this article, we'll go through the process of creating a new React project from scratch.</p><code>Step 1: Install Node.js and npm</code><p class=\"ql-align-justify\">To start, you'll need to have Node.js and npm (Node Package Manager) installed on your computer. You can download Node.js from the official website (<a href=\"https://nodejs.org/en/download/\" rel=\"noopener noreferrer\" target=\"_blank\">https://nodejs.org/en/download/</a>). After installing, open your terminal or command prompt and type the following command to check if Node.js and npm are installed correctly:</p>"
              }
            ],
            "poster": "https://api.w4coder.com/read/a83b912a246d16b87c0e9eb5cbc35964sans-titrepng.png",
            "createdAt": "2022-08-18T01:40:34.009Z",
            "updatedAt": "2023-02-18T09:50:40.243Z",
            "description": "Vercel est une plateform qui voupermet de déployer facilement vos projets reactjs , nextjs.",
            "reads": "100",
            "color": "#FF6F32",
            "keywords": [
              "React",
              "Next",
              "Web",
              "web3"
            ],
            "priority": 300,
            "publishedAt": "2022-10-23T20:30:18.783Z",
            "status": 1,
            "domain": "63798b937cc654f4bb78fdae",
            "lang": "en"
          },
          {
            "kind": "youtube#searchResult",
            "etag": "hKYsnMf9B0ILtl6OxOMG25k9AtE",
            "id": {
              "kind": "youtube#video",
              "videoId": "hwZxos0NIm0"
            },
            "snippet": {
              "publishedAt": "2023-01-14T08:15:35Z",
              "channelId": "UCENrVFimv0tFrBM9SJqr1Aw",
              "title": "Nginx redirect proxy configuration with docker-compose : Multi Docker container management",
              "description": "In this video we will see the process of deploying applications on a dedicated server with docker and Nginx through ...",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/hwZxos0NIm0/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/hwZxos0NIm0/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/hwZxos0NIm0/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "w4coder",
              "liveBroadcastContent": "none",
              "publishTime": "2023-01-14T08:15:35Z"
            }
          },
          {
            "author": {
              "name": "w4coder"
            },
            "_id": "639cfeb9f6aa92d185f96958",
            "title": "Vercel la solution pour héberger gratuitement vos sites web",
            "category": "634073ed063b8b4f69856b33",
            "slug": "comment-crer-une-application-web-full-stack-avec-nextjs-et-nodejs",
            "sections": [],
            "poster": "https://api.w4coder.com/read/a83b912a246d16b87c0e9eb5cbc35964sans-titrepng.png",
            "createdAt": "2022-08-18T01:40:34.009Z",
            "updatedAt": "2023-02-18T09:45:15.359Z",
            "description": "Vercel est une plateform qui voupermet de déployer facilement vos projets reactjs , nextjs.",
            "reads": "100",
            "color": "#FF6F32",
            "keywords": [
              "React",
              "Next",
              "Web",
              "web3"
            ],
            "priority": 300,
            "publishedAt": "2022-10-23T20:30:18.783Z",
            "status": 1,
            "domain": "63798b937cc654f4bb78fdae",
            "lang": "en"
          },
          {
            "kind": "youtube#searchResult",
            "etag": "93KiYYXy5FFYWx5xQBGiX4-4Rp8",
            "id": {
              "kind": "youtube#video",
              "videoId": "gjz5UwzBOE4"
            },
            "snippet": {
              "publishedAt": "2023-01-17T22:28:26Z",
              "channelId": "UCENrVFimv0tFrBM9SJqr1Aw",
              "title": "React JS versus NextJS for what type of projects to use them ?",
              "description": "shorts #reactjs #nextjs #interview #javascript.",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/gjz5UwzBOE4/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/gjz5UwzBOE4/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/gjz5UwzBOE4/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "w4coder",
              "liveBroadcastContent": "none",
              "publishTime": "2023-01-17T22:28:26Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "SVeLob5-JsQo7WCKsLuxCE62bFw",
            "id": {
              "kind": "youtube#video",
              "videoId": "Y8d21O7R9WQ"
            },
            "snippet": {
              "publishedAt": "2023-01-09T19:30:45Z",
              "channelId": "UCENrVFimv0tFrBM9SJqr1Aw",
              "title": "Nous avons mis à l&#39;épreuve chatGPT la nouvelle IA d&#39;open AI #shorts #openai #chatgpt #ai",
              "description": "Dans cette vidéo nous testons ce bug observé par plusieurs testeurs de chatgtp #shorts #openai #chatgpt.",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/Y8d21O7R9WQ/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/Y8d21O7R9WQ/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/Y8d21O7R9WQ/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "w4coder",
              "liveBroadcastContent": "none",
              "publishTime": "2023-01-09T19:30:45Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "n9QKXC_1eKjpi0OnB0zOpF-zkDE",
            "id": {
              "kind": "youtube#video",
              "videoId": "QGHwFoA84GI"
            },
            "snippet": {
              "publishedAt": "2023-01-12T19:49:54Z",
              "channelId": "UCENrVFimv0tFrBM9SJqr1Aw",
              "title": "How to build NodeJS , ReactJS or NextJS Docker image",
              "description": "In this video you will see how to build a docker image for a ReactJs , NodeJs or NextJS application. 0:00 Introduction 0:21 Create ...",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/QGHwFoA84GI/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/QGHwFoA84GI/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/QGHwFoA84GI/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "w4coder",
              "liveBroadcastContent": "none",
              "publishTime": "2023-01-12T19:49:54Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "9NRNBuxsTb12Df9EQ4-D_H8yFAA",
            "id": {
              "kind": "youtube#video",
              "videoId": "obMfjrIkvAU"
            },
            "snippet": {
              "publishedAt": "2023-01-14T16:36:59Z",
              "channelId": "UCENrVFimv0tFrBM9SJqr1Aw",
              "title": "React Hooks overview #short #shorts #javascript #react #interview  #developer  #reactjs",
              "description": "Quick overview of most used React JS Hooks.",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/obMfjrIkvAU/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/obMfjrIkvAU/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/obMfjrIkvAU/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "w4coder",
              "liveBroadcastContent": "none",
              "publishTime": "2023-01-14T16:36:59Z"
            }
          },
          {
            "author": {
              "name": "w4coder"
            },
            "_id": "639cfebef6aa92d185f96959",
            "title": "Vercel la solution pour héberger gratuitement vos sites web en",
            "category": "634073ed063b8b4f69856b33",
            "slug": "comment-crer-une-application-web-full-stack-avec-nextjs-et-nodejs",
            "sections": [
              {
                "pos": 1,
                "type": "TEXT_BLOCK",
                "content": "<p>Creating a React JS Project from Scratch</p><p>React is a popular JavaScript library for building user interfaces. It's used for creating single-page applications, mobile apps, and complex user interfaces. In this article, we'll go through the process of creating a new React project from scratch.</p><code>Step 1: Install Node.js and npm</code><p class=\"ql-align-justify\">To start, you'll need to have Node.js and npm (Node Package Manager) installed on your computer. You can download Node.js from the official website (<a href=\"https://nodejs.org/en/download/\" rel=\"noopener noreferrer\" target=\"_blank\">https://nodejs.org/en/download/</a>). After installing, open your terminal or command prompt and type the following command to check if Node.js and npm are installed correctly:</p>"
              }
            ],
            "poster": "https://api.w4coder.com/read/a83b912a246d16b87c0e9eb5cbc35964sans-titrepng.png",
            "createdAt": "2022-08-18T01:40:34.009Z",
            "updatedAt": "2023-02-18T09:50:40.243Z",
            "description": "Vercel est une plateform qui voupermet de déployer facilement vos projets reactjs , nextjs.",
            "reads": "100",
            "color": "#FF6F32",
            "keywords": [
              "React",
              "Next",
              "Web",
              "web3"
            ],
            "priority": 300,
            "publishedAt": "2022-10-23T20:30:18.783Z",
            "status": 1,
            "domain": "63798b937cc654f4bb78fdae",
            "lang": "en"
          },
          {
            "kind": "youtube#searchResult",
            "etag": "hKYsnMf9B0ILtl6OxOMG25k9AtE",
            "id": {
              "kind": "youtube#video",
              "videoId": "hwZxos0NIm0"
            },
            "snippet": {
              "publishedAt": "2023-01-14T08:15:35Z",
              "channelId": "UCENrVFimv0tFrBM9SJqr1Aw",
              "title": "Nginx redirect proxy configuration with docker-compose : Multi Docker container management",
              "description": "In this video we will see the process of deploying applications on a dedicated server with docker and Nginx through ...",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/hwZxos0NIm0/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/hwZxos0NIm0/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/hwZxos0NIm0/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "w4coder",
              "liveBroadcastContent": "none",
              "publishTime": "2023-01-14T08:15:35Z"
            }
          },
          {
            "author": {
              "name": "w4coder"
            },
            "_id": "639cfeb9f6aa92d185f96958",
            "title": "Vercel la solution pour héberger gratuitement vos sites web",
            "category": "634073ed063b8b4f69856b33",
            "slug": "comment-crer-une-application-web-full-stack-avec-nextjs-et-nodejs",
            "sections": [],
            "poster": "https://api.w4coder.com/read/a83b912a246d16b87c0e9eb5cbc35964sans-titrepng.png",
            "createdAt": "2022-08-18T01:40:34.009Z",
            "updatedAt": "2023-02-18T09:45:15.359Z",
            "description": "Vercel est une plateform qui voupermet de déployer facilement vos projets reactjs , nextjs.",
            "reads": "100",
            "color": "#FF6F32",
            "keywords": [
              "React",
              "Next",
              "Web",
              "web3"
            ],
            "priority": 300,
            "publishedAt": "2022-10-23T20:30:18.783Z",
            "status": 1,
            "domain": "63798b937cc654f4bb78fdae",
            "lang": "en"
          },
          {
            "kind": "youtube#searchResult",
            "etag": "93KiYYXy5FFYWx5xQBGiX4-4Rp8",
            "id": {
              "kind": "youtube#video",
              "videoId": "gjz5UwzBOE4"
            },
            "snippet": {
              "publishedAt": "2023-01-17T22:28:26Z",
              "channelId": "UCENrVFimv0tFrBM9SJqr1Aw",
              "title": "React JS versus NextJS for what type of projects to use them ?",
              "description": "shorts #reactjs #nextjs #interview #javascript.",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/gjz5UwzBOE4/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/gjz5UwzBOE4/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/gjz5UwzBOE4/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "w4coder",
              "liveBroadcastContent": "none",
              "publishTime": "2023-01-17T22:28:26Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "SVeLob5-JsQo7WCKsLuxCE62bFw",
            "id": {
              "kind": "youtube#video",
              "videoId": "Y8d21O7R9WQ"
            },
            "snippet": {
              "publishedAt": "2023-01-09T19:30:45Z",
              "channelId": "UCENrVFimv0tFrBM9SJqr1Aw",
              "title": "Nous avons mis à l&#39;épreuve chatGPT la nouvelle IA d&#39;open AI #shorts #openai #chatgpt #ai",
              "description": "Dans cette vidéo nous testons ce bug observé par plusieurs testeurs de chatgtp #shorts #openai #chatgpt.",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/Y8d21O7R9WQ/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/Y8d21O7R9WQ/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/Y8d21O7R9WQ/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "w4coder",
              "liveBroadcastContent": "none",
              "publishTime": "2023-01-09T19:30:45Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "n9QKXC_1eKjpi0OnB0zOpF-zkDE",
            "id": {
              "kind": "youtube#video",
              "videoId": "QGHwFoA84GI"
            },
            "snippet": {
              "publishedAt": "2023-01-12T19:49:54Z",
              "channelId": "UCENrVFimv0tFrBM9SJqr1Aw",
              "title": "How to build NodeJS , ReactJS or NextJS Docker image",
              "description": "In this video you will see how to build a docker image for a ReactJs , NodeJs or NextJS application. 0:00 Introduction 0:21 Create ...",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/QGHwFoA84GI/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/QGHwFoA84GI/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/QGHwFoA84GI/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "w4coder",
              "liveBroadcastContent": "none",
              "publishTime": "2023-01-12T19:49:54Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "9NRNBuxsTb12Df9EQ4-D_H8yFAA",
            "id": {
              "kind": "youtube#video",
              "videoId": "obMfjrIkvAU"
            },
            "snippet": {
              "publishedAt": "2023-01-14T16:36:59Z",
              "channelId": "UCENrVFimv0tFrBM9SJqr1Aw",
              "title": "React Hooks overview #short #shorts #javascript #react #interview  #developer  #reactjs",
              "description": "Quick overview of most used React JS Hooks.",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/obMfjrIkvAU/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/obMfjrIkvAU/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/obMfjrIkvAU/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "w4coder",
              "liveBroadcastContent": "none",
              "publishTime": "2023-01-14T16:36:59Z"
            }
          },
          {
            "author": {
              "name": "w4coder"
            },
            "_id": "639cfebef6aa92d185f96959",
            "title": "Vercel la solution pour héberger gratuitement vos sites web en",
            "category": "634073ed063b8b4f69856b33",
            "slug": "comment-crer-une-application-web-full-stack-avec-nextjs-et-nodejs",
            "sections": [
              {
                "pos": 1,
                "type": "TEXT_BLOCK",
                "content": "<p>Creating a React JS Project from Scratch</p><p>React is a popular JavaScript library for building user interfaces. It's used for creating single-page applications, mobile apps, and complex user interfaces. In this article, we'll go through the process of creating a new React project from scratch.</p><code>Step 1: Install Node.js and npm</code><p class=\"ql-align-justify\">To start, you'll need to have Node.js and npm (Node Package Manager) installed on your computer. You can download Node.js from the official website (<a href=\"https://nodejs.org/en/download/\" rel=\"noopener noreferrer\" target=\"_blank\">https://nodejs.org/en/download/</a>). After installing, open your terminal or command prompt and type the following command to check if Node.js and npm are installed correctly:</p>"
              }
            ],
            "poster": "https://api.w4coder.com/read/a83b912a246d16b87c0e9eb5cbc35964sans-titrepng.png",
            "createdAt": "2022-08-18T01:40:34.009Z",
            "updatedAt": "2023-02-18T09:50:40.243Z",
            "description": "Vercel est une plateform qui voupermet de déployer facilement vos projets reactjs , nextjs.",
            "reads": "100",
            "color": "#FF6F32",
            "keywords": [
              "React",
              "Next",
              "Web",
              "web3"
            ],
            "priority": 300,
            "publishedAt": "2022-10-23T20:30:18.783Z",
            "status": 1,
            "domain": "63798b937cc654f4bb78fdae",
            "lang": "en"
          },
          {
            "kind": "youtube#searchResult",
            "etag": "hKYsnMf9B0ILtl6OxOMG25k9AtE",
            "id": {
              "kind": "youtube#video",
              "videoId": "hwZxos0NIm0"
            },
            "snippet": {
              "publishedAt": "2023-01-14T08:15:35Z",
              "channelId": "UCENrVFimv0tFrBM9SJqr1Aw",
              "title": "Nginx redirect proxy configuration with docker-compose : Multi Docker container management",
              "description": "In this video we will see the process of deploying applications on a dedicated server with docker and Nginx through ...",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/hwZxos0NIm0/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/hwZxos0NIm0/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/hwZxos0NIm0/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "w4coder",
              "liveBroadcastContent": "none",
              "publishTime": "2023-01-14T08:15:35Z"
            }
          },
          {
            "author": {
              "name": "w4coder"
            },
            "_id": "639cfeb9f6aa92d185f96958",
            "title": "Vercel la solution pour héberger gratuitement vos sites web",
            "category": "634073ed063b8b4f69856b33",
            "slug": "comment-crer-une-application-web-full-stack-avec-nextjs-et-nodejs",
            "sections": [],
            "poster": "https://api.w4coder.com/read/a83b912a246d16b87c0e9eb5cbc35964sans-titrepng.png",
            "createdAt": "2022-08-18T01:40:34.009Z",
            "updatedAt": "2023-02-18T09:45:15.359Z",
            "description": "Vercel est une plateform qui voupermet de déployer facilement vos projets reactjs , nextjs.",
            "reads": "100",
            "color": "#FF6F32",
            "keywords": [
              "React",
              "Next",
              "Web",
              "web3"
            ],
            "priority": 300,
            "publishedAt": "2022-10-23T20:30:18.783Z",
            "status": 1,
            "domain": "63798b937cc654f4bb78fdae",
            "lang": "en"
          },
          {
            "kind": "youtube#searchResult",
            "etag": "93KiYYXy5FFYWx5xQBGiX4-4Rp8",
            "id": {
              "kind": "youtube#video",
              "videoId": "gjz5UwzBOE4"
            },
            "snippet": {
              "publishedAt": "2023-01-17T22:28:26Z",
              "channelId": "UCENrVFimv0tFrBM9SJqr1Aw",
              "title": "React JS versus NextJS for what type of projects to use them ?",
              "description": "shorts #reactjs #nextjs #interview #javascript.",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/gjz5UwzBOE4/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/gjz5UwzBOE4/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/gjz5UwzBOE4/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "w4coder",
              "liveBroadcastContent": "none",
              "publishTime": "2023-01-17T22:28:26Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "SVeLob5-JsQo7WCKsLuxCE62bFw",
            "id": {
              "kind": "youtube#video",
              "videoId": "Y8d21O7R9WQ"
            },
            "snippet": {
              "publishedAt": "2023-01-09T19:30:45Z",
              "channelId": "UCENrVFimv0tFrBM9SJqr1Aw",
              "title": "Nous avons mis à l&#39;épreuve chatGPT la nouvelle IA d&#39;open AI #shorts #openai #chatgpt #ai",
              "description": "Dans cette vidéo nous testons ce bug observé par plusieurs testeurs de chatgtp #shorts #openai #chatgpt.",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/Y8d21O7R9WQ/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/Y8d21O7R9WQ/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/Y8d21O7R9WQ/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "w4coder",
              "liveBroadcastContent": "none",
              "publishTime": "2023-01-09T19:30:45Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "n9QKXC_1eKjpi0OnB0zOpF-zkDE",
            "id": {
              "kind": "youtube#video",
              "videoId": "QGHwFoA84GI"
            },
            "snippet": {
              "publishedAt": "2023-01-12T19:49:54Z",
              "channelId": "UCENrVFimv0tFrBM9SJqr1Aw",
              "title": "How to build NodeJS , ReactJS or NextJS Docker image",
              "description": "In this video you will see how to build a docker image for a ReactJs , NodeJs or NextJS application. 0:00 Introduction 0:21 Create ...",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/QGHwFoA84GI/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/QGHwFoA84GI/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/QGHwFoA84GI/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "w4coder",
              "liveBroadcastContent": "none",
              "publishTime": "2023-01-12T19:49:54Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "9NRNBuxsTb12Df9EQ4-D_H8yFAA",
            "id": {
              "kind": "youtube#video",
              "videoId": "obMfjrIkvAU"
            },
            "snippet": {
              "publishedAt": "2023-01-14T16:36:59Z",
              "channelId": "UCENrVFimv0tFrBM9SJqr1Aw",
              "title": "React Hooks overview #short #shorts #javascript #react #interview  #developer  #reactjs",
              "description": "Quick overview of most used React JS Hooks.",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/obMfjrIkvAU/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/obMfjrIkvAU/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/obMfjrIkvAU/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "w4coder",
              "liveBroadcastContent": "none",
              "publishTime": "2023-01-14T16:36:59Z"
            }
          },
          {
            "author": {
              "name": "w4coder"
            },
            "_id": "639cfebef6aa92d185f96959",
            "title": "Vercel la solution pour héberger gratuitement vos sites web en",
            "category": "634073ed063b8b4f69856b33",
            "slug": "comment-crer-une-application-web-full-stack-avec-nextjs-et-nodejs",
            "sections": [
              {
                "pos": 1,
                "type": "TEXT_BLOCK",
                "content": "<p>Creating a React JS Project from Scratch</p><p>React is a popular JavaScript library for building user interfaces. It's used for creating single-page applications, mobile apps, and complex user interfaces. In this article, we'll go through the process of creating a new React project from scratch.</p><code>Step 1: Install Node.js and npm</code><p class=\"ql-align-justify\">To start, you'll need to have Node.js and npm (Node Package Manager) installed on your computer. You can download Node.js from the official website (<a href=\"https://nodejs.org/en/download/\" rel=\"noopener noreferrer\" target=\"_blank\">https://nodejs.org/en/download/</a>). After installing, open your terminal or command prompt and type the following command to check if Node.js and npm are installed correctly:</p>"
              }
            ],
            "poster": "https://api.w4coder.com/read/a83b912a246d16b87c0e9eb5cbc35964sans-titrepng.png",
            "createdAt": "2022-08-18T01:40:34.009Z",
            "updatedAt": "2023-02-18T09:50:40.243Z",
            "description": "Vercel est une plateform qui voupermet de déployer facilement vos projets reactjs , nextjs.",
            "reads": "100",
            "color": "#FF6F32",
            "keywords": [
              "React",
              "Next",
              "Web",
              "web3"
            ],
            "priority": 300,
            "publishedAt": "2022-10-23T20:30:18.783Z",
            "status": 1,
            "domain": "63798b937cc654f4bb78fdae",
            "lang": "en"
          },
          {
            "kind": "youtube#searchResult",
            "etag": "hKYsnMf9B0ILtl6OxOMG25k9AtE",
            "id": {
              "kind": "youtube#video",
              "videoId": "hwZxos0NIm0"
            },
            "snippet": {
              "publishedAt": "2023-01-14T08:15:35Z",
              "channelId": "UCENrVFimv0tFrBM9SJqr1Aw",
              "title": "Nginx redirect proxy configuration with docker-compose : Multi Docker container management",
              "description": "In this video we will see the process of deploying applications on a dedicated server with docker and Nginx through ...",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/hwZxos0NIm0/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/hwZxos0NIm0/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/hwZxos0NIm0/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "w4coder",
              "liveBroadcastContent": "none",
              "publishTime": "2023-01-14T08:15:35Z"
            }
          },
          {
            "author": {
              "name": "w4coder"
            },
            "_id": "639cfeb9f6aa92d185f96958",
            "title": "Vercel la solution pour héberger gratuitement vos sites web",
            "category": "634073ed063b8b4f69856b33",
            "slug": "comment-crer-une-application-web-full-stack-avec-nextjs-et-nodejs",
            "sections": [],
            "poster": "https://api.w4coder.com/read/a83b912a246d16b87c0e9eb5cbc35964sans-titrepng.png",
            "createdAt": "2022-08-18T01:40:34.009Z",
            "updatedAt": "2023-02-18T09:45:15.359Z",
            "description": "Vercel est une plateform qui voupermet de déployer facilement vos projets reactjs , nextjs.",
            "reads": "100",
            "color": "#FF6F32",
            "keywords": [
              "React",
              "Next",
              "Web",
              "web3"
            ],
            "priority": 300,
            "publishedAt": "2022-10-23T20:30:18.783Z",
            "status": 1,
            "domain": "63798b937cc654f4bb78fdae",
            "lang": "en"
          },
          {
            "kind": "youtube#searchResult",
            "etag": "93KiYYXy5FFYWx5xQBGiX4-4Rp8",
            "id": {
              "kind": "youtube#video",
              "videoId": "gjz5UwzBOE4"
            },
            "snippet": {
              "publishedAt": "2023-01-17T22:28:26Z",
              "channelId": "UCENrVFimv0tFrBM9SJqr1Aw",
              "title": "React JS versus NextJS for what type of projects to use them ?",
              "description": "shorts #reactjs #nextjs #interview #javascript.",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/gjz5UwzBOE4/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/gjz5UwzBOE4/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/gjz5UwzBOE4/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "w4coder",
              "liveBroadcastContent": "none",
              "publishTime": "2023-01-17T22:28:26Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "SVeLob5-JsQo7WCKsLuxCE62bFw",
            "id": {
              "kind": "youtube#video",
              "videoId": "Y8d21O7R9WQ"
            },
            "snippet": {
              "publishedAt": "2023-01-09T19:30:45Z",
              "channelId": "UCENrVFimv0tFrBM9SJqr1Aw",
              "title": "Nous avons mis à l&#39;épreuve chatGPT la nouvelle IA d&#39;open AI #shorts #openai #chatgpt #ai",
              "description": "Dans cette vidéo nous testons ce bug observé par plusieurs testeurs de chatgtp #shorts #openai #chatgpt.",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/Y8d21O7R9WQ/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/Y8d21O7R9WQ/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/Y8d21O7R9WQ/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "w4coder",
              "liveBroadcastContent": "none",
              "publishTime": "2023-01-09T19:30:45Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "n9QKXC_1eKjpi0OnB0zOpF-zkDE",
            "id": {
              "kind": "youtube#video",
              "videoId": "QGHwFoA84GI"
            },
            "snippet": {
              "publishedAt": "2023-01-12T19:49:54Z",
              "channelId": "UCENrVFimv0tFrBM9SJqr1Aw",
              "title": "How to build NodeJS , ReactJS or NextJS Docker image",
              "description": "In this video you will see how to build a docker image for a ReactJs , NodeJs or NextJS application. 0:00 Introduction 0:21 Create ...",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/QGHwFoA84GI/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/QGHwFoA84GI/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/QGHwFoA84GI/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "w4coder",
              "liveBroadcastContent": "none",
              "publishTime": "2023-01-12T19:49:54Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "9NRNBuxsTb12Df9EQ4-D_H8yFAA",
            "id": {
              "kind": "youtube#video",
              "videoId": "obMfjrIkvAU"
            },
            "snippet": {
              "publishedAt": "2023-01-14T16:36:59Z",
              "channelId": "UCENrVFimv0tFrBM9SJqr1Aw",
              "title": "React Hooks overview #short #shorts #javascript #react #interview  #developer  #reactjs",
              "description": "Quick overview of most used React JS Hooks.",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/obMfjrIkvAU/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/obMfjrIkvAU/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/obMfjrIkvAU/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "w4coder",
              "liveBroadcastContent": "none",
              "publishTime": "2023-01-14T16:36:59Z"
            }
          },
          {
            "author": {
              "name": "w4coder"
            },
            "_id": "639cfebef6aa92d185f96959",
            "title": "Vercel la solution pour héberger gratuitement vos sites web en",
            "category": "634073ed063b8b4f69856b33",
            "slug": "comment-crer-une-application-web-full-stack-avec-nextjs-et-nodejs",
            "sections": [
              {
                "pos": 1,
                "type": "TEXT_BLOCK",
                "content": "<p>Creating a React JS Project from Scratch</p><p>React is a popular JavaScript library for building user interfaces. It's used for creating single-page applications, mobile apps, and complex user interfaces. In this article, we'll go through the process of creating a new React project from scratch.</p><code>Step 1: Install Node.js and npm</code><p class=\"ql-align-justify\">To start, you'll need to have Node.js and npm (Node Package Manager) installed on your computer. You can download Node.js from the official website (<a href=\"https://nodejs.org/en/download/\" rel=\"noopener noreferrer\" target=\"_blank\">https://nodejs.org/en/download/</a>). After installing, open your terminal or command prompt and type the following command to check if Node.js and npm are installed correctly:</p>"
              }
            ],
            "poster": "https://api.w4coder.com/read/a83b912a246d16b87c0e9eb5cbc35964sans-titrepng.png",
            "createdAt": "2022-08-18T01:40:34.009Z",
            "updatedAt": "2023-02-18T09:50:40.243Z",
            "description": "Vercel est une plateform qui voupermet de déployer facilement vos projets reactjs , nextjs.",
            "reads": "100",
            "color": "#FF6F32",
            "keywords": [
              "React",
              "Next",
              "Web",
              "web3"
            ],
            "priority": 300,
            "publishedAt": "2022-10-23T20:30:18.783Z",
            "status": 1,
            "domain": "63798b937cc654f4bb78fdae",
            "lang": "en"
          },
          {
            "kind": "youtube#searchResult",
            "etag": "hKYsnMf9B0ILtl6OxOMG25k9AtE",
            "id": {
              "kind": "youtube#video",
              "videoId": "hwZxos0NIm0"
            },
            "snippet": {
              "publishedAt": "2023-01-14T08:15:35Z",
              "channelId": "UCENrVFimv0tFrBM9SJqr1Aw",
              "title": "Nginx redirect proxy configuration with docker-compose : Multi Docker container management",
              "description": "In this video we will see the process of deploying applications on a dedicated server with docker and Nginx through ...",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/hwZxos0NIm0/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/hwZxos0NIm0/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/hwZxos0NIm0/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "w4coder",
              "liveBroadcastContent": "none",
              "publishTime": "2023-01-14T08:15:35Z"
            }
          },
          {
            "author": {
              "name": "w4coder"
            },
            "_id": "639cfeb9f6aa92d185f96958",
            "title": "Vercel la solution pour héberger gratuitement vos sites web",
            "category": "634073ed063b8b4f69856b33",
            "slug": "comment-crer-une-application-web-full-stack-avec-nextjs-et-nodejs",
            "sections": [],
            "poster": "https://api.w4coder.com/read/a83b912a246d16b87c0e9eb5cbc35964sans-titrepng.png",
            "createdAt": "2022-08-18T01:40:34.009Z",
            "updatedAt": "2023-02-18T09:45:15.359Z",
            "description": "Vercel est une plateform qui voupermet de déployer facilement vos projets reactjs , nextjs.",
            "reads": "100",
            "color": "#FF6F32",
            "keywords": [
              "React",
              "Next",
              "Web",
              "web3"
            ],
            "priority": 300,
            "publishedAt": "2022-10-23T20:30:18.783Z",
            "status": 1,
            "domain": "63798b937cc654f4bb78fdae",
            "lang": "en"
          },
          {
            "kind": "youtube#searchResult",
            "etag": "93KiYYXy5FFYWx5xQBGiX4-4Rp8",
            "id": {
              "kind": "youtube#video",
              "videoId": "gjz5UwzBOE4"
            },
            "snippet": {
              "publishedAt": "2023-01-17T22:28:26Z",
              "channelId": "UCENrVFimv0tFrBM9SJqr1Aw",
              "title": "React JS versus NextJS for what type of projects to use them ?",
              "description": "shorts #reactjs #nextjs #interview #javascript.",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/gjz5UwzBOE4/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/gjz5UwzBOE4/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/gjz5UwzBOE4/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "w4coder",
              "liveBroadcastContent": "none",
              "publishTime": "2023-01-17T22:28:26Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "SVeLob5-JsQo7WCKsLuxCE62bFw",
            "id": {
              "kind": "youtube#video",
              "videoId": "Y8d21O7R9WQ"
            },
            "snippet": {
              "publishedAt": "2023-01-09T19:30:45Z",
              "channelId": "UCENrVFimv0tFrBM9SJqr1Aw",
              "title": "Nous avons mis à l&#39;épreuve chatGPT la nouvelle IA d&#39;open AI #shorts #openai #chatgpt #ai",
              "description": "Dans cette vidéo nous testons ce bug observé par plusieurs testeurs de chatgtp #shorts #openai #chatgpt.",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/Y8d21O7R9WQ/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/Y8d21O7R9WQ/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/Y8d21O7R9WQ/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "w4coder",
              "liveBroadcastContent": "none",
              "publishTime": "2023-01-09T19:30:45Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "n9QKXC_1eKjpi0OnB0zOpF-zkDE",
            "id": {
              "kind": "youtube#video",
              "videoId": "QGHwFoA84GI"
            },
            "snippet": {
              "publishedAt": "2023-01-12T19:49:54Z",
              "channelId": "UCENrVFimv0tFrBM9SJqr1Aw",
              "title": "How to build NodeJS , ReactJS or NextJS Docker image",
              "description": "In this video you will see how to build a docker image for a ReactJs , NodeJs or NextJS application. 0:00 Introduction 0:21 Create ...",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/QGHwFoA84GI/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/QGHwFoA84GI/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/QGHwFoA84GI/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "w4coder",
              "liveBroadcastContent": "none",
              "publishTime": "2023-01-12T19:49:54Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "9NRNBuxsTb12Df9EQ4-D_H8yFAA",
            "id": {
              "kind": "youtube#video",
              "videoId": "obMfjrIkvAU"
            },
            "snippet": {
              "publishedAt": "2023-01-14T16:36:59Z",
              "channelId": "UCENrVFimv0tFrBM9SJqr1Aw",
              "title": "React Hooks overview #short #shorts #javascript #react #interview  #developer  #reactjs",
              "description": "Quick overview of most used React JS Hooks.",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/obMfjrIkvAU/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/obMfjrIkvAU/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/obMfjrIkvAU/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "w4coder",
              "liveBroadcastContent": "none",
              "publishTime": "2023-01-14T16:36:59Z"
            }
          }
        ] || [],
        stories :  [],
        topA :  []
      } 
    }
  }

  const page1 =  await getArticle({filter:{
    page : 1,
    lang : locale
  }})

  const stories =  await getStories({filter:{
    page : 1,
    lang : locale
  }})

  const ressult = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?key=${process.env.NEXT_PUBLIC_APP_YOUTUBE_API_KEY}&part=snippet&myRating=true&channelId=UCENrVFimv0tFrBM9SJqr1Aw&maxResults=5&order=viewCount&type=video`)
  const data = await ressult.json()
  var ytVideos  = data?.items||[]

  const finalPage = [...page1,...ytVideos]
  finalPage.sort(() => Math.random() - 0.5);
  // console.log(data)

  return { 
      props: {
        page1 : finalPage || [],
        stories : stories || [],
        topA :  []
      } 
  }
}