/* eslint-disable */
const history = require('connect-history-api-fallback');
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use((req, res, next) => {
    console.log(req.url);
    if (req.url === '/health-check') {
        res.send('ok');
    } else {
        next();
    }
});

app.use(
    history({
        verbose: process.env.NODE_ENV !== 'production',
    }),
);
app.use(express.static('dist'));
app.listen(port, () => {
    console.log(`frontend app listening at http://localhost:${port}`);
});
