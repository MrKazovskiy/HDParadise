import React from 'react';
import { RoutesEnum } from '../../const/routes';
import styles from './footer.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

function Footer() {
  const link = [
    { href: RoutesEnum.Films, text: 'Фильмы' },
    { href: RoutesEnum.Serials, text: 'Сериалы' },
    { href: RoutesEnum.Cartoons, text: 'Мультики' },
  ]
    return <>
      <footer 
        className={styles.footer}
      >
        <div 
          className={classNames('container', styles.container)}
        >
          <div>
            <Link 
              to={RoutesEnum.Home}
            >
              <img 
                src={logo} 
                alt='HDParadise' 
                style={{
                  marginBottom: '-1rem'
                }}
                draggable="false" 
              />
            </Link>
          </div>
          <ul 
            className={classNames('list-reset', styles.list)}
          >
              {
                link.map( (item) => (
                  <li 
                    key={item.text} 
                    className={styles.item_link}
                  >
                      <Link 
                        to={item.href}
                      >
                        <span 
                          className={styles.link}>{item.text}
                        </span>
                      </Link>
                  </li>
                ))
              }
          </ul>
          <span className={styles.copy}>&#169; 2022 HDParadise</span>
        </div>
      </footer>
    </>
}


export default Footer;