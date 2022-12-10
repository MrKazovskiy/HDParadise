import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RoutesEnum } from '../../const/routes';
import instance from '../../services/services';
import styles from './list.module.scss';
import className from 'classnames';


export default function List() {
    const [lists , setLists] = useState<any>();
    console.log(lists);
    
    const getLists = async () => {
        await instance({
            method: 'get',
            url: '/films',
            withCredentials: false,
        })
        .then( res => {            
            setLists(res.data.items)
        })
        .catch((err) => {
            console.error(err)
        })
    }

    useEffect(() => {
        getLists();
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
                    lists?.map( (item: any) => <li key={item.id} className={styles.item}>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <Link to={RoutesEnum.Home}>
                                            <p>{item.nameRu}</p>
                                            <span className={styles.caption}>
                                                <img srcSet={item.posterUrl} alt={item.nameRu} decoding='async' className={styles.caption}/>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            <span>{item.rating}</span>
                            </div>
                        </div>
                        <span className={styles.value}>{item.year} , {item.type.toLowerCase()}</span>
                    </li>
                    )}
                    </ul>
                </div>
            </section>
            <section>
                {lists?.map( (item: any) => <div key={item.id}>
                    <div className={styles.left}>
                        <div className={styles.videoContainer}>
                            <div 
                                className={styles.video}
                                id='yohoho'
                                data-title={item.nameRu}
                                data-resize='1'
                                data-bg='#000'
                                data-kinoposik={item.kinopoiskId}
                            />
                        </div>
                    </div>
                </div>)}
            </section>
        </main>
    </>
}


