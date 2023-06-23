import type { Actions } from './$types';

export const actions = {
	default: () => {
		console.log('submit');
		return {};
	}
} satisfies Actions;
