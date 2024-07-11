import React from 'react'
import './experience.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';

export const Experiences = () => {
    return (
        <section className="main-component-section experience-section">
            <div className="main-section-container experience-container">
                <div className="accent-heading">
                    Timeline
                </div>
                <h3 className="section-heading">
                    My Experience
                </h3>
                <VerticalTimeline lineColor="#494b50" >
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#494b50', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '10px solid  #494b50' }}
                        date="March 2022 - Present"
                        iconStyle={{ background: '#494b50', color: '#fff' }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title font-semibold">React Js Developer</h3>
                        <h4 className="vertical-timeline-element-subtitle font-medium">Ailaysa Technologies Pvt. Ltd, Chennai</h4>
                        <p>
                            Product Development, API integrations, Component library development, Front-end infrastructure management, 
                            Front-end production deployment
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="May 2021 - October 2021"
                        contentStyle={{ background: '#494b50', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '10px solid  #494b50' }}
                        iconStyle={{ background: '#494b50', color: '#fff' }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title font-semibold">Shopify Theme developer (Internship)</h3>
                        <h4 className="vertical-timeline-element-subtitle font-medium">Quantulum Ventures, Bengaluru</h4>
                        <p>
                            Shopify liquid template language, E-commerce theme developer, User Experience, 
                            Responsive website
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="June 2019 - June 2022"
                        contentStyle={{ background: '#494b50', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '10px solid  #494b50' }}
                        iconStyle={{ background: '#494b50', color: '#fff' }}
                        icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title font-semibold">Bachelor of Computer Science and Engineering</h3>
                        <h4 className="vertical-timeline-element-subtitle font-medium">Karpagam College of Engineering, Coimbatore</h4>
                        <p>
                            CGPA: 9.0 <br />
                            Inter-college Technical symposium: 1st
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="June 2016 - May 2019"
                        contentStyle={{ background: '#494b50', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '10px solid  #494b50' }}
                        iconStyle={{ background: '#494b50', color: '#fff' }}
                        icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title font-semibold">Diploma in Computer Engineering</h3>
                        <h4 className="vertical-timeline-element-subtitle font-medium">Sairam Polytechnic College, Chennai</h4>
                        <p>
                            Precentage: 97% <br />
                            Inter-college Project exhibition: 1st award <br />
                            Inter-college Technical symposium: 1st and 2nd award
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="April 2014 - March 2015"
                        contentStyle={{ background: '#494b50', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '10px solid  #494b50' }}
                        iconStyle={{ background: '#494b50', color: '#fff' }}
                        icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title font-semibold">10th CBSE</h3>
                        <h4 className="vertical-timeline-element-subtitle font-medium">Kendriya Vidyalaya, Jagdalpur</h4>
                        <p>
                            CGPA: 8.5 <br />
                            10.0 CGPA in Information Technology
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{ background: '#ff4522', color: '#fff' }}
                        icon={<StarIcon />}
                    />
                </VerticalTimeline>
            </div>
        </section>
    )
}
