import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Table from "../../components/Table/Table";
import {userDocumentsFetch, userDocumentsUpdate} from "../../redux/actions";
import {fetchUserDocuments} from "../../redux/fetchers";

const USER_DOCUMENTS_PAGE_COLUMNS = [

]

const UserDocumentsPage = (props) => {
    const {
        userDocuments,
        userDocumentsDataStatus,
        userDocumentsFetch,
        userDocumentsUpdate,
    } = props
    console.log(props)
    useEffect(() => {
        if (userDocumentsDataStatus === 'pending') {
            fetchUserDocuments(userDocumentsFetch, userDocumentsUpdate);
        }
    })
    return (
        <div>
            {/*<Table columns={} items={}/>*/}
        </div>
    );
}

const mapStateToProps = (state) => ({
    userDocuments: state.userDocuments,
    userDocumentsDataStatus: state.userDocumentsDataStatus,
});

const mapDispatchToProps = (dispatch) => ({
    userDocumentsFetch: () => dispatch(userDocumentsFetch()),
    userDocumentsUpdate: () => dispatch(userDocumentsUpdate()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDocumentsPage);
