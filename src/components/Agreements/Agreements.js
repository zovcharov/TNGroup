import React from 'react';
import Table from '../Table/Table';

import './Agreements.scss';
import DefaultButton from "../Buttons/DefaultButton/DefaultButton";
import {formatDateToString} from "../../helpers/helpers";

export const COLUMNS_AGREEMENTS = [
    {
        label: 'Название',
        name: 'Name',
        width: '25%'
    },
    {
        label: 'Статус',
        name: 'Status',
        width: '25%'
    },
    {
        label: 'Тип документа',
        name: 'DocumentType',
        width: '25%'
    },
    {
        label: 'Обновлено',
        name: 'LastDateUpdate',
        width: '25%',
        cell: (item) => {
            return formatDateToString(item)
        }
    }
]

const Agreements = ({ agreements }) => {
    return (
        <React.Fragment>
            <div className="agreements__title">Согласования:</div>
            <div className="agreements">
                <Table columns={COLUMNS_AGREEMENTS} items={agreements} />
                <div className="agreements__footer">
                    <DefaultButton>
                        <span>Добавить согласование</span>
                    </DefaultButton>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Agreements;
