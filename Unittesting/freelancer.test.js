// use the path of your model
const registration = require('../models/user');
const mongoose = require('mongoose');
const user = require('../models/user');
const work =require('../models/work');
const apply =require('../models/apply');
const save = require('../models/save');
const report=require('../models/report');
// use the new name of the database

const url = 'mongodb://localhost:27017/Freelancer_testing';
var workId = ""


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



//Sprint 1 TDD Testing//


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


// //USER FREELANCER REGISTRATION TESTING

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

//  Testing  of admin LOGIN//
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

// Testing  of Freelancer LOGIN
// describe('Login test anything', () => { // the code below is for insert testing
//     it('Login testing anything', ()=>{
//         return registration.find({email:'Ree@gmail.com', password: 'password3'},).then((pro_ret) => {
//             console.log(pro_ret)
//             expect(pro_ret[0].firstname).toEqual('Ritesh');
//         })
//     }
//         // const register = {
//         //     'email': 'sashank@gmail.com',
//         //     "password": "password1",            
//         // };
//     );
// });


//Sprint 2//(2)//

// Delete Posting of work of client


// it('to test the delete package is working or not', async() =>
// {
//     return Packages.deleteMany();
//     { _id: Object("607d85f2e362a90a181add7d") }
//     conststatus= await packages.deleteMany();
//     expect(status.ok).toBe(1);});


// Post a work of client// 

// describe('Posting Schema Testing', () => {

//     it("Add Posting testing anything", () => {
//         const workdata = {
//          userId: "60efc6f4eb9c990d48a0f756", 
//          worktitle:"UX Design",
//          worktype:"test",
//          workdescription: "test1",
//          requiredexperience: "testexperience",
//          estimatedprice:"2000",
//          vacancy:10,
//          skills:"developer"
   


//         };
//         return work.create(workdata).then((pro_ret) => {
//             expect(pro_ret.worktitle).toEqual('UX Design');
//         });
//     });

// });


// //Update Post of a client//

// it("testing Post Update",async()=>
// {
//     return work.findOneAndUpdate(
//         { _id: Object("60efd2b13716dc11345a6b99") },
//             {$set: {worktitle:"UI Design"}}////updating product name
//     ).then((pp)=>{
//        expect(pp.worktitle).toEqual("UX Design");
//     });
// });


//Sprint 3//

//Apply a work//
//  describe('Apply Schema Testing', () => {

//      it("Add Posting testing anything", () => {
//          const workdata = {
//           userId: "610b7bbfe739f64a5cd9d645", 
//           workId:"610b79c7a82e9d5688ebe9b5",
//           myamount:"1000"
         
         
         

//          };
//          return apply.create(workdata).then((pro_ret) => {
//              workId= pro_ret._id
//              expect(pro_ret.myamount).toEqual('1000');
//          });
//      });

// });




// //Delete Apply work of Freelancer//
// it('to test the delete applied works is working or not', async() =>
// {
//     return apply.deleteMany();
//     { _id: workId }
//     conststatus= await apply.deleteMany();
//     expect(status.ok).toBe(1);});


//Sprint 4//

// Save a Work By Freelancer Testing//
// it("Saving a work Schema Testing ",async()=>
// {
//     return work.findOne(
//         { _id: workId },
//             // {$set: {worktitle:"UI Design"}}////updating product name
//     ).then((pp)=>{
//        expect(pp.worktitle).toEqual("UX Design");
//     });
// });


// // it("Updating a work Schema Testing ",async()=>
// // {
// //     return work.findOneAndUpdate(
// //         { _id: workId },
// //             {$set: {worktitle:"UI Design"}}////updating product names
// //     ).then((pp)=>{
// //        expect(pp.worktitle).toEqual("UX Design");
// //     });
// // });




// it('to test the delete applied works is working or not', async() =>
// {
//     return work.deleteMany();
//     { _id: workId }
//     conststatus= await work.deleteMany();
//     expect(status.ok).toBe(1);});


//Sprint 5//

    // Approval System//(client)
    
//   it("Updating a work Schema Testing ",async()=>
// {
//     return apply.findOneAndUpdate(
//         { _id: Object("612484fe37a0f448e00f73bd") },
//             {$set: {confirmStatus:"Denied"}}////updating  names
//     ).then((pp)=>{
//        expect(pp.confirmStatus).toEqual("Confirmed");
//     });
// });


  //Approval System//(client)
    
//   it("Updating a work Schema Testing ",async()=>
// {
//     return apply.findOneAndUpdate(
//         { _id: Object("610b7e3da60ff026384f2c49") },
//             {$set: {confirmStatus:"Confirmed"}}////updating applied status//
//     ).then((pp)=>{
//        expect(pp.confirmStatus).toEqual("pending");
//     });
// });



// // Save a Work By Freelancer Testing//
// describe('Apply Schema Testing', () => {

 

//              it("Add Posting testing anything", () => {
//                  const workdata = {
//                   userId: "610b7bbfe739f64a5cd9d645", 
//                   workId:"610b79c7a82e9d5688ebe9b5",
    
                 
        
//                  };
//                  return save.create(workdata).then((pro_ret) => {
//                      workId= pro_ret._id
//                      expect(pro_ret.workId).toEqual(_id:Object("60efd2b13716dc11345a6b99");
//                  });
//              });
        
//         });
        
//Sprint 6//

//View Applicants//
// it("View Applicants Schema Testing ",async()=>
// {
//     return apply.findOneAndUpdate(
//         { _id: Object("612484fe37a0f448e00f73bd") },
//             {$set: {timerStatus:"Started"}}//View Applicants On Progress//
//     ).then((pp)=>{
//        expect(pp.timerStatus).toEqual("Nothing");
//     });
// });
//View Freelancer Records//
// it("View Freelancer Records Testing ",async()=>
// {
//     return apply.findOneAndUpdate(
//         { _id: Object("612484fe37a0f448e00f73bd") },
//             {$set: {timerStatus:"Ended"}}//View Applicants On Progress//
//     ).then((pp)=>{
//        expect(pp.timerStatus).toEqual("Started");
//     });
// });

//View Client Records//
// it("View Client Records Testing ",async()=>
// {
//     return apply.find(
//         { _id: Object("612484fe37a0f448e00f73bd") },
           
//     )
    
// });
//Sprint 7//

//Report System//

//Report By Freelancer//
 describe('Report by Freelancer Schema Testing', () => {

     it("Report testing anything", () => {
         const workdata = {
          userid: "610b7bbfe739f64a5cd9d645", 
          workid:"610b79c7a82e9d5688ebe9b5"
         
         
         

         };
         return report.create(workdata).then((pro_ret) => {
             workid= pro_ret._id
             expect(pro_ret.status).toEqual('In progress');
         });
     });

});

