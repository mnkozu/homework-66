import React, {useCallback, useEffect, useState} from 'react';
import Layout from "./components/Layout/Layout";
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./containers/Home/Home";
import NewMeal from './containers/NewMeal/NewMeal';
import {ApiMealType, Meal} from './types';
import axiosApi from './axiosApi';
import EditMeal from './containers/EditMeal/EditMeal';

function App() {
  const location = useLocation();
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchMeals = useCallback( async() => {
    try {
      setLoading(true);
      const mealsResponse = await axiosApi.get<ApiMealType | null>('/meals.json');
      const meals = mealsResponse.data;

      let newMeals: Meal[] = [];

      if (meals) {
        newMeals = Object.keys(meals).map(id => {
          const meal = meals[id];
          return {
            ...meal,
            id,
          }
        });
      }

      setMeals(newMeals);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      void fetchMeals();
    }
  }, [location, fetchMeals]);


  return (
    <Layout>
      <Routes>
        <Route path='/' element={(
          <Home
            loading={loading}
            meals={meals}
          />
        )}/>
        <Route path='/new-meal' element={(<NewMeal/>)}/>
        <Route path='/edit-meal/:id' element={(<EditMeal/>)}/>
      </Routes>
    </Layout>
  );
}

export default App;
