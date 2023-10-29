import { comments } from "$lib/comments.js";
import { json } from "@sveltejs/kit";


//Dynamic API Routes :

export function GET(requestEvent) {
    const { params } = requestEvent;
    const { commentId } = params;
    const comment = comments.find(
        (comment) => comment.id === parseInt(commentId)
    );
    return json(comment);
}


// Handling Path Request:

export async function PATCH(requestEvent) {
    const { params, request } = requestEvent;
    const { commentId } = params;
    const { text } = await request.json();

    const comment = comments.find((comment) => comment.id === parseInt(commentId));

    if (comment) {
        comment.text = text;
        return json(comment);
    } else {
        return json({ error: "Comment not found" }, { status: 404 });
    }
}


// Handling Delete Request:


export function DELETE(requestEvent) {
    const { params } = requestEvent;
    const { commentId } = params;
    const deletedcomment = comments.find((comment) => comment.id === parseInt(commentId));
    const index =  comments.findIndex((comment) => comment.id === parseInt(commentId));
    comments.splice(index, 1);
    return json(deletedcomment);

}
