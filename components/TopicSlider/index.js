import React,{useEffect, useState} from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { getArticleByCatCaroussel } from '../../services/articles'

const Slide = ({slide,slidePrev,slideNext,total}) =>{

    const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + 320; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
 
    return(
      <div className={styles.container + " topic-slider-container"}>
        <div className={styles.top}>
          <Link href={`/blog/article/${slide?._id}/${slide?.slug}`}>
            <a>
              <Image
                src={slide?.poster}
                width={500}
                height={300}
                layout={"responsive"}
                className={styles.img}
              />
            </a>
          </Link>
          <Link href={`/blog/article/${slide?._id}/${slide?.slug}`}>
            <a>
              <div className={styles.desc}>
                {slide?.title}
              </div>
            </a>
          </Link>
        </div>
        <div className={styles.bottom+ " topic-slider-bottom"}>
          <div className={styles.positions}>{slide?.id} sur {total}</div>
          <div className={styles.arrows}>
            <div onClick={slidePrev}>&#x2039;</div>

            <CountdownCircleTimer
              isPlaying
              duration={6}
              colors="#A30000"
              size={31}
              strokeWidth={2}
              initialRemainingTime={remainingTime}

            >
              {({ remainingTime }) =>
                <span style={{ margin: "0" }} onClick={slideNext}>&#x203A;</span>
              }
            </CountdownCircleTimer>
            {/* <CountdownCircleTimer
                    isPlaying
                    duration={8}
                    initialRemainingTime={8}
                    colors="#A30000"
                    size={30}
                    strokeWidth={2}
                >
                    <div>&#x2039;</div>
                </CountdownCircleTimer> */}
            {/* <div onClick={slideNext}>&#x203A;</div> */}
          </div>
        </div>
      </div> 
    )
}

export default function TopicSlider() {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [carousselData,setCarousselData] = useState([])

    useEffect(()=>{
        (async ()=>{
            const res = await getArticleByCatCaroussel()
            setCarousselData(res)
        })()
    },[])

    const slides = [
      {
        id: 1,
        title: "First Slide",
        link: "https://via.placeholder.com/750x350/FF0000/FFFFFF",
        img : 'https://picsum.photos/500/300?random=1'
      },
      {
        id: 2,
        title: "Second Slide",
        link: "https://via.placeholder.com/750x350/00FF00/000000",
        img : 'https://picsum.photos/500/300?random=1'

      },
      {
        id: 3,
        title: "Third Slide",
        link: "https://via.placeholder.com/750x350/0000FF/FFFFFF",
        img : 'https://picsum.photos/500/300?random=1'

      },
      {
        id: 4,
        title: "Fourth Slide",
        link: "https://via.placeholder.com/750x350/F000F0/000000",
        img : 'https://picsum.photos/500/300?random=1'

      }
    ];
    const slideNext = (e) => {
      setCurrentSlide((prev) => {
        return prev + 1 === carousselData?.articles?.length ? 0 : currentSlide + 1;
      });
    };
    const slidePrev = (e) => {
      setCurrentSlide((prev) => {
        return prev === 0 ? carousselData?.articles?.length - 1 : currentSlide - 1;
      });
    };
    React.useEffect(() => {
        if(carousselData?.articles){

            const intervalId = setInterval(() => {
              setCurrentSlide((prev) => {
                return prev + 1 === carousselData?.articles.length ? 0 : prev + 1;
              });
            }, 6000);
            return () => {
                clearInterval(intervalId);
            };
        }
    }, [carousselData?.articles]);
    return (
        <>
        {carousselData?.articles?.length > 0 && (
            <div className={styles.wrapper}>
                <h2 className={styles.textColor}>{carousselData?.cat?.name}</h2>
                <Slide 
                    slide={{...carousselData?.articles[currentSlide],id:currentSlide+1}}
                    slideNext={slideNext}
                    slidePrev={slidePrev}
                    total={carousselData?.articles?.length}
                />
            </div>
        )}
        </>
    )
}

