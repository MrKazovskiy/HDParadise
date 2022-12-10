import React from 'react';
import { RoutesEnum } from '../../const/routes';
import styles from './footer.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

function Footer() {
  const link = [
    { href: RoutesEnum.Films, text: 'Фильмы' },
    { href: RoutesEnum.Serials, text: 'Сериалы' },
    { href: RoutesEnum.Cartoons, text: 'Мультики' },
  ]
    return <>
      <footer className={styles.footer}>
        <div className={classNames('container', styles.container)}>
          <ul className={classNames('list-reset', styles.list)}>
              {
                link.map( (item) => (
                  <li key={item.text} className={styles.item_link}>
                      <Link to={item.href}>
                        <a className={styles.link}>{item.text}</a>
                      </Link>
                  </li>
                ))
              }
          </ul>
        </div>
      </footer>
    </>
}


export default Footer;