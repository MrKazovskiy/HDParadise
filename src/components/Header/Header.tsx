import React from 'react';
import { Link } from 'react-router-dom';
import { RoutesEnum } from '../../const/routes';
import './header.scss';

export default function Header() {
    return <>
        <div style={{
            display: "flex",
            alignItems: 'center',
            maxWidth: '100%',
            justifyContent: 'space-between',
            background: '#020202',
            padding: '1rem 0 1rem 0'
        }}>
            <div>
            <Link to={RoutesEnum.Home}><h1 style={{
                    marginLeft: '3rem',
                    color: '#ce0037'
                }}>HDparadise</h1></Link>
                
            </div>
            <menu>
                <ul style={{
                    display: "flex",
                    alignItems: 'center',
                    listStyle: 'none',
                    gap: '3rem',
                    color: '#ce0037',
                    marginLeft: '5rem',
                    marginRight: '3rem',
                }}>
                    <Link to={RoutesEnum.Films}><li>Фильмы</li></Link>
                    <Link to={RoutesEnum.Serials}><li>Сериалы</li></Link>
                    <Link to={RoutesEnum.Cartoons}><li>Мультики</li></Link>
                </ul>
            </menu>
            <Link to={RoutesEnum.Registration} style={{
                        width: 18,
                        color: '#ce0037',
                        marginLeft: '5rem',
                        textDecoration: 'none'
                    }}>
                    <span>Иконка авторизации</span>
            </Link>
        </div>
    </>
}
