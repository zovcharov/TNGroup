/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid,react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react';
import Table from '../Table/Table';

import './Agreements.scss';
import DefaultButton from '../Buttons/DefaultButton/DefaultButton';
import AgreementsButtons from './AgreementsButtons';
import { formatDateToString } from '../../helpers/helpers';

import { makeAgreementDecision } from '../../redux/fetchers';

const onAcceptAgreement = (agreementId, projectId) => {
    return makeAgreementDecision({
        AgreementId: agreementId,
        Result: 1,
    }, projectId);
};

const onDeclineAgreement = (agreementId, projectId) => {
    return makeAgreementDecision({
        AgreementId: agreementId,
        Result: 2,
    }, projectId);
};

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

const Agreements = ({
    agreements, canAddAgreement = false, currentUserInfo, updateAgreementsList,
}) => (
    <>
        <div className="agreements__title">Согласования:</div>
        <div className="agreements">
            <Table
                columns={COLUMNS_AGREEMENTS}
                items={prepareAgreements(agreements, currentUserInfo.UserId, updateAgreementsList)}
            />
            {
                canAddAgreement
                    && (
                        <div className="agreements__footer">
                            <DefaultButton>
                                <span>Добавить согласование</span>
                            </DefaultButton>
                        </div>
                    )
            }
        </div>
    </>
);

export default Agreements;
