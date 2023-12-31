import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

const links = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/journal',
    label: 'Journal',
  },
];

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-screen relative">
      <aside className="absolute w-[200px] top-0 left-0 px-2 py-6 h-full border-r border-black/10">
        <h2 className="text-2xl">Mood</h2>
        <ul className="flex flex-col gap-6 mt-6">
          {links.map((link) => (
            <li key={link.href} className=" text-xl">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </aside>
      <div className="ml-[200px] h-full">
        <header className="h-[60px] border-b border-black/10">
          <div className="h-full w-full px-6 flex items-center justify-end">
            <UserButton />
          </div>
        </header>
        <div className="h-[calc(100vh-60px)]">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
