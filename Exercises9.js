/* TUGAS 1 */
function shoutOut(){
    return 'Halo Function!';
}
console.log(shoutOut());

/* TUGAS 2 */
function calculateMultiply(num1,num2){
    return num1*num2;
}
console.log(calculateMultiply(10,6));

/* TUGAS 3 */
function processSentence(name,age,address,hobby){
    return 'Nama saya ' + name.toUpperCase() + ', umur saya ' + age + ' tahun, alamat saya di ' + address + ', dan saya punya hobby yaitu ' + hobby + '!';
}
console.log(processSentence('nuel',23,'Permata pamulang,Tangerang Selatan','singing'));

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); 