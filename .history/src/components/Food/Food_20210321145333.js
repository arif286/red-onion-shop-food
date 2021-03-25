import React, { useState } from 'react';
import mockData from '../../mockData/MOCK_DATA.json';
import FoodItem from './FoodItem';
const Food = () => {
const [foods, setFoods] = useState(mockData);
    return (
      <>
        <div className='container'>
          <div>
              <h5>Breakfast</h5>
              <h5>Dinner</h5>
              <h5>Lunch</h5>
            </div>
            {
                foods.slice(0,6).map(food=> <FoodItem food={food} key={food.id}></FoodItem> )
            }
        </div>
      </>
    );
};

export default Food;