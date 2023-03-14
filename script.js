const additionalPrice1 = (cost) => {
    return (cost) * 0.01 + 3;
    
}

console.log(additionalPrice1(10000));


function friends(name1,name2,name3){
    console.log(`Welcome ${name1}, ${name2}, ${name3}.`);
}

function friendsAge(birthYear){
    const thisYear = 2023;
    return thisYear - birthYear;
}

function welcome(name1,name2,name3, age1, age2, age3){
    console.log(`Welcome ${name1}, you are ${age1}. Welcome ${name2}, you are ${age2}. Welcome ${name3}, you are ${age3}`)
}