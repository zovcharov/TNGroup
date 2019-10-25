import React, { useEffect ,useState, useCallback } from 'react';
import { connect } from 'react-redux';

import './TngUserSelect.scss';

let needActivateFocus = true;

const TngUserSelectDropdown = ({ users, onSelectUser }) => {

    if (!users.length) {
        return null;
    }

    const getUsersList = () => {
        if (users && users.length) {
            return users.map(item => (
                <li
                    className="user-select__item"
                    key={`user-dropdown-${item.Login}`}
                    onClick={() => onSelectUser(item.Id)}
                >
                    { item.UserName }
                </li>
            ))
        }
    };

    return (
        <ul className="user-select__dropdown">
            { getUsersList() }
        </ul>
    )
};

const TngUserSelect = ({users, usersDataState, onChangeSelectedUser, multiUsers, selectedUsers}) => {
    const [isDropdownOpen, toggleDropDown] = useState(false);
    const [selectedUsersIds, onChangeSelectedUsersIds] = useState([]);

    const onInputBlur = useCallback((event) => {
        setTimeout(() => {
            needActivateFocus && toggleDropDown(false);
            needActivateFocus = true;
        }, 200)
    }, [toggleDropDown]);

    const onSelectUser = (userId) => {
        let newSelectedValues = selectedUsersIds.slice();

        if (selectedUsersIds.indexOf(userId) === -1) {
            if (multiUsers) {
                newSelectedValues.push(userId)
                onChangeSelectedUsersIds(newSelectedValues);
            } else {
                newSelectedValues = [userId];
                onChangeSelectedUsersIds(newSelectedValues)
            }

            onChangeSelectedUser && onChangeSelectedUser(newSelectedValues);
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
        const user = users.find(user => user.Id === item);

        return (
            <span className="user-select__selected-user" key={item}>
                {user.UserName}
                <span className="user-select__remove-user" onClick={() => onRemoveUser(item)} />
            </span>
        )
    });

    useEffect(() => {
        if (selectedUsers && selectedUsers.length) {
            onChangeSelectedUsersIds(selectedUsers.map(user => user.EmployeeId))
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
                isDropdownOpen &&
                <TngUserSelectDropdown
                    users={users}
                    onSelectUser={onSelectUser}
                />
            }
        </div>
    )
};

const mapStateToProps = ({ users, usersDataState }) => ({
    users,
    usersDataState
});

export default connect(mapStateToProps, null)(TngUserSelect);
