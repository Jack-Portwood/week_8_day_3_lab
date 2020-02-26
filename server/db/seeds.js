use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Emma",
        emailAddress: "Emma@email.com",
        status: "true"
    },
    {
        name: "Kevin",
        emailAddress: "Kevin@email.com",
        status: "true"
    },
    {
        name: "Jack",
        emailAddress: "Jack@email.com",
        status: "false"
    }
]);