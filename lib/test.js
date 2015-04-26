function main(){//method() -> void
   var r3 = true;//const %3 = true : bool
   var r2 = r3;//assign %2 = %3  : bool
   var r0 = r2;//assign %0 = %2  : bool
   var r4 = true;//const %4 = true : bool
   if(r0 != r4){//assert
      throw {name: 'Assert Failed', message: 'r0 !eq r4'}
   }
   var r5 = false;//const %5 = false : bool
   var r0 = r5;//assign %0 = %5  : bool
   var r6 = false;//const %6 = false : bool
   if(r0 != r6){//assert
      throw {name: 'Assert Failed', message: 'r0 !eq r6'}
   }
}

main();