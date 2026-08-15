import { prisma } from "./lib/prisma";

export default async function Home() {
    const users = await prisma.user.findMany({
        orderBy: { createdAt: "desc" },
    });

    return (
        <main className="p-8 max-w-2xl mx-auto">
            <h1>All Posts!</h1>
        </main>
    );
}
