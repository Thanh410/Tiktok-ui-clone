import * as request from '~/utils/http.js';

export const content = async (type = 'for-you', page) => {
    try {
        const res = await request.get('videos', {
            params: {
                type,
                page,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
