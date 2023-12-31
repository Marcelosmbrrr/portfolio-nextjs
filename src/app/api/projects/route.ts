import { PrismaClient } from '@prisma/client';
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

const prisma = new PrismaClient();

export async function GET(request: Request) {

    const projects = await prisma.project.findMany();

    if (!projects || projects.length === 0) {
        return new Response(JSON.stringify({
            message: 'Nenhum projeto encontrado!'
        }), {
            status: 404
        });
    }

    // @ts-ignore
    const payload = projects.map(project => {

        let stage = '';
        if (project.stage === 1) {
            stage = 'Planejamento';
        } else if (project.stage === 2) {
            stage = 'Desenvolvimento';
        } else if (project.stage === 3) {
            stage = 'Concluído';
        } else {
            stage = 'Publicado';
        }

        let images: string[] = [];
        if (project.image.includes('&')) {
            const folder = project.image.split('&')[0];
            const images_quantity = project.image.split('&')[1];
            for (let i = 1; i <= Number(images_quantity); i++) {
                images.push(folder + '/img' + i + '.png');
            }
        } else {
            images = [project.image + '/img1.png'];
        }

        return {
            id: project.id,
            name: project.name,
            description: project.description,
            published: project.published,
            stage: stage,
            technologies: project.technologies,
            content: project.content,
            images: images, // TODO: Change this to an array of images
            created_at: project.created_at,
            updated_at: project.updated_at
        }

    });

    return new Response(JSON.stringify({ projects: payload }), {
        status: 200
    });
}

export async function POST(request: Request) {

    const { name, description, published, stage, technologies, content, image } = await request.json();

    // Get image filename
    const image_filename = '';

    // Save image to public/img/projects
    // const image_path = path.join(process.cwd(), 'public/img/projects', image_filename);

    const image_path = '';

    const project = await prisma.project.create({
        data: {
            name: name,
            description: description,
            published: published,
            stage: stage,
            technologies: technologies,
            content: content,
            image: image_path
        }
    });

    return new Response(JSON.stringify({
        message: 'Projeto criado com sucesso!',
        project: project
    }), {
        status: 200
    });

}