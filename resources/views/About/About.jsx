import './About.css'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import timelineElements from '../../js/components/timelineElements';

import {MdFoundation, MdVideogameAsset} from 'react-icons/md';


const About = () => {

    let iconStyles = { background: "#FFFFFF", color:"#009B96"};

    return (
        <div className='about'>
        <div className='about--text'>
            <h1>TIME<span style={{ color: `#009B96`}}>LINE</span></h1>
            <p className='about--paragraph'>Discover the most important milestones in our history</p>
        </div>
            <VerticalTimeline>
                {timelineElements.map(element => {
                    let showButton = element.buttonText !== undefined && element.buttonText !== null && element.buttonText !== "";
                    let isFoundationIcon = element.icon === "Foundation"
                    return (
                        <VerticalTimelineElement 
                        key={element.id}
                        date={element.date}
                        dateClassName='date'
                        iconStyle={iconStyles}
                        icon={isFoundationIcon ? <MdFoundation /> : <MdVideogameAsset />}
                        >
                        <h3 className='vertical-timeline-element-title'>{element.title}</h3>
                        <p id='description'>{element.description}</p>
                        {showButton && <a href={element.path} className='about--button'>{element.buttonText}</a>}
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>
        </div>
    )
}

export default About