import React from 'react';
import { Link } from 'react-router-dom';
import { RoutesEnum } from '../../const/routes';
import Background from '../Background/Background';
import './header.scss';

export default function Header() {
    return <>
        <div className='header'>
            <div>
                <Link to={RoutesEnum.Home}>
                    <h1 className='logo'>HDparadise</h1>
                </Link>
            </div>
            <menu>
                <ul className='menu-list'>
                    <Link to={RoutesEnum.Films}><li>Фильмы</li></Link>
                    <Link to={RoutesEnum.Serials}><li>Сериалы</li></Link>
                    <Link to={RoutesEnum.Cartoons}><li>Мультики</li></Link>
                </ul>
            </menu>
            <Link to={RoutesEnum.Registration} className='registration'>
                    <span>Иконка авторизации</span>
            </Link>
        </div>
        <Background />
    </>
}
