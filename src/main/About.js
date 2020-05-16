import React, { Component } from 'react';
import info from '../images/info.svg';
import calc from '../images/calc.svg';
import fx from '../images/fx.svg';
import table from '../images/table.svg';

export default class About extends Component {
    render() {
        return (
            <div className='about'>
                <div className="about__inner">
                    <div className="about__text_container">
                        <div className="text_container_left">
                            <p className="title white">О нас</p>
                            <p className="subtitle white">Функционал нашего <br></br> бота</p>
                        </div>
                        <div className="text__container_right">
                            <p className="text white">Мы посторались сделать бота химика максимально полезным <br></br> он включает в себя множество команд которые помогут вам.</p>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="about__cards">
                        <div className="about__card">
                            <img src={info} alt="" className="about__card_img"/>
                            <p className="about__card_text">Бот может показать вам информацию о любом элементе таблици Менделеева, а именно название, относительную атомную массу, <br></br> атомный номер и тд. </p>
                        </div>
                        <div className="about__card">
                            <img src={calc} alt="" className="about__card_img"/>
                            <p className="about__card_text">С помощью бота химика вы сможете решить любое химическое уравнение, а также вы сможете сбалансировать уже решенное <br></br> химическое уравнение </p>
                        </div>
                        <div className="about__card">
                            <img src={table} alt="" className="about__card_img"/>
                            <p className="about__card_text">Так как у бота химика есть химическая таблица растворимости ,введя и отправив нужные вам элементы вы можете узнать растворимы <br></br> они или нет. </p>
                        </div>
                        <div className="about__card">
                            <img src={fx} alt="" className="about__card_img"/>
                            <p className="about__card_text">Еще у бота химика есть множество разных небольших но очень полезных функций с помощью которых вы можете вспомнить забытый <br></br> материал </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
