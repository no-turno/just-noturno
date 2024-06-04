declare module "just-noturno" {
	interface T extends String {
	}
}

declare const Justfile: import('just-noturno').T;

declare module "*.justfile" {
	export default Justfile
}

declare module "*.toml" {
	const content: Record<any, any>
	export default content
}

declare module "*.json" {
	const content: Record<any, any>
	export default content
}

declare module "*.bun.sh" {
	const content: string
	export default content
}

declare module "*.bun.replit" {
	const content: unknown
	export default content
}