/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid,react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */

import React from 'react';
import ReactSelect from 'react-select';
import { connect } from 'react-redux';

const customStyles = {
    singleValue: (provided) => ({
        ...provided,
        backgroundColor: '#e6e6e6',
        borderRadius: '19px',
        color: '#1b7176',
        padding: '3px 10px',
        fontSize: '14px',
    }),
    multiValue: (provided) => ({
        ...provided,
        backgroundColor: '#e6e6e6',
        borderRadius: '19px',
        color: '#1b7176',
        padding: '3px 10px',
        fontSize: '14px',
    }),
    multiValueLabel: (provided) => ({
        ...provided,
        color: '#1b7176',
        fontSize: '14px',
    }),
    valueContainer: (provided) => ({
        ...provided,
        overflow: 'scroll',
        flexWrap: 'nowrap',
    }),
    clearIndicator: (provided) => ({
        ...provided,
        display: 'none',
    }),
};

const UserSelect = (props) => {
    const {
        users, onChangeSelectedUser, multiUsers, selectedUsers,
    } = props;

    const prepareUsers = (users) => users.map((user) => ({
        label: user.Name,
        value: user.Id,
    }));

    const onChange = (selectedUser) => {
        if (multiUsers) {
            onChangeSelectedUser(selectedUser.map((userItem) => users.find((user) => user.Id === userItem.value)));
        } else {
            onChangeSelectedUser([
                users.find((user) => user.Id === selectedUser.value),
            ]);
        }
    };

    return (
        <ReactSelect
            value={selectedUsers ? prepareUsers(selectedUsers) : []}
            onChange={onChange}
            styles={customStyles}
            isMulti={multiUsers}
            options={users ? prepareUsers(users) : []}
            placeholder="Выбрать..."
        />
    );
};

const mapStateToProps = ({ users, usersDataState }) => ({
    users,
    usersDataState,
});

export default connect(mapStateToProps, null)(UserSelect);
