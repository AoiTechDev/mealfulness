import { userAuthSchema } from "@/validators/input";

import { z } from "zod";

export type FormFields = z.infer<typeof userAuthSchema>;

export type NutritionResponse = {
  error?: string;
  success?: NutritionAPIResponse[];
};

export interface GetMealsResponse {
  success?: MealResponse[];
  failure?: string;
}

export type NutritionAPIResponse = {
  name: string;
  calories: number;
  protein_g: number;
  fat_total_g: number;
  carbohydrates_total_g: number;
  sugar_g: number;
  serving_size_g: number;
};
export type Nutrition = {
  calories: number;
  protein: number;
  fat: number;
  carbohydrates: number;
  sugar: number;
};

export interface Meal extends Nutrition {
  name: string;
  date: Date;
  mealid: number;
}

export interface  MealResponse extends Omit<Meal,  "date"> {
  date: string
}

export interface AddMealsFormFields extends Nutrition {
  mealName: string;
  email: string;
}

export interface WeeklyMealData extends Nutrition {
  date: string;
}

export type AvatarProps ={
  image: string | undefined;
}

export type FieldErrors = {
  currentPassword?: string[] | undefined;
  newPassword?: string[] | undefined;
  confirmPassword?: string[] | undefined;
  error?: string | undefined;

};