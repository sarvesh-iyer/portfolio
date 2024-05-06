import { Helper } from '../../../helpers/helper'
import './work_card.css'
import WorkImg from '../../../assets/images/works/work.jpg'
import CallMadeRoundedIcon from '@mui/icons-material/CallMadeRounded';

export const WorkCard = (props) => {


    return (
        <div className="work-card-wrapper" style={Helper.imageContainerStyle(WorkImg)}>
            <div className="work-info-overlay transition">
                <CallMadeRoundedIcon className="open-arrow" />
                <div className="text-content">
                    <h3 className="work-name">
                        Magic Art
                    </h3>
                    <span className="description">
                        Youtube
                    </span>
                </div>
            </div>
        </div>
    )
}
