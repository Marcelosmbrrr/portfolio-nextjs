'use client'

import * as React from 'react';
import { useParams } from 'next/navigation'
// Custom
import { useTheme } from '@/context/ThemeContext';
import { api } from '@/services/api';
import { Carousel } from '@/components/carousel/Carousel';

interface Project {
    id: string;
    published: boolean;
    images: string[];
    name: string;
    technologies: string;
    description: string;
    content: string[];
    stage: string;
    created_at: string;
}

export default function Project() {

    const [project, setProject] = React.useState<Project>({} as Project);
    const [pending, setPending] = React.useState<boolean>(true);
    const [error, setError] = React.useState<boolean>(false);
    // Context
    const { ThemeButton } = useTheme();
    const params = useParams()

    React.useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function fetchData() {
        api.get(`/api/projects/${params.id}`)
            .then(response => {
                setProject(response.data.project);
            })
            .catch(e => {
                console.error(e, e.stack);
                setError(true);
            })
            .finally(() => {
                setPending(false);
            })
    }

    function renderContent() {
        if (pending) {
            return <p className='text-md mb-2 text-stone-950 dark:text-white'>Carregando...</p>
        } else if (!pending && error) {
            return <p className='text-md mb-2 text-stone-950 dark:text-white'>Erro ao carregar o projeto.</p>
        } else if (!pending && !error) {
            return project.content.map((paragraph, index) =>
                <p className='text-md text-justify mb-2 text-stone-950 dark:text-white' key={index}>{paragraph}</p>
            )
        }
    }

    return (
        <div className='h-auto dark:bg-stone-950'>

            <header className='h-14 px-2 flex justify-between items-center'>
                <button onClick={() => window.close()} className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white dark:bg-stone-950 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-cyan-400 dark:hover:text-cyan-400 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700">
                    Voltar
                </button>
                <div>
                    {ThemeButton()}
                </div>
            </header>

            <div className='flex flex-wrap gap-1 py-5 border-y'>
                <div className='mx-auto max-w-7xl grow basis-96 px-5'>
                    <div>
                        <div className='mb-2'>
                            <span className='font-bold text-5xl text-stone-800 dark:text-white'>{project.name}</span>
                        </div>
                        <div>
                            <p className='text-md text-stone-700 dark:text-white text-justify'>
                                {project.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mx-auto max-w-7xl p-5'>
                <Carousel images={project.images} />
                <div>
                    {renderContent()}
                </div>
            </div>

        </div>
    )
}
