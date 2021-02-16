const express = require('express');

const config = require('./config/config');
const PORT = config.PORT;
const routes = require('./routes');
const isAuth = require('./middlewares/isAuth');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

require('./config/express')(app);
require('./config/mongoose')(app);  

app.use(isAuth)
app.use(routes);   
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server is listening on port... ${PORT}!`));