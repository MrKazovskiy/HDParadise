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
            <Link 
                to={RoutesEnum.Home}
                className={className(styles.logo)}
            >
                <img
                    src={logo}
                    alt='HDParadise'
                    draggable="false"
                />
            </Link>
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
