import React from 'react'
import './testimonials.css'

function Testimonials({ name, country, work, company, testimonial, imgSrc }) {
    return (
        <div className='container-testimonials'>
            <img className='img-testimonial' src={imgSrc} alt={name} />
            <div className='container-testimonials-text'>
                <p className='name-testimonials'> <strong>{name}</strong>  in {country}</p>
                <p className='job-testimonials'>{work} in <strong>{company}</strong></p>
                <p className='text-testimonials'>"{testimonial}"</p>
            </div>
        </div>
    )
}

export default Testimonials