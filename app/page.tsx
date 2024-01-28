import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }
  return (
    <main className=" flex justify-center items-center w-screen h-screen">
      Home page
    </main>
  );
}
