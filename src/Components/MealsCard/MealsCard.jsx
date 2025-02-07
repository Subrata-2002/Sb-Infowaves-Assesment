import React from 'react'
import "./MealsCard.css"


const MealsCard = ({ item }) => {

    console.log(item.discount)
    return (

        <div className='mealsCard'>


            <img src={item.imgUrl} alt="" className='imae' />



            <span className='desc'>{item.discount} Off</span>
            <span className='title'>{item.title}</span>
            <button type='button' className='btn'>Buy Now</button>


        </div>

    )
}

export default MealsCard
