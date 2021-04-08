import React, { useState, useEffect } from 'react'
import './Cards.css'

import TinderCard from 'react-tinder-card'
import axios from './axios.js'



function Cards() {

          //state for users
          const [people, setPeople] = useState([ 
                    {
                               name: 'elon musk',
                               image: 'http://placeimg.com/640/360/any'
                     },
                     {
                               name: 'Jef amazon',
                               image: 'http://placeimg.com/640/360/any'
                     }
          ])

          //useEffect
           useEffect(()=>{
             async function fetchData(){
               const req = await axios.get('/tinder/cards')

               setPeople(req.data)
             }

             fetchData()
           },[])

          const swiped = (direction,nameToDelete) => {
                    console.log('removing: ' + nameToDelete)
                  }
                  
                  const outOfFrame = (name) => {
                    console.log(name + ' left the screen')
                  }

          return (
                    <div className='cards'>
                              <div className='each__card'>
                              {people.map((person) => (
                                        <TinderCard
                                        className='swipe' 
                                        key={person.name}
                                        preventSwipe={['right', 'left']}
                                        onSwipe={(direct)=> swiped(direct,person.name)} 
                                        onCardLeftScreen={() => outOfFrame(person.name)} 
                                        >

                                                 <div 
                                                 style={{backgroundImage: `url(${person.image})` }} 
                                                 className='card' >
                                                 <h1>{person.name}</h1>
                                                 </div>
                                                 

                                        </TinderCard>
                              ))}      
                              </div>
                    </div>
          )
}

export default Cards
