/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */

import React, { useState } from 'react';

import './PlannedRiskModal.scss';

import TngInput from '../../TngInput/TngInput';
import DatePicker from '../../DatePicker/DatePicker';
import SubmitButton from '../../Buttons/SubmitButton/SubmitButton';

import { savePlannedRisk } from '../../../redux/fetchers';

const PlannedRiskModal = ({
    projectId, onClose, setLoading,
}) => {
    const [riskName, changeRiskName] = useState('');
    const [prevention, changePrevention] = useState('');
    const [responsePlan, changeResponsePlan] = useState('');
    const [startDate, changeStartDate] = useState('');
    const [preventMeasures, changePreventMeasures] = useState('');
    const [measuresResults, changeMeasuresResults] = useState('');
    const [measure, changeMeasure] = useState('');
    const [consequences, changeConsequences] = useState('');

    const onSubmitRisk = () => {
        const preparedData = {
            ProjectId: Number(projectId),
            PreventionPlan: prevention,
            ResponsePlan: responsePlan,
            Measure: measure,
            MeasuresTakenToPrevent: preventMeasures,
            ResultsOfPreventionMeasures: measuresResults,
            Name: riskName,
            Date: startDate,
            Consequences: consequences,
        };

        // eslint-disable-next-line no-unused-expressions
        setLoading && setLoading(true);
        savePlannedRisk(projectId, preparedData)
            .then(() => {
                onClose();
            })
            .finally(() => {
                // eslint-disable-next-line no-unused-expressions
                setLoading && setLoading(false);
            });
    };

    return (
        <div className="planned-risk-modal">
            <div className="planned-risk-modal__content">
                <div className="planned-risk-name risk-modal__grid-item">
                    <div className="planned-risk-modal__label">Название риска:</div>
                    <div className="planned-risk-modal__input">
                        <TngInput value={riskName} changeValue={changeRiskName} />
                    </div>
                </div>
                <div className="planned-risk-prevention risk-modal__grid-item">
                    <div className="planned-risk-modal__label">План предотвращения:</div>
                    <div className="planned-risk-modal__input">
                        <TngInput multiline value={prevention} changeValue={changePrevention} />
                    </div>
                </div>
                <div className="planned-risk-response-plan risk-modal__grid-item">
                    <div className="planned-risk-modal__label">План реагирования при возникновении:</div>
                    <div className="planned-risk-modal__input">
                        <TngInput multiline value={responsePlan} changeValue={changeResponsePlan} />
                    </div>
                </div>
                <div className="planned-risk-prevent-measures risk-modal__grid-item">
                    <div className="planned-risk-modal__label">Педпринятые меры для предупреждения риска:</div>
                    <div className="planned-risk-modal__input">
                        <TngInput multiline value={preventMeasures} changeValue={changePreventMeasures} />
                    </div>
                </div>
                <div className="planned-risk-measures-results risk-modal__grid-item">
                    <div className="planned-risk-modal__label">Результаты мер по предупреждению риска:</div>
                    <div className="planned-risk-modal__input">
                        <TngInput multiline value={measuresResults} changeValue={changeMeasuresResults} />
                    </div>
                </div>
                <div className="planned-risk-consequences risk-modal__grid-item">
                    <div className="planned-risk-modal__label">Наступившие последствия:</div>
                    <div className="planned-risk-modal__input">
                        <TngInput value={consequences} changeValue={changeConsequences} />
                    </div>
                </div>
                <div className="planned-risk-start-date risk-modal__grid-item">
                    <div className="planned-risk-modal__label">Дата события:</div>
                    <div className="planned-risk-modal__input">
                        <DatePicker value={startDate} onDayChange={changeStartDate} />
                    </div>
                </div>
                <div className="planned-risk-measure risk-modal__grid-item">
                    <div className="planned-risk-modal__label">Мера риска:</div>
                    <div className="planned-risk-modal__input">
                        <TngInput value={measure} changeValue={changeMeasure} />
                    </div>
                </div>
            </div>
            <div className="planned-risk-modal__footer">
                <SubmitButton className="footer__button" onClick={onSubmitRisk}>
                    <span className="button__content">
                        Отправить на согласование
                    </span>
                </SubmitButton>
            </div>
        </div>
    );
};

export default PlannedRiskModal;
