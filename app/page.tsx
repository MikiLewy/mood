import Link from 'next/link';

export default function Home() {
  return (
    <main className=" w-screen h-screen bg-black flex justify-center flex-col items-center text-white ">
      <div className="w-full max-w-[600px] mx-auto flex flex-col gap-5">
        <h1 className="text-6xl">The best Journal app</h1>
        <p className="text-2xl text-white/60">
          This is the best app for tracking your mood through out your life. All
          you have to do is be honest
        </p>
        <Link href={'/journal'}>
          <button className="bg-blue-600  px-4 py-3 rounded-lg text-xl cursor-pointer hover:bg-blue-800 duration-500">
            Get started
          </button>
        </Link>
      </div>
    </main>
  );
}
