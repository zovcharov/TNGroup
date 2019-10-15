import React from 'react'
import PropTypes from 'prop-types'
import './ProjectPassport.scss'

const ProjectMainInfo = (props) => {
  const {
    Alias,
    DateBegin,
    DateEnd,
    Objective
  } = props
  return (
    <div className='project-main-info'>
      <div className='project-main-info__row'>
        <InfoBlock label='Название проекта:'>
          <span className='project-main-info__label'>
            {Alias}
          </span>
        </InfoBlock>
      </div>
      <div className='project-main-info__row'>
        <div className='project-main-info__col'>
          <InfoBlock label='Дата постановки:'>
            {DateBegin}
          </InfoBlock>
        </div>
        <div className='project-main-info__col'>
          <InfoBlock label='Дата окончания:'>
            {DateEnd}
          </InfoBlock>
        </div>
      </div>
      <div className='project-main-info__row'>
        <InfoBlock label='Цель проекта:'>
          {Objective}
        </InfoBlock>
      </div>
      <div className='project-main-info__row'>
        <InfoBlock label='Описание проекта:'>
          {Objective}
        </InfoBlock>
      </div>
      <div className='project-main-info__row'>
        <div className='project-main-info__col'>
          <InfoBlock label='Ожидаемый результат:'>
            {Objective}
          </InfoBlock>
        </div>
        <div className='project-main-info__col'>
          <InfoBlock label='Ожидаемый продукт:'>
            {Objective}
          </InfoBlock>
        </div>
      </div>
      <div className='project-main-info__row'>
        <div className='project-main-info__col'>
          <InfoBlock label='Место проведения совещания:'>
            {Objective}
          </InfoBlock>
        </div>
        <div className='project-main-info__col'>
          <InfoBlock label='Периодичность совещания:'>
            {Objective}
          </InfoBlock>
        </div>
      </div>
      <div className='project-main-info__row'>
        <div className='project-main-info__col'>
          <InfoBlock label='Стоимость проекта(ориентировочно):'>
            {Objective}
          </InfoBlock>
        </div>
        <div className='project-main-info__col'>
          <InfoBlock label='Источник финансирования:'>
            {Objective}
          </InfoBlock>
        </div>
      </div>
      <div className='project-main-info__row'>
        <div className='project-main-info__col'>
          <InfoBlock label='Экономический эффект:'>
            {Objective}
          </InfoBlock>
        </div>
        <div className='project-main-info__col'>
          <InfoBlock label='Заказчик:'>
            {Objective}
          </InfoBlock>
        </div>
      </div>
      <div className='project-main-info__row'>
        <div className='project-main-info__col'>
          <InfoBlock label='Куратор:'>
            {Objective}
          </InfoBlock>
        </div>
        <div className='project-main-info__col'>
          <InfoBlock label='Контактное лицо заказчика:'>
            {Objective}
          </InfoBlock>
        </div>
      </div>
      <div className='project-main-info__row'>
        <div className='project-main-info__col'>
          <InfoBlock label='Исполнители:'>
            {Objective}
          </InfoBlock>
        </div>
        <div className='project-main-info__col'>
          <InfoBlock label='Контролер проекта:'>
            {Objective}
          </InfoBlock>
          <InfoBlock label='Руководитель:'>
            {Objective}
          </InfoBlock>
        </div>
      </div>
    </div>
  )
}

const InfoBlock = (props) => {
  const {
    label,
    children
  } = props
  return (
    <div className='info-block'>
      <p className='info-block__label'>{label}</p>
      <div className='info-block__content'>
        {children}
      </div>
    </div>
  )
}

export default ProjectMainInfo