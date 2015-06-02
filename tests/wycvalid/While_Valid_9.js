function extract(r0){//function([int]) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = 0;//const %4 = 0 : int
            var r3 = r4;//assign %3 = %4  : int
            var r1 = r3;//assign %1 = %3  : int
            var r6 = 1;//const %6 = 1 : int
            var r7 = [r6];
            var r5 = r7;//assign %5 = %7  : [int]
            var r2 = r5;//assign %2 = %5  : [int]
            while(true){
               var r10 = r0.length;
               if(r1  >=  r10){
                  control_flow_pc = 133;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r11 = 1;//const %11 = 1 : int
               var r12 = [r11];
               var r2 = r13;//assign %2 = %13  : [int]
               var r14 = 1;//const %14 = 1 : int
               var r15 = r1 + r14;//add %15 = %1, %14 : int
               var r1 = r15;//assign %1 = %15  : int
            }
         case 133:
            return r2;//return %2 : [int]
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
            var r3 = 1;//const %3 = 1 : int
            var r4 = 2;//const %4 = 2 : int
            var r5 = 3;//const %5 = 3 : int
            var r6 = 4;//const %6 = 4 : int
            var r7 = 5;//const %7 = 5 : int
            var r8 = 6;//const %8 = 6 : int
            var r9 = 7;//const %9 = 7 : int
            var r10 = [r3, r4, r5, r6, r7, r8, r9];
            var r2 = extract(r10);
            var r1 = r2;//assign %1 = %2  : [int]
            var r0 = r1;//assign %0 = %1  : [int]
            var r11 = 1;//const %11 = 1 : int
            var r12 = 1;//const %12 = 1 : int
            var r13 = 1;//const %13 = 1 : int
            var r14 = 1;//const %14 = 1 : int
            var r15 = 1;//const %15 = 1 : int
            var r16 = 1;//const %16 = 1 : int
            var r17 = 1;//const %17 = 1 : int
            var r18 = 1;//const %18 = 1 : int
            var r19 = [r11, r12, r13, r14, r15, r16, r17, r18];
            if(r0.length ==  r19.length){
               var listComp = true;
               for(var i = 0; i<r0.length;i++){
                  if(r0[i]  !=  r19[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){
                  control_flow_pc = 134;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 134:
            var r21 = [];
            var r20 = extract(r21);
            var r0 = r20;//assign %0 = %20  : [int]
            var r22 = 1;//const %22 = 1 : int
            var r23 = [r22];
            if(r0.length ==  r23.length){
               var listComp = true;
               for(var i = 0; i<r0.length;i++){
                  if(r0[i]  !=  r23[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){
                  control_flow_pc = 135;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 135:
      }
   }
}

test();
