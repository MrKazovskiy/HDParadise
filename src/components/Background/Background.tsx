import React from 'react';
import bgImg from './background.jpg';
import './background.scss';

function Background() {
    return <>
    <div className='container'>
        <img src={bgImg} alt='Фон страницы' className='bg__images'/>
        <div>
            <h3>HDparadise, смотрите вместе с нами</h3>
        </div>
    </div>
    </>
};


export default Background;