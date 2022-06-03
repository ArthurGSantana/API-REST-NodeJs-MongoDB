import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://thurzao:280299@thur.2b0qb2s.mongodb.net/thur-node?');

let db = mongoose.connection;

export default db;