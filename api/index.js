import express from 'express';
import cookie from 'cookie-parser';

const app = express();

app.use(cookie());
app.use(express.json());

app.post('/login', (req, res) => {
    res.cookie('token', req.body.token, {
        httpOnly: true,
        secure: true,
        expires: new Date(Date.now() + 5 * 60 * 1000)
    });

    res.status(200).send({ ok: true });
});

app.post('/any', (req, res) => {
    console.log(req.cookies['token']);
    res.send('ok');
});

app.listen(3000, () => console.log('Running on port 3000'));
