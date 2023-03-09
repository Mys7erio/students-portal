import * as server from '../entries/pages/_page.server.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export const file = '_app/immutable/components/pages/_page.svelte-31423f25.js';
export { server };
export const imports = ["_app/immutable/components/pages/_page.svelte-31423f25.js","_app/immutable/chunks/index-ded4d6cf.js","_app/immutable/chunks/stores-2b94fd3d.js","_app/immutable/chunks/index-7b5ae4cd.js"];
export const stylesheets = ["_app/immutable/assets/_page-5a4466d4.css"];
