// // import type { Postcard } from "../types";
// import PocketBase from 'pocketbase';

// const pb = new PocketBase('http://127.0.0.1:8090');

// export function load({ params }) {
//     return {
//         postcards: pb.collection('postcards').getList(1, 50, {
//             filter: 'created >= "2022-01-01 00:00:00" && someField1 != someField2',
//         })
//     };
// }