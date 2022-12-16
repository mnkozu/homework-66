import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {MealType} from '../../types';
import axiosApi from '../../axiosApi';
import MealForm from '../../components/MealForm/MealForm';

const EditMeal = () => {
  const {id} = useParams();
  const [meal, setMeal] = useState<MealType | null>(null);
  const [updating, setUpdating] = useState(false);

  const fetchMeal = useCallback(async () => {
    const mealResponse = await axiosApi.get<MealType>(  `/meals/${id}.json`);
    setMeal(mealResponse.data);
  }, [id]);

  useEffect(() => {
    void fetchMeal();
  }, [fetchMeal]);

  const updateMeal = async (meal: MealType) => {
    try {
      setUpdating(true);
      await axiosApi.put(`/meals/${id}.json`, meal);
    } finally {
      setUpdating(false);
    }
  };

  const existingMeal = meal && {
    ...meal,
    calories: meal.calories.toString(),
  };

  return (
    <div className="row mt-2">
      <div className="col">
        {existingMeal && (
          <MealForm
            onSubmit={updateMeal}
            existingMeal={existingMeal}
            isEdit
            loading={updating}
          />
        )}
      </div>
    </div>
  );
};

export default EditMeal;