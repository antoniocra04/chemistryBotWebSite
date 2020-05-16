import React, { Component } from 'react'
import Logo from './images/logo.svg'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from './Main';
import menu from './images/menu.svg'

export default class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isHide: true
        }

        this.menu = this.menu.bind(this);
    }
    

    menu(){
        if(this.state.isHide){
            this.refs.menu.style.visibility = "visible";
            this.refs.menu.style.opacity = 1;
            this.setState({
                isHide: false
            })
        }else{
            this.refs.menu.style.opacity = 0;
            this.refs.menu.style.visibility = "hidden";
            this.setState({
                isHide: true
            })
        }
    }

    render() {
        return (
            <Router>
                <div className='header'>
                    <div className="header__inner">
                        <div className="header__item">
                            <img src={Logo} alt="" className="header__logo"/>
                        </div>
                        <div className="header__item">
                            <Link href="/" className="header__link">Главная</Link>
                            <a href="" className="header__link">О нас</a>
                            <a href="" className="header__link">Документация</a>
                            <a href="" className="header__btn">Начать</a>
                            <img src={menu} className='menu' onClick={this.menu} />
                        </div>
                    </div>
                    <div ref='menu' className="header__menu">
                        <Link href="/" className="header__m_link">Главная</Link>
                        <a href="" className="header__m_link">О нас</a>
                        <a href="" className="header__m_link">Документация</a>
                    </div>
                </div>

                <Switch>
                    <Route path='/'>
                        <Main></Main>
                    </Route>
                </Switch>

                <div className='footer'>
                    <p className="footer__title">Навигация</p>
                    <Link href="/" className="footer__link">Главная</Link>
                    <a href="" className="footer__link">Документация</a>
                </div>
            </Router>
        )
    }
}
