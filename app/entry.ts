import { serve } from "./$http/server";

const entry = import.meta.env.ENTRY;

const resolve = (id: 'server' | 'client') => import('./\$http/' + id + '.ts').then(mod => mod.default)

export default { ...await resolve(entry), ...serve(3000) }
