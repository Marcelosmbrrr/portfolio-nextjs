'use client'

import * as React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useSnackbar } from 'notistack';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
// Custom
import { ImgIcon } from '@/components/icons/ImgIcon';
import { useTheme } from '@/context/ThemeContext';
import { api } from '@/services/api';

const schema = yup.object({
    name: yup.string().required('O nome do projeto é obrigatório.'),
    description: yup.string().required('A descrição do projeto é obrigatória.'),
    technologies: yup.string().required('As tecnologias utilizadas no projeto são obrigatórias.'),
    stage: yup.number().required('O estágio do projeto é obrigatório.'),
    content: yup.array().of(yup.string().required('O conteúdo do projeto é obrigatório.')),
    image: yup.mixed().default(null).required('A imagem do projeto é obrigatória.'),
}).required();

type FormData = yup.InferType<typeof schema>;

export default withPageAuthRequired(function Project() {

    const [pending, setPending] = React.useState<boolean>(true);
    const imgRef = React.useRef<HTMLImageElement>(null);
    // Context
    const { ThemeButton } = useTheme();
    const { enqueueSnackbar } = useSnackbar();

    const { register, handleSubmit, formState: { errors }, setValue, getValues, watch } = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    watch('image');

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
        <div className='h-screen dark:bg-stone-950'>

            <header className='h-14 px-2 flex justify-between items-center'>
                <button onClick={closePage} className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white dark:bg-stone-950 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-cyan-400 dark:hover:text-cyan-400 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700">
                    Voltar
                </button>
                <div>
                    {ThemeButton()}
                </div>
            </header>

            <form onSubmit={handleSubmit(onSubmit)}>

            </form>

            <div className='flex flex-wrap gap-1 py-5 border-y'>
                <div className='mx-auto max-w-7xl grow basis-96 px-5'>
                    <div>
                        <div className='mb-2'>
                            <input {...register('name')} className='font-bold px-1 text-5xl w-full dark:bg-stone-950 text-stone-800 dark:text-white border rounded-sm border-gray-300 outline-none' placeholder='Informe o nome do projeto' />
                        </div>
                        <div>
                            <input {...register('description')} className='text-md px-1 text-stone-700 w-full dark:bg-stone-950 dark:text-white text-justify border rounded-sm border-gray-300 outline-none' placeholder='Informe as tecnologias utilizadas' />
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
                        {!getValues('image') && <ImgIcon />}
                        {/* img container */}
                    </div>
                </div>
                <div className='mt-2'>
                    <textarea {...register('content')} rows={15} className='w-full p-1 dark:bg-stone-950 border rounded-sm border-gray-300 outline-none' placeholder='Descreva o projeto'></textarea>
                </div>
            </div>

        </div>
    )
});