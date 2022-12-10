import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RoutesEnum } from '../../const/routes';
import { instance } from '../../services/services';
import { API_KEY } from '../../const/api'; 
import styles from './list.module.scss';
import className from 'classnames';


export default function List() {
    const [films , setFilms] = useState<any>();
    const [serials , setSerials] = useState<any>();
    
    
    const getFilms = async () => {
        await instance.get(`/movie?field=type&search=movie&field=year&search=2022-2022&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${API_KEY}`)
        .then( res => {            
            setFilms(res.data.docs)
        })
        .catch((err) => {
            console.error(err)
        })
    }

    const getSerials = async () => {
        await instance.get(`/movie?field=type&search=tv-series&field=year&search=2022-2022&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${API_KEY}`)
        .then( res => {            
            setSerials(res.data.docs)
        })
        .catch((err) => {
            console.error(err)
        })
    }

    useEffect(() => {
        getFilms();
        getSerials();
    }, [])


    return <>
        <main className={styles.main}>
            <section>
                <div className={className('container', styles.container)}>
                    <div className={styles.top}>
                        <h2>Новинки кино</h2>
                        <button><Link to={RoutesEnum.Films}>Смотреть все</Link></button>
                    </div>
                    <ul className={className('list-reset', styles.grid)}>
                    {
                    films?.map( (item: any) => 
                    <li 
                        key={item.id} 
                        className={styles.item}
                        >
                        <div className={styles.top}>
                            <div>
                                    <div>
                                        <Link to={`${RoutesEnum.Films}/${item.id}`} className={styles.imageContainer}>
                                            <p>{item.name}</p>
                                            <span className={styles.caption}>
                                                <img 
                                                    srcSet={item.poster.previewUrl} 
                                                    alt={item.description} 
                                                    className={styles.image}
                                                    sizes='100vw'
                                                />
                                            </span>
                                        </Link>
                                    </div>
                            <span className={styles.title}>
                                {item.rating.kp}
                            </span>
                            </div>
                        </div>
                        <span className={styles.info}>
                            {item.year} , {item.type.toLowerCase()}
                        </span>
                    </li>
                    )}
                    </ul>
                </div>
            </section>
            <section>
                <div className={className('container', styles.container)}>
                    <div className={styles.top}>
                        <h2>Новые сериалы</h2>
                        <button><Link to={RoutesEnum.Films}>Смотреть все</Link></button>
                    </div>
                    <ul className={className('list-reset', styles.grid)}>
                    {
                    serials?.map( (item: any) => <li key={item.id} className={styles.item}>
                        <div className={styles.top}>
                            <div>
                                    <div>
                                        <Link to={`${RoutesEnum.Serials}/:${item.id}`} className={styles.imageContainer}>
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
                </div>
            </section>
        </main>
    </>
}


