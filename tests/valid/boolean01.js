function main(){//method() -> void
   var r2 = true;//const %2 = true : bool
   var r1 = r2;//assign %1 = %2  : bool
   var r0 = r1;//assign %0 = %1  : bool
   var r3 = true;//const %3 = true : bool
   if(r0 != r3){//assert
      throw {name: 'Assert Failed', message: 'r0 !eq r3'}
   }
   var r4 = false;//const %4 = false : bool
   var r0 = r4;//assign %0 = %4  : bool
   var r5 = false;//const %5 = false : bool
   if(r0 != r5){//assert
      throw {name: 'Assert Failed', message: 'r0 !eq r5'}
   }
}

main();
