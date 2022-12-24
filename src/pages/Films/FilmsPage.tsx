import React, { useEffect, useState } from 'react';
import { AspectRatio } from 'react-aspect-ratio';
import { Link } from 'react-router-dom';
import { API_KEY } from '../../const/api';
import { RoutesEnum } from '../../const/routes';
import { instance } from '../../services/services';
import { IKinoMovie } from '../../types/IKinoMovie';
import styles from './films.module.scss';
import className from 'classnames';



export const FilmsPage = () => {
    const [items, setItem] = useState<IKinoMovie[]>([]);    
    console.log(items);
    
    const [currentPage, setCurrentPage] = useState(1);
    const [query, setQuery] = useState(true);
    const [totalCount, setTotalCount] = useState(0);


    useEffect(() => {
        if(query)  {
            instance.get(`/movie?&field=type&search=movie&field=year&search=1860-2022&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${API_KEY}&page=${currentPage}`)
                .then(res => {
                    console.log(res.data.docs);
                    
                    setItem(res.data.docs);
                    setCurrentPage(prevState => prevState + 1);
                    setTotalCount(res.headers.get['x-total-count'] || res.headers['x-total-count']);
                })
                .finally(() => setQuery(false));
        }      
    }, [query])

    useEffect(() => {
        document.addEventListener('scroll', handlerScroll);
        return function () {
            document.removeEventListener('scroll', handlerScroll);
        }
    }, [totalCount])
      
    const handlerScroll = (e: any): void => {
        const scrollHeight = e.target.documentElementscrollHeight;
        const scrollTop = e.target.documentElement.scrollTop;
        if(scrollHeight - (scrollTop + window.innerHeight) < 100 &&
        items.length < totalCount) {
            setQuery(true);
            
            console.log('scroll');
        }    
    }

    return <>
        <main className={styles.main}>
                <div
                    className={className('catalog', styles.catalog)}
                >
                    <div 
                        className={className('container wrapper', styles.container)}
                    >
                        <h1
                            className={styles.title}
                        >
                           Все фильмы     
                        </h1>
                        <p
                            className={styles.desc}
                        >
                            Коллекция фильмов со всего мира
                        </p>
                        <div
                            className={styles.body}
                        >
                            <div className={styles.content}>
                                <div className={styles.grid}>
                                    <ul
                                        className={className('list-reset', styles.grid)}
                                    >
                                        {
                                            items?.map( (item: any) =>
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
                                                                            src={item.poster?.url || item.poster?.previewUrl}
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
                                                        {item.rating?.imdb ? item.rating?.imdb > 5 &&
                                                        <span
                                                            className={className(styles.rating, styles.green)}
                                    
                                                        >
                                                            <p>{ item.rating?.imdb }</p>
                                                        </span>
                                                        :
                                                        <span
                                                        className={className(styles.rating, styles.red)}
                                                        >
                                                            <p>{ item.rating?.imdb }</p>
                                                        </span>
                                                        }
                                                    </div>
                                                </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </main>
    </>
}
