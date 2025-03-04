import express from 'express'
import bodyParser from 'body-parser'
import authRouter from './routes/authRoutes.js'
import userRouter from './routes/userRoutes.js'
import postRouter from './routes/postRouter.js'
import friendRouter from './routes/friendRoutes.js'
import mongoose from 'mongoose'
import customEnv from 'custom-env'
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url'; 

const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);

customEnv.env(process.env.NODE_ENV, './config')
console.log(`Environment: ${process.env.NODE_ENV}`);
mongoose.connect(process.env.CONNECTION_STRING).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));
const server = express()
console.log('Server initialized.');
server.use(cors());
server.use(express.static(path.join(__dirname, 'public')));

server.use(bodyParser.urlencoded({ limit: '20mb', extended: true }))
server.use(express.json({limit: '20mb'}));

server.use('/api/users', userRouter);
server.use('/api/users', postRouter); 
server.use('/api/users', friendRouter);
server.use('/api/tokens', authRouter)
server.use('/api/posts', postRouter)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

server.listen(process.env.PORT)