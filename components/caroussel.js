import React, { Component } from 'react'
import Link from "next/link"
import MediaLeft from './utills/media.left/media.left'

export default class caroussel extends Component {
    render() {
        return (
            <div style={{display:"flex"}}>
				<MediaLeft />
				<div className="untitled">
					
					<div className="untitled__slides">
						<div className="untitled__slide">
							<div className="untitled__slideBg"></div>
							<div className="untitled__slideContent">
							<div className="untitled__slideContent_content">

								<span>ELÈVE INGENIEUR EN INFORMATIQUE </span> 
								<div>
									<span>&#9733;</span>
									<span>&#9733;</span>
									<span>&#9733;</span>
									<span>&#9733;</span>
									<span>&#9733;</span>
								</div>
							</div>
							</div>
						</div>
						<div className="untitled__slide">
							<div className="untitled__slideBg"></div>
							<div className="untitled__slideContent">
							<div className="untitled__slideContent_content">

								<span>CRÉATION DE SITES WEB</span> 
								<p>Sites vitrines, logiciels WEB, sites évennementiels</p>
							</div>
							

							</div>
						</div>
						<div className="untitled__slide">
							<div className="untitled__slideBg"></div>
							<div className="untitled__slideContent">
								<div className="untitled__slideContent_content">
									<span>ENSEMBLE, DONNONS VIE À VOS RÊVES</span> 

									<div className="emojis"> 😉 😉 😉</div>
								</div>
								
							</div>
						</div>
					
					</div>
					
				</div>
				<nav className="untitled__nav">
				<ul>
						<li>
							<Link href='/read'>
								<a >BLOG</a>
							</Link>
						</li>
						<li>
							<Link href='/projects'>
								<a>MES PROJETS</a>
							</Link>
						</li>
						<li>
							<Link href='/curriculum-vitae/read'>
								<a >MOI</a>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
        )
    }
}
