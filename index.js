// const formatSize = (bytes) => {
//     if (bytes<1024){
//         return `Total size: ${bytes} B`;
//     }
//     const mbytes = (bytes/2**20).toFixed(2);
//     return `${mbytes} MB`
// };

// const filesSize = [500, 5_000_000, 500_000];

// for (const fileSize of filesSize){
//     console.log(formatSize(fileSize));
    
// }

const ageCheck = (age) => age === 18? "Age verified" : "u are not really old enough"
console.log(ageCheck(18));
