/* layout components are rendered for all sibling and child routes. */
/* https://kit.svelte.dev/docs/routing#layout */

/* prerender = render the static HTML for the site and all subpages statically at build */
export const prerender = true;

/* we are building a static site so we will not be using server-side-rendering */
export const ssr= false;