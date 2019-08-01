/*NOMOR 1*/
 var rows1 = 5;
 for(var i=1;i<=rows1;i++){
     console.log('*');
 }

/*NOMOR 2*/
var rows2 = 5;
for(var i=1;i<=rows2;i++){
    var outputt = '';
    for(var j=1;j<=rows2;j++){
       outputt += '*';
    }
    console.log(outputt);
}

/*NOMOR 3*/
var rows3 = 5;
for(var i = 1;i<=rows3;i++){
    var output = '';
    for(var j = 1;j<=i;j++){
        output += '*';
    }
    console.log(output);
}
