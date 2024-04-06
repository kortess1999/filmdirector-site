import React from 'react'
import "./Portfolio.css"
import { forwardRef, useState, useEffect } from 'react';
import Group from '../Svg/Group';
import { VectorIcon } from '../Svg/VectorIcon';
import FilmCard from '../FilmCard/FilmCard';
import LittleProjectCard from '../LittleProjectCard/LittleProjectCard';
import CollageCard from '../CollageCard/CollageCard';
import {
  familyTiesPoster
} from '../../assets';

import filmsData from './FilmsData.json'
import projectsData from './ProjectsData.json'
import collageData from './CollageData.json'

const posters = [
  familyTiesPoster
];

const Portfolio = ({ film_projects_ref, student_projects_ref }) => {
  console.log(student_projects_ref);
  function getProjectsCards() {
    return projectsData.map((d) => <LittleProjectCard filmData={d} />);
  }

  function getFilmCards() {
    return filmsData.map((d) => <FilmCard filmData={d} />);
  }

  function getCollageCards() {
    return collageData.map((d) => <CollageCard filmData={d} poster={posters[d.posterId]} />);
  }

  useEffect(() => {
    const preloadImages = (imageArray) => {
      imageArray.forEach((image) => {
        const img = new Image();
        img.src = image.imgSrc;
      });
    };
  }, []);

  const handleClick = (photoData, mobPhotoData, menu) => {
    setTimeout(() => {
      setActiveMenu(menu);
    }, 100); // время анимации должно соответствовать времени CSS-транзиции
  };

  return (
    <section id='portfolio' ref={film_projects_ref}>
      <div className='wrapper'>
        <div className='wrapper2'>

          <div className="header_section">

            <div className="svgcomp">
              <div className='vector'>
                <VectorIcon />
              </div>
              <div className='group19'>
                <Group />
              </div>
            </div>

            <div className='my_header'>
              <h2>Portfolio</h2>
            </div>
          </div>
          {getCollageCards()}
          <div className="header_section">

            <div className="svgcomp">
              <div className='vector'>
                <VectorIcon />
              </div>
              <div className='group19'>
                <Group />
              </div>
            </div>

            <section id='student_projects' className='my_header' ref={student_projects_ref}>
              <h2>Student Projects</h2>
            </section>
          </div>
          {getFilmCards()}
          {getProjectsCards()}
        </div>
      </div >
      {/* <div><VectorSvg /> <PersonSvg/></div> */}
    </section >
  )
};

export default Portfolio