"use client";
import React, { useState } from "react";
import { createCompletion } from "@/actions/actions";
import { NutritionAPIResponse } from "@/types/types";
import { Skeleton } from "@/components/ui/skeleton";
import { useForm } from "react-hook-form";
import { Session } from "next-auth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import IngredientsList from "./IngredientsList";
import AddMealToThatDay from "./AddMealToThatDay";
type FormData = {
  prompt: string;
};

const SearchForMeal = () => {
  const [nutrition, setNutrition] = useState<NutritionAPIResponse[]>([]);
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<FormData>();

  const onSubmit = handleSubmit(async ({ prompt }) => {
    const result = await createCompletion(prompt as string);
    setNutrition([]);

    if (result?.error) {
      console.log(result.error);
    } else if (result?.success) {
      setNutrition(result.success);
    }
  });

  return (
    <>
      {" "}
      <form onSubmit={onSubmit} className="flex gap-4 mt-6">
        <Input {...register("prompt")} name="prompt" required />
        <Button disabled={isSubmitting} className="w-[100px]" type="submit">
          {isSubmitting ? "Searching..." : "Search"}
        </Button>
      </form>
      {isSubmitting ? (
        <div className=" w-full my-12 flex flex-col gap-4 justify-center items-center">
          <Skeleton className="h-[50px] w-full rounded-xl bg-slate-200" />
          <Skeleton className="h-[30px] w-full rounded-xl bg-slate-200" />
          <Skeleton className="h-[30px] w-full rounded-xl bg-slate-200" />
        </div>
      ) : (
        <>
          {nutrition.length !== 0 ? (
            <IngredientsList nutrition={nutrition} />
          ) : (
            <div className="w-full mt-12 flex flex-col justify-center items-center gap-4">
              <span className="text-center">
                {" "}
                Please type Ingredients that are contained in your meal.
              </span>
              <span>Keep format like example below.</span>
              <span>
                For Example:{" "}
                <span className="opacity-60">100g rice 200g chicken</span>
              </span>
            </div>
          )}
        </>
      )}
      {nutrition.length > 0 && !isSubmitting ? (
        <AddMealToThatDay nutrition={nutrition} />
      ) : null}
    </>
  );
};

export default SearchForMeal;
