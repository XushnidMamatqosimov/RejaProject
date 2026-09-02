// console.log("Jack Ma Maslahatlari");
/* const list = [
    "yaxshi talaba boling", //0-20
    "togri boshliq tanlang va koproq xato qiling", // 20-30
    "Ozingizni biznessingizni boshlang", // 30-40
    "siz kuchli bolgan narsalarni qiling", //40-50
    "yoshlarga investitsiya qiling", // 50-60;
    "endi damni oling xoji aka, " // 60 => 
];

// CallBack
async function maslahatBering(a, callback){
    if(typeof a !== "number") callback("please enter number", null);
    else if ( a <= 20) callback(null, list[0]);
    else if ( a > 20 && a<=30)  callback(null, list[1]);
    else if ( a > 30  && a<=40)  callback(null, list[2]);
    else if ( a > 40 && a<=50) callback(null, list[3]);
    else if ( a >50 && a<=60)  callback(null, list[4]);
    else{
        setTimeout(()=> {
            callback(null, list[5]);
        }, 5000);
    }
} 

console.log("passed here 0");
maslahatBering(12, (err, data)=>{
    if(err) console.log("Error: ", err);
    else{
        console.log(data);
    }
});
console.log("passed here 1"); */




// Asynchronous
/* async function maslahatBering(a){
    if(typeof a !== "number") throw new Error("Please enter number");
    else if ( a <= 20) return list[0];
    else if ( a > 20 && a<=30) return list[1];
    else if ( a > 30  && a<=40) return list[2];
    else if ( a > 40 && a<=50) return list[3];
    else if ( a >50 && a<=60) return list[4];
    else{
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                resolve(list[5]);
            }, 5000);
        });
    }
} */

/* console.log("passed here 0");
maslahatBering(25)
   .then((data) => {
    console.log(data);
   }).catch( (err) => 
      console.log("Error: ", err)
   );
console.log("passed here 1"); */

/* async function  run () {
    let javob = await maslahatBering(20);
    console.log(javob);
    javob = await maslahatBering(28);
    console.log(javob);
    javob = maslahatBering(35);
    console.log(javob);
    javob = maslahatBering(55);
    console.log(javob);
    
}
run(); */ 

// A - Task
/* const word = "Assalom";
const letter = "s";

let num = 0;
for (let i = 0; i < word.length; i++) {
    if(word[i].toLowerCase() === letter.toLocaleLowerCase()){
        num++;
    }
}
console.log(num); */

// B-Task
let count = 0;
const exm = "adkjflajf234jflkj987";
for (let char of exm ) {
    if(!isNaN(char) && char !== " "){
        count++;
    }
}

console.log(count);

