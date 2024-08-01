import React from 'react'
import { ImageCard } from '../utils/image-card/ImageCard'

export const ProjectInfo = (props) => {
    let { project } = props
    
    return (
        <div className="section-container">
            <div className="left-container">
                <h2>Why</h2>
            </div>
            <div className="right-container">
                <p>I am always looking to add more skills.Morbi egestas neque eu blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at purus faucibus tristique ut et dolor. </p>
            </div>
        </div>
    )
}
