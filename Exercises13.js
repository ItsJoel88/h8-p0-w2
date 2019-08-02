function xo(kata){
    var tampungX = 0;
    var tampungO = 0;
    for(var i=0;i<kata.length;i++){
        if(kata[i]==='x'){
            tampungX++; 
        }else if(kata[i] === 'o'){
            tampungO++;
        }
    }
    if(tampungX === tampungO){
        return true;
    }else{
        return false;
    }
}
console.log(xo('xoxoxoxo'));