"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import { useFormStatus } from "react-dom";
const AddMealButton = ({
  text,
  name,
  className
}: {
  text: string;
  name: string;
  className?: string
}) => {
  const status = useFormStatus();
  return (
    <Button disabled={status.pending} className={cn("w-full flex-1", className)} name={name} >
      {status.pending ? "Saving..." :  text}
    </Button>
  );
};

export default AddMealButton;
