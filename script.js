let field = document.querySelector("#field");

let arr = [];
while (arr.length < 20) {
    let a = Math.round(Math.random() * (278 - 1) + 1);
// console.log(a);
    if (arr.indexOf(a) == -1) arr.push(a);
}

console.log(arr);

for (let i = 1; i < 21; i++) {
    let str = "./pic278/pic" + arr[i-1] + ".png";
    let str2 = `<img src='${str}'>`;
    field.innerHTML += str2;
    // console.log(str2);
    if (i % 5 == 0) field.innerHTML += "<div></div>";
}
;