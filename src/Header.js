import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import IconButton from '@material-ui/core/IconButton';

function Header() {
          return (
                    <div className='header'>
                            <IconButton>
                            <PersonIcon fontSize='large' className='header__icon'/>
                            </IconButton>
                            
                            <IconButton>
                            <WhatshotIcon fontSize='large' className='header__icon logo'/>
                            </IconButton>
                            
                            <IconButton>
                            <QuestionAnswerIcon fontSize='large' className='header__icon'/>
                            </IconButton>
                            
                            
                    </div>
          )
}

export default Header
