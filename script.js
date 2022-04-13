
// console.log(power(100)); 

// function greet(who) {
//     console.log("Привет," + who);
// }
// greet('Гарри');
// console.log("Пока!");

// function multiplayer(factor) {
//     return number => number * factor;
// }
// let twice = multiplayer();
// let mytwice = twice(10);
// console.log(twice);

// function countChar(str, word){
//    let splitStr =  str.split('');
//    let num = 0;
//    for (let i = 0; i < splitStr.length; i++) {
//        if (splitStr[i] == word) {
//            num ++;
//        }
//    }
//    return num
// }

// function countBs(string) {
//     return countChar(string, "b")
// }

// console.log(countBs('bombimbom')); 

// let day1 = {
//     squirrel: false,
//     events: ["работал", "трогал дерево", "ел пиццу", "бегал"]
// }

// let descriptions = {
//     work: "Пошел на работу",
//     "трогал дерево": "Потрогал дерево"
// }

// descriptions.workMan = "это нарезчик стримов"

// console.log(descriptions.workMan);

// let anObject = {
//     left: 1,
//     right: 2
// }

// delete anObject.left;

// console.log(Object.keys({x: 0, y: 0, z: 2}));

// let objectA = {a: 1, b: 2};
// Object.assign(objectA, {b: 3, c: 4});

// console.log(objectA);

// let journal = [
//     {events: ["работал", "трогал дерево", "ел пиццу"],
//     squirrel: false},
//     {events: ["работал", "ел мороженное", "чистил зубы"],
//     squirrel: false},
//     {events: ["выходной", "катался на велосипеде", "ел арахис"],
//     squirrel: true},

// ];

// let object1 = {value: 10};
// let object2 = object1;
// let object3 = {value: 10};

// object1.value = 15;

// console.log(object3);

// const score = {visitors: 0, home: 0};

// score.visitors = 1;

// console.log(score.visitors);

// let journal = [];

// function addEntry(events, squirrel) {
//     journal.push({events, squirrel})
// }

// addEntry(["работал", "трогал дерево", "ел пиццу"],
//     false);

// addEntry(["работал", "ел мороженное", "чистил зубы"],
//     false);

// addEntry(["выходной", "катался на велосипеде", "ел арахис"],
//     true);
// console.log(journal);



// var JOURNAL = [
//     {"events":["carrot","exercise","weekend"],"squirrel":false},
//     {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
//     {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
//     {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
//     {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
//     {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
//     {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
//     {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
//     {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
//     {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
//     {"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
//     {"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
//     {"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
//     {"events":["spaghetti","brushed teeth","work"],"squirrel":false},
//     {"events":["brushed teeth","computer","work"],"squirrel":false},
//     {"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
//     {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
//     {"events":["brushed teeth","work"],"squirrel":false},
//     {"events":["cauliflower","reading","weekend"],"squirrel":false},
//     {"events":["bread","brushed teeth","weekend"],"squirrel":false},
//     {"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
//     {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
//     {"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
//     {"events":["spaghetti","nachos","work"],"squirrel":false},
//     {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
//     {"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
//     {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
//     {"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
//     {"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
//     {"events":["potatoes","exercise","work"],"squirrel":false},
//     {"events":["pizza","ice cream","computer","work"],"squirrel":false},
//     {"events":["lasagna","ice cream","work"],"squirrel":false},
//     {"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
//     {"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
//     {"events":["potatoes","brushed teeth","work"],"squirrel":false},
//     {"events":["carrot","work"],"squirrel":false},
//     {"events":["pizza","beer","work","dentist"],"squirrel":false},
//     {"events":["lasagna","pudding","cycling","work"],"squirrel":false},
//     {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
//     {"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
//     {"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
//     {"events":["lasagna","peanuts","work"],"squirrel":true},
//     {"events":["pizza","work"],"squirrel":false},
//     {"events":["potatoes","exercise","work"],"squirrel":false},
//     {"events":["brushed teeth","exercise","work"],"squirrel":false},
//     {"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
//     {"events":["pizza","cycling","weekend"],"squirrel":false},
//     {"events":["carrot","brushed teeth","weekend"],"squirrel":false},
//     {"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
//     {"events":["pizza","peanuts","candy","work"],"squirrel":true},
//     {"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
//     {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
//     {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
//     {"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
//     {"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
//     {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
//     {"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
//     {"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
//     {"events":["bread","candy","work"],"squirrel":false},
//     {"events":["potatoes","nachos","work"],"squirrel":false},
//     {"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
//     {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
//     {"events":["brussel sprouts","running","work"],"squirrel":false},
//     {"events":["brushed teeth","work"],"squirrel":false},
//     {"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
//     {"events":["candy","brushed teeth","work"],"squirrel":false},
//     {"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
//     {"events":["bread","brushed teeth","weekend"],"squirrel":false},
//     {"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
//     {"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
//     {"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
//     {"events":["lettuce","brushed teeth","work"],"squirrel":false},
//     {"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
//     {"events":["pizza","brushed teeth","work"],"squirrel":false},
//     {"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
//     {"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
//     {"events":["brushed teeth","running","work"],"squirrel":false},
//     {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
//     {"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
//     {"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
//     {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
//     {"events":["carrot","reading","weekend"],"squirrel":false},
//     {"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
//     {"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
//     {"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
//     {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
//     {"events":["pizza","brushed teeth","running","work"],"squirrel":false},
//     {"events":["lettuce","brushed teeth","work"],"squirrel":false},
//     {"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
//     {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
//   ];
  
//   // This makes sure the data is exported in node.js —
//   // `require('./path/to/journal.js')` will get you the array.
//   if (typeof module != "undefined" && module.exports && (typeof window == "undefined" || window.exports != exports))
//     module.exports = JOURNAL;
//   if (typeof global != "undefined" && !global.JOURNAL)
//     global.JOURNAL = JOURNAL;

// // =============== пошли функции ===============
// // расчитывает формулу вероятности
// function phi(table) {
//     return ((table[3] * table[0]) - (table[2] * table[1])) /
//            Math.sqrt((table[2] + table[3]) *
//                     (table[0] + table[1]) *
//                     (table[1] + table[3]) *
//                     (table[0] + table[2]))
// }

// console.log(phi([76, 9, 4, 1]));

// расчитывает событие по отношиению к превращении в белку
// function tableFor(event, journal) {
//     let table = [0, 0, 0, 0];
//     for (const entry of journal) {
//         index = 0;
//         if(entry.events.includes(event)) index += 1;
//         if(entry.squirrel) index += 2;
//         table[index] += 1;
//     }
//     return table;
// }

// console.log(tableFor("ел пиццу", JOURNAL));

// // ищет все типы событий
// function journalEvents(journal) {
//     let events = [];
//     for (const entry of journal) {
//         for (const event of entry.events) {
//             if(!events.includes(event)){
//                 events.push(event)
//             }
//         }
//     }
//     return events
// }

// for (const event of journalEvents(JOURNAL)) {
//     let correlation = phi(tableFor(event, JOURNAL));
//     if (correlation > 0.1 || correlation < - 0.1) {
//         console.log(event + ":", phi(tableFor(event, JOURNAL)));
//     }
// }

// for (let entry of JOURNAL) {
//     if (entry.events.includes("peanuts") && 
//         !entry.events.includes("brushed teeth")) {
//         entry.events.push("арахис-зубы");
//     }
// }

// console.log(phi(tableFor("арахис-зубы", JOURNAL)));

// let todoList = [];

// function remember (task) {
//     todoList.push(task)
// }

// remember("fiufiu");

// // console.log(todoList);

// function range(start, end, shag = start < end ? 1 : -1) {
//     let myArr = [];
//     if (shag > 0) {
//         for (let index = start; index <= end; index+= shag) {
//             myArr.push(index);
//     }} else {   
//             for (let index = start; index >= end; index+= shag) {
//             myArr.push(index);
//         }}
    
//     return myArr
// }

// function sum(arr) {
//     let summa = 0;
//     for (let number of arr) {
//         summa += number;
//     }
//     return summa;
// }fjfjj

// console.log(range(10, 1, 1));

// console.log(sum(range(1, 10)));

// =============== переворот массива с созданием нового массива

function reverseArray(arr) {
    let newArr = [];
    for (const index of arr) {
        newArr.unshift(index);
    }
    return newArr
}

// =============== переворот массива с созданием нового массива, способ 2 от большего к меньшему

function reverseArray2(arr) {
    let newArr2 = [];
    for (let i = arr.length - 1; i >= 0; i--){
        newArr2.push(arr[i]);
    }
    return newArr2
}

// =============== переворот массива без создания нового массива

function reverseArrInPlace(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let old = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = old;
    }
    return arr
}

// =============== перевод массива в список (вариант 1)
function arrayToList(arr) {
    if (!arr || !Array.isArray(arr) || !arr.length) return null
   
    let list = {
        value: arr[0],
        rest: {}
    }

    if(arr.length) {
        arr.shift();
        list.rest = arrayToList(arr)
    }

    return list
}

// ============= вариант 2

function arrayToList2(arr) {
    let list = null;
    for (let i = arr.length - 1; i >= 0; i--) {
        list = {value: arr[i], rest: list};
    }
    return list
}

//console.log(arrayToList([1,2,3]));


let myList =  arrayToList([1,2,3]);

function listToArr(list) {
    let res = [];
    res.push(list.value);
    if (list.rest) {
        console.log( [...res, ...listToArr(list.rest) ] + "тест");
        return [...res, ...listToArr(list.rest)];

    }
    return res
}

//console.log(listToArr(myList));

function listToArr2(list) {
    let arr = [];
    for (let node = list; node; node = node.rest) {
        arr.push(node.value);
    }
    return arr
}

//console.log(listToArr2(myList));

function prepend(value, list) {
    return {value, rest: list}
}

//console.log(prepend(20, 5));

function nth(list, n) {
    if(!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
}

//console.log(nth(arrayToList([10, 20, 30]), 2));
 
function deepEqual(a, b) {
    if (a === b) return true;

    if ( a == null || typeof a != "object" || b == null || typeof b != "object") return false;

    let keysA = Object.keys(a);
    let keysB = Object.keys(b);

    if (keysA.length != keysB.length) false;

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }

    return true;
}   


let obj = {here: {is: "an"}, object: 2};

// console.log(deepEqual(obj, obj));

// console.log(deepEqual(obj, {here: 1, object: 2}));

// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));


let user = {
    name: "John",
    age: 30,
};

user.isAdmin = true;

// let key = prompt("Что вы хотите узнать о пользователе?");

let fruit = prompt("Какой фрукт купить?");

let bag = {
    [fruit]: 5,
};

alert(bag.apple);

