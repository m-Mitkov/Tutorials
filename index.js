const express = require('express');

const config = require('./config/config');
const PORT = config.PORT;
const routes = require('./routes');

const app = express();

require('./config/express')(app);
require('./config/mongoose')(app);  

app.use(routes);

app.listen(PORT, () => console.log()`Serer is listening on port... ${PORT}!`)