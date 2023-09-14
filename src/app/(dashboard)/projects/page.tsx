'use client'

import * as React from 'react';
import { useSnackbar } from 'notistack';
import { useUser } from '@auth0/nextjs-auth0/client';
// Custom
import { api } from '@/services/api';
import { ProjectCard } from '@/components/projects-page/project-card/ProjectCard';
import { ProjectsActions } from '@/components/projects-page/project-actions/ProjectsActions';

interface IProject {
    id: string;
    published: boolean;
    image: string;
    name: string;
    technologies: string;
    description: string;
    stage: string;
    created_at: string;
}

type Selection = IProject | null;
type Projects = Array<IProject>;

export default function Projects() {

    const [projects, setProjects] = React.useState<Projects>([]);
    const [selection, setSelection] = React.useState<Selection>(null);
    const [pending, setPending] = React.useState<boolean>(true);
    // Context
    const { user } = useUser();
    const { enqueueSnackbar } = useSnackbar();

    React.useEffect(() => {
        fetchData();
    }, []);

    function fetchData() {
        setSelection(null);
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
        if (selection != null && String(selection.id) === String(project.id)) {
            setSelection(null);
            return;
        }
        // Push if not selected or if selected is different
        setSelection(project);
    }

    function setClassName(project_id: string) {
        if (selection === null || (selection != null && project_id != selection.id)) {
            return "basis-96 w-96 h-70 cursor-pointer hover:shadow-2xl hover:shadow-blue-500/20 transition-all hover:scale-105 hover:z-50 bg-white border-2 dark:border-stone-800";
        } else if (project_id === selection.id) {
            return "basis-96 w-96 h-70 cursor-pointer shadow-2xl shadow-blue-500/20 transition-all scale-105 hover:z-50 bg-white border-2 dark:border-stone-800";
        }
    }

    function openProject() {
        if (selection != null) {
            if (selection.published) {
                window.open('/projects/' + selection.id, '_blank');
            } else {
                enqueueSnackbar("Projeto não publicado.", { variant: "error" });
            }
        }
    }

    return (
        <>
            <div className='flex flex-wrap gap-1 py-5 border-y'>
                <div className='mx-auto max-w-7xl  grow basis-96'>
                    <div>
                        <div className='mb-2'>
                            <span className='font-bold text-5xl text-stone-800 dark:text-white'>Meus Projetos</span>
                        </div>
                        <div>
                            <p className='text-md text-stone-700 dark:text-white text-justify'>
                                Aqui estão listados os projetos que desenvolvi e que estou desenvolvendo. Clique em um projeto para selecioná-lo. Os que foram publicados podem ser visualizados clicando no botão 'Visualizar'.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mx-auto max-w-7xl pb-5'>
                <ProjectsActions can_create={!!user} can_view={!!selection} fetchData={fetchData} openProject={openProject} />
                {pending &&
                    <div className='mt-3'>
                        <p className='text-md text-stone-700 dark:text-white text-justify'>Carregando...</p>
                    </div>
                }
                <div className='flex flex-wrap gap-5 mt-5'>
                    {!pending && projects.length > 0 && projects.map((project) =>
                        <ProjectCard project={project} onSelection={onSelection} setClassName={setClassName} />
                    )}
                </div>
            </div>
        </>
    );
}
