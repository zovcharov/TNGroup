import React from 'react'
import { connect } from 'react-redux'
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";

const ProfilePage = (props) => {
    const {
        users = []
    } = props
    return (
        <ProfileInfo info={users[0]} />
    )
}

const mapStateToProps = ({ users }) => ({
    users,
})

export default connect(mapStateToProps, {})(ProfilePage)
