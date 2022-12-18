import React, { FC } from 'react';
import { Link} from 'react-router-dom';
import { RoutesEnum } from '../../const/routes';
import styles from './list.module.scss';
import className from 'classnames';
import { IKinoMovie } from '../../types/IKinoMovie';
import { AspectRatio } from 'react-aspect-ratio';
import { convertMovieType } from '../../helpers/convertMovieType/convertMovieType';

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
            <section>
                <div
                className={className('container', styles.container)}
                >
                    <div
                    className={styles.top_block_new_films}
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
                                    <div className={styles.top_block_films}>
                                        <Link
                                            to={`${RoutesEnum.Films}/${item.id}`}
                                            key={item.id}
                                        >
                                            <div
                                                className={styles.caption}
                                            >
                                                <div 
                                                    className={styles.imageContainer}
                                                >
                                                    <AspectRatio 
                                                        ratio={2/3}
                                                    >
                                                        <img
                                                            src={item.poster.url}
                                                            alt={item.description}
                                                            className={styles.image}
                                                            sizes='100vw'
                                                        />
                                                    </AspectRatio>
                                                </div>
                                            </div>
                                            <p
                                            className={styles.title}
                                            >
                                            {item.name ? item.name : item.enName || item.alternativeName}
                                            </p>
                                        </Link>
                                    </div>
                                    <p
                                    >
                                        {item.rating?.imdb ? item.rating?.imdb : item.rating?.kp || item.rating?.filmCritics}
                                    </p>
                                    <span 
                                        className={styles.info}
                                    >
                                        {item.year}, {convertMovieType(item.type)}
                                    </span>
                                </li>
                        )}
                    </ul>
                    <button className={styles.button}><span className={styles.span_view_all}>Показать все</span></button>
                </div>
            </section>
            <hr className={styles.center_diamond} />
            <section>
                <div
                className={className('container', styles.container)}
                >
                    <div
                    className={styles.top_block_new_films}
                    >
                        <h2>
                        Новые сериалы
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
                            serialItem?.map( (item) =>
                                <li
                                    key={item.id}
                                    className={styles.item}
                                >
                                    <div className={styles.top_block_films}>
                                        <Link
                                            to={`${RoutesEnum.Films}/${item.id}`}
                                            key={item.id}
                                        >
                                            <div
                                                className={styles.caption}
                                            >
                                                <div 
                                                    className={styles.imageContainer}
                                                >
                                                    <AspectRatio 
                                                        ratio={2/3}
                                                    >
                                                        <img
                                                            src={item.poster.url}
                                                            alt={item.description}
                                                            className={styles.image}
                                                            sizes='100vw'
                                                        />
                                                    </AspectRatio>
                                                </div>
                                            </div>
                                            <p
                                            className={styles.title}
                                            >
                                            {item.name ? item.name : item.enName || item.alternativeName}
                                            </p>
                                        </Link>
                                    </div>
                                    <p
                                    >
                                        {item.rating?.imdb ? item.rating?.imdb : item.rating?.kp || item.rating?.filmCritics}
                                    </p>
                                    <span 
                                        className={styles.info}
                                    >
                                        {item.year}, {convertMovieType(item.type)}
                                    </span>
                                </li>
                        )}
                    </ul>
                    <button className={styles.button}><span className={styles.span_view_all}>Показать все</span></button>
                </div>
            </section>
        </main>
    </>
}


