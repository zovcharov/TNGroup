/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */

import React, { useState, useEffect } from 'react';

import './UnplannedRiskModal.scss';

import TngInput from '../../TngInput/TngInput';
import DatePicker from '../../DatePicker/DatePicker';
import SubmitButton from '../../Buttons/SubmitButton/SubmitButton';

import { saveUnplannedRisk } from '../../../redux/fetchers';

const UnplannedRiskModal = ({
    projectId, onClose, setLoading, isEdit, riskProps, onUpdateRisk,
}) => {
    const [riskName, changeRiskName] = useState('');
    const [measuresResults, changeMeasuresResults] = useState('');
    const [eliminateMeasures, changeEliminateMeasures] = useState('');
    const [startDate, changeStartDate] = useState('');
    const [consequences, changeConsequences] = useState('');

    const prepareData = () => {
        if (isEdit) {
            return {
                ProjectId: Number(projectId),
                Name: riskName,
                Date: startDate,
                MeasuresTakenToEliminateConsequences: eliminateMeasures,
                ResultsOfMeasuresTaken: measuresResults,
                Consequences: consequences,
                Id: riskProps.Id,
            };
        }

        return {
            ProjectId: Number(projectId),
            Name: riskName,
            Date: startDate,
            MeasuresTakenToEliminateConsequences: eliminateMeasures,
            ResultsOfMeasuresTaken: measuresResults,
            Consequences: consequences,
        };
    };

    useEffect(() => {
        if (isEdit) {
            changeRiskName(riskProps.Name);
            changeMeasuresResults(riskProps.ResultsOfMeasuresTaken);
            changeEliminateMeasures(riskProps.MeasuresTakenToEliminateConsequences);
            changeStartDate(new Date(riskProps.Date));
            changeConsequences(riskProps.Consequences);
        }
    }, [isEdit, riskProps]);

    const onSubmitRisk = () => {
        const preparedData = prepareData();

        // eslint-disable-next-line no-unused-expressions
        setLoading && setLoading(true);
        saveUnplannedRisk(projectId, preparedData, isEdit)
            .then(() => {
                onClose();
            })
            .finally(() => {
                // eslint-disable-next-line no-unused-expressions
                setLoading && setLoading(false);
                // eslint-disable-next-line no-unused-expressions
                onUpdateRisk && onUpdateRisk();
            });
    };

    return (
        <div className="risk-modal">
            <div className="risk-modal__content">
                <div className="risk-name risk-modal__grid-item">
                    <div className="risk-modal__label">Название риска:</div>
                    <div className="risk-modal__input">
                        <TngInput value={riskName} changeValue={changeRiskName} />
                    </div>
                </div>
                <div className="risk-eliminate-measures risk-modal__grid-item">
                    <div className="risk-modal__label">Предпринятые меры по устранению последствий:</div>
                    <div className="risk-modal__input">
                        <TngInput multiline value={eliminateMeasures} changeValue={changeEliminateMeasures} />
                    </div>
                </div>
                <div className="risk-measures-results risk-modal__grid-item">
                    <div className="risk-modal__label">Результаты предпринятых мер:</div>
                    <div className="risk-modal__input">
                        <TngInput multiline value={measuresResults} changeValue={changeMeasuresResults} />
                    </div>
                </div>
                <div className="risk-consequences risk-modal__grid-item">
                    <div className="risk-modal__label">Наступившие последствия:</div>
                    <div className="risk-modal__input">
                        <TngInput value={consequences} changeValue={changeConsequences} />
                    </div>
                </div>
                <div className="risk-start-date risk-modal__grid-item">
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
    );
};

export default UnplannedRiskModal;
