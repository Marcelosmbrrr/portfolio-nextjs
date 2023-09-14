'use client'

import * as React from 'react';
import { useSnackbar } from 'notistack';
// Custom
import { DeleteIcon } from '../icons/DeleteIcon';
import { SpinnerIcon } from '../icons/SpinnerIcon';
import { api } from '@/services/api';

interface IProps {
    project_id: string
}

export const DeleteResource = React.memo((props: IProps) => {

    const [open, setOpen] = React.useState(false);
    const [pending, setPending] = React.useState(false);
    const { enqueueSnackbar } = useSnackbar();

    function onSubmit() {
        setPending(true);
        api.delete('api/projects/' + props.project_id)
            .then(response => {
                enqueueSnackbar(response.data.message, { variant: "success" });
                setTimeout(() => {
                    setOpen(false);
                }, 500);
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

    return (
        <>
            <button onClick={() => setOpen(true)} type="button" className="text-green-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 font-medium rounded-full text-sm p-2 text-center inline-flex items-center mr-2">
                <DeleteIcon />
            </button>

            {open &&
                <div className="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity"></div>
                    {/* Modal */}
                    <div className="flex min-h-full items-center justify-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                            <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                                <button onClick={() => setOpen(false)} type="button" className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="deleteModal">
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </button>
                                <svg className="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                                <p className="mb-4 text-gray-500 dark:text-gray-300">O projeto será permanentemente deletado.</p>
                                <div className="flex justify-center items-center space-x-4">
                                    <button onClick={() => setOpen(false)} className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                        Cancelar
                                    </button>
                                    <button disabled={pending} onClick={onSubmit} className="focus:outline-none text-white bg-red-800 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                                        {pending ? <SpinnerIcon /> : "Confirmar"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}); 