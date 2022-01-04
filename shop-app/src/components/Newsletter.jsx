import React from 'react'
import '../style/style.css'

const Newsletter = () => {
    return (
        <div>
            <div className="newsletter-container">
                <h1 className="newsletter-title">NEWSLETTER</h1>
                <p className="newsletter-description">Get timely updates from your favorite products.</p>
                <div className="newsletter-input-container">
                    <input type="email" className="newsletter-input" placeholder="Your email"></input>
                    <button className="newsletter-btn"><span class="iconify" data-icon="fluent:send-28-filled" data-width="31" data-height="31"></span></button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter