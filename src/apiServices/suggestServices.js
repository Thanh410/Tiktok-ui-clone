import * as request from '~/utils/http.js';

export const suggested = async (page, per_page) => {
    try {
        const res = await request.get('users/suggested', {
            params: {
                page,
                per_page,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
