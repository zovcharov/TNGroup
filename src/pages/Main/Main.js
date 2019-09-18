import React, {Component} from 'react';
import { Link } from 'react-router-dom'

const Main = () => (
    <React.Fragment>
        <Link to='/'>Home</Link>
        <br />
        <Link to='/about'>About</Link>
    </React.Fragment>
)

export default Main;