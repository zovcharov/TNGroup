/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid,react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, { useState } from 'react';
import Table from '../Table/Table';
import PersonItem from '../PersonItem/PersonItem';

import './Agreements.scss';
import AgreementsButtons from './AgreementsButtons';
import { formatDateToString } from '../../helpers/helpers';

import { makeAgreementDecision } from '../../redux/fetchers';

const onAcceptAgreement = (agreementId, projectId) => makeAgreementDecision({
    AgreementId: agreementId,
    Result: 1,
}, projectId);

const onDeclineAgreement = (agreementId, projectId) => makeAgreementDecision({
    AgreementId: agreementId,
    Result: 2,
}, projectId);

export const COLUMNS_AGREEMENTS = [
    {
        label: 'ИД документа',
        name: 'documentId',
        width: '10%',
    },
    {
        label: 'Название',
        name: 'name',
        width: '35%',
    },
    {
        label: 'Результат',
        name: 'resultString',
        width: '25%',
    },
    {
        label: 'ИД проекта',
        name: 'projectId',
        width: '10%',
    },
    {
        label: 'Обновлено',
        name: 'lastDateUpdate',
        width: '15%',
        cell: (item) => formatDateToString(item),
    },
    {
        label: '',
        name: 'buttons',
        width: '5%',
        cell: (item) => (
            <AgreementsButtons
                onAcceptAgreement={onAcceptAgreement}
                onDeclineAgreement={onDeclineAgreement}
                agreementId={item.id}
                projectId={item.projectId}
                performanceList={item.performanceList}
                userId={item.userId}
                updateAgreementsList={item.updateAgreementsList}
            />
        ),
    },
];

const prepareAgreements = (agreements, userId, updateAgreementsList) => agreements.map((agreement) => ({
    ...agreement,
    buttons: {
        id: agreement.id,
        projectId: agreement.projectId,
        performanceList: agreement.performanceList,
        updateAgreementsList,
        userId,
    },
}));

const Agreement = ({ agreement, userId, updateAgreementsList }) => {
    const [isOpen, toggleIsOpen] = useState(false);

    const onOpenInfo = () => toggleIsOpen(true);
    const onCloseInfo = () => toggleIsOpen(false);

    // Удаляем одинаковых участникоов согласования
    const prepareParticipantsList = (participants) => participants.reduce((prevVal, curParticipant) => {
        const findParticipant = prevVal.find((participantItem) => {
            return participantItem.EmployeeId === curParticipant.ProjectUserRole.EmployeeId;
        });

        if (!findParticipant) {
            prevVal.push(curParticipant.ProjectUserRole);
        }

        return prevVal;
    }, []);

    const renderInfoToggler = () => {
        if (isOpen) {
            return (
                <div className="agreement-item__additional-info-button" onClick={onCloseInfo}>&uarr;</div>
            );
        }

        return (
            <div className="agreement-item__additional-info-button" onClick={onOpenInfo}>&darr;</div>
        );
    };

    const renderParticipants = () => {
        if (isOpen) {
            return (
                <div className="agreement-item__participants">
                    <h4 className="agreement-item__participants-title">Участники согласования:</h4>
                    <div className="agreement-item__participants-list">
                        {
                            prepareParticipantsList(agreement.performanceList).map((participant) => (
                                <PersonItem person={participant.Employee} singleString />
                            ))
                        }
                    </div>
                </div>
            );
        }

        return null;
    };

    return (
        <div className="agreement-item">
            <Table
                columns={COLUMNS_AGREEMENTS}
                items={prepareAgreements([agreement], userId, updateAgreementsList)}
            />
            {
                renderParticipants()
            }
            {
                renderInfoToggler()
            }
        </div>
    );
};

const Agreements = ({
    agreements, currentUserInfo, updateAgreementsList,
}) => (
    <>
        <div className="agreements__title">Согласования:</div>
        <div className="agreements">
            {
                agreements.map((agreement, index) => (
                    <Agreement
                        agreement={agreement}
                        userId={currentUserInfo.UserId}
                        updateAgreementsList={updateAgreementsList}
                    />
                ))
            }
        </div>
    </>
);

export default Agreements;
