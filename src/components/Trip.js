import React from 'react'
import '../components/Tripstyle.css'
import Tripdata from './Tripdata'
import Trip1 from '../assets/5.jpg'
import Trip2 from '../assets/8.jpg'
import Trip3 from '../assets/6.jpg'

function Trip() {
    return (
        <div className='Trip'>
            <h1> Recent Trips</h1>
            <p>You Can Discover Uniqu Destination Using Google Maps</p>
            <div className='Trip-card'>
                <Tripdata
                    
                    image={Trip1}
                    heading='Trip In Indonesia'
                    text='Indonesia, officially the Republic of Indonesia, 
                    is a country in Southeast Asia and Oceania between the Indian and Pacific oceans.
                    It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea. '
                />
                <Tripdata
                    
                    image={Trip2}
                    heading='Trip In Indonesia'
                    text="Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. 
                        It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences. 
                    The capital, Kuala Lumpur, is home to colonial buildings, busy shopping districts such as Bukit 
                    Bintang and skyscrapers such as the iconic,
                    451m-tall Petronas Twin Towers."
                />
                <Tripdata
                    image={Trip3}
                    heading='Trip In France'
                    text="France, in Western Europe, encompasses medieval cities, 
                    alpine villages and Mediterranean beaches. Paris, its capital, 
                    is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower. 
                    The country is also renowned for its wines and sophisticated cuisine. 
                    Lascaux’s ancient cave drawings, Lyon’s Roman theater and the vast Palace of Versailles attest to its rich history "
                />
            </div>
        </div>
    )
}

export default Trip