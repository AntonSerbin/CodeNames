let field = document.querySelector("#field");

for (let i = 1; i < 11; i++) {
    let str2 = `button` + i;
    document.querySelector("#nav").innerHTML += `<button id=${str2}>Scen${i}</button>`
}
for (let i = 1; i < 11; i++) {
    let str = `#button` + i;
    document.querySelector(str).addEventListener("click", () => draw(i));
}

let arr = [];

while (arr.length < 11 * 20) {
    let a = Math.round(Math.random() * (278 - 1) + 1);
    if (arr.indexOf(a) == -1) arr.push(a);
}

function draw(k) {
    field.innerHTML = "";
    for (let i = k * 20 + 1; i < k * 20 + 21; i++) {
        let str = "./pic278/pic" + arr[i - 1] + ".png";
        let str2 = `<img src='${str}'>`;
        field.innerHTML += str2;
        if (i % 5 == 0 && i != 20) field.innerHTML += "<div></div>";
    }
}

draw(0);