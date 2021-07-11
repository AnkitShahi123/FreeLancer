const user =require('../models/user')
const mongoose=require('mongoose');
const url = 'mongodb://localhost:27017/Tranqulity_testing';
beforeAll(async () => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true
    });
});
afterAll(async () => {
    await mongoose.connection.close();
});
