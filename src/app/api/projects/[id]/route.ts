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

    return new Response(JSON.stringify({ project: project }), {
        status: 200
    });
}

export async function PATCH(request: Request) {
    //
}

export async function DELETE(request: Request) {
    //
}