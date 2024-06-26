import MealsTableBody from "@/components/Dashboard/MealsTable/MealsTableBody/MealsTableBody";
import MobileCard from "@/components/Dashboard/MealsTable/MobileCard/MobileCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import React from "react";

const page = async () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Meals for Selected Day</CardTitle>
        <span className="opacity-60">All nutrition displayed in grams</span>
      </CardHeader>
      <CardContent className="md:flex hidden">
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
          <MealsTableBody />
        </Table>
      </CardContent>
      <CardContent className="flex md:hidden">
        <MobileCard />
      </CardContent>
    </Card>
  );
};

export default page;
