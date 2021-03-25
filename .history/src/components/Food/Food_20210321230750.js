import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import mockData from "../../mockData/MOCK_DATA.json";
import "./Food.css";
import FoodItem from "./FoodItem";

const Food = () => {
  const [foods, setFoods] = useState(mockData);
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <>
      <div className="container">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <div className="d-flex justify-content-center food-items">
            <TabList>
              <Tab>
                <h6>Breakfast</h6>
              </Tab>
              <Tab>
                <h6>Dinner</h6>
              </Tab>
              <Tab>
                <h6>Lunch</h6>
              </Tab>
            </TabList>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <TabPanel>
              {foods.slice(0, 6).map((food) => (
                <FoodItem food={food} key={food.id}></FoodItem>
              ))}
            </TabPanel>
            <TabPanel>
              {foods.slice(6, 12).map((food) => (
                <FoodItem food={food} key={food.id}></FoodItem>
              ))}
            </TabPanel>
            <TabPanel>
              {foods.slice(12, 18).map((food) => (
                <FoodItem food={food} key={food.id}></FoodItem>
              ))}
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </>
  );
};

export default Food;
