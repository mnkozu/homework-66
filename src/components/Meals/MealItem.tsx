import React from 'react';
import {Meal} from '../../types';
import {Link} from 'react-router-dom';

interface Props {
  meal: Meal;
  onDelete: React.MouseEventHandler;
  deleteLoad: boolean;
}

const MealItem: React.FC<Props> = ({meal, onDelete, deleteLoad}) => {
  return (
    <div className="card my-2">
      <div className="card-header">{meal.date}</div>
      <div className="card-body row">
        <div className="col-8">
          <p className="text-secondary">{meal.type}</p>
          <p className="card-text">{meal.description}</p>
        </div>
        <div className="col-2 align-self-center">
          <p>{meal.calories} kcal</p>
        </div>
        <div className="col-2 align-self-center d-flex flex-column justify-content-between">
          <Link className="btn btn-primary" to={`/edit-meal/${meal.id}`}>Edit</Link>
          <button
            className="btn btn-danger m-1"
            onClick={onDelete}
            disabled={deleteLoad}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealItem;