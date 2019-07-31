/*NOMOR 1*/
 var rows1 = 5;
 for(var i=1;i<=rows1;i++){
     console.log('*');
 }

/*NOMOR 2*/
 var rows2 = 5;
 for(var i=1;i<=rows2;i++){
     var a ='*';
     for(var j=1;j<=i;j++){
         var b = '*';
         for(var k=1;k<=j;k++){
             var c = '*';
             for(var l=1;l<=k;l++){
                 var d = '*';
                 for(var m=1;m<=l;m++){
                     var e = '*';
                 }
             }
         }
     }
     console.log(a,b,c,d,e);
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
