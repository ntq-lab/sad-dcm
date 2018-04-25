import express from 'express'
import { router } from './router';

const app = express()

app.use('/api/v1/', router);

app.listen(3000, () => console.log('Started at :3000'))
