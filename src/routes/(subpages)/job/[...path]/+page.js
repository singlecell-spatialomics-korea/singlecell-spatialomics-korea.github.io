import { redirect } from '@sveltejs/kit';

export function load({ params }) {
    const { path } = params;
    const newPath = path.replace(/\//g, '-').replace(/\.html$/, '');
    throw redirect(302, `/jobs/${newPath}`);
}