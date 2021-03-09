module.exports = {

    HOST: "localhost",
    USER: "root",
    PASSWORD: "root",
    DB: "bdd_fansstore",
    dialect: "mysql",

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

// module.exports = {

//     HOST: "d3y0lbg7abxmbuoi.chr7pe7iynqr.eu-west-1.rds.amazonaws.com",
//     USER: "k5na8f9i5padkjvz",
//     PASSWORD: "c30wdgs6siwo47od",
//     DB: "hjcauubt3kmy7cjw",
//     dialect: "mysql",

//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     }
// };