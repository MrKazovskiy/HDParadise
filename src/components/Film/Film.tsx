import React, { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API_KEY } from '../../const/api';
import { RoutesEnum } from '../../const/routes';
import { instance } from '../../services/services';
import { IKinoMovie } from '../../types/IKinoMovie';


type FilmItemParams = {
  id: string | undefined;
}

export const Film: FC = () => {
    const [film , setFilm] = useState<IKinoMovie>();
    console.log(film);
    
    const params = useParams<FilmItemParams>();
    const id = params.id

    useEffect((): any => {
      return async () => {
        await instance.get(`/movie?search=${params.id}&field=id&token=${API_KEY}`)
        .then( res => {            
            setFilm(res.data)
        })
        .catch((err) => {
            console.error(err)
        })
      }
    }, [id, params.id]);
   
    


    const navigate = useNavigate();
    const handler = () => {
      navigate(`${RoutesEnum.Home}`)
    }

    return <>
      <main>
          <button onClick={() => handler()}>Back</button>
          <section>
            <div>
              <img src={film?.poster.previewUrl} alt='The Batman' />
            </div>
            <div>
            <h1>{film?.name}({film?.year})</h1>
            <p>{film?.slogan}</p>
            </div>
            <div>
              <button>Смотреть</button>
              <button>Буду смотреть</button>
            </div>
            <div>
              <h2>О фильме</h2>
              <ul>
                <li>
                  <span>
                    Премьера в мире
                  </span>
                  <span>
                    {film?.year}
                  </span>
                </li>
                <li>
                  <span>
                    Страна
                  </span>
                    {film?.countries.map((item, index) => <span key={index}>{item.name}</span>)}
                </li>
                <li>
                  <span>
                    Жанр
                  </span>
                    {film?.genres.map((item, index) => <span key={index}>{item.name}</span>)}
                </li>
                <li>
                  <span>
                    Слоган
                  </span>
                  <span>
                    {film?.slogan}
                  </span>
                </li>
                <li>
                  <span>
                    Возраст
                  </span>
                  <span>
                    {film?.ageRating}+
                  </span>
                </li>
                <li>
                  <span>
                    Бюджет
                  </span>
                  <span>
                    {film?.budget.currency} {film?.budget.value}
                  </span>
                </li>
                <li>
                  <span>
                    Время
                  </span>
                  <span>
                    {film?.movieLength} мин.
                  </span>
                </li>
                <li>
                  <span>
                    Сборы в США
                  </span>
                  <span>
                    {film?.year}
                  </span>
                </li>
                <li>
                  <span>
                    Сборы в мире
                  </span>
                  <span>
                    {film?.year}
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <div
                id="kinobd"
                data-kinopoisk={id}
                data-bg="#000"
                data-resize="1"
              />
            </div>
          </section>
      </main>
    </>
}