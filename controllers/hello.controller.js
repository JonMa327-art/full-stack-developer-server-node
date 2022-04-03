
// Takes in a app, which is the express library, and then responds with the life if good
const helloController = (app) => {
    app.get('/hello', (req, res) => {
        res.send('Life is good')
    });
}

export default helloController