import Link from 'next/link';
import Image from 'next/image';
import { getSession } from '@auth0/nextjs-auth0/edge';
// Custom
import { CloseMenuButton } from '../buttons/CloseMenuButton.tsx';
import { ExitIcon } from '../icons/ExitIcon';
import { FingerPrintIcon } from '../icons/FingerPrintIcon';
import { HouseIcon } from '../icons/HouseIcon';
import { BottleIcon } from '../icons/BottleIcon';

interface IProps {
    onClose: () => void;
}

export function SideNavUnfixed({ onClose }: IProps) {

    // const { user } = getSession();
    const user = false;

    return (
        <aside className="fixed top-0 left-0 flex flex-col lg:hidden h-full text-white w-60 py-1 pl-1 flex-shrink-0 overflow-y-auto rounded">
            <div
                className="h-full flex flex-col justify-between bg-stone-900 dark:border p-2 rounded-lg shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">

                <div className="flex flex-col justify-between gap-2">

                    <CloseMenuButton onClose={onClose} />

                    <div className="w-full flex justify-center items-center gap-5 h-10">
                        <div className='flex items-center gap-1'>
                            <span className="text-md font-semibold dark:text-white">MarceloSMBR</span>
                        </div>
                    </div>

                    <div className="flex justify-center w-full h-auto cursor-pointer mb-1">
                        <div className='w-40 h-40 rounded-full bg-red-200' style={{ backgroundImage: "url('/images/avatar/me.jpg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                        </div>
                    </div>

                    <div className="w-full flex items-center gap-5 h-10 border-y border-y-stone-800 dark:border-y-stone-800">
                        <div>
                            <span className="text-md font-semibold dark:text-white">Menu</span>
                        </div>
                    </div>

                    <Link href="/"
                        className="w-full flex items-center gap-5 h-10 rounded-md hover:bg-stone-800 cursor-pointer transition-all">
                        <div className="px-2">
                            <HouseIcon />
                        </div>
                        <div>
                            <span className="text-md font-semibold dark:text-white">Home</span>
                        </div>
                    </Link>

                    <Link href="projects"
                        className="w-full flex items-center gap-5 h-10 rounded-md hover:bg-stone-800 cursor-pointer transition-all">
                        <div className="px-2">
                            <BottleIcon />
                        </div>
                        <div>
                            <span className="text-md font-semibold dark:text-white">Projetos</span>
                        </div>
                    </Link>

                    <div className="w-full flex items-center gap-5 h-10 border-y border-y-stone-800 dark:border-y-stone-800">
                        <div>
                            <span className="text-md font-semibold dark:text-white">Admin</span>
                        </div>
                    </div>

                    {!user &&
                        <a href="/api/auth/login"
                            className="w-full flex items-center gap-5 h-10 rounded-md hover:bg-stone-800 cursor-pointer transition-all">
                            <div className="px-2 text-cyan-400">
                                <FingerPrintIcon />
                            </div>
                            <div>
                                <span className="text-md font-semibold dark:text-white">Acessar</span>
                            </div>
                        </a>
                    }

                    {user &&
                        <a href="/api/auth/logout"
                            className="w-full flex items-center gap-5 h-10 rounded-md hover:bg-stone-800 cursor-pointer transition-all">
                            <div className="px-2 text-cyan-400">
                                <ExitIcon />
                            </div>
                            <div>
                                <span className="text-md font-semibold dark:text-white">Deslogar</span>
                            </div>
                        </a>
                    }
                </div>

                <div className='w-full flex justify-center items-center gap-3 pb-3'>
                    <Image width={45} height={45} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="react icon" />
                    <Image width={45} height={45} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className='bg-white rounded-full' alt="nextjs icon" />
                    <Image width={45} height={45} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="nodejs icon" />
                </div>
            </div>
        </aside >
    )
}