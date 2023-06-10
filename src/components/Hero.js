import React from 'react'
import './Hero.css'

function Hero(props) {
    return (
        <div>
            <div className={props.cName}>
                <img alt='heroImg' src={props.heroImage}/>
                <div className='hero-text'>
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <a href={props.url} className={props.btnclass}>
                        {props.buttonText}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero