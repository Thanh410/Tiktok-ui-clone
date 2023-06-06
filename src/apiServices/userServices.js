import * as request from '~/utils/http.js';

export const user = async () => {
    try {
        const res = await request.get('users', {
            params: {},
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
