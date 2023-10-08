import PocketBase from 'pocketbase';
import type { PageServerLoad } from './$types';
import { PRIVATE_ADMIN_EMAIL, PRIVATE_ADMIN_PASSWORD } from '$env/static/private';
import type { Microlog } from '$lib/types';

const pb = new PocketBase('http://127.0.0.1:8090');
await pb.admins.authWithPassword(PRIVATE_ADMIN_EMAIL, PRIVATE_ADMIN_PASSWORD);

export const load: PageServerLoad<{ micrologs: Microlog[] }> = async () => {
	const response = await pb.collection('micrologs').getList<Microlog>(1, 50, { sort: '-created' });

	// Using structuredClone to appease SvelteKit's page server load serialization reqs
	// See: https://github.com/pocketbase/pocketbase/discussions/1372
	const micrologs = structuredClone(response.items);

	return { micrologs };
};
