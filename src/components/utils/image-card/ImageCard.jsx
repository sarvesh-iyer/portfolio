import React from 'react'
import MyPic from '../../../assets/images/hero/sarvesh.png'

export const ImageCard = () => {
    return (
        <section className="section-wrapper">
            <div className="section-container">
                <div className='overflow-hidden w-full' style={{maxHeight: '90dvh', borderRadius: 'var(--card-border-radius)'}}>
                    <img 
                        src={MyPic} 
                        alt="Sarvesh Iyer"
                        className="w-full h-full object-cover" 
                    />
                </div>
            </div>
        </section>
    )
}
