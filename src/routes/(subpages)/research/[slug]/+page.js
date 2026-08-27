import { error } from '@sveltejs/kit';

export async function load({ params }) {
    const { slug } = params;

    try {
        const post = await import(`$lib/research/${slug}.svx`);

        return {
            content: post.default,
            metadata: post.metadata
        };
    } catch (e) {
        error(404, `Not Found`);
    }
}
