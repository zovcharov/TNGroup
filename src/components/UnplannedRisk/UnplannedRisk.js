import React, { useState } from 'react';

import Container from '../Container/Container';

import './UnplannedRisk.scss';
import UnplannedRiskModal from '../Modals/UnplannedRiskModal/UnplannedRiskModal.container';
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

const UnplannedRisk = (props) => {
    const {
        Id,
        ProjectId,
        Name,
        Date,
        StatusText,
        MeasuresTakenToEliminateConsequences,
        ResultsOfMeasuresTaken,
        Consequences,
        canUserEditAndDeleteRisk,
        onUpdateRisk,
    } = props;
    const [riskModalOpen, toggleRiskModalOpen] = useState(false);

    const onOpenRiskModal = () => toggleRiskModalOpen(true);
    const onCloseRiskModal = () => toggleRiskModalOpen(false);

    const prepareModalProps = () => ({
        Id,
        ProjectId,
        Name,
        MeasuresTakenToEliminateConsequences,
        ResultsOfMeasuresTaken,
        Consequences,
        Date,
    });

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
                <RiskInfoItem label="Предпринятые меры по устранению последствий">
                    {MeasuresTakenToEliminateConsequences}
                </RiskInfoItem>
                <RiskInfoItem label="Результаты предпринятых мер">
                    {ResultsOfMeasuresTaken}
                </RiskInfoItem>
                <RiskInfoItem label="Наступившие последствия">
                    {Consequences}
                </RiskInfoItem>
            </Container>
            <UnplannedRiskModal
                isOpen={riskModalOpen}
                onClose={onCloseRiskModal}
                projectId={ProjectId}
                riskProps={prepareModalProps()}
                onUpdateRisk={onUpdateRisk}
                isEdit
            />
        </div>
    );
};

export default UnplannedRisk;
