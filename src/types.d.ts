export interface MealMut {
  type: string;
  description: string;
  calories: string;
}

export interface MealType {
  type: string;
  description: string;
  calories: number;
}

export interface Meal {
  id: string;
  type: string;
  description: string;
  calories: number;
}


export interface ApiMealType {
  [id: string]: MealType;
}
