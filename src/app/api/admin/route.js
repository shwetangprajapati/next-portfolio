import { NextResponse } from "next/server";
import { connectToDb } from "../../../lib/utils";
import { Post } from "../../../lib/models";
import { revalidatePath } from "next/cache";


connectToDb();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { title, desc, slug, userId, img } = reqBody;
        console.log(reqBody);

        const newPost = new Post({
            title,
            desc,
            slug,
            userId,
            img,
        });

        await newPost.save();
        console.log("saved to db");
        revalidatePath("/blog");
        revalidatePath("/admin");

        const response = NextResponse.json({
            success: true,
            message: "Post added successfully...",
        });

        return response;
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
