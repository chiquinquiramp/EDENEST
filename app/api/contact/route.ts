function isRecord(value: unknown): value is Record<string, unknown> {
    return (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
    );
}

export async function POST(request: Request) {
    let data: unknown;
    
    try{
        data = await request.json();

    } catch {
        return Response.json(
            {error: "Invalid JSON"},
            {status: 400}
        );
    }

    if (!isRecord(data)) {
        return Response.json(
            {error: "Invalid request body"},
            {status: 400}
        );
    }
    if (typeof data.name !== "string") {
            return Response.json(
                {error: "Name must be text" },
                { status : 400}
            );
    }

    if (data.name.trim() === "") {
        return Response.json(
            {error: "Name is required"},
            { status: 400}
        );
    }

    if (typeof data.email !== "string") {
        return Response.json(
            {error: "Email must be text"},
            {status: 400}
        );
    }

    if (data.email.trim() === "") {
        return Response.json(
        {error:"Email is required"},
        {status: 400}
    );
}
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    return Response.json(
        { error: "Invalid email format" },
        { status: 400 }
    );
}

        if (typeof data.message !== "string") {
            return Response.json(
                {error: "Message must be text"},
                {status: 400}
            )
    }
     if (data.message.trim() === "") {
        return Response.json(
        {error:"Message is required"},
        {status: 400}
    );
}
    return Response.json({ ok: true });
}