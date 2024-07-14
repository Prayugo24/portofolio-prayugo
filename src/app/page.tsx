import { HomeComponent } from "@/interfaces/components/home/homeComponent";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="c flex-col gap-20">
        <HomeComponent/>
      </div>

    </main>
  );
}
