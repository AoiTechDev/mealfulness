
import MealsTableBody from "@/components/Dashboard/MealsTable/MealsTableBody/MealsTableBody";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,

  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getServerSession } from "next-auth";

import React from "react";

const page = async () => {
  const session = await getServerSession();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Meals for Selected Day</CardTitle>
        <span className="opacity-60">All nutrition displayed in grams</span>
      </CardHeader>
      <CardContent className="">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Meal</TableHead>
              <TableHead>Calories</TableHead>
              <TableHead>Protein</TableHead>
              <TableHead>Carbs</TableHead>
              <TableHead>Fat</TableHead>
              <TableHead>Sugar</TableHead>
            </TableRow>
          </TableHeader>
          <MealsTableBody session={session} />
        </Table>
      </CardContent>
    </Card>
  );
};

export default page;
