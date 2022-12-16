import React from 'react';
import {Meal} from '../../types';

interface Props {
  meal: Meal;
}

const MealItem: React.FC<Props> = ({meal}) => {
  return (
    <div className="card my-2">
      <div className="card-body row">
        <div className="col-8">
          <p className="text-secondary">{meal.type}</p>
          <p className="card-text">{meal.description}</p>
        </div>
        <div className="col-2 align-self-center">
          <p>{meal.calories} kcal</p>
        </div>
        <div className="col-2 align-self-center d-flex flex-column justify-content-between">
          <button className="btn btn-primary m-1">Edit</button>
          <button className="btn btn-danger m-1">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default MealItem;