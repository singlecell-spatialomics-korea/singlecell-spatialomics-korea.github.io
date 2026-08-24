import { error } from '@sveltejs/kit';

export async function load({ params }) {
    const { slug } = params;

    try {
        const post = await import(`$lib/jobs/${slug}.svx`);

        // The .svx file exports metadata and content
        return {
            content: post.default,
            metadata: post.metadata
        };
    } catch (e) {
        error(404, `Not Found`);
    }
  }

export function entries() {
    const files = import.meta.glob('$lib/jobs/*.svx');
    return Object.keys(files).map((path) => ({
        slug: path.split('/').pop().replace('.svx', '')
    }));
}