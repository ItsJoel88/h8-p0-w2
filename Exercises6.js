/*NOMOR 1*/
var firstNumber = 2;
var secondNumber = 20;
console.log('LOOPING PERTAMA');
while(firstNumber<=20){
    console.log(firstNumber + ' - ' + 'I love coding');
    firstNumber += 2;
}
console.log('LOOPING KEDUA');
while(secondNumber>=2){
    console.log(secondNumber + ' - ' + 'I will become fullstack developer');
    secondNumber -= 2;
}

/*NOMOR 2*/
console.log('LOOPING PERTAMA');
for(var i = 1;i<=20;i++){
    console.log(i + ' - ' + 'I love coding');
}
console.log(' ');
console.log('LOOPING KEDUA');
for(var j = 20;j>=1;j--){
    console.log(j + ' - ' + 'I will become fullstack developer');
}

/*NOMOR 3*/
for (var counter = 1;counter<=100;counter++){
    if (counter % 2 === 0){
        console.log('GENAP');
    }else{
        console.log('GANJIL');
    }
}
for (var counter1 = 1;counter1<=100;counter1+=2){
    if(counter1 % 3 === 0){
        console.log(counter1 + ' KELIPATAN 3');
    }else{
        console.log('""');
    }
}
for (var counter2 = 1;counter2<=100;counter2+=5){
    if(counter2 % 6 === 0){
        console.log(counter2 + ' KELIPATAN 6');
    }else{
        console.log('""');
    }
}
for(var counter3 = 1;counter3<=100;counter3+=9){
    if(counter3 % 10 === 0){
        console.log(counter3 + ' KELIPATAN 10');
    }else{
        console.log('"');
    }
}
