//imports the data
import people from './users/users.js';
//creates variable for data
let users = people;

//creates controller
const userController = (app) => {
    //function that find all users
    app.get('/api/users', findAllUsers);
    //function that find a specific user with the :uid
    app.get('/api/users/:uid', findUserById);
    //funtion that creates a user
    app.post('/api/users', createUser);
    //function that deleltes the user
    app.delete('/api/users/:uid', deleteUser);
    //function call that updates that user
    app.put('/api/users/:uid', updateUser);
}

//responds
const findAllUsers = (req, res) => {
    const type = req.query.type;
    //this if is invoked if the URL is followed by a ?type=STUDENT or ?type=FACULTY
    if (type) {
        //responde be returning a flitered list with the type sent
        res.json(findUsersByType(type));
        //return added here so that is breaks
        return;
    }
    res.json(users);
}

const findUserById = (req, res) => {
    //request the uid. It is able to request an uid since it is un the url
    const userId = req.params.uid;

    //finds the use that matches that id
    const user = users.find(u => u._id === userId);
    res.json(user);
}


//filters the types of users
const findUsersByType = (type) => {
    const result = users.filter(user => user.type === type)
    return result;
}


//creates a new user
const createUser = (req, res) => {
    //creates new users by requesting a body
    //give the new user an id base on the current time.
    const newUser = req.body;
    newUser._id = (new Date()).getTime() + '';
    users.push(newUser);
    res.json(newUser);
}

//function that deletes that user
const deleteUser = (req, res) => {
    const userId = req.params['uid'];
    users = users.filter(user => user._id !== userId);
    res.sendStatus(200);
}

//function that updates that user
const updateUser = (req, res) => {
    //gets the users ID
    const userId = req.params['uid'];
    //creates a new user
    const updatedUser = req.body;
    //if they find a user with the correct id then it updates it
    users = users.map(usr =>
        usr._id === userId ?
            updatedUser :
            usr);
    res.sendStatus(200);
}


export default userController;
