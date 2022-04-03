import axios from 'axios';
const TUITS_API = 'http://localhost:4000/api/tuits';

export const createTuit = async (tuit) => { }

//finds all of the tuits
export const findAllTuits = async () => {
    //sends an http get request to the TUITS_API uesing axios.get()
    // The request is asynchronous. The async, await and responce with be set when the request resolves from the server
    // the  data in the responce is the tuits arry sent back form findAllTuits in the tuit-controller.js 
    // This is becuase we made const that link to that part of the server
    const response = await axios.get(TUITS_API);
    const tuits = response.data;
    return tuits;
}

export const deleteTuit = async (tuit) => { }
export const updateTuit = async (tuit) => { }