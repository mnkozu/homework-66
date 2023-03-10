import React, {useState} from 'react';
import ButtonSpinner from '../Spinner/ButtonSpinner';
import {MealMut, MealType} from '../../types';

interface Props {
  onSubmit: (meal: MealType) => void;
  existingMeal?: MealMut;
  isEdit?: boolean;
  loading: boolean;
}

const now = new Date().toISOString().slice(0, 10);
const initialState: MealMut = {
  type: '',
  description: '',
  calories: '',
  date: now,
};

const MealForm: React.FC<Props> = ({
   onSubmit,
   existingMeal = initialState,
   isEdit= false,
   loading = false,
}) => {
  const [meal, setMeal] = useState<MealMut>(existingMeal);

  const onMealChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;

    setMeal(prev => ({...prev, [name]: value}));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...meal,
      calories: parseFloat(meal.calories),
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4>{isEdit ? 'Edit meal' : 'Add new meal'}</h4>
      <select
        className="form-select mb-3"
        name="type"
        value={meal.type}
        disabled={loading}
        onChange={onMealChange}
        required
      >
        <option disabled value="">Select!</option>
        <option value="breakfast">Breakfast</option>
        <option value="snack">Snack</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
      </select>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description" name="description"
          className="form-control" required
          disabled={loading}
          value={meal.description}
          onChange={onMealChange}
        />
      </div>
      <div className="form-group my-2">
        <label>Date: </label>
        <input
          id="date" name="date" type="date"
          className="form-control" required
          disabled={loading}
          value={meal.date}
          onChange={onMealChange}
          min="2022-01-01"
          max="2024-01-01"
        />
      </div>
      <div className="form-group my-2">
        <label htmlFor="image">Calories</label>
        <div className="d-flex justify-content-around">
          <input
            id="calories" name="calories" type="number"
            className="form-control" required
            disabled={loading}
            value={meal.calories}
            onChange={onMealChange}
          />
          <p className="m-1 py-1">kcal</p>
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        disabled={loading}
      >
        {loading ? <ButtonSpinner/> : ''}
        {isEdit ? 'Update' : 'Create'}
      </button>
    </form>
  );
};

export default MealForm;