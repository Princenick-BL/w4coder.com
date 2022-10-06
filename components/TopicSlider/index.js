import React,{useEffect} from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const Slide = ({slide,slidePrev,slideNext}) =>{

    const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + 320; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
 
    return(
        <div className={styles.container}>
            <div className={styles.top}> 
                <Image
                    src={slide?.img}
                    width={500}
                    height={300}
                    layout={"responsive"}
                    className={styles.img}
                />
                <div className={styles.desc}>
                    Lorem enim tempor Lorem excepteur aliquip reprehenderit. Enim id aliqua nisi officia sit. Magna veniam adipisicing cillum aliqua ut cillum do et id adipisicing esse quis ad. Anim ex qui quis sint commodo laboris laborum mollit dolore ipsum. Ullamco laboris mollit ut nisi. Do pariatur esse id aute reprehenderit ut enim sit velit pariatur sit.  
                </div>
            </div>
            <div  className={styles.bottom}>
                <div className={styles.positions}>{slide?.id} sur 4</div>
                <div className={styles.arrows}>
                <div onClick={slidePrev}>&#x2039;</div>

                <CountdownCircleTimer
                    isPlaying
                    duration={4}
                    colors="#A30000"
                    size={31}
                    strokeWidth={2}
                    initialRemainingTime={remainingTime}
                    
                >
                        {({ remainingTime }) => 
                        <span style={{margin:"0"}} onClick={slideNext}>&#x203A;</span>
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
        return prev + 1 === slides.length ? 0 : currentSlide + 1;
      });
    };
    const slidePrev = (e) => {
      setCurrentSlide((prev) => {
        return prev === 0 ? slides.length - 1 : currentSlide - 1;
      });
    };
    React.useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentSlide((prev) => {
          return prev + 1 === slides.length ? 0 : prev + 1;
        });
      }, 4000);
      return () => {
        clearInterval(intervalId);
      };
    }, []);
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.textColor}>React JS</h2>
            <Slide 
                slide={slides[currentSlide]}
                slideNext={slideNext}
                slidePrev={slidePrev}
            />
        </div>
    )
}

