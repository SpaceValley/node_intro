import express from 'express'
const app = express()

import bodyParser from 'body-parser'
import { PORT } from 'constants/'
import router from 'routes/'


app.use(bodyParser.json())
app.use(router)

app.listen(PORT, () => console.log(`Server has started on port ${PORT}.`))
