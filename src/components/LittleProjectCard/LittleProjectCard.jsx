import React from 'react'
import "./LittleProjectCard.css"
import { forwardRef } from 'react';

const LittleProjectCard = forwardRef(({ filmData }, ref) => {
  const { title, link } = filmData;

  return (
    <div className='container video_card'>
      <div className='row'>
        <div className='col-12 video_card_text video_card align-top'>
          <p className='h3 text-center card_title_text text-start'>{title}</p>
        </div>
        <div className='col-12 video_card_video'>
          <iframe
            width={'100%'}
            height={580}
            src={link}
            title="YouTube video player"
            frameBorder={5}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen=""
          />
        </div>
      </div>
    </div>
  )
});

export default LittleProjectCard