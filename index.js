const express = require('express');
const app = express();

const cors = require('cors');

const router = require('./routers/router');

app.use(express.json());
app.use(cors());
app.use('/api', router);

app.listen(8081, () => {
    console.log('listening on http://localhost:8081');
});
