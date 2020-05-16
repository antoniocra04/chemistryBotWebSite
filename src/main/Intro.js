import React, { Component } from 'react';
import illustration from '../images/illustration.png'
import part2 from '../images/part2.png';
import part1 from '../images/part1.png';
import arrow from '../images/arrow.svg';

export default class Intro extends Component {
    render() {
        return (
            <div className='intro'>
                <div className="intro__decorate_top">
                    <img src={part2} alt="" className="intro__decorate"/>
                </div>
                <div className="intro__inner">
                    <div className="intro__text_container">
                        <p className="title">Бот химик</p>
                        <p className="subtitle">Ваш помошник <br></br> в изучении химии</p>
                        <p className="text">Бот химик это бот который может помочь вам в изучении <br></br> химии. У нашего бота нет аналогов и мы предостовляем <br></br> качественные услуги для любых клиентов бесплатно</p>
                        <a href="" className="intro__btn">Начать</a>
                        <img src={arrow} alt="" className="intro__img_btn"/>
                    </div>
                    <img src={illustration} alt="" className="intro__img"/>
                </div>
                <div className="intro__decorate_bottom">
                    <img src={part1} alt="" className="intro__decorate"/>
                </div>
            </div>
        )
    }
}
