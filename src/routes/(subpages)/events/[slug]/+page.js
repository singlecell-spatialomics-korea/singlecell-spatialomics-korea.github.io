import { error } from '@sveltejs/kit';

export async function load({ params }) {
    const { slug } = params;
    
    try {
        const post = await import(`$lib/events/${slug}.svx`);
        
        // The .svx file exports metadata and content
        return {
            content: post.default,
            metadata: post.metadata
        };
    } catch (e) {
        error(404, `Not Found`);
    }
  }