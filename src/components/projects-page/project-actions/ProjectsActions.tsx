'use client'

import * as React from 'react';
import { ProjectSelected } from '@/app/(dashboard)/projects/page';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';

interface IProps {
    selection: ProjectSelected | null;
    can_view: boolean;
    can_create: boolean;
    can_update: boolean;
    fetchData: () => void;
}

export function ProjectsActions({ selection, can_create, can_update, can_view, fetchData }: IProps) {

    function showProject() {
        if (selection != null) {
            if (selection.published) {
                window.open('/projects/' + selection.id, '_blank');
            } else {
                enqueueSnackbar("Visualização indisponível.", { variant: "error" });
            }
        }
    }

    function editProject() {
        if (selection != null) {
            if (selection.published) {
                window.open('/projects/update/' + selection.id, '_blank');
            } else {
                enqueueSnackbar("Visualização indisponível.", { variant: "error" });
            }
        }
    }

    return (
        <>
            <SnackbarProvider />
            <div className='flex gap-2 mt-5'>
                {can_create &&
                    <a href="projects/create" target='_blank' className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none cursor-pointer bg-white dark:bg-stone-950 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-cyan-400 dark:hover:text-cyan-400 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700">
                        Criar
                    </a>
                }
                {can_update &&
                    <button onClick={editProject} className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white dark:bg-stone-950 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-cyan-400 dark:hover:text-cyan-400 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700">
                        Editar
                    </button>
                }
                {can_view &&
                    <button onClick={showProject} className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white dark:bg-stone-950 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-cyan-400 dark:hover:text-cyan-400 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700">
                        Visualizar
                    </button>
                }
                <button onClick={fetchData} className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white dark:bg-stone-950 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-cyan-400 dark:hover:text-cyan-400 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700">
                    Recarregar
                </button>
            </div>
        </>
    )

}