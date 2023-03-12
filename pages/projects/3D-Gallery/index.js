import React from 'react'
import { App } from './App'
import styles from './index.module.scss'

const pexel = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
const images = [
  // Front
  { position: [-5.5,2,0], rotation: [0, 0, 0], url: "/img-gallery/Mona_lisa.jpg" },
  // Back
  { position: [-3, 2, 0], rotation: [0, 0, 0], url: pexel(416430) },
  { position: [-0.5, 2, 0], rotation: [0, 0, 0], url: pexel(310452) },
  // Left
  { position:[0, 0, 1.5], rotation: [0,0, 0], url: pexel(327482) },
  { position:[0, 0, 1.5], rotation: [0, 0, 0], url: pexel(325185) },
  { position:[0, 0, 1.5], rotation: [0,0, 0], url: pexel(358574) },
  // Right
  { position:[0, 0, 1.5], rotation: [0,0, 0], url: pexel(227675) },
  { position:[0, 0, 1.5], rotation: [0,0, 0], url: pexel(911738) },
  { position: [0, 0, 1.5], rotation: [0,0, 0], url: pexel(1738986) }
]

export default function index() {
  return (
    <div className={styles.frames}>
        <App images={images} />
    </div>
  )
}
