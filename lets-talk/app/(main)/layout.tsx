import NavBar from "@/components/NavBar";
import { SignIn } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { neobrutalism } from "@clerk/themes";
import Image from "next/image";
import Navbar from "../../components/NavBar";


export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const user = await currentUser();
    if (!user) {
      return (
        <main className="flex flex-col items-center p-5 gap-10 animate-fade-in">
          <section className="flex flex-col items-center">
            <Image src="/assets/logo.svg" alt="Logo" width={100} height={100} />
            <h1 className="text-lg font-extrabold  lg:text-2xl">
              connect , communicate and share your ideas with the world
            </h1>
          </section>
          <div className="mt-3">
            <SignIn
              /* routing="hash" est utilisé ici pour simplifier la gestion des routes d'authentification et éviter des conflits avec le routage de Next.js.*/
              routing="hash"
              appearance={{
                baseTheme: neobrutalism,
              }}
            />
          </div>
        </main>
      );
    }
  return (
    <main className="relative">
      <NavBar/>

      <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
        <div className="w-full">{children}</div>
      </section>
    </main>
  );
}
