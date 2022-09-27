import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import styles from './index.module.scss'

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

export default function Slideshow() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className={styles.slideshow}>
            <div
                className={styles.slideshowSlider}
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {colors.map((backgroundColor, index) => (
                    <div
                        className={styles.slide}
                        key={index}
                        style={{ backgroundColor }}
                    >
                        <Link href={"#"}>
                            <a>
                                <div className={styles.slider}>
                                    <Image
                                        src={"https://picsum.photos/500/400"}
                                        width="450"
                                        height="300"
                                        layout="fill"
                                        style={{ width: "100%", height: "100%" }}
                                        className="img"
                                    />
                                    <div className={styles.mark_down}>
                                        <h5 className={styles.cat}>Catérorie</h5>
                                        <span>No comments to show.No comments to show.No comments to show.No comments to show.No comments to show.No comments to show.</span>
                                    </div>
                                </div>
                            </a>
                        </Link>

                    </div>
                ))}
            </div>

            <div className={styles.slideshowDots}>
                {colors.map((_, idx) => (
                    <div
                        key={idx}
                        className={styles.slideshowDot + `${index === idx ? " " + styles.active : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}