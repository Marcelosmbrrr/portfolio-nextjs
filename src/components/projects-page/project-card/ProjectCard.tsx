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
}

interface IProps {
    project: IProject;
    onSelection: Function;
    setClassName: Function;
}

export function ProjectCard({ project, onSelection, setClassName }: IProps) {

    return (
        <div onClick={() => onSelection(project)} className={setClassName(project.id)} key={project.id}>
            <div className='relative h-40 overflow-y-hidden border-b-2 dark:border-b-stone-800 dark:bg-stone-950'>
                <Image src={project.image} fill={true} alt='project image' />
            </div>
            <div className='p-1 text-stone-950 dark:text-white dark:bg-stone-950'>
                <div className='mt-1'>
                    <span className='font-semibold'>{project.name}</span>
                </div>
                <div className='h-full text-justify'>
                    <p className='text-sm text-stone-500'>{project.technologies}</p>
                </div>
                <div className='h-20 break-words text-justify mt-2'>
                    <p className='text-sm'>{project.description}</p>
                </div>
            </div>
            <div className='p-1 dark:bg-stone-950 border-t-2 dark:border-t-stone-800'>
                <span className='text-sm dark:text-white text-stone-950'>{project.stage}</span>
            </div>
        </div>
    )

}