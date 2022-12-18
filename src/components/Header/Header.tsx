import React from 'react';
import { Link } from 'react-router-dom';
import { RoutesEnum } from '../../const/routes';
import styles from './header.module.scss';
import className from 'classnames';
import logo from '../../assets/logo.svg';

export default function Header() {
    return <>
    <header 
        className={styles.header}
    >
        <div 
            className={className('container', styles.container)}
        >
            <div>
                <Link 
                    to={RoutesEnum.Home}
                >
                    <img 
                        src={logo} 
                        style={{
                            margin: '1rem 0 -1rem 3rem'
                        }} 
                        alt='HDParadise'
                        draggable="false"
                    />
                </Link>
            </div>
            <div 
                className={styles.menu}
            >
                <Link 
                    to={RoutesEnum.Films}
                >
                    <span 
                        className={styles.link}
                    >
                        Фильмы
                    </span>
                </Link>
                <Link 
                    to={RoutesEnum.Serials}
                >
                    <span 
                        className={styles.link}
                    >
                        Сериалы
                    </span>
                </Link>
                <Link 
                    to={RoutesEnum.Cartoons}
                >
                    <span 
                        className={styles.link}
                    >
                        Мультфильмы
                    </span>
                </Link>
            </div>
            <div>
                <button     
                    type='button' 
                    className={styles.button}
                >
                    <Link 
                        to={RoutesEnum.Registration}
                    >
                        <span>
                            Регистрация
                        </span>
                    </Link>
                </button>
            </div>
        </div>
    </header>
    </>
}
