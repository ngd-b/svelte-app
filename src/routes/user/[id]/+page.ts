import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
export const load: PageLoad = function ({ params }) {
	error(401, 'User not permitted');

	return {
		id: params.id
	};
};
