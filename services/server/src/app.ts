import express, { Request, Response } from 'express';
import router from './routes/router';
import { config } from './config/config';
// import Logging from './log/logging';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

const PORT = 3202;

app.use(cors());
app.use(router);

mongoose
	.connect(config.mongo.url)
	.then(() => {
		console.log('[SUCCESS] Connected to MongoDB.'); 
	})
	.catch(err => {
		console.error(err);
		console.error('[FAILURE] Can\'t connected to MongoDB.');
	})

app.listen(PORT, () => {
	try {
		console.log(`[SUCCESS] TASK_01: Server is running at the port ${PORT}`);
	} catch(err) {
		console.error(err);
		console.log(`[FAILURE] ERR_01: Server is not running at the port ${PORT}`);
	}
})