import React, { useState } from 'react';

import Container from '../Container/Container';

import './Risk.scss';
import PlannedRiskModalContainer from '../Modals/PlannedRiskModal/PlannedRiskModal.container';
import { formatDateToString } from '../../helpers/helpers';

const RiskInfoItem = ({ children, label }) => {
    if (children) {
        return (
            <div className="risk-info-item">
                <h3 className="risk-info-item__title">
                    {label}
                </h3>
                <div className="risk-info-item__content">
                    {children}
                </div>
            </div>
        );
    }

    return (
        <div className="risk-info-item">
            <h3 className="risk-info-item__title">
                {label}
            </h3>
            <div className="risk-info-item__content_empty" />
        </div>
    );
};

const Risk = (props) => {
    const {
        Id,
        Consequences,
        Date,
        Measure,
        PreventionPlan,
        ResponsePlan,
        Status,
        MeasuresTakenToPrevent,
        ResultsOfPreventionMeasures,
        ProjectId,
        Name,
        StatusText,
        canUserEditAndDeleteRisk,
        type,
        onUpdateRisk,
    } = props;
    const [riskModalOpen, toggleRiskModalOpen] = useState(false);

    const onOpenRiskModal = () => toggleRiskModalOpen(true);
    const onCloseRiskModal = () => toggleRiskModalOpen(false);

    const prepareModalProps = () => ({
        Id,
        Consequences,
        Date,
        Measure,
        PreventionPlan,
        ResponsePlan,
        Status,
        MeasuresTakenToPrevent,
        ResultsOfPreventionMeasures,
        ProjectId,
        Name,
    });

    const renderModalContainer = () => {
        if (type === 'planned') {
            return (
                <PlannedRiskModalContainer
                    isOpen={riskModalOpen}
                    onClose={onCloseRiskModal}
                    projectId={ProjectId}
                    riskProps={prepareModalProps()}
                    onUpdateRisk={onUpdateRisk}
                    isEdit
                />
            );
        }
    };

    return (
        <div className="risk">
            {
                canUserEditAndDeleteRisk && (
                    <span className="risk__edit-btn" onClick={onOpenRiskModal} />
                )
            }
            <Container className="risk__container">
                <RiskInfoItem label="Имя риска">
                    {Name}
                </RiskInfoItem>
            </Container>
            <Container className="risk__container">
                <RiskInfoItem label="Риск ID">
                    {Id}
                </RiskInfoItem>
                <RiskInfoItem label="Дата">
                    {formatDateToString(Date)}
                </RiskInfoItem>
                <RiskInfoItem label="Статус">
                    {StatusText}
                </RiskInfoItem>
            </Container>
            <Container className="risk__container">
                <RiskInfoItem label="План предотвращения">
                    {PreventionPlan}
                </RiskInfoItem>
                <RiskInfoItem label="План реагирования при возникновении">
                    {ResponsePlan}
                </RiskInfoItem>
                <RiskInfoItem label="Мера риска">
                    {Measure}
                </RiskInfoItem>
            </Container>
            <Container className="risk__container">
                <RiskInfoItem label="Предпринятые меры для предупреждения риска">
                    {MeasuresTakenToPrevent}
                </RiskInfoItem>
                <RiskInfoItem label="Результаты мер по предупреждению риска">
                    {ResultsOfPreventionMeasures}
                </RiskInfoItem>
                <RiskInfoItem label="Наступившие последствия">
                    {Consequences}
                </RiskInfoItem>
            </Container>
            {
                renderModalContainer()
            }
        </div>
    );
};

export default Risk;
