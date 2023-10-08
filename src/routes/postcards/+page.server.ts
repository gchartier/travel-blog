import PocketBase from 'pocketbase';
import { PRIVATE_ADMIN_EMAIL, PRIVATE_ADMIN_PASSWORD } from '$env/static/private';
import type { Postcard } from '$lib/types';
import type { PageServerLoad } from './$types';

const pb = new PocketBase('http://127.0.0.1:8090');
await pb.admins.authWithPassword(PRIVATE_ADMIN_EMAIL, PRIVATE_ADMIN_PASSWORD);

export const load: PageServerLoad<{ postcards: Postcard[] }> = async () => {
	const response = await pb.collection('postcards').getList<Postcard>(1, 50, { sort: '-created' });

	// Using structuredClone to appease SvelteKit's page server load serialization reqs
	// See: https://github.com/pocketbase/pocketbase/discussions/1372
	const postcards = structuredClone(response.items);

	return { postcards };
};
