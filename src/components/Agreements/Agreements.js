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
import { formatDateToString } from '../../helpers/helpers';

import { makeAgreementDecision } from '../../redux/fetchers';

const onAcceptAgreement = (agreementId) => {
    makeAgreementDecision({
        Id: agreementId,
        Result: 1,
    });
};

const onDeclineAgreement = (agreementId) => {
    makeAgreementDecision({
        Id: agreementId,
        Result: 2,
    });
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
            <div className="agreement-decisions">
                <div
                    className="agreement-decisions__button agreement-decisions__button_type_accept"
                    onClick={() => onAcceptAgreement(item.id)}
                />
                <div
                    className="agreement-decisions__button agreement-decisions__button_type_decline"
                    onClick={() => onDeclineAgreement(item.id)}
                />
            </div>
        ),
    },
];

const prepareAgreements = (agreements) => agreements.map((argeement) => ({
    ...argeement,
    buttons: {
        id: argeement.id,
    },
}));

const Agreements = ({ agreements, canAddAgreement = false }) => (
    <>
        <div className="agreements__title">Согласования:</div>
        <div className="agreements">
            <Table columns={COLUMNS_AGREEMENTS} items={prepareAgreements(agreements)} />
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
