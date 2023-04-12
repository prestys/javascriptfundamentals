const cohort = {
    name: 'May2022',
    id: 1234,
    students: ["Jay", "Adam", "Mollie"]
};

const message = (object) => {
    return `${object.id} - ${object.name} - ${object.students} students in this cohort`
}

console.log(message(cohort))