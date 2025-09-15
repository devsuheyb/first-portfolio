import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <h1 className="text-sky-400">hello world</h1>
      </div>
      <Hero/>
    </main>
  );
}
