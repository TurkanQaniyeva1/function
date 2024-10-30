//1ci saul



function daire() {
    let r = parseInt(prompt("Dairenin radiusunu daxil edin:"));
    let area = 3 * r * r;
    alert("Dairenin alanı: " + area);
}

daire();




//2ci sual:
function numbers() {
    let num1 = parseInt(prompt("1ci ededi daxil edin:"));
    let num2 = parseInt(prompt("2ci ededi daxil edin:"));
    let toplam = num1 + num2;
    let vurma = num1 * num2;
    alert("Ədədlərin cəmi: " + toplam);
    alert("Ədədlərin hasilı: " + vurma);
}
numbers()

//3cu saul:
function checkNumber() {
    let checkNum1 = prompt("4 reqemli bir ədəd daxil edin:");
    let firstDigit = checkNum1[0];
    let secondDigit = checkNum1[1];
    let thirdDigit = checkNum1[2];
    let fourthDigit = checkNum1[3];
    if (firstDigit == fourthDigit && secondDigit == thirdDigit) {
        console.log("eyni");
    } else {
        console.log("eyni deyil");
    }
}
checkNumber();

//4cu sual

function username() {
    let username1 = prompt("Adınızı daxil edin:");
    alert("Salam, " + username1 + "!");
}

username();

//5ci sual
function calculate() {
    let numberOne = parseInt(prompt("Bir eded daxil edin:"));
    if (numberOne === 100 || numberOne === 0) {
        alert("100 və 0 ədələrini daxil edə bilməzsiniz.");
        return;
    }
    if (numberOne > 100) {
        alert(numberOne + " 100-dən böyükdür");
    } else {
        alert(numberOne + " 100-dən azdır");
    }

    if (numberOne > 0) {
        alert(numberOne + " müsbətdir");
    } else if (numberOne < 0) {
        alert(numberOne + " mənfidir");
    } else {
        alert("Sıfır daxil etdiniz");
    }

    if (numberOne % 2 === 0) {
        alert(numberOne + " cütdür");
    } else {
        alert(numberOne + " təkdir");
    }
}

calculate();
