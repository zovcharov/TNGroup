/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */

import React, { useState, useEffect } from 'react';
import ReactSelect from 'react-select';

import './PlannedRiskModal.scss';

import TngInput from '../../TngInput/TngInput';
import DatePicker from '../../DatePicker/DatePicker';
import SubmitButton from '../../Buttons/SubmitButton/SubmitButton';

import { savePlannedRisk } from '../../../redux/fetchers';

const RISK_STATUSES = [
    { value: 0, label: 'Риск не сработал' },
    { value: 1, label: 'Риск сработал' },
];

const PlannedRiskModal = ({
    projectId, onClose, setLoading, isEdit, riskProps, onUpdateRisk,
}) => {
    const [riskName, changeRiskName] = useState('');
    const [prevention, changePrevention] = useState('');
    const [responsePlan, changeResponsePlan] = useState('');
    const [startDate, changeStartDate] = useState('');
    const [preventMeasures, changePreventMeasures] = useState('');
    const [measuresResults, changeMeasuresResults] = useState('');
    const [measure, changeMeasure] = useState('');
    const [consequences, changeConsequences] = useState('');
    const [status, changeRiskStatus] = useState(RISK_STATUSES[0]);

    const prepareData = () => {
        if (isEdit) {
            return {
                ProjectId: Number(projectId),
                PreventionPlan: prevention,
                ResponsePlan: responsePlan,
                Measure: measure,
                MeasuresTakenToPrevent: preventMeasures,
                ResultsOfPreventionMeasures: measuresResults,
                Name: riskName,
                Date: startDate,
                Consequences: consequences,
                Status: status.value,
                Id: riskProps.Id,
            };
        }

        return {
            ProjectId: Number(projectId),
            PreventionPlan: prevention,
            ResponsePlan: responsePlan,
            Measure: measure,
            MeasuresTakenToPrevent: preventMeasures,
            ResultsOfPreventionMeasures: measuresResults,
            Name: riskName,
            Date: startDate,
            Consequences: consequences,
            Status: status.value,
        };
    };

    const onSubmitRisk = () => {
        const preparedData = prepareData();

        // eslint-disable-next-line no-unused-expressions
        setLoading && setLoading(true);
        savePlannedRisk(projectId, preparedData, isEdit)
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

    const onChangeRiskStatus = (status) => {
        changeRiskStatus(status);
    };

    useEffect(() => {
        if (isEdit) {
            changeRiskName(riskProps.Name);
            changePrevention(riskProps.PreventionPlan);
            changeResponsePlan(riskProps.ResponsePlan);
            changeStartDate(new Date(riskProps.Date));
            changePreventMeasures(riskProps.MeasuresTakenToPrevent);
            changeMeasuresResults(riskProps.ResultsOfPreventionMeasures);
            changeMeasure(riskProps.Measure);
            changeConsequences(riskProps.Consequences);
            changeRiskStatus(RISK_STATUSES.find((status) => status.value === riskProps.Status));
        }
    }, [isEdit, riskProps]);

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
                <div className="planned-risk-status risk-modal__grid-item">
                    <div className="planned-risk-modal__label">Статус риска:</div>
                    <div className="planned-risk-modal__input">
                        <ReactSelect options={RISK_STATUSES} onChange={onChangeRiskStatus} value={status} />
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
                        Сохранить
                    </span>
                </SubmitButton>
            </div>
        </div>
    );
};

export default PlannedRiskModal;
