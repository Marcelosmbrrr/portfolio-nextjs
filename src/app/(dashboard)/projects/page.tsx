'use client'

import * as React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
// Custom
import { api } from '@/services/api';
import { ProjectCard } from '@/components/projects-page/project-card/ProjectCard';
import { ProjectsActions } from '@/components/projects-page/project-actions/ProjectsActions';

interface IProject {
    id: string;
    published: boolean;
    images: string[];
    name: string;
    technologies: string;
    description: string;
    stage: string;
    created_at: string;
    updated_at: string;
}

export type ProjectSelected = IProject | null;
type Projects = Array<IProject>;

export default function Projects() {

    const [projects, setProjects] = React.useState<Projects>([]);
    const [projectSelected, setProjectSelected] = React.useState<ProjectSelected>(null);
    const [pending, setPending] = React.useState<boolean>(true);
    // Context
    const { user } = useUser();

    React.useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function fetchData() {
        setProjectSelected(null);
        setPending(true);
        api.get('api/projects')
            .then(response => {
                setProjects(response.data.projects);
            })
            .catch(e => {
                requestError(e);
            })
            .finally(() => {
                setPending(false);
            })
    }

    function requestError(e: any) {
        console.error(e, e.stack);
        if (e.response.data.message != undefined) {
            enqueueSnackbar(e.response.data.message, { variant: "error" });
        } else {
            enqueueSnackbar("Erro do Servidor", { variant: "error" });
        }
    }

    function onSelection(project: IProject) {
        // Remove if already selected
        if (projectSelected != null && String(projectSelected.id) === String(project.id)) {
            setProjectSelected(null);
            return;
        }
        // Push if not selected or if selected is different
        setProjectSelected(project);
    }

    return (
        <>
            <SnackbarProvider />
            <div className='flex flex-wrap gap-1 py-5 border-y'>
                <div className='mx-auto max-w-7xl grow basis-96'>
                    <div>
                        <div className='mb-2'>
                            <span className='font-bold text-5xl text-stone-800 dark:text-white'>Meus Projetos</span>
                        </div>
                        <div>
                            <p className='text-md text-stone-700 dark:text-white text-justify'>
                                Aqui estão listados os projetos que desenvolvi e que estou desenvolvendo. Clique em um projeto para selecioná-lo. Os que foram publicados podem ser visualizados clicando no botão &apos;Visualizar&apos;.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mx-auto max-w-7xl pb-5 px-2'>
                <ProjectsActions selection={projectSelected} can_create={!!user} can_update={!!user && !!projectSelected} can_view={!!projectSelected} fetchData={fetchData} />
                {pending &&
                    <div className='mt-3'>
                        <p className='text-md text-stone-700 dark:text-white text-justify'>Carregando...</p>
                    </div>
                }
                <div className='flex flex-wrap gap-5 mt-5'>
                    {!pending && projects.length > 0 && projects.map((project) =>
                        <ProjectCard project={project} isSelected={projectSelected?.id === project.id} onSelection={onSelection} key={project.id} />
                    )}
                </div>
            </div>
        </>
    );
}
