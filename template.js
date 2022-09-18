const name = "mehedi"
const job = 'instructor';

const obj = {
    name: 'hasan',
    job: 'bekar'
}

function show(name, job) {
    const sentense = `amar naam ${name} amar job ${job}`
    console.log(sentense)
}

show(name, job)
show(obj.name, obj.job)

// amar naam mehedi amar job instructor

// const pera = 'amar naam ' + obj.name + ' amar job ' + obj.job;


