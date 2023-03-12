import styles from './index.module.scss'
import YoutubeShort from '../components/Youtube'
const YOUTUBE_PLAYLIST_ITEMS_API = 'https://youtube.googleapis.com/youtube/v3/search';
import DefaultLayout from '../layouts/default'

export default function Youtube({isBreakpoint,data}) {

    return (
        <DefaultLayout
            title={"LSB || YouTube"}
            description={""}
            isBreakpoint={isBreakpoint}
        >
            <div className={styles.youtube}>
                <div style={{display:"flex",alignItems:"center"}}>
                    <svg viewBox="0 0 40 24" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: "none", display: "block", height: "20px"}} className="style-scope yt-icon">
                        <g viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet" className="style-scope yt-icon">
                            <g className="style-scope yt-icon">
                                <path d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z" fill="#FF0000" className="style-scope yt-icon"></path>
                                <path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white" className="style-scope yt-icon"></path>
                            </g>
                        </g>
                    </svg>
                    <span style={{
                        fontSize: "1.1rem",
                        lineHeight: "2.8rem",
                        fontWeight: 400,
                    }}>YouTube</span>
                </div>
                <div className={styles.list}>
                    {data && data.map((sh,i)=>{
                        if(sh?.id?.videoId){
                            return(
                                <div key={i}>
                                    <YoutubeShort info={sh}/>
                                </div>
                            )

                        }
                    })}
                </div>
            </div>
            <div>

            </div>   
        </DefaultLayout>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
  
   
    const ressult = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?key=${process.env.NEXT_PUBLIC_APP_YOUTUBE_API_KEY}&part=snippet&myRating=true&channelId=UCENrVFimv0tFrBM9SJqr1Aw&maxResults=50`)
    const data = await ressult.json()
    console.log(data?.items?.[0])
    return { 
        props: {
            data : data?.items || [],
        } 
    }
  }
