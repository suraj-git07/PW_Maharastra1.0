import Bannar from "@/components/Molecules/Bannar";
import Hero from "@/components/Molecules/Hero"
import Batch from "@/components/Molecules/Batch"
import Results from "@/components/Molecules/Results"
import { Suspense } from "react";


export default function Home() {
  return (
    <div>
      <Suspense/>
      <Suspense fallback={<p>Loading feed...</p>}>
      <Bannar/>
      </Suspense>
        <Hero/>
        <Batch/>
        <Results/>
    </div>
  );
}
