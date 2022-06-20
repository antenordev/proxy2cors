const dotenv = require('dotenv');
const cors = require('cors');
const express = require('express');
const app = express();
const axios = require('axios');
const morgan = require('morgan');
const bodyParser = require('body-parser');

dotenv.config();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express());

const port = process.env.PORT || 8081;

app.post('/', async (req, res) => {
    try {
        /**
         * GET HEADERS and PAYLOAD REQUEST
         */
        const { authorization } = req.headers;
        const { target } = req.body;
        const data = req.body;
        delete data.target;

        if (!data) {
            return res.status(400).end();
        }

        /**
         * POST API EXTERNAL
         */
        const { data: resend } = await axios({
            method: 'POST',
            url: target,
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': authorization,
            },
            data
        });

        return await res.json(resend);
    } catch (error) {
        return await res.json(error.response.data);
    }
});

app.listen(port, () => console.log(`Running at port ${port}`));
