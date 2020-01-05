/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Table from '../../components/Table/Table';
import { userDocumentsFetch, userDocumentsUpdate } from '../../redux/actions';
import { fetchUserDocuments } from '../../redux/fetchers';
import Container from '../../components/Container/Container';
import './UserDocumentsPage.scss';

const USER_DOCUMENTS_PAGE_COLUMNS = [
    {
        label: 'Название',
        name: 'namedLink',
        width: '30%',
        cell: (item) => <a className="document__name" href={item.link}>{item.name}</a>,
    },
    {
        label: 'Автор',
        name: 'Author',
        width: '30%',
    },
    {
        label: 'Описание',
        name: 'Description',
        width: '40%',
    },
];

export const prepareUserDocuments = (data) => data && data.map((item) => ({
    ...item,
    namedLink: {
        name: item.Name,
        link: item.LocalPath,
    },
}));

const UserDocumentsPage = (props) => {
    const {
        userDocuments,
        userDocumentsDataStatus,
        userDocumentsFetch,
        userDocumentsUpdate,
    } = props;

    useEffect(() => {
        if (userDocumentsDataStatus === 'pending') {
            fetchUserDocuments(userDocumentsFetch, userDocumentsUpdate);
        }
    });
    return (
        <div>
            <div className="document__title">Документы:</div>
            <Container>
                <Table columns={USER_DOCUMENTS_PAGE_COLUMNS} items={prepareUserDocuments(userDocuments)} />
            </Container>
        </div>
    );
};

const mapStateToProps = (state) => ({
    userDocuments: state.userDocuments,
    userDocumentsDataStatus: state.userDocumentsDataStatus,
});

const mapDispatchToProps = (dispatch) => ({
    userDocumentsFetch: () => dispatch(userDocumentsFetch()),
    userDocumentsUpdate: (data) => dispatch(userDocumentsUpdate(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDocumentsPage);
