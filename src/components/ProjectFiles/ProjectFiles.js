import React from 'react'
import PropTypes from 'prop-types'
import './ProjectFiles.scss'
import Button from '../Button/Button'

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
        {FILES.map(({name, link}) => {
          return (
            <div className='project-files__item'>
              <a className='project-files__link' href={link}>{name}</a>
            </div>
          )
        })}
      </div>
      <div className='project-files__bottom'>
        <Button>Прикрепить файлы</Button>
      </div>
    </div>
  )
}

export default ProjectFiles