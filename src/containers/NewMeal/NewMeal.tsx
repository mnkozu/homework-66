import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axiosApi from '../../axiosApi';
import MealForm from '../../components/MealForm/MealForm';
import {MealType} from '../../types';


const NewMeal = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const addMeal = async (meal: MealType) => {
    try {
      setLoading(true);
      await axiosApi.post('/meals.json', meal);
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <MealForm onSubmit={addMeal} loading={loading}/>
    </div>
  );
};

export default NewMeal;