function konversiMenit(menit){
    var jam = Math.floor(menit/60);
    var menit1 = menit % 60;
    if(menit1 === 0){
         menit1 += '0';
    }else if(menit1 !== 0 && menit1<10){
         menit1 = '0' + menit1
    }
    return jam + ':' + menit1;
}
console.log(konversiMenit(123));
