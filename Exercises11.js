function balikKata(kata){
    var tampung ='';
    for(i=kata.length-1;i>=0;i--){
        tampung += kata[i];
    }
    return tampung;
}
console.log(balikKata('Nuel'));