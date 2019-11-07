import React, { useState, useEffect } from 'react';

import './UnplannedRiskModal.scss';

import TngInput from "../../TngInput/TngInput";
import DatePicker from '../../DatePicker/DatePicker';
import DefaultButton from '../../Buttons/DefaultButton/DefaultButton';
import SubmitButton from "../../Buttons/SubmitButton/SubmitButton";

import { saveUnplannedRisk } from '../../../redux/fetchers';

const UnplannedRiskModal = ({projectId, onClose, setLoading, ...props}) => {
    const [riskName, changeRiskName] = useState('');
    const [measuresResults, changeMeasuresResults] = useState('');
    const [eliminateMeasures, changeEliminateMeasures] = useState('');
    const [startDate, changeStartDate] = useState('');
    const [consequences, changeConsequences] = useState('');

    const onSubmitRisk = () => {
        const preparedData = {
            ProjectId: Number(projectId),
            MeasuresTakenToEliminateConsequences: eliminateMeasures,
            ResultsOfMeasuresTaken: measuresResults,
            Name: riskName,
            Date: startDate,
            Consequences: consequences,
        };

        setLoading && setLoading(true);
        saveUnplannedRisk(projectId, preparedData)
            .then(res => {
                onClose();
            })
            .finally(() => {
                setLoading && setLoading(false);
            })
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
                <div className="risk-eliminate-measures risk-modal__grid-item" >
                    <div className="risk-modal__label">Предпринятые меры по устранению последствий:</div>
                    <div className="risk-modal__input">
                        <TngInput multiline value={eliminateMeasures} changeValue={changeEliminateMeasures} />
                    </div>
                </div>
                <div className="risk-measures-results risk-modal__grid-item" >
                    <div className="risk-modal__label">Результаты предпринятых мер:</div>
                    <div className="risk-modal__input">
                        <TngInput multiline value={measuresResults} changeValue={changeMeasuresResults} />
                    </div>
                </div>
                <div className="risk-consequences risk-modal__grid-item" >
                    <div className="risk-modal__label">Наступившие последствия:</div>
                    <div className="risk-modal__input">
                        <TngInput value={consequences} changeValue={changeConsequences} />
                    </div>
                </div>
                <div className="risk-start-date risk-modal__grid-item" >
                    <div className="risk-modal__label">Дата события:</div>
                    <div className="risk-modal__input">
                        <DatePicker value={startDate} onDayChange={changeStartDate} />
                    </div>
                </div>
            </div>
            <div className="risk-modal__footer">
                <SubmitButton className="footer__button" onClick={onSubmitRisk}>
                    <span className="button__content">
                        Отправить на согласование
                    </span>
                </SubmitButton>
            </div>
        </div>
    )
}

export default UnplannedRiskModal;
