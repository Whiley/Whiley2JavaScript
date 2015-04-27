function test(r0){//function(int) -> int
   return r0;//return %0 : int
}

function main(){//function() -> void
   var r2 = 1;//const %2 = 1 : int
   var r1 = test(r2);
   var r3 = 1;//const %3 = 1 : int
   if(r1 != r3){//assert
      throw {name: 'Assert Failed', message: 'r1 !eq r3'}
   }
   var r5 = 1;//const %5 = 1 : int
   var r4 = r5;//assign %4 = %5  : int
   var r0 = r4;//assign %0 = %4  : int
   var r7 = 10;//const %7 = 10 : int
   var r6 = test(r7);
   var r8 = 10;//const %8 = 10 : int
   if(r6 != r8){//assert
      throw {name: 'Assert Failed', message: 'r6 !eq r8'}
   }
}

main();
