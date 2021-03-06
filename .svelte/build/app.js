import { ssr } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "..\\..\\src\\hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"/favicon.ico\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

let options = null;

// allow paths to be overridden in svelte-kit start
// and in prerendering
export function init(settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: "/./_app/start-32b14a9f.js",
			css: ["/./_app/assets/start-a8cd1609.css"],
			js: ["/./_app/start-32b14a9f.js","/./_app/chunks/index-5ad3f4d4.js","/./_app/chunks/index-d31526ba.js"]
		},
		fetched: undefined,
		get_component_path: id => "/./_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: error => {
			console.error(error.stack);
			error.stack = options.get_stack(error);
		},
		hooks: get_hooks(user_hooks),
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		read: settings.read,
		root,
		router: true,
		ssr: true,
		target: "#svelte",
		template
	};
}

const d = decodeURIComponent;
const empty = () => ({});

const manifest = {
	assets: [{"file":"favicon.ico","size":1150,"type":"image/vnd.microsoft.icon"},{"file":"robots.txt","size":67,"type":"text/plain"},{"file":"svelte-welcome.png","size":360807,"type":"image/png"},{"file":"svelte-welcome.webp","size":115470,"type":"image/webp"}],
	layout: "src/routes/$layout.svelte",
	error: ".svelte/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/$layout.svelte", "src/routes/index.svelte"],
						b: [".svelte/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/about\/?$/,
						params: empty,
						a: ["src/routes/$layout.svelte", "src/routes/about.svelte"],
						b: [".svelte/build/components/error.svelte"]
					},
		{
						type: 'endpoint',
						pattern: /^\/todos\.json$/,
						params: empty,
						load: () => import("..\\..\\src\\routes\\todos\\index.json.js")
					},
		{
						type: 'page',
						pattern: /^\/todos\/?$/,
						params: empty,
						a: ["src/routes/$layout.svelte", "src/routes/todos/index.svelte"],
						b: [".svelte/build/components/error.svelte"]
					},
		{
						type: 'endpoint',
						pattern: /^\/todos\/([^/]+?)\.json$/,
						params: (m) => ({ uid: d(m[1])}),
						load: () => import("..\\..\\src\\routes\\todos\\[uid].json.js")
					},
		{
						type: 'page',
						pattern: /^\/two\/?$/,
						params: empty,
						a: ["src/routes/$layout.svelte", "src/routes/two.svelte"],
						b: [".svelte/build/components/error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getContext: hooks.getContext || (() => ({})),
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, render }) => render(request))
});

const module_lookup = {
	"src/routes/$layout.svelte": () => import("..\\..\\src\\routes\\$layout.svelte"),".svelte/build/components/error.svelte": () => import("./components\\error.svelte"),"src/routes/index.svelte": () => import("..\\..\\src\\routes\\index.svelte"),"src/routes/about.svelte": () => import("..\\..\\src\\routes\\about.svelte"),"src/routes/todos/index.svelte": () => import("..\\..\\src\\routes\\todos\\index.svelte"),"src/routes/two.svelte": () => import("..\\..\\src\\routes\\two.svelte")
};

const metadata_lookup = {"src/routes/$layout.svelte":{"entry":"/./_app/pages/$layout.svelte-5fa25ada.js","css":["/./_app/assets/pages/$layout.svelte-668ef4e9.css"],"js":["/./_app/pages/$layout.svelte-5fa25ada.js","/./_app/chunks/index-5ad3f4d4.js"],"styles":null},".svelte/build/components/error.svelte":{"entry":"/./_app/error.svelte-79e810d4.js","css":[],"js":["/./_app/error.svelte-79e810d4.js","/./_app/chunks/index-5ad3f4d4.js"],"styles":null},"src/routes/index.svelte":{"entry":"/./_app/pages/index.svelte-3b6e6033.js","css":["/./_app/assets/pages/index.svelte-a6866bc0.css"],"js":["/./_app/pages/index.svelte-3b6e6033.js","/./_app/chunks/index-5ad3f4d4.js","/./_app/chunks/index-d31526ba.js"],"styles":null},"src/routes/about.svelte":{"entry":"/./_app/pages/about.svelte-3b5ba2a0.js","css":["/./_app/assets/pages/about.svelte-4db5be0d.css"],"js":["/./_app/pages/about.svelte-3b5ba2a0.js","/./_app/chunks/index-5ad3f4d4.js"],"styles":null},"src/routes/todos/index.svelte":{"entry":"/./_app/pages/todos/index.svelte-675017bf.js","css":["/./_app/assets/pages/todos/index.svelte-d4098fcc.css"],"js":["/./_app/pages/todos/index.svelte-675017bf.js","/./_app/chunks/index-5ad3f4d4.js"],"styles":null},"src/routes/two.svelte":{"entry":"/./_app/pages/two.svelte-843cd53d.js","css":["/./_app/assets/pages/about.svelte-4db5be0d.css"],"js":["/./_app/pages/two.svelte-843cd53d.js","/./_app/chunks/index-5ad3f4d4.js"],"styles":null}};

async function load_component(file) {
	return {
		module: await module_lookup[file](),
		...metadata_lookup[file]
	};
}

init({ paths: {"base":"","assets":"/."} });

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return ssr({ ...request, host }, options, { prerender });
}