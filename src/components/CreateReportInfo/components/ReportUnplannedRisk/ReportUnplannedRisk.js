/* eslint-disable jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */

import React, { useState } from 'react';
import { formatDateToString } from '../../../../helpers/helpers';

import './ReportUnplannedRisk.scss';
import UnplannedRiskModal from '../../../Modals/UnplannedRiskModal/UnplannedRiskModal.container';

const ReportUnplannedRisk = ({ riskInfo, projectId, onUpdateUnplannedRisks }) => {
    const [isOpen, toggleIsOpen] = useState(false);
    const [isRiskModalOpen, toggleIsRiskModalOpen] = useState(false);

    const onOpenRiskModal = () => toggleIsRiskModalOpen(true);
    const onCloseRiskModal = () => toggleIsRiskModalOpen(false);

    const onOpenInfo = () => toggleIsOpen(true);
    const onCloseInfo = () => toggleIsOpen(false);

    const renderInfoToggler = () => {
        if (isOpen) {
            return (
                <div className="report-risk__additional-info-button" onClick={onCloseInfo}>&uarr;</div>
            );
        }

        return (
            <div className="report-risk__additional-info-button" onClick={onOpenInfo}>&darr;</div>
        );
    };

    const renderAdditionalRiskInfo = () => {
        if (isOpen) {
            return (
                <>
                    <div className="report-risk__separator" />
                    <div className="report-risk__info-row report-risk__info-row_additional">
                        <span className="report-risk__info-title">Предпринятые меры по устранению последствий: </span>
                        {riskInfo.MeasuresTakenToEliminateConsequences}
                    </div>
                    <div className="report-risk__info-row report-risk__info-row_additional">
                        <span className="report-risk__info-title">Результаты предпринятых мер: </span>
                        {riskInfo.ResultsOfMeasuresTaken}
                    </div>
                    <div className="report-risk__info-row report-risk__info-row_additional">
                        <span className="report-risk__info-title">Наступившие последствия: </span>
                        {riskInfo.Consequences}
                    </div>
                </>
            );
        }

        return null;
    };

    return (
        <div className="report-risk">
            {
                riskInfo.CanUserEdit && (
                    <span className="report-risk__edit-btn" onClick={onOpenRiskModal} />
                )
            }
            <div className="report-risk__info">
                <div className="report-risk__info-row">
                    <div className="report-risk__info-item report-risk__info-item_type_id">
                        <div className="report-risk__info-title">Id</div>
                        <div className="report-risk__info-value">
                            {riskInfo.Id}
                        </div>
                    </div>
                    <div className="report-risk__info-item report-risk__info-item_type_name">
                        <div className="report-risk__info-title">Имя  риска</div>
                        <div className="report-risk__info-value">
                            {riskInfo.Name || 'Отсутствует'}
                        </div>
                    </div>
                    <div className="report-risk__info-item report-risk__info-item_type_date">
                        <div className="report-risk__info-title">Дата</div>
                        <div className="report-risk__info-value">
                            { formatDateToString(riskInfo.Date) }
                        </div>
                    </div>
                    <div className="report-risk__info-item report-risk__info-item_type_status">
                        <div className="report-risk__info-title">Статус</div>
                        <div className="report-risk__info-value">
                            {riskInfo.StatusText}
                        </div>
                    </div>
                </div>
                {
                    renderAdditionalRiskInfo()
                }
            </div>
            {
                renderInfoToggler()
            }
            {
                riskInfo.CanUserEdit && (
                    <UnplannedRiskModal
                        isOpen={isRiskModalOpen}
                        onClose={onCloseRiskModal}
                        projectId={projectId}
                        riskProps={riskInfo}
                        onUpdateRisk={onUpdateUnplannedRisks}
                        isEdit
                    />
                )
            }
        </div>
    );
};

export default ReportUnplannedRisk;
