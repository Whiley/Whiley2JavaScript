function f(r0){//function(int) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = 1;//const %4 = 1 : int
            var r5 = 2;//const %5 = 2 : int
            var r6 = 64;//const %6 = 64 : int
            var r7 = [r4, r5, r6];
            var r3 = r7;//assign %3 = %7  : [int]
            var r1 = r3;//assign %1 = %3  : [int]
            var r8 = r1;//assign %8 = %1  : [int]
            var r2 = r8;//assign %2 = %8  : [int]
            var r9 = r1.length;
            if(r0  ==  r9){
               control_flow_pc = 310;
               control_flow_repeat = true;
               continue outer;
            }
            var r10 = 3;//const %10 = 3 : int
            var r11 = 2;//const %11 = 2 : int
            var r12 = 3;//const %12 = 3 : int
            r2[r11] = r12;
            control_flow_pc = 311;
            control_flow_repeat = true;
            continue outer;
         case 310:
            var r13 = 2;//const %13 = 2 : int
            r2[r13] = r0;
         case 311:
            var r14 = 2;//const %14 = 2 : int
            var r15 = r2[r14];
            var r16 = r1.length;
            if(r15  ==  r16){
               control_flow_pc = 312;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 312:
            return r17;//return %17 : [int]
      }
   }
}

function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = 2;//const %1 = 2 : int
            var r0 = f(r1);
            var r2 = 1;//const %2 = 1 : int
            var r3 = 2;//const %3 = 2 : int
            var r4 = 64;//const %4 = 64 : int
            var r5 = 1;//const %5 = 1 : int
            var r6 = 2;//const %6 = 2 : int
            var r7 = 3;//const %7 = 3 : int
            var r8 = [r2, r3, r4, r5, r6, r7];
            if(r0.length ==  r8.length){
               var listComp = true;
               for(var i = 0; i<r0.length;i++){
                  if(r0[i]  !=  r8[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){
                  control_flow_pc = 313;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 313:
            var r10 = 3;//const %10 = 3 : int
            var r9 = f(r10);
            var r11 = 1;//const %11 = 1 : int
            var r12 = 2;//const %12 = 2 : int
            var r13 = 64;//const %13 = 64 : int
            var r14 = 1;//const %14 = 1 : int
            var r15 = 2;//const %15 = 2 : int
            var r16 = 3;//const %16 = 3 : int
            var r17 = [r11, r12, r13, r14, r15, r16];
            if(r9.length ==  r17.length){
               var listComp = true;
               for(var i = 0; i<r9.length;i++){
                  if(r9[i]  !=  r17[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){
                  control_flow_pc = 314;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 314:
      }
   }
}

test();
