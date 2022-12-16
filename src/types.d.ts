export interface MealMut {
  type: string;
  description: string;
  calories: string;
  date: string;
}

export interface MealType {
  type: string;
  description: string;
  calories: number;
  date: string;
}

export interface Meal {
  id: string;
  type: string;
  description: string;
  calories: number;
  date: string;
}


export interface ApiMealType {
  [id: string]: MealType;
}
