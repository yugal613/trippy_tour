import './Destination.css'
import React from 'react'

import mountain1 from '../assets/1.jpg'
import mountain2 from '../assets/2.jpg'
import mountain3 from '../assets/8.jpg'
import mountain4 from '../assets/4.jpg'

import Destinationdata from './Destinationdata'

function Destination() {
    return (
        <div className='Destination'>
            <h1>Popular Destination</h1>
            <p>Tours Give You Opportunity To See A lot, Within TimeFrame</p>
            <Destinationdata
            className="first-des"
            heading="Taal Volcanoes Batangas"
            text="Taal Volcano has had several violent eruptions in the past,
            causing deaths on the island and the populated areas surrounding the lake,
            with an overall death toll of about 6,000. Because of its proximity to populated areas and its eruptive history,
            the volcano was designated a Decade Volcano, worthy of close study to prevent future natural disasters.
            All volcanoes in the Philippines are part of the Ring of Fire."

            img1={mountain1}
            img2={mountain2}
            />

<Destinationdata
            className="first-des-reverse"
            heading="Mt Daguldul Batangas"
            text="Mt. Daguldol is a coastal mountain located in the province of Batangas. It offers a scenic view of nearby Batangas mountains and beaches.
            Additionally, Mt. Daguldol has an elevation of 672 MASL or 2204 feet. 
            Mt. Daguldol is exactly situated in Sitio Biga, Barangay, Hugom San Juan, Batangas. It is bound between the municipality of San Juan and Lobo.
            The Lobo municipality is also a highlands, with Mt. Naguiling being the tallest mountain.
            The Tagalog word “Daguldol” means a feeling of apprehension and grandiosity. "

            img1={mountain3}
            img2={mountain4}

            
            />
        </div>
    )
}

export default Destination