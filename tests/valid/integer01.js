function main(){//method() -> void
   var r2 = 1;//const %2 = 1 : int
   var r1 = r2;//assign %1 = %2  : int
   var r0 = r1;//assign %0 = %1  : int
   var r3 = 1;//const %3 = 1 : int
   if(r0 != r3){//assert
      throw {name: 'Assert Failed', message: 'r0 !eq r3'}
   }
   var r4 = 5;//const %4 = 5 : int
   var r0 = r4;//assign %0 = %4  : int
   var r5 = 5;//const %5 = 5 : int
   if(r0 != r5){//assert
      throw {name: 'Assert Failed', message: 'r0 !eq r5'}
   }
}

main();
