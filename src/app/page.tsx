import { HomeComponent } from "@/interfaces/components/home/homeComponent";
import Image from "next/image";
import "@/styles/globals.css";
export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <HomeComponent/>
      </div>

    </main>
  );
}
