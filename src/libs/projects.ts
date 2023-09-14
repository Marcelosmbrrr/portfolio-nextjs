import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getProjects() {
    // 
}

export async function getProject(project_id: string) {

    const project = await prisma.project.findUnique({
        where: {
            id: Number(project_id)
        }
    });

    if (!project) {
        return {
            error: true,
            message: "Projeto não encontrado.",
            project: null
        }
    }

    return {
        error: false,
        message: "Projeto encontrado.",
        project: project
    };

}