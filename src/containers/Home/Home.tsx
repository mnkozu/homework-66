import React from 'react';
import {Meal} from '../../types';
import Meals from '../../components/Meals/Meals';
import Spinner from '../../components/Spinner/Spinner';

interface Props {
  loading: boolean;
  meals: Meal[];
}

const Home: React.FC<Props> = ({loading, meals}) => {
  return (
    <div className="row mt-2">
      {loading ? <Spinner/> : (
        <Meals meals={meals} />
      )}
    </div>
  );
};

export default Home;