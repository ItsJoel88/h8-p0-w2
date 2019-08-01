function konversiMenit(menit){
    var jam = menit/60;
    var b = Math.floor(jam);
    var menit1 = (jam-b)*60;
    var c = Math.floor(menit1);
    if(c<10){
        c = '0' + c;
    }
    return b + ':' + c;
}
console.log(konversiMenit(118));