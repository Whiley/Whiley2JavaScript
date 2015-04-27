function test(r0){//function(int) -> int
   var r1 = 5;//const %1 = 5 : int
   var r2 = r0 + r1;//add %2 = %0, %1 : int
   return r2;//return %2 : int
}

function main(){//function() -> void
   var r1 = 1;//const %1 = 1 : int
   var r0 = test(r1);
   var r2 = 6;//const %2 = 6 : int
   if(r0 != r2){//assert
      throw {name: 'Assert Failed', message: 'r0 !eq r2'}
   }
   var r4 = 10;//const %4 = 10 : int
   var r3 = test(r4);
   var r5 = 15;//const %5 = 15 : int
   if(r3 != r5){//assert
      throw {name: 'Assert Failed', message: 'r3 !eq r5'}
   }
}

main();
