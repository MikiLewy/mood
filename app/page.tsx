import { auth } from '@clerk/nextjs';
import Link from 'next/link';

export default function Home() {
  const { userId } = auth();

  let href = userId ? '/journal' : '/new-user';

  return (
    <div className="w-screen h-screen bg-black flex justify-center  items-center text-white">
      <div className="w-full max-w-[600px] mx-auto flex flex-col gap-5">
        <h1 className="text-6xl">The best Journal app</h1>
        <p className="text-2xl text-white/60">
          This is the best app for tracking your mood through out your life. All
          you have to do is be honest
        </p>
        <Link href={href}>
          <button className="bg-blue-600  px-4 py-3 rounded-lg text-xl cursor-pointer hover:bg-blue-800 duration-500">
            Get started
          </button>
        </Link>
      </div>
    </div>
  );
}
