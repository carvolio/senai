import axios from 'axios';
import md5 from 'md5';

const publicKey = '8be38ff6ea5bb95df5b696a0227f6c3f';
const privateKey = 'f50b4d671566ad1fd32cb3be82cd4821f8dc507b';
const ts = new Date().getTime();
const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public',
    params:{
        ts,
        apikey: publicKey,
        hash,
    },
});

export const getCharacters = async (offset = 0, limit = 100) => {
    try {
        const responde = await api.get('/characers', {
            params: {
                offset,
                limit,
            },
        });
        return Response.data.data.results;
    } catch (error) {
        console.error(error);
        return[];
    }
};