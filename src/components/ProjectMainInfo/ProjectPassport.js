import React from 'react'
import PropTypes from 'prop-types'
import './ProjectPassport.scss'

import formatDateToString from '../../helpers/helpers'

const ProjectMainInfo = (props) => {
  const {
    Name,
    DateCreate,
    DateEnd,
    Objective,
    Description,
    ExpectedResult,
    ExpectedProduct,
    MeetingLocation,
    MeetingPeriodic,
    EstimatedСost,
    PlannedFinancingSource,
    ApproximateEconomicEffect,
    Customer
  } = props

  const createDate = formatDateToString(DateCreate)
  const endDate = formatDateToString(DateEnd)

  return (
    <div className='project-main-info'>
      <div className='project-main-info__row'>
        <InfoBlock label='Название проекта:'>
          <span className='project-main-info__label'>
            {Name}
          </span>
        </InfoBlock>
      </div>
      <div className='project-main-info__row'>
        <div className='project-main-info__col'>
          <InfoBlock label='Дата постановки:'>
            {createDate}
          </InfoBlock>
        </div>
        <div className='project-main-info__col'>
          <InfoBlock label='Дата окончания:'>
            {endDate}
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
          {Description}
        </InfoBlock>
      </div>
      <div className='project-main-info__row'>
        <div className='project-main-info__col'>
          <InfoBlock label='Ожидаемый результат:'>
            {ExpectedResult}
          </InfoBlock>
        </div>
        <div className='project-main-info__col'>
          <InfoBlock label='Ожидаемый продукт:'>
            {ExpectedProduct}
          </InfoBlock>
        </div>
      </div>
      <div className='project-main-info__row'>
        <div className='project-main-info__col'>
          <InfoBlock label='Место проведения совещания:'>
            {MeetingLocation}
          </InfoBlock>
        </div>
        <div className='project-main-info__col'>
          <InfoBlock label='Периодичность совещания:'>
            {MeetingPeriodic}
          </InfoBlock>
        </div>
      </div>
      <div className='project-main-info__row'>
        <div className='project-main-info__col'>
          <InfoBlock label='Стоимость проекта(ориентировочно):'>
            {EstimatedСost}
          </InfoBlock>
        </div>
        <div className='project-main-info__col'>
          <InfoBlock label='Источник финансирования:'>
            {PlannedFinancingSource}
          </InfoBlock>
        </div>
      </div>
      <div className='project-main-info__row'>
        <div className='project-main-info__col'>
          <InfoBlock label='Экономический эффект:'>
            {ApproximateEconomicEffect}
          </InfoBlock>
        </div>
        <div className='project-main-info__col'>
          <InfoBlock label='Заказчик:'>
            {Customer}
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