import React, { Component } from 'react';
import Imp_notice from './Components/Imp_notice'
import Header from './Components/Header'
import Slider from './Components/Slider'
import Cards from './Components/Cards'

export default class elections extends Component {
    render() {
        return (
            <>
                <Header/>
                <Slider />
                <Imp_notice/>
                <Cards />
            </>
        )
    }
}
