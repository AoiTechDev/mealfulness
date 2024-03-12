import SettingsContent from "@/components/Settings/SettingsContent/SettingsContent";
import TopProfileInfo from "@/components/Settings/TopProfileInfo";

import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";

import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";
import React from "react";
import { getAvatarImage } from "./actions";

const page = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }

  // const { data } = useQuery({
  //   queryKey: ["avatar"],
  //   queryFn: async () => {
  //     const result = await getAvatarImage();

  //     return result;
  //   },
  // });


  return (
    <Card className="w-full p-2 md:p-4 space-y-4">
      {/* <TopProfileInfo image={avatar.success?.url} /> */}
      <TopProfileInfo  />

      <SettingsContent />
    </Card>
  );
};

export default page;
