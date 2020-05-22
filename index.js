require('dotenv').config();
const express = require('express');
const app = express();
const ip = require('./controllers/ipAddress');
const { cors } = require('./settings/general');
const initialization = require('./middlewares/01-general');
const auth = require('./middlewares/02-auth');
const help = require('./resources/help');
const register = require('./resources/register');
const login = require('./resources/login');

app.use(
        express.json()
);
app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);
app.use(
    cors()
);
app.use(
    initialization
)
app.use(
    auth
);
app.all('/', help)
app.route('/help')
    .get(
        help
    )
    .post(
        help
    );
app.post(
    '/register',
    register
);
app.post(
    '/login',
    login
);
app.listen(
    process.env.PORT || 8080,
    () => console.log(
        `Address: http//${ ip() }:${ process.env.PORT || 8080 }\n`
    )
);
