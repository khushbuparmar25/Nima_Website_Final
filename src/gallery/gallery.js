import React, { Component } from 'react';
import "./App.css";
import Folder from "./Components/Folders";
import Grid from "./Components/Grid";

export default class gallery extends Component {
    render() {
        return (
            <>
                <Folder/>
                <Grid />
            </>
        )
    }
}
