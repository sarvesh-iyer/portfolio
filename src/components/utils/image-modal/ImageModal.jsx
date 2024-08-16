import { Box, IconButton, Modal, Zoom } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import './image_modal.css'

export const ImageModal = ({ image, open, setOpen }) => {
        
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        console.log(image)
    }, [image])
    

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className='image-modal'
        >
            <Zoom in={open} timeout={400}>
                <Box className="image-modal-container" >
                    <div className="w-full flex items-start">
                        <img
                            src={image?.actual} 
                            className="image-tag object-contain object-left-top" 
                        />
                        <IconButton 
                            className='p-1 hover:bg-[var(--secondary-hover-dark)] -top-2 -right-2'
                            onClick={handleClose}
                        >
                            <CloseRoundedIcon className='text-[var(--primary-white)] text-3xl' />
                        </IconButton>
                    </div>
                </Box>
            </Zoom>
        </Modal>
    )
}
