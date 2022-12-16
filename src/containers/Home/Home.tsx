import React, {useState} from 'react';
import {Meal} from '../../types';
import Meals from '../../components/Meals/Meals';
import Spinner from '../../components/Spinner/Spinner';
import axiosApi from '../../axiosApi';
import {Link} from 'react-router-dom';

interface Props {
  loading: boolean;
  meals: Meal[];
  fetchMeals: () => void;
  total: number;
}

const Home: React.FC<Props> = ({loading, meals, fetchMeals, total}) => {
  const [deleteLoad, setDeleteLoad] = useState(false);

  const deleteMeal = async (id: string) => {
    try {
      setDeleteLoad(true);
      if (window.confirm('Do you really want to delete this meal?')) {
        await axiosApi.delete('/meals/' + id + '.json');
        await fetchMeals();
      }
    } finally {
      setDeleteLoad(false);
    }
  };

  return (
    <div className="mt-2">
      <div className="card d-flex flex-row justify-content-between px-2 py-3">
        <p className="fs-4 text m-0">Total calories: <b>{total}</b> kcal</p>
        <Link className="btn btn-primary" to={`/new-meal/`}>New Meal</Link>
      </div>
      {loading ? <Spinner/> : (
        <Meals meals={meals} deleteMeal={deleteMeal} deleteLoad={deleteLoad}/>
      )}
    </div>
  );
};

export default Home;