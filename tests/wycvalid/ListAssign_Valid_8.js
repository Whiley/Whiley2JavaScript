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
            var r7 = 0;//const %7 = 0 : int
            var r8 = [r7];
            var r9 = [r6, r8];
            var r2 = r9;//assign %2 = %9  : [[int]]
            var r0 = r2;//assign %0 = %2  : [[int]]
            var r10 = r0;//assign %10 = %0  : [[int]]
            var r1 = r10;//assign %1 = %10  : [[int]]
            var r11 = 3;//const %11 = 3 : int
            var r12 = 4;//const %12 = 4 : int
            var r13 = 5;//const %13 = 5 : int
            var r14 = [r11, r12, r13];
            var r15 = 0;//const %15 = 0 : int
            var r16 = 3;//const %16 = 3 : int
            var r17 = 4;//const %17 = 4 : int
            var r18 = 5;//const %18 = 5 : int
            var r19 = [r16, r17, r18];
            r1[r15] = r19;//update %1[%15] = %19 : [[int]] -> [[int]]
            var r20 = 0;//const %20 = 0 : int
            var r21 = r0[r20];
            var r22 = 1;//const %22 = 1 : int
            var r23 = 2;//const %23 = 2 : int
            var r24 = 3;//const %24 = 3 : int
            var r25 = [r22, r23, r24];
            if(r21.length ==  r25.length){
               var listComp = true;
               for(var i = 0; i<r21.length;i++){
                  if(r21[i]  !=  r25[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){//ifeq %21, %25 goto label32 : [int]
                  control_flow_pc = 32;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 32:
            var r26 = 1;//const %26 = 1 : int
            var r27 = r0[r26];
            var r28 = 0;//const %28 = 0 : int
            var r29 = [r28];
            if(r27.length ==  r29.length){
               var listComp = true;
               for(var i = 0; i<r27.length;i++){
                  if(r27[i]  !=  r29[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){//ifeq %27, %29 goto label33 : [int]
                  control_flow_pc = 33;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 33:
            var r30 = 0;//const %30 = 0 : int
            var r31 = r1[r30];
            var r32 = 3;//const %32 = 3 : int
            var r33 = 4;//const %33 = 4 : int
            var r34 = 5;//const %34 = 5 : int
            var r35 = [r32, r33, r34];
            if(r31.length ==  r35.length){
               var listComp = true;
               for(var i = 0; i<r31.length;i++){
                  if(r31[i]  !=  r35[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){//ifeq %31, %35 goto label34 : [int]
                  control_flow_pc = 34;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 34:
            var r36 = 1;//const %36 = 1 : int
            var r37 = r1[r36];
            var r38 = 0;//const %38 = 0 : int
            var r39 = [r38];
            if(r37.length ==  r39.length){
               var listComp = true;
               for(var i = 0; i<r37.length;i++){
                  if(r37[i]  !=  r39[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){//ifeq %37, %39 goto label35 : [int]
                  control_flow_pc = 35;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 35:
      }
   }
}

test();
