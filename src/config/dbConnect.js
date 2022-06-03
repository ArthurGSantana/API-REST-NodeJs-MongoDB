import mongoose from 'mongoose';

import dbConnect from './env/development.js';

mongoose.connect(dbConnect);

let db = mongoose.connection;

export default db;