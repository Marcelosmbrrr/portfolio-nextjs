import * as React from 'react';
import Image from 'next/image';

export default function Home() {

  return (
    <>
      <div className='flex flex-wrap gap-1 py-5 border-y'>
        <div className='mx-auto max-w-7xl grow basis-96'>
          <div>
            <div className='mb-1'>
              <span className='font-bold text-5xl text-stone-800 dark:text-white'>Marcelo Moreira</span>
            </div>
            <div className='mb-2'>
              <span className='text-2xl font-light text-stone-700 dark:text-white'>Desenvolvedor Full Stack</span>
            </div>
          </div>
          <div className='flex gap-2 mt-5'>
            <div>
              <a href='https://github.com/Marcelosmbrrr' target='_blank' className="py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white dark:bg-stone-950 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-cyan-400 dark:hover:text-cyan-400 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700">
                Github
              </a>
            </div>
            <div>
              <a href='https://www.linkedin.com/in/marcelosmbr/' target='_blank' className="py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white dark:bg-stone-950 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-cyan-400 dark:hover:text-cyan-400 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700">
                Linkedin
              </a>
            </div>
            <div>
              <a href='/documents/cv.pdf' target='_blank' className="py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white dark:bg-stone-950 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-cyan-400 dark:hover:text-cyan-400 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700">
                Currículo
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='mx-auto max-w-7xl pb-5'>
        <div className='flex flex-wrap gap-1 p-1 mt-5'>
          <div className='grow basis-96'>
            <div>
              <div className='mb-3'>
                <span className='font-bold text-3xl text-stone-800 dark:text-white'>Minhas habilidades</span>
              </div>
              <div>
                <p className='text-md text-stone-700 dark:text-white text-justify'>
                  Essas são as tecnologias que utilizo ou já utilizei. Tenho, naturalmente, mais afinidade com algumas tecnologias e menos com outras, o que é determinado principalmente pela frequência que as utilizo.
                </p>
              </div>
            </div>
            <div className='flex flex-wrap gap-8 mt-6'>
              <div className="flex flex-col p-1 gap-2 basis-72 h-36">
                <div className='h-auto flex gap-2'>
                  <Image width={28} height={28} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt='html icon' />
                  <Image width={28} height={28} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt='js icon' />
                  <Image width={28} height={28} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt=' ts icon' />
                  <Image width={28} height={28} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt='css icon' />
                </div>
                <div className='h-auto'>
                  <span className='font-semibold dark:text-white'>Frontend Essencial</span>
                </div>
                <div className='h-full w-full text-justify'>
                  <p className='text-sm dark:text-white'>Tenho conhecimento suficiente para utilizar e ser produtivo com essas tecnologias, que são a base do frontend.</p>
                </div>
              </div>
              <div className="flex flex-col p-1 gap-2 basis-72 h-36">
                <div className='h-auto flex gap-2'>
                  <Image width={28} height={28} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='react icon' />
                  <Image width={28} height={28} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt='vue icon' />
                  <Image width={28} height={28} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt='angular icon' />
                </div>
                <div className='h-auto'>
                  <span className='font-semibold dark:text-white'>Frontend Frameworks</span>
                </div>
                <div className='h-full w-full text-justify'>
                  <p className='text-sm dark:text-white'>Utilizo React há dois anos, e minha alternativa é o Vue. Quanto ao angular, estudei o básico.</p>
                </div>
              </div>
              <div className="flex flex-col p-1 gap-2 basis-72 h-36">
                <div className='h-auto flex gap-2'>
                  <Image width={28} height={28} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className='bg-white rounded-full' alt="nextjs icon" />
                </div>
                <div className='h-auto'>
                  <span className='font-semibold dark:text-white'>NextJS</span>
                </div>
                <div className='h-full w-full text-justify'>
                  <p className='text-sm dark:text-white'>Conheço o NextJS, inclusive esse portfolio foi desenvolvido com ele. Saiba mais na página dos projetos.</p>
                </div>
              </div>
              <div className="flex flex-col p-1 gap-2 basis-72 h-36">
                <div className='h-auto flex gap-2'>
                  <Image width={28} height={28} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt='php icon' />
                  <Image width={28} height={28} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" alt='laravel icon' />
                </div>
                <div className='h-auto'>
                  <span className='font-semibold dark:text-white'>PHP</span>
                </div>
                <div className='h-full w-full text-justify'>
                  <p className='text-sm dark:text-white'>Trabalho com PHP e Laravel há dois anos.</p>
                </div>
              </div>
              <div className="flex flex-col p-1 gap-2 basis-72 h-36">
                <div className='h-auto flex gap-2'>
                  <Image width={28} height={28} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt='nodejs icon' />
                  <Image width={28} height={28} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" alt='nestjs icon' />
                  <Image width={28} height={28} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adonisjs/adonisjs-original.svg" alt='adonisjs icon' />
                </div>
                <div className='h-auto'>
                  <span className='font-semibold dark:text-white'>NodeJS</span>
                </div>
                <div className='h-full w-full text-justify'>
                  <p className='text-sm dark:text-white'>Estudei o ambiente NodeJS e o desenvolvimento de apis com Express, NestJS e AdonisJs.</p>
                </div>
              </div>
              <div className="flex flex-col p-1 gap-2 basis-72 h-36">
                <div className='h-auto flex gap-2'>
                  <Image width={28} height={28} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt='mysql icon' />
                  <Image width={28} height={28} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" alt='postgre icon' />
                </div>
                <div className='h-auto'>
                  <span className='font-semibold dark:text-white'>Banco de Dados</span>
                </div>
                <div className='h-full w-full text-justify'>
                  <p className='text-sm dark:text-white'>No trabalho e nos estudos utilizo bancos relacionais, como MySQL e PostgreSQL.</p>
                </div>
              </div>
              <div className="flex flex-col p-1 gap-2 basis-72 h-36">
                <div className='h-auto flex gap-2'>
                  <Image width={28} height={28} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" alt='docker icon' />
                  <Image width={28} height={28} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt='github actions icon' />
                  <Image width={28} height={28} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className='dark:bg-white dark:rounded-full' alt='github actions icon' />
                  <Image width={28} height={28} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg" alt='digital-ocean icon' />
                </div>
                <div className='h-auto'>
                  <span className='font-semibold dark:text-white'>DevOps</span>
                </div>
                <div className='h-full w-full text-justify'>
                  <p className='text-sm dark:text-white'>Nesse escopo tenho conhecimento em Agile, Docker, CI/CD com Github Actions e Cloud Hosting com Digital Ocean.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mx-auto max-w-7xl pb-5'>
          <div className='flex flex-wrap gap-1 p-1 mt-5'>
            <div className='grow basis-96'>
              <div>
                <div className='mb-3'>
                  <span className='font-bold text-3xl text-stone-800 dark:text-white'>Estudos</span>
                </div>
                <div>
                  <p className='text-md text-stone-700 dark:text-white text-justify'>
                    Por ordem de prioriedade, essas são as tecnologias que estou estudando ou que pretendo estudar em breve.
                  </p>
                </div>
              </div>
              <div className='flex flex-wrap gap-8 mt-6'>
                <div className="flex flex-col p-1 gap-2 basis-72 h-36">
                  <div className='h-auto flex gap-2'>
                    <Image width={28} height={28} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt='aws icon' />
                  </div>
                  <div className='h-auto'>
                    <span className='font-semibold dark:text-white'>DevOps: AWS</span>
                  </div>
                  <div className='h-full w-full text-justify'>
                    <p className='text-sm dark:text-white'>Pretendo consolidar a AWS como minha principal opção de Cloud Hosting.</p>
                  </div>
                </div>
                <div className="flex flex-col p-1 gap-2 basis-72 h-36">
                  <div className='h-auto flex gap-2'>
                    <Image width={28} height={28} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original-wordmark.svg" alt='terraform icon' />
                    <Image width={28} height={28} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" alt='ansible icon' />
                  </div>
                  <div className='h-auto'>
                    <span className='font-semibold dark:text-white'>DevOps: IaC</span>
                  </div>
                  <div className='h-full w-full text-justify'>
                    <p className='text-sm dark:text-white'>Pretendo estudar Infrastructure as Code com Terraform e Ansible.</p>
                  </div>
                </div>
                <div className="flex flex-col p-1 gap-2 basis-72 h-36">
                  <div className='h-auto flex gap-2'>
                    <Image width={28} height={28} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt='java icon' />
                  </div>
                  <div className='h-auto'>
                    <span className='font-semibold dark:text-white'>Banco de dados: NoSQL</span>
                  </div>
                  <div className='h-full w-full text-justify'>
                    <p className='text-sm dark:text-white'>Apesar de ter tido contato, julgo que não foi o suficiente, por isso pretendo estudar essa tecnologia no futuro.</p>
                  </div>
                </div>
                <div className="flex flex-col p-1 gap-2 basis-72 h-36">
                  <div className='h-auto flex gap-2'>
                    <Image width={28} height={28} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" alt='java icon' />
                    <Image width={28} height={28} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" alt='spring icon' />
                  </div>
                  <div className='h-auto'>
                    <span className='font-semibold dark:text-white'>Backend: Java e Spring</span>
                  </div>
                  <div className='h-full w-full text-justify'>
                    <p className='text-sm dark:text-white'>Pretendo incluir o Java como tecnologia para desenvolvimento backend.</p>
                  </div>
                </div>
                <div className="flex flex-col p-1 gap-2 basis-72 h-36">
                  <div className='h-auto flex gap-2'>
                    <Image width={28} height={28} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" alt='kafka icon' />
                    <Image width={28} height={28} src="/images/icons/rabbit.png" alt='rabbitmq icon' />
                  </div>
                  <div className='h-auto'>
                    <span className='font-semibold dark:text-white'>Arquitetura: Microserviços</span>
                  </div>
                  <div className='h-full w-full text-justify'>
                    <p className='text-sm dark:text-white'>Microserviços e mensageria são exigências do mercado, e por isso pretendo estudar isso em breve.</p>
                  </div>
                </div>
                <div className="flex flex-col p-1 gap-2 basis-72 h-36">
                  <div className='h-auto flex gap-2'>
                    <Image width={28} height={28} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='react icon' />
                  </div>
                  <div className='h-auto'>
                    <span className='font-semibold dark:text-white'>Mobile: React Native</span>
                  </div>
                  <div className='h-full w-full text-justify'>
                    <p className='text-sm dark:text-white'>Desenvolvimento mobile é uma curiosidade e não uma necessidade. Pretendo conhecer o básico no futuro.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
