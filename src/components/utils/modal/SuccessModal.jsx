import React, { useEffect } from 'react'
import TickIcon from '../../../assets/images/icons/tick.svg'
import './modal.css'
import { Box, IconButton, Modal, Zoom } from '@mui/material'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export const SuccessModal = (props) => {

    let {
        open,
        setOpen
    } = props

    const handleClose = () => {
      setOpen(false);
    };

    useEffect(() => {
        let modalCloseTimeOut = null
        if(open){
            modalCloseTimeOut = setTimeout(() => {
                handleClose()
            }, 3500);
        }
        return () => {
            clearTimeout(modalCloseTimeOut)
        }
    }, [open])
    
  
    return (
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='success-modal'
        >
            <Zoom in={open} timeout={400}>
                <Box className="success-modal-container" >
                    <div className="modal-wrapper">
                        <IconButton 
                            className='p-1 hover:bg-[var(--secondary-hover-dark)] absolute right-2 top-2'
                            onClick={handleClose}
                        >
                            <CloseRoundedIcon className='text-[var(--primary-white)]' />
                        </IconButton>
                        <img src={TickIcon} alt="success tick" />
                        <h4 className='text-center'>
                            Submitted successfully
                        </h4>
                    </div>
                </Box>
            </Zoom>
        </Modal>
    )
}
