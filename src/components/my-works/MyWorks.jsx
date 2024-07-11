import { WorkCardV2 } from '../util/work-card-v2/WorkCardV2'
import { WorkCard } from '../util/work-cards/WorkCard'
import './my_works.css'

export const MyWorks = () => {
    return (
        <section className="main-component-section my-works-section">
            <div className="main-section-container my-works-container">
                <div className="accent-heading">
                    Portfolio
                </div>
                <h3 className="section-heading">
                    My works
                </h3>

                <div className="work-list-wrapper d-flex ">
                    {/* <WorkCard /> */}
                    <WorkCardV2 />
                    <WorkCardV2 />
                    <WorkCardV2 />
                    <WorkCardV2 />
                    <WorkCardV2 />
                    <WorkCardV2 />
                    <WorkCardV2 />
                </div>

            </div>
        </section>
    )
}
