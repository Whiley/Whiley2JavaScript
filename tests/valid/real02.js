function test(r0){//method(bool) -> bool
   return r0;//return %0 : bool
}

function main(){//method() -> void
   var r1 = true;//const %1 = true : bool
   var r0 = test(r1);
   var r2 = true;//const %2 = true : bool
   if(r0 != r2){//assert
      throw {name: 'Assert Failed', message: 'r0 !eq r2'}
   }
   var r4 = false;//const %4 = false : bool
   var r3 = test(r4);
   var r5 = false;//const %5 = false : bool
   if(r3 != r5){//assert
      throw {name: 'Assert Failed', message: 'r3 !eq r5'}
   }
}

main();
