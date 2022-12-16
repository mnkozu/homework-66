import React from 'react';
import {Meal} from '../../types';
import Meals from '../../components/Meals/Meals';
import Spinner from '../../components/Spinner/Spinner';
import axiosApi from '../../axiosApi';

interface Props {
  loading: boolean;
  meals: Meal[];
  fetchMeals: () => void;
}

const Home: React.FC<Props> = ({loading, meals, fetchMeals}) => {
  const deleteMeal = async (id: string) => {
    if (window.confirm('Do you really want to delete this meal?')) {
      await axiosApi.delete('/meals/' + id + '.json');
      await fetchMeals();
    }
  };

  return (
    <div className="row mt-2">
      {loading ? <Spinner/> : (
        <Meals meals={meals} deleteMeal={deleteMeal}/>
      )}
    </div>
  );
};

export default Home;