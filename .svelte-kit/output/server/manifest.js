export const manifest = {
	appDir: "_app",
	assets: new Set(["attendance.eps","attendance.svg","favicon.png","kjc logo.png","mail.svg","marksheet.svg","marksheet2.svg","marksheet3.svg","vecteezy_business-to-do-list-flat-icon-modern-style_3529153.zip"]),
	mimeTypes: {".eps":"application/postscript",".svg":"image/svg+xml",".png":"image/png",".zip":"application/zip"},
	_: {
		entry: {"file":"_app/immutable/start-044cbb75.js","imports":["_app/immutable/start-044cbb75.js","_app/immutable/chunks/index-ded4d6cf.js","_app/immutable/chunks/singletons-956eeeca.js","_app/immutable/chunks/index-7b5ae4cd.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "login",
				pattern: /^\/login\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "logout",
				pattern: /^\/logout\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "view/attendance",
				pattern: /^\/view\/attendance\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "view/send_mail",
				pattern: /^\/view\/send_mail\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
