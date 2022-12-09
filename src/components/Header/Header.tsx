import React from 'react';
import { Link } from 'react-router-dom';
import { RoutesEnum } from '../../const/routes';
import styles from './header.module.scss';
import className from 'classnames';

export default function Header() {
    return <>
    <header className={styles.header}>
        <div className={className('container', styles.container)}>
            <div>
                <Link to={RoutesEnum.Home}>
                    <h1 className={styles.logo}>HDparadise</h1>
                </Link>
            </div>
            <div className={styles.menu}>
                <Link to={RoutesEnum.Films}><span>Фильмы</span></Link>
                <Link to={RoutesEnum.Serials}><span>Сериалы</span></Link>
                <Link to={RoutesEnum.Cartoons}><span>Мультики</span></Link>
            </div>
            <div>
                <Link to={RoutesEnum.Login}>
                        <span className={styles.link}>Иконка авторизации</span>
                </Link>
            </div>
        </div>
    </header>
    </>
}
