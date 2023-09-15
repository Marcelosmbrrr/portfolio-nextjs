import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request, { params }: { params: { id: string } }) {

    const project_id = params.id;

    const project = await prisma.project.findUnique({
        where: {
            id: Number(project_id)
        }
    });

    if (!project) {
        return new Response(JSON.stringify({ message: "Projeto não encontrado." }), {
            status: 404
        });
    }

    const payload = {
        id: project.id,
        name: project.name,
        description: project.description,
        published: project.published,
        technologies: project.technologies,
        content: project.content,
        image: project.image + '/img1.png', // TODO: Change this to an array of images
        created_at: project.created_at,
        updated_at: project.updated_at
    }

    return new Response(JSON.stringify({ project: payload }), {
        status: 200
    });
}

export async function PATCH(request: Request) {
    //
}

export async function DELETE(request: Request) {
    //
}