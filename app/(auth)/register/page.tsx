
import RegisterForm from "@/components/Form/RegisterForm/RegisterForm";
import { getServerSession } from "next-auth";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { redirect } from "next/navigation";

import React from "react";

const page = async () => {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  return (
    <>
      <h1 className="text-2xl font-semibold tracking-tight text-center">
        Create an account
      </h1>
     
      <RegisterForm />
      <div>
        <p className="text-center">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </>
  );
};

export default page;
