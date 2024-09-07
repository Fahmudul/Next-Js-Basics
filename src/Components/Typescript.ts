// interface User {
//   id: number;
//   name: string;
//   email?: string;
// }
// const user: User = {
//   id: 1,
//   name: "John Doe",
// };
// console.log(user);

// // Type
// type User_1 = {
//   id: number;
//   name: string;
//   email?: string;
// };
// const user_1: User_1 = {
//   id: 1,
//   name: "John Doe",
// };
// console.log("from line 22", user);

// // Generics
// function indentity(arg: any): any {
//   return 12;
// }

// console.log(
//   "from line 28",
//   indentity({
//     id: 1,
//     name: "John Doe",
//   })
// );

// // Union
// type ID = number | string;

// function printId(id: ID) {
//   console.log(`ID: ${id}`);
// }
// printId(123);
// printId("abc");
