import React from 'react'
import "./Body.css"
import { DailyMeals, Marketing } from '../../JsonData'
import CustomCarousel from '../Carousel/CustomCarousel'
import Slide from '../Slide/Slide'
import MealsCard from '../MealsCard/MealsCard'
import MrktCard from '../MrktCard/MrktCard'




const Body = () => {
  return (
    <>
      <div className='rectangle48'>

        <img src="../Images/Group 8754.png" alt="" />
        <div className='text-container'>
          <p className='firstText1'>Design, Print And Install</p>

          <p className='firstText2'>Printing Made Easier</p>

          <p className='firstText3'>Make a professional First Impression</p>

          <p className='firstText4'>Shop Now</p>
        </div>
      </div>

      <div className="Group8737">
        <h1 className="text1style">Don't Miss Our Daily Deals & More</h1>

        <Slide slidesToShow={3} arrowsScroll={1}  >
          {DailyMeals.map((card) => (
            <MealsCard key={card.id} item={card} />
          ))}
        </Slide>
      </div>


      <div className="Group8738">
        <h1 className="text1style">Stock Up And Save On Marketing & Signage</h1>
        <Slide slidesToShow={5} arrowsScroll={1}  >
          {Marketing.map((card) => (
            <MrktCard key={card.id} item={card} />
          ))}
        </Slide>

      </div>


      <div style={{position:"absolute", top:"2000px"}}>
        <h1>hello</h1>
      </div>


      <div><h2>hey how are you</h2></div>

    </>
  )
}

export default Body
