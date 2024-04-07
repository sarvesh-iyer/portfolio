import Box from '@mui/material/Box';
import './home.css'
import MyPic from '../../assets/images/my-pic.png'

export const Home = () => {
    return (
        <Box component="section" className="home-section">
            <Box display="flex">
                <Box sx={{width: '40%'}}>
                    <img src={MyPic} alt="sarvesh-iyer" className="profile-pic" />
                </Box>
                <Box sx={{width: '40%'}}>
                    <h1>
                        Hi, I'm 
                        <span className="text-gradient"> Sarvesh Iyer</span>
                    </h1>
                    <h2>I'm a React Developer</h2>
                    
                </Box>
            </Box>
        </Box>
    )
}
