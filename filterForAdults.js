const ages = [10, 18, 55, 3, 20]
// const checkAccess = (age) => {
//     if (age >= 18){
//         return "Доступ разрешен"
//     }
//     return "Доступ запрещен"
// }

const checkAccess = age => age>=18? "разрешен" : "запрещен";

for (age of ages){
    console.log(`Возраст ${age}: Доступ ${checkAccess(age)}`);
}