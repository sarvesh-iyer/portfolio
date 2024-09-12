import LocationOnIcon from '@mui/icons-material/LocationOn';

export const ExperienceDataCard = (props) => {
    let {data} = props

    return (
        <div>
            <div className="role-wrapper">
                <h4 className="role-name">{data.role}</h4>
                <span className="period">{data.period}</span>
            </div>
            <a 
                href={data.link}
                target='_blank'
                className="company-name"
            >
                {data.organization}
                <div className="flex items-center gap-1 -ml-1">
                    <LocationOnIcon style={{fontSize: '20px'}} />
                    {data.location}
                </div>
            </a>
            <ul 
                className="work-description list-disc" 
                dangerouslySetInnerHTML={{__html: data.description}}>
            </ul>
        </div>
    )
}
