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
            var r7 = r0;//assign %7 = %0  : [int]
            var r1 = r7;//assign %1 = %7  : [int]
            var r8 = 0;//const %8 = 0 : int
            var r9 = 0;//const %9 = 0 : int
            var r10 = 0;//const %10 = 0 : int
            r1[r9] = r10;//update %1[%9] = %10 : [int] -> [int]
            var r11 = 1;//const %11 = 1 : int
            var r12 = 2;//const %12 = 2 : int
            var r13 = 3;//const %13 = 3 : int
            var r14 = [r11, r12, r13];
            if(r0.length ==  r14.length){
               var listComp = true;
               for(var i = 0; i<r0.length;i++){
                  if(r0[i]  !=  r14[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){//ifeq %0, %14 goto label0 : [int]
                  control_flow_pc = 0;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 0:
            var r15 = 0;//const %15 = 0 : int
            var r16 = 2;//const %16 = 2 : int
            var r17 = 3;//const %17 = 3 : int
            var r18 = [r15, r16, r17];
            if(r1.length ==  r18.length){
               var listComp = true;
               for(var i = 0; i<r1.length;i++){
                  if(r1[i]  !=  r18[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){//ifeq %1, %18 goto label1 : [int]
                  control_flow_pc = 1;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1:
      }
   }
}

test();
