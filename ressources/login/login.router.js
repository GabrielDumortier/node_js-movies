import {Router} from 'express';
const loginRouter = Router();

loginRouter.post('/api/login', (req, res) => {
    const user = {
        id: 1,
        username: 'ola',
        email: 'ola@ola.be'
    }
    jwt.sign({user}, 'secretkey', (err, token) => {
        res.json({
            token
        });
    });
});

export default loginRouter;
