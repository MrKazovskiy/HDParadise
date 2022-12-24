import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import styles from './slider.module.scss';
import className from 'classnames';
import { instance } from '../../../services/services';
import { API_KEY } from '../../../const/api';
import { IKinoMovie } from '../../../types/IKinoMovie';


export const Sliders = () => {
    const [sliders, setSlider] = useState<IKinoMovie[]>([]);
    console.log(sliders);
    

    // /movie?&field=type&search=movie&field=year&search=2022-2022&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${API_KEY}
    // movie?field=type&search=movie&search=2023-2023&field=year&field=movieId&limit=10&token=${API_KEY}
    const getReleaseInCinema = async () => {
        await instance.get(`movie?field=type&search=movie&search=2023-2023&field=year&field=movieId&limit=10&token=${API_KEY}`)
        .then( res => {   
            setSlider(res.data.docs)
        })
        .catch((err) => {
            console.error(err)
        })
    }

    useEffect(() => {
        getReleaseInCinema();
    }, [])


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              },
            },
      
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
              },
            },
            {
              breakpoint: 577,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
              },
            },
          ],
      };
    
    return <>
        <div className={className('container', styles.container)}>
            <Slider {...settings}>
                {
                    sliders?.map((item: any) => {
                    return <React.Fragment key={item.id}>
                            <div>
                                <h4>{item?.name || item?.alternativeName}</h4>
                                <img src={item?.poster?.previewUrl || item?.poster?.url} alt={item?.name || item?.alternativeName}/>
                            </div>
                        </React.Fragment>
                    })
                }
            </Slider>
        </div>
    </>
}
