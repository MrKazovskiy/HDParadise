import React, { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API_KEY } from '../../const/api';
import { RoutesEnum } from '../../const/routes';
import { instance } from '../../services/services';
import { IKinoMovie } from '../../types/IKinoMovie';
import styles from './film.module.scss';
import className from 'classnames';
import { convertMovieType } from '../../helpers/convertMovieType/convertMovieType';
import { convertNumbers } from '../../helpers/ConvertNumbers/convertNumbers';
import { convertTimestampToDate } from '../../helpers/convertTimestampToDate/convertTimestampToDate';
// import Slider from 'react-slick';
// import { Sliders } from '../UI/Slider/Slider';

type FilmItemParams = {
  id: string | undefined;
}

export const Film: FC = () => {
    const [film , setFilm] = useState<IKinoMovie>();   
    const params = useParams<FilmItemParams>();
    const id = params.id

    useEffect(() => {
      const getFilm = async () => {
        await instance.get(`/movie?search=${id}&field=id&token=${API_KEY}`)
        .then( res => {                     
            setFilm(res.data)
        })
        .catch((err) => {
            console.error(err)
        })
      }
      getFilm()
    }, [id]);

    const navigate = useNavigate();
    const handler = () => {
      navigate(`${RoutesEnum.Home}`)
    }

    return <>
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={className('container wrapper', styles.container)}>
            <div className={styles.top}>
                <button 
                  onClick={() => handler()}
                  className={styles.button}
                >
                  На главную
                </button>
            </div>
            <div className={styles.content}>
              <div className={styles.left}>
                <img
                  src={film?.poster?.previewUrl}
                  alt={film?.description ? film?.description : film?.shortDescription}
                  className={styles.image}
                />
              </div>
              <div
                className={styles.right}
              >
                  <h1
                    className={styles.title}
                  >
                    {film?.name ? film.name : film?.enName || film?.alternativeName} ({film?.year})
                  </h1>
                  <span
                    className={styles.originalTitle}
                  >
                    {film?.slogan}
                  </span>
                <div className={styles.btns}>
                  <button className={styles.button}>
                    Буду смотреть
                  </button>
                </div>
                <div>
                  <h2 className={styles.subtitle}>
                    О {convertMovieType(film?.type)}е
                  </h2>
                  <ul className={styles.list_reset}>
                    <li className={styles.info_item}>
                      <span className={styles.info_caption}>
                        Премьера в мире
                      </span>
                      <span className={styles.info_value}>
                        {convertTimestampToDate(film?.premiere.world, 'D MMMM YYYY')}
                      </span>
                    </li>
                    <li className={styles.info_item}>
                      <span className={styles.info_caption}>
                        Страны
                      </span>
                        {film?.countries.map((item, index) => <span  className={styles.info_value} key={index}>{index ? ', ' : ''}{item.name}</span>)}
                    </li>
                    <li className={styles.info_item}>
                      <span className={styles.info_caption}>
                        Жанр
                      </span>
                        {film?.genres.map((item, index) => <span  className={styles.info_value} key={index}>{index ? ', ' : ''}{item.name}</span>)}
                    </li>
                    <li className={styles.info_item}>
                      <span className={styles.info_caption}>
                        Возраст
                      </span>
                      <span className={styles.age}>
                        {film?.ageRating ? film?.ageRating : 'Нет информации'}+
                      </span>
                    </li>
                    <li className={styles.info_item}>
                      <span className={styles.info_caption}>
                        Бюджет
                      </span>
                      <span className={styles.info_value}>
                        {film?.budget.currency ? film?.budget.currency : 'Нет информации'} {convertNumbers(film?.budget.value)}
                      </span>
                    </li>
                    <li className={styles.info_item}>
                      <span className={styles.info_caption}>
                        Время
                      </span>
                      <span className={styles.info_value}>
                        {film?.movieLength} мин.
                      </span>
                    </li>
                    <li className={styles.info_item}>
                      <span className={styles.info_caption}>
                        Сборы в США
                      </span>
                      <span className={styles.info_value}>
                        {film?.year}
                      </span>
                    </li>
                    <li className={styles.info_item}>
                      <span className={styles.info_caption}>
                        Сборы в мире
                      </span>
                      <span className={styles.info_value}>
                        {film?.year}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className={styles.description}>Описание</h3>
            </div>
            <div>
              <p className={styles.film_description}>{film?.description}</p>
            </div>
              <div className={styles.videoContainer}>
                <div
                    id="kinoplayertop"
                    data-kinopoisk={id}
                    className={styles.video}
                    data-show-errors="true"
                    data-ratio="16by9"
                />
              </div>
          </div>
          {/* <Slider {...settings}>
                {  
                    film?.map((item: any) => {
                    return <React.Fragment key={item.id}>
                            <div>
                                <h4>{item?.name || item?.alternativeName}</h4>
                                <img src={item?.poster?.previewUrl || item?.poster?.url} alt={item?.name || item?.alternativeName}/>
                            </div>
                        </React.Fragment>
                    })
                }
            </Slider> */}
        </section>
      </main>
    </>
}