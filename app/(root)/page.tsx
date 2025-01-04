import Image from "next/image";
import Hello from "@/app/components/hello";

export default async function Home() {
  return (
      <div>
          <Hello/>
        <h1 className="text-3xl">Home</h1>
      </div>

  );
}
