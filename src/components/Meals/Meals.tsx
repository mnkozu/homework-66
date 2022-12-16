import React from 'react';
import {Meal} from '../../types';
import MealItem from './MealItem';

interface Props {
  meals: Meal[];
  deleteMeal: (id: string) => void;
  deleteLoad: boolean;
}

const Meals: React.FC<Props> = ({meals, deleteMeal, deleteLoad}) => {
  return (
    <div>
      {meals.map((meal) => (
         <MealItem
          key={meal.id}
          meal={meal}
          onDelete={() => deleteMeal(meal.id)}
          deleteLoad={deleteLoad}
        />
      ))}
    </div>
  );
};

export default Meals;