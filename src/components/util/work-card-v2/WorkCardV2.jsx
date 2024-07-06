import './work_card_v2.css'
import AilaysaImg from '../../../assets/images/project/ailaysa.png'
import { GithubIcon } from '../../../assets/images/svgs/GithubIcon'
import { ReactIcon } from '../../../assets/images/svgs/ReactIcon'
import { SassIcon } from '../../../assets/images/svgs/SassIcon'
import { StroybookIcon } from '../../../assets/images/svgs/StroybookIcon'
import { MaterialUiIcon } from '../../../assets/images/svgs/MaterialUiIcon'
import ReduxIcon from '../../../assets/images/general/redux.svg'

export const WorkCardV2 = (props) => {

    return (
        <div className="project-card transition">
            <div className="project-image-cover">
                <img src={AilaysaImg} alt="ailaysa website" />
            </div>
            <div className="project-info">
                <div className="d-flex items-center justify-between">
                    <h3 className="project-name">Ailaysa</h3>
                    <a href="" className="github-link">
                        <GithubIcon />
                    </a>
                </div>
                <p className="project-desc">
                    Ailaysa is a AI-powered SaaS platform for multilingual, and multimodal content development.
                </p>
                <div className="tech-stack d-flex">
                    <div title='React'><a href=""></a> <ReactIcon /></div>
                    <div title='Redux'><a href="https://redux.js.org/" target='_blank'><img src={ReduxIcon} width={25} /></a></div>
                    <div title='Sass'><SassIcon /></div>
                    <div title='React'><StroybookIcon /></div>
                    <div title='Material UI' className="mui-icon"><MaterialUiIcon /></div>
                    
                </div>
            </div>
        </div>
    )
}
