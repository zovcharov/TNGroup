import React from 'react'
import PropTypes from 'prop-types'
import './ProjectFiles.scss'
import DefaultButton from "../Buttons/DefaultButton/DefaultButton";

const FILES = [
  {
    name: 'Раз',
    link: ''
  },
  {
    name: 'Два',
    link: ''
  },
  {
    name: 'Три',
    link: ''
  },
  {
    name: 'Чотыри',
    link: ''
  },
]

const ProjectFiles = (props) => {

  return (
    <div className='project-files'>
      <div className='project-files__header'>
        <p>Файлы проекта</p>
      </div>
      <div className='project-files__content'>
        {FILES.map(({name, link}, index) => {
          return (
            <div className='project-files__item' key={index}>
              <a className='project-files__link' href={link}>{name}</a>
            </div>
          )
        })}
      </div>
      <div className='project-files__bottom'>
        <DefaultButton>Прикрепить файлы</DefaultButton>
      </div>
    </div>
  )
}

export default ProjectFiles