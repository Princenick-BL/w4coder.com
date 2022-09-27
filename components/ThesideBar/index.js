import React from 'react'
import Ads300 from '../Ads/Ads300'
import styles from './index.module.scss'

export default function TheSideBar() {
  return (
    <div className={styles.right}>
        <input type="search" placeholder='Search'/>
        <div className={styles.mainPlayer}>


            {/* <amp-story-player style={{position:"relative",width:"100%",height:"100%"}} layout="responsive" width="360" height="600" id="player1" ref={playerRef}>
            <a href="https://preview.amp.dev/documentation/examples/introduction/stories_in_amp/">
                <img src="https://amp.dev/static/samples/img/story_dog2_portrait.jpg" width="360" height="600" loading="lazy" data-amp-story-player-poster-img/>
                Stories in AMP - Hello World
            </a>
            <a href="https://preview.amp.dev/documentation/examples/introduction/stories_in_amp/">
                <img src="https://amp.dev/static/samples/img/story_dog2_portrait.jpg" width="360" height="600" loading="lazy" data-amp-story-player-poster-img />
                Stories in AMP - Hello World
            </a>
            <a href="https://preview.amp.dev/documentation/examples/introduction/stories_in_amp/">
                <img src="https://amp.dev/static/samples/img/story_dog2_portrait.jpg" width="360" height="600" loading="lazy" data-amp-story-player-poster-img />
                Stories in AMP - Hello World
            </a>
            </amp-story-player> */}

        </div>
        <Ads300/>
    </div>
  )
}
