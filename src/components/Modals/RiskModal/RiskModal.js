import React, { useState, useEffect } from 'react';

import './RiskModal.scss';

import TngInput from "../../TngInput/TngInput";
import DatePicker from '../../DatePicker/DatePicker';
import TngSelect from '../../TngSelect/TngSelect';
import TngUserSelect from '../../TngUserSelect/TngUserSelect';
import DefaultButton from '../../Buttons/DefaultButton/DefaultButton';
import SubmitButton from "../../Buttons/SubmitButton/SubmitButton";

const FILES_MOCK = ['Отчет о предыдущем проекте.pdf', 'Договор подряда.docx', 'Внутренний регламент выполнения задач.pptx', 'Акт приема работ.pdf'];

const getFilesList = () => FILES_MOCK.map((file, index) => (
    <a className="file-item" href="#" key={`risk-file-${index}`}>{file}</a>
));

const RISK_TYPES = [
    {
        label: 'запланированный',
        value: 'planned'
    }, {
        label: 'незапланированный',
        value: 'unplanned'
    }
];

const RiskModal = (props) => {
    const [riskName, changeRiskName] = useState('');
    const [prevention, changePrevention] = useState('');
    const [executor, changeExecutor] = useState([]);
    const [startDate, changeStartDate] = useState('');
    const [measure, changeMeasure] = useState('');
    const [riskTasks, changeRiskTasks] = useState('');
    const [riskType, changeRiskType] = useState('');

    const onChangeRiskType = (riskItem) => {
        changeRiskType(riskItem.value);
    };

    return (
        <div className="risk-modal">
            <div className="risk-modal__content">
                <div className="risk-name risk-modal__grid-item" >
                    <div className="risk-modal__label">Название риска:</div>
                    <div className="risk-modal__input">
                        <TngInput value={riskName} changeValue={changeRiskName} />
                    </div>
                </div>
                <div className="risk-executor risk-modal__grid-item" >
                    <div className="risk-modal__label">Исполнитель:</div>
                    <div className="risk-modal__input">
                        <TngUserSelect onChangeSelectedUser={changeExecutor} selectedUsers={executor} />
                    </div>
                </div>
                <div className="risk-start-date risk-modal__grid-item" >
                    <div className="risk-modal__label">Дата события:</div>
                    <div className="risk-modal__input">
                        <DatePicker value={startDate} onDayChange={changeStartDate} />
                    </div>
                </div>
                <div className="risk-measure risk-modal__grid-item" >
                    <div className="risk-modal__label">Мера риска:</div>
                    <div className="risk-modal__input">
                        <TngInput value={measure} changeValue={changeMeasure} />
                    </div>
                </div>
                <div className="risk-prevention risk-modal__grid-item" >
                    <div className="risk-modal__label">План предотвращения:</div>
                    <div className="risk-modal__input">
                        <TngInput multiline value={prevention} changeValue={changePrevention} />
                    </div>
                </div>
                <div className="risk-tasks risk-modal__grid-item" >
                    <div className="risk-modal__label">Задачи:</div>
                    <div className="risk-modal__input">
                        <TngInput value={riskTasks} changeValue={changeRiskTasks} />
                    </div>
                </div>
                <div className="risk-status risk-modal__grid-item" >
                    <div className="risk-modal__label">Статус риска:</div>
                    <div className="risk-modal__input">
                        <TngSelect items={RISK_TYPES} onChange={onChangeRiskType} />
                    </div>
                </div>
                <div className="risk-add-files risk-modal__grid-item" >
                    <DefaultButton className="add-risk-files-button">
                        <span>Прикрепить файлы</span>
                    </DefaultButton>
                </div>
            </div>
            <div className="risk-files task-modal__grid-item">
                <div className="risk-files__title">Прикреплённые файлы:</div>
                <div className="risk-files__content">
                    <div className="risk-files__files-list">
                        { getFilesList() }
                    </div>
                </div>
            </div>
            <div className="risk-modal__footer">
                <SubmitButton className="footer__button" onClick={() => {}}>
                    <span className="button__content">
                        Отправить на согласование
                    </span>
                </SubmitButton>
            </div>
        </div>
    )
}

export default RiskModal;
