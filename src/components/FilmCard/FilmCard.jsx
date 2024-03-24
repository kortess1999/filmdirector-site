import React from 'react'
import "./FilmCard.css"
import { forwardRef } from 'react';

const FilmCard = forwardRef(({ filmData }, ref) => {
  const { genre, title, description, link } = filmData;

  function getGenreIfPossible(genre) {
    if (genre) {
      return <dl class="row">
        <dt class="col-sm-3 h4 card_title_text align-top">Genre:</dt>
        <dd class="col-sm-9">{genre}</dd>
      </dl>;
    }
  }

  return (
    <div className='container video_card'>
      <div className='row'>
        <div className='col-12 col-md-6 video_card_text video_card align-top'>
          <p className='h3 text-center card_title_text text-start'>{title}</p>
          {getGenreIfPossible(genre)}
          <dl class="row">
            <dt class="col-sm-3 h4 card_title_text ">Storyline:</dt>
            <dd class="col-sm-9">{description}</dd>
          </dl>
        </div>
        <div className='col-12 col-md-6 video_card_video'>
          <iframe
            width={'100%'}
            height={300}
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

export default FilmCard