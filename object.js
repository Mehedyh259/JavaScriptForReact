// const obj = {
//     name: 'hello',
//     roll: 11,
//     address: 'rajshahi'
// }

// // const name = obj.name;
// // const roll = obj.roll;
// // const address = obj.address;

// const { name, roll: serial, address } = obj;


// console.log(name, serial, address)

// // const obj1 = { ...obj }

// // obj1.address = 'rajshahi';
// // obj1.id = 43;

// // console.log(obj);
// // console.log(obj1);

const obj = {
    status: 1,
    func: (value) => value * 2,
    data: [
        {
            name: "amar phone",
            display: {
                type: "OLED, HDR",
                // information: {
                //     length: 6
                // }
            },
            memory: {
                internal: "2GB 6GB RAM",
            },
            price: 500
        }
    ]
};

console.log(obj.data[0].display?.information?.length)

