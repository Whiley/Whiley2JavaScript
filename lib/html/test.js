function main(){//method(whiley/lang/System:Console) -> void
   var r3 = true;//const %3 = true : bool
   var r2 = r3;//assign %2 = %3  : bool
   var r1 = r2;//assign %1 = %2  : bool
   var r4 = false;//const %4 = false : bool
   if(r1 != r4){//assert
      throw {name: 'Assert Failed', message: 'r1 !eq r4'}
   }
   var r5 = false;//const %5 = false : bool
   var r1 = r5;//assign %1 = %5  : bool
   var r6 = false;//const %6 = false : bool
   if(r1 != r6){//assert
      throw {name: 'Assert Failed', message: 'r1 !eq r6'}
   }
}

main();