import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

    const project1_content: string = "Em 2023 a curiosidade e a necessidade me motivaram a estudar, entre outras coisas, tecnologias alternativas no frontend e backend. Para isso, tive a ideia de criar um projeto que consistia em uma api que seria replicada em cada uma das tecnologias que eu queria testar no backend, e um frontend que a consumiria, e que seria também uma réplica de um modelo planejado. O Laravel e o React eram as tecnologias que eu já utilizava, então além deles foi utilizado Vue e Angular no frontend, e quanto ao backend, CodeIgniter, AdonisJS e NestJS. Não utilizei a abordagem de microserviços, pois o objetivo era apenas testar as tecnologias, e não criar uma aplicação complexa.\nCom esse estudo aprendi que é possível utilizar qualquer um desses frameworks para alcançar os mesmos resultados na maioria das vezes. Além disso, consegui entender melhor as diferenças entre cada uma das tecnologias, e suas vantagens e desvantagens considerando alguns critérios, como curva de aprendizado, produtividade e qualidade da documentação. O CodeIgniter é um bom framework, mas não o considero um concorrente a altura do Laravel. A produtividade do AdonisJS me agradou muito, e é compreeensível que seja chamado por alguns de 'Laravel do Javascript'. O NestJS é muito flexível, alguns se referem a ele como um 'agregador de bibliotecas'. Por esse mesmo motivo é menos produtivo. Pareceu ser uma ótima alternativa ao Express. No frontend, o Vue e o Angular se demonstraram excelentes. Por ser comumente integrado com Laravel e mais simples, depois do React foi o Vue que se tornou a minha segunda carta na manga.\nTendo matado a curiosidade de conhecer essas tecnologias, julguei que era hora de me lançar no mercado, a fim de encontrar melhores oportunidades de trabalho. Para isso, decidi criar um projeto que fosse mais próximo de uma aplicação real, e que fosse também um modelo de portfolio. O frontend foi desenvolvido com NextJS e Tailwind CSS, e o backend com o seu sistema de api integrado com a biblioteca Prisma ORM. A aplicação está hospedada na Vercel, e ainda utiliza o Planet Scale como serverless database."

    const project2_content: string = "";

    const projects = await prisma.project.createMany({
        data: [
            {
                name: 'Portfolio',
                published: true,
                technologies: 'NextJS, Tailwind CSS, Auth0, PlanetScale, Vercel',
                description: 'Uma aplicação de portfolio para mostrar minhas habilidades, estudos e projetos.',
                content: project1_content,
                image: 'fe58602a-158b-4d3d-bd8a-8aae1833fee9&3', // &number = for set of images // img1.png, img2.png, img3.png
                stage: 4
            },
            {
                name: 'OctoPages',
                published: false,
                technologies: 'Laravel, Inertia, VueJS, Tailwind CSS e AWS',
                description: 'Uma aplicação para criar páginas de venda estáticas para conversão. Uma solução simples para quem tem pressa e não quer perder tempo.',
                content: project2_content,
                image: 'dbb5ca45-05a5-464f-844e-e2f60d6d31dd', // Only one image
                stage: 1
            }
        ]
    });

}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })