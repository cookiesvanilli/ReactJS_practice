export const addNewUser = (passport, name, age) => ({
    type: 'ADD_USER',
    passport,
    name,
    age
});