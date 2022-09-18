

// // const fun = (x, y) => {
// //     return [x, y];
// // }
// // const fun1 = (x, y) => {
// //     return { x, y };
// // }

// // const [first, second] = fun(4, 5);
// // const { x: num, y } = fun1(4, 5);

// // console.log(num, y);
// function add() {
//     console.log('hello world')
// }
// const obj = {
//     name: 'mehedi',
//     roll: 12,
//     func: add
// }

// const show1 = (props) => {
//     const { name, roll, func } = props;
//     console.log(name, roll);

//     func()
// }
// const show2 = ({ name, roll, func }) => {
//     console.log(name, roll);

//     func()
// }

// show1(obj)
// show2(obj)

const x = 5;
const y = 10;

const obj1 = {
    first: x,
    second: y
}

const person = { id: 2, name: 'kader bin shomsher' }

const fun = ({ id, name }) => {


    // console.log(props.id, props.name);
    console.log(id, name);
}

fun(person)
