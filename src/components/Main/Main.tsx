import React, { FC } from 'react';
import { Link} from 'react-router-dom';
import { RoutesEnum } from '../../const/routes';
import styles from './list.module.scss';
import className from 'classnames';
import { IKinoMovie } from '../../types/IKinoMovie';

interface MainListProps {
    itemsFilm: IKinoMovie[];
    itemsSerial: IKinoMovie[];
}


export const Main: FC<MainListProps> = ( { itemsFilm, itemsSerial } ) => {
    const filmItem = [...itemsFilm];   
    const serialItem = [...itemsSerial];  
    
    return <>
        <main 
            className={styles.main}
        >
                <section
                    className={styles.section}
                >
                    <div
                        className={className('container', styles.container)}
                    >
                        <div
                            className={styles.top}
                        >
                            <h2>
                                Новинки кино
                            </h2>
                            <button
                                className={styles.button}
                            >
                                <Link
                                    to={RoutesEnum.Films}
                                >
                                    <span
                                        className={styles.span_views_all_film_serial}
                                    >
                                    Смотреть все
                                    </span>
                                </Link>
                            </button>
                        </div>
                        <ul
                            className={className('list-reset', styles.grid)}
                        >
                        {
                        filmItem?.map( (item) =>
                        <li
                            key={item.id}
                            className={styles.item}
                        >
                            <div
                                className={styles.top}
                            >
                                <div>
                                        <div>
                                            <Link
                                                to={`${RoutesEnum.Films}/${item.id}`}
                                                className={styles.imageContainer}
                                                key={item.id}
                                            >
                                                <p>
                                                    {item.name}
                                                </p>
                                                <span
                                                    className={styles.caption}
                                                >
                                                    <img
                                                        src={item.poster?.previewUrl}
                                                        alt={item.description}
                                                        className={styles.image}
                                                        sizes='100vw'
                                                    />
                                                </span>
                                            </Link> 
                                        </div>
                                <span
                                    className={styles.title}
                                >
                                    {item.rating?.kp}
                                </span>
                                </div>
                            </div>
                            <span className={styles.info}>
                                {item.year} , {item.type}
                            </span>
                        </li>
                        )}
                        </ul>
                        <button className={styles.button}><span className={styles.span_view_all}>Показать все</span></button>
                    </div>
                </section>
                <section className={styles.section}>
                    <div className={className('container', styles.container)}>
                        <div className={styles.top}>
                            <h2>Новые сериалы</h2>
                            <button className={styles.button}><Link to={RoutesEnum.Serials}><span className={styles.span_views_all_film_serial}>Смотреть все</span></Link></button>
                        </div>
                        <ul className={className('list-reset', styles.grid)}>
                        {
                        serialItem?.map( (item: any) => <li key={item.id} className={styles.item}>
                            <div className={styles.top}>
                                <div>
                                        <div>
                                            <Link to={`${RoutesEnum.Serials}/${item.id}`} className={styles.imageContainer} key={item.id}>
                                                <p>{item.name}</p>
                                                <span className={styles.caption}>
                                                    <img srcSet={item.poster.previewUrl} alt={item.description} className={styles.image}/>
                                                </span>
                                            </Link>
                                        </div>
                                <span className={styles.title}>{item.rating.kp}</span>
                                </div>
                            </div>
                            <span className={styles.info}>{item.year} , {item.type.toLowerCase()}</span>
                        </li>
                        )}
                        </ul>
                        <button className={styles.button}><span className={styles.span_view_all}>Показать все</span></button>
                    </div>
                </section>
        </main>
    </>
}


