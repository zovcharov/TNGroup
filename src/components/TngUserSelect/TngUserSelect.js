/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid,react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */

import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';

import './TngUserSelect.scss';

let needActivateFocus = true;

const TngUserSelectDropdown = ({ users, onSelectUser }) => {
    if (!users.length) {
        return null;
    }

    // eslint-disable-next-line consistent-return
    const getUsersList = () => {
        if (users && users.length) {
            return users.map((item) => (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
                <li
                    className="user-select__item"
                    key={`user-dropdown-${item.User.Login}`}
                    onClick={() => onSelectUser(item.Id)}
                >
                    { item.Name }
                </li>
            ));
        }
    };

    return (
        <ul className="user-select__dropdown">
            { getUsersList() }
        </ul>
    );
};

const TngUserSelect = ({
    users, onChangeSelectedUser, multiUsers, selectedUsers,
}) => {
    const [isDropdownOpen, toggleDropDown] = useState(false);
    const [selectedUsersIds, onChangeSelectedUsersIds] = useState([]);

    const onInputBlur = useCallback(() => {
        setTimeout(() => {
            // eslint-disable-next-line no-unused-expressions
            needActivateFocus && toggleDropDown(false);
            needActivateFocus = true;
        }, 200);
    }, [toggleDropDown]);

    const onSelectUser = (userId) => {
        let newSelectedValues = selectedUsersIds.slice();

        if (selectedUsersIds.indexOf(userId) === -1) {
            if (multiUsers) {
                newSelectedValues.push(userId);
                onChangeSelectedUsersIds(newSelectedValues);
            } else {
                newSelectedValues = [userId];
                onChangeSelectedUsersIds(newSelectedValues);
            }

            // eslint-disable-next-line no-unused-expressions
            onChangeSelectedUser && onChangeSelectedUser(newSelectedValues);
        }
    };

    const onRemoveUser = (userId) => {
        needActivateFocus = false;
        onChangeSelectedUsersIds(selectedUsersIds.filter((item) => item !== userId));
    };

    const onAddUserButton = () => {
        toggleDropDown(true);
    };

    const renderSelectedUsers = () => selectedUsersIds.map((item) => {
        const user = users.find((user) => user.Id === item);
        return (
            <span className="user-select__selected-user" key={item}>
                {user.Name}
                <span className="user-select__remove-user" onClick={() => onRemoveUser(item)} />
            </span>
        );
    });

    useEffect(() => {
        if (selectedUsers && selectedUsers.length) {
            // TODO: Придумать механизм общей работы при создании и редактировании с пользователями
            // eslint-disable-next-line no-nested-ternary
            onChangeSelectedUsersIds(selectedUsers.map((user) => (typeof user === 'number' ? user : user.EmployeeId ? user.EmployeeId : 0)));
        }
    }, [selectedUsers]);

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
                isDropdownOpen
                && (
                    <TngUserSelectDropdown
                        users={users}
                        onSelectUser={onSelectUser}
                    />
                )
            }
        </div>
    );
};

const mapStateToProps = ({ users, usersDataState }) => ({
    users,
    usersDataState,
});

export default connect(mapStateToProps, null)(TngUserSelect);
