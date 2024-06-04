import { $handle, createFetch } from "./server.entry"

export const serve = function(port: number, options?: {
	host?: string,
	development?: boolean
}) {
	return {
		port: port,
		hostname: options?.host ?? "0.0.0.0",
		development: options?.development ?? process.env.NODE_ENV !== "production"
	}
}


export default createFetch({
	async fetch(req) {
		return await (await $handle(req)()).open.response((request) => new Response(request.url))
	},
})

