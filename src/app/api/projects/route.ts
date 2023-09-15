import { PrismaClient } from '@prisma/client';
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

const prisma = new PrismaClient();

export async function GET(request: Request) {

    const projects = await prisma.project.findMany();

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

        return {
            id: project.id,
            name: project.name,
            description: project.description,
            published: project.published,
            stage: stage,
            technologies: project.technologies,
            content: project.content,
            image: project.image,
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