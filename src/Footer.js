import React from 'react'
import './Footer.css'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

function Footer() {
          return (
                    <div className='footer'>
                             <IconButton className='footer__icon'>
                                        <ReplayIcon fontSize='large' className='footer__reply'/>
                              </IconButton>  

                              <IconButton className='footer__icon'>
                                        <CloseIcon fontSize='large' className='footer__close'/>
                              </IconButton>

                              <IconButton className='footer__icon'>
                                        <StarIcon fontSize='large' className='footer__star'/>
                              </IconButton>

                              <IconButton className='footer__icon'>
                                        <FavoriteIcon fontSize='large' className='footer__love'/>
                              </IconButton>

                              <IconButton className='footer__icon'>
                                        <FlashOnIcon fontSize='large' className='footer__flash'/>
                              </IconButton>             
                    </div>
          )
}

export default Footer
