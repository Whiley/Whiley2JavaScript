function test(r0){//method(real) -> real
   return r0;//return %0 : real
}

function main(){//method() -> void
   var r1 = 1.1123;//const %1 = 1.1123 : real
   var r0 = test(r1);
   var r2 = 1.1123;//const %2 = 1.1123 : real
   if(r0 != r2){//assert
      throw {name: 'Assert Failed', message: 'r0 !eq r2'}
   }
   var r4 = 10.5992;//const %4 = 10.5992 : real
   var r3 = test(r4);
   var r5 = 10.5992;//const %5 = 10.5992 : real
   if(r3 != r5){//assert
      throw {name: 'Assert Failed', message: 'r3 !eq r5'}
   }
}

main();
