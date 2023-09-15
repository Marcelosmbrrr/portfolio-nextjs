'use client'

import * as React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useSnackbar } from 'notistack';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { useParams } from 'next/navigation'
// Custom
import { useTheme } from '@/context/ThemeContext';
import { api } from '@/services/api';

interface Project {
    id: string;
    published: boolean;
    image: string;
    name: string;
    technologies: string;
    description: string;
    content: string;
    stage: string;
    created_at: string;
}

const schema = yup.object({
    name: yup.string().max(50, 'Deve ter no máximo 50 caracteres').required('O nome do projeto é obrigatório.'),
    description: yup.string().max(150, 'Deve ter no máximo 150 caracteres.').required('A descrição do projeto é obrigatória.'),
    published: yup.boolean().required('A publicação do projeto é obrigatória.'),
    technologies: yup.string().required('As tecnologias utilizadas no projeto são obrigatórias.'),
    stage: yup.string().required('O estágio do projeto é obrigatório.'),
    content: yup.string().required('O conteúdo do projeto é obrigatório.'),
    image: yup.mixed().default(null).required('*'),
}).required();

type FormData = yup.InferType<typeof schema>;

export default withPageAuthRequired(function Project() {

    const [pending, setPending] = React.useState<boolean>(true);
    const [error, setError] = React.useState<boolean>(false);
    const imgRef = React.useRef<HTMLImageElement>(null);
    // Context
    const { ThemeButton } = useTheme();
    const { enqueueSnackbar } = useSnackbar();
    const params = useParams()

    const { register, handleSubmit, formState: { errors }, setValue, getValues, watch } = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    watch('image');

    React.useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function fetchData() {
        api.get(`api/projects/${params.id}`)
            .then(response => {
                setFormValues(response.data.project);
            })
            .catch(e => {
                console.error(e, e.stack);
                setError(true);
            })
            .finally(() => {
                setPending(false);
            })
    }

    function setFormValues(project: Project) {
        setValue('name', project.name);
        setValue('description', project.description);
        setValue('technologies', project.technologies);
        setValue('stage', project.stage);
        setValue('published', project.published);
        setValue('content', project.content);
        setValue('image', project.image);
        // @ts-ignore
        imgRef.current.style.backgroundImage = `url(${project.image})`;
    }

    function onSubmit(form: FormData) {
        try {
            setPending(true);
            console.log(form)
        } catch (e) {
            requestError(e);
        } finally {
            setPending(false);
        }
    }

    function requestError(e: any) {
        console.error(e, e.stack);
        if (e.response.data.message != undefined) {
            enqueueSnackbar(e.response.data.message, { variant: "error" });
        } else {
            enqueueSnackbar("Erro do Servidor", { variant: "error" });
        }
    }

    function closePage() {
        window.close();
    }

    function onChangeImage(e: any) {
        const uploaded_file = e.currentTarget.files[0];
        if (uploaded_file && uploaded_file.type.startsWith('image/')) {
            setValue('image', uploaded_file);
            const reader = new FileReader();
            reader.onload = function (e: any) {
                const dataURL = e.target.result;
                // @ts-ignore
                imgRef.current.style.backgroundImage = `url(${dataURL})`;
            };
            reader.readAsDataURL(uploaded_file);
        }
    }

    return (
        <div className='h-auto dark:bg-stone-950'>

            <header className='h-14 px-2 flex justify-between items-center'>
                <button onClick={closePage} className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white dark:bg-stone-950 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-cyan-400 dark:hover:text-cyan-400 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700">
                    Voltar
                </button>
                <div>
                    {ThemeButton()}
                </div>
            </header>

            <form onSubmit={handleSubmit(onSubmit)} className='py-3'>

                <div className='flex flex-wrap gap-1 py-5 border-y'>
                    <div className='mx-auto max-w-7xl grow basis-96 px-5'>
                        <div>
                            <div className="mb-6">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
                                <input type="text" {...register('name')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Informe o nome do projeto" />
                                <span className='text-red-500 text-sm'>{errors.name?.message}</span>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descrição</label>
                                <input type="text" {...register('description')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Informe a descrição do projeto" />
                                <span className='text-red-500 text-sm'>{errors.description?.message}</span>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="technologies" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tecnologias</label>
                                <span className='block mb-2 text-xs font-medium text-gray-500 dark:text-gray-500'>Utilize vírgula para separar os nomes. Ex: React, Laravel, PHP</span>
                                <input type="text" {...register('technologies')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Informe as tecnologias do projeto" />
                                <span className='text-red-500 text-sm'>{errors.technologies?.message}</span>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fase</label>
                                <select {...register('stage')} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                                    <option selected>Selecione uma opção</option>
                                    <option value="1">Planejamento</option>
                                    <option value="2">Desenvolvimento</option>
                                    <option value="3">Concluído</option>
                                    <option value="4">Publicado</option>
                                </select>
                                <span className='text-red-500 text-sm'>{errors.stage?.message}</span>
                            </div>
                            <div className="flex items-center mb-6">
                                <input {...register('published')} value={1} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 dark:bg-gray-700 border-gray-300 rounded-md dark:border-gray-600" />
                                <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Leitura Disponível</label>
                            </div>
                            <div className='flex justify-end mb-2'>
                                <button type='submit' className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white dark:bg-stone-950 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-cyan-400 dark:hover:text-cyan-400 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700">
                                    Atualizar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mx-auto max-w-7xl p-5'>
                    <div className='relative'>
                        <div>
                            <input onChange={onChangeImage} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" accept='.png,.jpg,.jpeg' type="file" />
                        </div>
                        <div ref={imgRef} className='mt-3 w-full h-[450px] border border-gray-300 rounded-lg flex justify-center items-center' style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                            {!getValues('image') &&
                                <div className='text-stone-800 dark:text-white'>
                                    Selecione a imagem do projeto <span className='text-red-500 text-sm'>{errors.image?.message}</span>
                                </div>
                            }
                        </div>
                    </div>
                    <div className='mt-2'>
                        <textarea {...register('content')} rows={20} className='w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white border text-justify' placeholder='Informe o texto acerca do projeto'></textarea>
                        <span className='text-red-500 text-sm'>{errors.content?.message}</span>
                    </div>
                </div>

            </form>
        </div>
    )
});