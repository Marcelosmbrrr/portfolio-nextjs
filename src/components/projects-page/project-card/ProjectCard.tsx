'use client'

import Image from 'next/image';

interface IProject {
    id: string;
    published: boolean;
    image: string;
    name: string;
    technologies: string;
    description: string;
    stage: string;
    created_at: string;
    updated_at: string;
}

interface IProps {
    project: IProject;
    isSelected: boolean;
    onSelection: Function;
}

export function ProjectCard({ project, onSelection, isSelected }: IProps) {

    function setClassName() {
        if (!isSelected) {
            return "basis-96 w-96 h-70 cursor-pointer dark:bg-stone-950 hover:shadow-2xl hover:shadow-blue-500/20 transition-all hover:scale-105 hover:z-50 bg-white border";
        } else if (isSelected) {
            return "basis-96 w-96 h-70 cursor-pointer dark:bg-stone-950 shadow-2xl shadow-blue-500/20 transition-all scale-105 hover:z-50 bg-white border";
        }
    }

    return (
        <div onClick={() => onSelection(project)} className={setClassName()} key={project.id}>
            <div className='relative h-40 overflow-y-hidden'>
                <Image src={project.image} fill={true} alt='project image' />
            </div>
            <div className='p-1'>
                <div className='text-stone-950 dark:text-white dark:bg-stone-950 pt-2'>
                    <div>
                        <span className='font-semibold'>{project.name}</span>
                    </div>
                    <div className='h-20 break-words text-justify mt-2'>
                        <p className='text-sm'>{project.description}</p>
                    </div>
                </div>
                <div>
                    <div className='dark:bg-stone-950'>
                        <span className='text-xs dark:text-white text-stone-950'>Fase: {project.stage}</span>
                    </div>
                    <div className='dark:bg-stone-950'>
                        <span className='text-xs dark:text-white text-stone-950'>Tecnologias: {project.technologies}</span>
                    </div>
                    <div className='dark:bg-stone-950'>
                        <span className='text-xs dark:text-white text-stone-950'>Postado em: {project.created_at} | Última atualização: {project.updated_at}</span>
                    </div>
                </div>
            </div>
        </div>
    )

}