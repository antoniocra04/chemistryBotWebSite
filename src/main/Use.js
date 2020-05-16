import React, { Component } from 'react'

export default class Use extends Component {
    render() {
        return (
            <div className='use'>
                <div className="use__inner">
                    <div className="about__text_container">
                        <div className="text_container_left">
                            <p className="title">Использование</p>
                            <p className="subtitle">Как начать пользоватся <br></br> ботом химиком</p>
                        </div>
                        <div className="text__container_right">
                            <p className="text">Пользоватся ботом химиком очень просто, нужно <br></br> выполнить четыре шага и начать осваивать его</p>
                        </div>
                    </div>
                    <div className="line purple"></div>
                    <div className="use__cards">
                        <div className="use__card">
                            <p className="use__number">1</p>
                            <p className="use__card_text">Перейти в наше сообщество в вк</p>
                        </div>
                        <div className="use__card">
                            <p className="use__number">2</p>
                            <p className="use__card_text">Нажмите на кнопку “Начать”</p>
                        </div>
                        <div className="use__card">
                            <p className="use__number">3</p>
                            <p className="use__card_text">Ознакомтесь с документацией</p>
                        </div>
                        <div className="use__card">
                            <p className="use__number">4</p>
                            <p className="use__card_text">Используйте команды бота</p>
                        </div>
                    </div>
                    <a href="" className="use__btn">Группа в вк</a>
                </div>
            </div>
        )
    }
}
