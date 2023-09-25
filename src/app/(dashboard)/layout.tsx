"use client"

import * as React from 'react';
import { usePathname } from 'next/navigation'
import { SideNavFixed } from '@/components/sidenav/SideNavFixed';
import { SideNavUnfixed } from '@/components/sidenav/SideNavUnfixed';
import { useTheme } from '@/context/ThemeContext';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

  const [openMenu, setOpenMenu] = React.useState(false);
  const { ThemeButton } = useTheme();
  const pathname = usePathname()

  function actualRouteName() {
    if (pathname === '/') {
      return 'Home';
    } else if (pathname === '/projects') {
      return 'Projetos';
    } else if (pathname === '/login') {
      return 'Autenticação';
    }
  }

  function onOpenMenu() {
    setOpenMenu(true);
  }

  function onCloseMenu() {
    setOpenMenu(false);
  }

  return (
    <div className="flex h-screen dark:bg-stone-950">
      <SideNavFixed />
      {openMenu &&
        <SideNavUnfixed onClose={onCloseMenu} />
      }
      <section className="flex flex-col flex-grow overflow-y-auto">

        <header className="w-full h-12 flex justify-between items-center px-3 pt-5">
          <div className="flex items-center gap-3">
            <div onClick={onOpenMenu} className="lg:hidden p-1 rounded-md text-gray-800 dark:text-white cursor-pointer transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-gray-800 dark:text-white hover:text-cyan-400 dark:hover:text-cyan-400 cursor-pointer transition-all">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
              </svg>
            </div>
            <div>
              <span className="text-2xl font-semibold text-zinc-800 dark:text-white">{actualRouteName()}</span>
            </div>
          </div>
          <div>
            {ThemeButton()}
          </div>
        </header>

        <main className="px-4 pt-4">
          {children}
        </main>

      </section>
    </div>
  )
}
