// use the path of your model
const registration = require('../models/user');
const mongoose = require('mongoose');
const user = require('../models/user');
const work =require('../models/work');
// use the new name of the database

const url = 'mongodb://localhost:27017/Freelancer_testing';

beforeAll(async () => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true
    });
})
afterAll(async () => {
    await mongoose.connection.close();
});

// describe ('SAMPLE TESTING', () => {
//     it('should be true ===true',()=>{
//         expect(true).toBe(true)
//     })

// })






// USER ADMIN REGISTRATION TESTING

// describe('User Schema test anything', () => { // the code below is for insert testing
//     it('Add User testing anything', () => {
//         const register = {

//             'firstname': 'sashank',
//             'lastname': 'shrestha',
//             'email': 'sashank@gmail.com',
//             "password": "password1",
//             "address": "Thamel",
//             "phone": "9869688543",
//             "age": 21,
//             "role": "Admin",
//             "projects": "Jobportal",
//             "Exprience": "1 year",
//             "company": "Softwarica",
//             "foundedin": "Nepal",
//             "userbio": "my name is nibbu",
//             "resume": "ihave",

//         };

//         return registration.create(register).then((pro_ret) => {
//             expect(pro_ret.firstname).toEqual('sashank');
//         });
//     });

// });

//USER CLIENT REGISTRATION TESTING

// describe('User Schema test anything', () => { // the code below is for insert testing
//     it('Add User testing anything', () => {
//         const register = {

//             'firstname': 'Ankit',
//             'lastname': 'lama',
//             'email': 'lama12@gmail.com',
//             "password": "password2",
//             "address": "boudha",
//             "phone": "9869688544",
//             "age": 22,
//             "role": "Client",
//             "projects": "Jobportal",
//             "Exprience": "2 year",
//             "company": "Softwaricaedu",
//             "foundedin": "Nepal",
//             "userbio": "my name is ankit",
//             "resume": "ihave",           
//         };

//         return registration.create(register).then((pro_ret) => {
//             expect(pro_ret.firstname).toEqual('Ankit');
//         });
//     });

// });


// //USER FRLANCER REGISTRATION TESTING

// describe('User Schema test anything', () => { // the code below is for insert testing
//     it('Add User testing anything', () => {
//         const register = {

//             'firstname': 'Ritesh',
//             'lastname': 'Thele',
//             'email': 'Ree@gmail.com',
//             "password": "password3",
//             "address": "Dhapakhal",
//             "phone": "986968244",
//             "age": 23,
//             "role": "Client",
//             "projects": "Jobportal",
//             "Exprience": "2 year",
//             "company": "Softwaricaedu",
//             "foundedin": "Nepal",
//             "userbio": "my name is Rite",
//             "resume": "ihave",           
//         };       

//         return registration.create(register).then((pro_ret) => {
//             expect(pro_ret.firstname).toEqual('Ritesh');
//         });
//     });

// });

// // Testing  of admin LOGIN
// describe('Login test anything', () => { // the code below is for insert testing
//     it('Login testing anything', () => {
//         // const register = {
//         //     'email': 'sashank@gmail.com',
//         //     "password": "password1",
//         // };
//         return registration.find({ email: 'sashank@gmail.com', password: 'password1' },).then((pro_ret) => {
//             console.log(pro_ret)
//             expect(pro_ret[0].firstname).toEqual('sashank');
//         })
//     })
// });

// Testing  of Client LOGIN//
// describe('Login test anything', () => { // the code below is for insert testing
//     it('Login testing anything', () => {
//         // const register = {
//         //     'email': 'lama12@gmail.com',
//         //     "password": "password2",
//         // };
//         return registration.find({ email: 'lama12@gmail.com', password: 'password2' },).then((pro_ret) => {
//             console.log(pro_ret)
//             expect(pro_ret[0].firstname).toEqual('Ankit');
//         })
//     })
// });

// // Testing  of Freelancer LOGIN
describe('Login test anything', () => { // the code below is for insert testing
    it('Login testing anything', ()=>{
        return registration.find({email:'Ree@gmail.com', password: 'password3'},).then((pro_ret) => {
            console.log(pro_ret)
            expect(pro_ret[0].firstname).toEqual('Ritesh');
        })
    }
        // const register = {
        //     'email': 'sashank@gmail.com',
        //     "password": "password1",            
        // };
    );
});






