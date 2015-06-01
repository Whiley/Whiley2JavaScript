function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = 1;//const %3 = 1 : int
            var r4 = 2;//const %4 = 2 : int
            var r5 = 3;//const %5 = 3 : int
            var r6 = [r3, r4, r5];
            var r2 = r6;//assign %2 = %6  : [int]
            var r0 = r2;//assign %0 = %2  : [int]
            var r8 = 1;//const %8 = 1 : int
            var r9 = 2;//const %9 = 2 : int
            var r10 = 3;//const %10 = 3 : int
            var r11 = [r8, r9, r10];
            var r7 = r11;//assign %7 = %11  : [int]
            var r1 = r7;//assign %1 = %7  : [int]
            if(r0.length ==  r1.length){
               var listComp = true;
               for(var i = 0; i<r0.length;i++){
                  if(r0[i]  !=  r1[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){
                  control_flow_pc = 0;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 0:
      }
   }
}

test();
