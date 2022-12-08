import React from 'react';
import './Header.scss';

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
                <h1 style={{
                    marginLeft: '3rem',
                    color: '#ce0037'
                }}>HDparadise</h1>
            </div>
            <div>
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
                        <li>Фильмы</li>
                        <li>Сериалы</li>
                        <li>Мультики</li>
                        <li>Аниме</li>
                    </ul>
                </menu>
            </div>
            <div>
                <a href='#' style={{
                        display: 'flex',
                        color: '#ce0037',
                        marginLeft: '5rem',
                        border: '1px solid red',
                        padding: 5,
                        gap: 10,
                        textDecoration: 'none'
                    }}>
                    <span>Поиск</span>
                    <span>по</span>
                    <span>сайту</span>
                </a>
            </div>
            <div>
            <a href='#' style={{
                        width: 18,
                        color: '#ce0037',
                        marginLeft: '5rem',
                        textDecoration: 'none'
                    }}>
                    <span>Иконка авторизации</span>
                </a>
            </div>
        </div>
    </>
}
