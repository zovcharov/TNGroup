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

export const COLUMNS_AGREEMENTS = [
    {
        label: 'Название',
        name: 'Name',
        width: '25%',
    },
    {
        label: 'Статус',
        name: 'Status',
        width: '25%',
    },
    {
        label: 'Тип документа',
        name: 'DocumentType',
        width: '25%',
    },
    {
        label: 'Обновлено',
        name: 'LastDateUpdate',
        width: '25%',
        cell: (item) => formatDateToString(item),
    },
];

const Agreements = ({ agreements, canAddAgreement = false }) => (
    <>
        <div className="agreements__title">Согласования:</div>
        <div className="agreements">
            <Table columns={COLUMNS_AGREEMENTS} items={agreements} />
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
