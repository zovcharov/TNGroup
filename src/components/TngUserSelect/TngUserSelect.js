import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import {
    usersFetch,
    usersUpdate
} from '../../redux/actions';
import {fetchUsers} from "../../redux/fetchers";

import './TngUserSelect.scss';

let needActivateFocus = true;

const TngUserSelect = ({usersFetch, usersUpdate, users, usersDataState, onChangeSelectedUser, multiUsers}) => {
    const [isDropdownOpen, toggleDropDown] = useState(false);
    const [selectedUsersIds, onChangeSelectedUsersIds] = useState([]);

    const onInputBlur = useCallback((event) => {
        setTimeout(() => {
            needActivateFocus && toggleDropDown(false);
            needActivateFocus = true;
        }, 100)
    }, [toggleDropDown]);

    const onSelectUser = (userId) => {
        if (selectedUsersIds.indexOf(userId) === -1) {
            if (multiUsers) {
                onChangeSelectedUsersIds(selectedUsersIds.slice().push(userId));
            } else {
                onChangeSelectedUsersIds([userId])
            }

            onChangeSelectedUser && onChangeSelectedUser(selectedUsersIds);
        }
    };

    const onRemoveUser = (userId) => {
        needActivateFocus = false;
        onChangeSelectedUsersIds(selectedUsersIds.filter(item => item !== userId));
    };

    const onAddUserButton = () => {
        toggleDropDown(true);
    };

    const renderSelectedUsers = () => selectedUsersIds.map(item => {
        const user = users.find(user => user.Id = item);
        return (
            <span className="user-select__selected-user" key={item}>
                {user.UserName}
                <span className="user-select__remove-user" onClick={() => onRemoveUser(item)} />
            </span>
        )
    });

    const getUsersList = () => users.map(item => (
        <div className="user-select__item" key={item.Id} onClick={() => {onSelectUser(item.Id)}}>
            { item.UserName }
        </div>
    ));

    return (
        <div className="user-select">
            <div
                className={`user-select__input ${isDropdownOpen ? 'active' : ''}`}
                tabIndex="0"
                onBlur={onInputBlur}
            >
                { renderSelectedUsers() }
                <span className="user-select__add-user-button" onClick={onAddUserButton} />
            </div>
            {
                isDropdownOpen &&
                <div className="user-select__dropdown">
                    { getUsersList() }
                </div>
            }
        </div>
    )
};

const mapStateToProps = ({ users, usersDataState }) => ({
    users,
    usersDataState
});

const mapDispatchToProps = (dispatch) => ({
    usersFetch: () => dispatch(usersFetch()),
    usersUpdate: (data) => dispatch(usersUpdate(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(TngUserSelect);
