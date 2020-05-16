import React, { Component } from 'react';
import Intro from './main/Intro';
import About from './main/About';
import Use from './main/Use';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Intro></Intro>
                <About></About>
                <Use></Use>
            </div>
        )
    }
}
