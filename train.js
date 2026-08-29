console.log("Jack Ma Maslahatlari");
const list = [
    "yaxshi talaba boling", //0-20
    "togri boshliq tanlang va koproq xato qiling", // 20-30
    "Ozingizni biznessingizni boshlang", // 30-40
    "siz kuchli bolgan narsalarni qiling", //40-50
    "yoshlarga investitsiya qiling", // 50-60;
    "endi damni oling xoji aka, " // 60 => 
];

function maslahatBering(a, callback){
    if(typeof a !== "number") callback("please enter a number", null);
    else if ( a <= 20) callback(null, list[0]);
    else if ( a > 20 && a<=30) callback(null, list[1]);
    else if ( a > 30  && a<=40) callback(null, list[2]);
    else if ( a > 40 && a<=50) callback(null, list[3]);
    else if ( a >50 && a<=60) callback(null, list[4]);
    else{
        callback(null, list[5]);
    }
}

console.log("passed here 0");
maslahatBering("Salom", (err, data)=> {
     if(err){
        console.log("error:", err);
     } else{
        console.log("Javob: ", data);
     }
});
console.log("passed here 1");
