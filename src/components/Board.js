import React from 'react'
import Letters from './Letters'

export default function Board() {

  return (
    <div className='board-wrapper'>
      <div className='row-board'>
        <Letters attempt={0} position={0}/>
        <Letters attempt={0} position={1}/>
        <Letters attempt={0} position={2}/>
        <Letters attempt={0} position={3}/>
        <Letters attempt={0} position={4}/>
      </div>
      <div className='row-board'>
        <Letters attempt={1} position={0}/>
        <Letters attempt={1} position={1}/>
        <Letters attempt={1} position={2}/>
        <Letters attempt={1} position={3}/>
        <Letters attempt={1} position={4}/>
      </div>
      <div className='row-board'>
        <Letters attempt={2} position={0}/>
        <Letters attempt={2} position={1}/>
        <Letters attempt={2} position={2}/>
        <Letters attempt={2} position={3}/>
        <Letters attempt={2} position={4}/>
      </div>
      <div className='row-board'>
        <Letters attempt={3} position={0}/>
        <Letters attempt={3} position={1}/>
        <Letters attempt={3} position={2}/>
        <Letters attempt={3} position={3}/>
        <Letters attempt={3} position={4}/>
      </div>
      <div className='row-board'>
        <Letters attempt={4} position={0}/>
        <Letters attempt={4} position={1}/>
        <Letters attempt={4} position={2}/>
        <Letters attempt={4} position={3}/>
        <Letters attempt={4} position={4}/>
      </div>
      <div className='row-board'>
        <Letters attempt={5} position={0}/>
        <Letters attempt={5} position={1}/>
        <Letters attempt={5} position={2}/>
        <Letters attempt={5} position={3}/>
        <Letters attempt={5} position={4}/>
      </div>
        
    </div>
  )
}
