function update(r0){//function([[int]]) -> [[int]]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = 10;//const %1 = 10 : int
            var r2 = 0;//const %2 = 0 : int
            var r3 = 0;//const %3 = 0 : int
            var r4 = 10;//const %4 = 10 : int
            r0[r3] = r2;
            return r0;//return %0 : [[int]]
      }
   }
}

function f(r0){//function([[int]]) -> ([[int]],[[int]])
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = update(r0);
            var r2 = r3;//assign %2 = %3  : [[int]]
            var r1 = r2;//assign %1 = %2  : [[int]]
            return r4;//return %4 : ([[int]],[[int]])
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
            var r4 = 1;//const %4 = 1 : int
            var r5 = 2;//const %5 = 2 : int
            var r6 = 3;//const %6 = 3 : int
            var r7 = 4;//const %7 = 4 : int
            var r8 = [r4, r5, r6, r7];
            var r9 = [r8];
            var r3 = r9;//assign %3 = %9  : [[int]]
            var r1 = r3;//assign %1 = %3  : [[int]]
            var r10 = f(r1);
            var r11 = 1;//const %11 = 1 : int
            var r12 = 2;//const %12 = 2 : int
            var r13 = 3;//const %13 = 3 : int
            var r14 = 4;//const %14 = 4 : int
            var r15 = [r11, r12, r13, r14];
            var r16 = [r15];
            if(r1.length ==  r16.length){
               var listComp = true;
               for(var i = 0; i<r1.length;i++){
                  if(r1[i]  !=  r16[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){
                  control_flow_pc = 295;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 295:
            var r17 = 10;//const %17 = 10 : int
            var r18 = 2;//const %18 = 2 : int
            var r19 = 3;//const %19 = 3 : int
            var r20 = 4;//const %20 = 4 : int
            var r21 = [r17, r18, r19, r20];
            var r22 = [r21];
            if(r0.length ==  r22.length){
               var listComp = true;
               for(var i = 0; i<r0.length;i++){
                  if(r0[i]  !=  r22[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){
                  control_flow_pc = 296;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 296:
      }
   }
}

test();
