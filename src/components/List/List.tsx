import axios from 'axios';
import React, { useEffect, useState } from 'react'


function List() {
    const [list, setList] = useState<Object>({});
    console.log(list);
    
     useEffect( () => {
            try{
            const res = axios.get('https://kinobd.ru/api/films', {
                headers: {
                    
                    'Access-Control-Allow-Origin': '*',
                    crossdomain: true,
                },
                proxy: {
                    host: '5.45.64.97',
                    port: 3128
                }
            })            
                .then(res => {
                    const film  = res.data.data;            
                    setList(film);
                    console.log(film);
                })
            }    
            catch (error){
                throw new Error(`Error ${error}`);
                
            }  
    }, [])
    
    return <>
        {Array.isArray(list) ?
            list.map( (item) => <div key={item.id}>
                <video width='500' height='500'>
                    <source src={item.trailer} type='video/mp4' />
                </video>    
            </div>) : null
        }
    </>
}

export default List;
