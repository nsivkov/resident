const axios = require('axios');
const props = require('../const/props');

describe('API tests', () => {

    const userId = 12;
    const newUser = {
        'name': `testUser_${randomString(4)}`,
        'job': 'tester'
    };

    test('Create user', async () => {
        const response = await axios.post(props.api.baseUrl + 'users', newUser);
        expect(response.status).toBe(201);
        expect(response.data.name).toBe(newUser.name);
        expect(response.data.job).toBe(newUser.job);
    });

    test('Get single user by id', async () => {
        const response = await axios.get(props.api.baseUrl + `users/${userId}`);
        expect(response.status).toBe(200);
        expect(response.data.data.id).toBe(userId);
    });

    test('Update user by patch/put methods', async () => {
        const response = await axios.put(props.api.baseUrl + `users/${userId}`, newUser);
        expect(response.status).toBe(200);
        expect(response.data.name).toBe(newUser.name);
        expect(response.data.job).toBe(newUser.job);
    });

    test('Delete user by id', async () => {
        const response = await axios.delete(props.api.baseUrl + `users/${userId}`);
        expect(response.status).toBe(204);
    });

});

function randomString(length) {
    return Math.random().toString(36).substr(2, length);
}
