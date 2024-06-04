
import type { Serve, Server } from "bun"

if (import.meta.main && !process.env.ENTRY) {
	process.exit(0)
}

const ctx = (req, res) => ({
	open: {
		async request(callback: ($: Request) => Promise<Response>) {
			try {
				return callback(req)
			} catch (error) {

				(() => new Error('error'))()
			}
		},
		async response(callback: ($: Request) => Promise<Response>) {
			try {
				return callback(req)
			} catch (error) {

				(() => new Error('error'))()
			}
		},
		url() { return new URL(req.url).toString() },
		pathname() {
			return new URL(req.url).pathname
		},
		params() {
			return new URLSearchParams(req.url)
		},
	}
}
)
export function $handle(req: Request) {
	return async function $http(res?: Response) {
		return {
			...ctx(req, res),
			[Bun.inspect.custom]: () => Bun.inspect(ctx(req, res), {
				depth: Infinity
			})
		}
	}
}

export async function createFetch({ fetch, ...config }: Serve): Serve {

	return { fetch }
}
