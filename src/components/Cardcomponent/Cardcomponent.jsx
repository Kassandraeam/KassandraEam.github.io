import React from 'react'
import '../Cardcomponent/Cardcomponent.css'

const CardComponent = () => {


  return (
    <>
      <div className='columns-2'>

       <div id = 'assemble '>
          <article className='card mb-5'>
            <div className='card_content'>
              <h3 className='card_title'>Assemble</h3>
              <span className='card_subtitle'>Subtitle</span>
              <p className='card_description'>Description</p>
            </div>
          </article>
       </div>
        
        <div id = 'oxc'>
          <article className='card mb-5'>
            <div className='card_content'>
              <h3 className='card_title'>Timeline</h3>
              <span className='card_subtitle'>Subtitle</span>
              <p className='card_description'>Description</p>
            </div>
          </article>
        </div>

        <div id = 'app3'>
          <article className='card mb-5'>
            <div className='card_content'>
              <h3 className='card_title'>TBD</h3>
              <span className='card_subtitle'>Subtitle</span>
              <p className='card_description'>Description</p>
            </div>
          </article>
        </div>
        <div id = 'app4'>
          <article className='card mb-5'>
            <div className='card_content'>
              <h3 className='card_title'>TBD</h3>
              <span className='card_subtitle'>Subtitle</span>
              <p className='card_description'>Description</p>
            </div>
          </article>
        </div>
        
      </div>
    </>
  )
}

export default CardComponent