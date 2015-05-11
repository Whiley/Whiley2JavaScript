function sum(r0){//function([Assume_Valid_1:nat]) -> Assume_Valid_1:nat
   var r4 = 0;//const %4 = 0 : int
   var r3 = r4;//assign %3 = %4  : int
   var r1 = r3;//assign %1 = %3  : int
   return r1;//return %1 : int
}

function test(){//method() -> void
   var r3 = 0;//const %3 = 0 : int
   var r4 = 1;//const %4 = 1 : int
   var r5 = 2;//const %5 = 2 : int
   var r6 = 3;//const %6 = 3 : int
   var r2 = sum(r7);
   var r1 = r2;//assign %1 = %2  : int
   var r0 = r1;//assign %0 = %1  : int
   var r8 = 6;//const %8 = 6 : int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(r0  !=  r8){
               throw {name: 'Assert Failed', message: 'fail'}
            }
         case 95:
      }
   }
}

test();
