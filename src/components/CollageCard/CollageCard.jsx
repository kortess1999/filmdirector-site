import React from 'react'
import "./CollageCard.css"
import { forwardRef } from 'react';

const CollageCard = forwardRef(({ filmData, poster }, ref) => {
  const { genre, title, storyLine, description, link } = filmData;

  return (
    <div className='container video_card'>
      <div className='row'>
        <div className='col-12 col-md-5 video_card_text video_card align-top'>
          <p className='h3 text-center card_title_text text-start'>{title}</p>
          <dl className="row card_table_row">
            <dt className="col-sm-4 card_title_text align-top">Genre:</dt>
            <dd className="col-sm-8 collage_card_property_description">{genre}</dd>
          </dl>
          <p><span className='card_title_text'>Storyline:</span> <span className='collage_card_property_description'>&nbsp;{storyLine}</span></p>
          <br />
          <p className='collage_card_text fst-italic'>{description}</p>
          <br />
        </div>
        <div className='col-12 col-md-7 card_collage_main_photo_container'>
          <img src={poster} id='collage_main_photo' alt='collage_main_photo' className='card_collage_main_photo' />
        </div>
        <div className='col-12 collage_card_trailer'>
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

export default CollageCard