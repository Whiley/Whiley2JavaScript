function reverse(r0){//function([int]) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = 0;//const %5 = 0 : int
            var r4 = r5;//assign %4 = %5  : int
            var r1 = r4;//assign %1 = %4  : int
            var r6 = r0;//assign %6 = %0  : [int]
            var r2 = r6;//assign %2 = %6  : [int]
            while(true){//loop (%0, %1, %7, %8, %9, %10, %11, %12, %13, %14, %15, %16, %17, %18, %19, %20, %21, %22, %23, %24, %25, %26, %27, %28, %29)
               var r20 = r0.length;//lengthof %20 = %0 : [int]
               if(r1  >=  r20){//ifge %1, %20 goto label842 : int
                  control_flow_pc = 842;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r22 = r0.length;//lengthof %22 = %0 : [int]
               var r23 = 1;//const %23 = 1 : int
               var r24 = r1 + r23;//add %24 = %1, %23 : int
               var r25 = r22 - r24;//sub %25 = %22, %24 : int
               var r21 = r25;//assign %21 = %25  : int
               var r11 = r21;//assign %11 = %21  : int
               var r26 = r2[r11];
               var r27 = r2[r11];
               r0[r1] = r27;//update %0[%1] = %27 : [int] -> [int]
               var r28 = 1;//const %28 = 1 : int
               var r29 = r1 + r28;//add %29 = %1, %28 : int
               var r1 = r29;//assign %1 = %29  : int
            }
         case 842:
            return r0;//return %0 : [int]
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
            var r1 = [];
            var r0 = reverse(r1);//invoke %0 = (%1) While_Valid_42:reverse : function([int]) -> [int]
            var r2 = [];
            if(r0.length ==  r2.length){
               var listComp = true;
               for(var i = 0; i<r0.length;i++){
                  if(r0[i]  !=  r2[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){//ifeq %0, %2 goto label843 : [int]
                  control_flow_pc = 843;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 843:
            var r4 = 1;//const %4 = 1 : int
            var r5 = [r4];
            var r3 = reverse(r5);//invoke %3 = (%5) While_Valid_42:reverse : function([int]) -> [int]
            var r6 = 1;//const %6 = 1 : int
            var r7 = [r6];
            if(r3.length ==  r7.length){
               var listComp = true;
               for(var i = 0; i<r3.length;i++){
                  if(r3[i]  !=  r7[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){//ifeq %3, %7 goto label844 : [int]
                  control_flow_pc = 844;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 844:
            var r9 = 1;//const %9 = 1 : int
            var r10 = 2;//const %10 = 2 : int
            var r11 = 3;//const %11 = 3 : int
            var r12 = [r9, r10, r11];
            var r8 = reverse(r12);//invoke %8 = (%12) While_Valid_42:reverse : function([int]) -> [int]
            var r13 = 3;//const %13 = 3 : int
            var r14 = 2;//const %14 = 2 : int
            var r15 = 1;//const %15 = 1 : int
            var r16 = [r13, r14, r15];
            if(r8.length ==  r16.length){
               var listComp = true;
               for(var i = 0; i<r8.length;i++){
                  if(r8[i]  !=  r16[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){//ifeq %8, %16 goto label845 : [int]
                  control_flow_pc = 845;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 845:
            var r18 = 1;//const %18 = 1 : int
            var r19 = 2;//const %19 = 2 : int
            var r20 = 3;//const %20 = 3 : int
            var r21 = 4;//const %21 = 4 : int
            var r22 = 5;//const %22 = 5 : int
            var r23 = 6;//const %23 = 6 : int
            var r24 = [r18, r19, r20, r21, r22, r23];
            var r17 = reverse(r24);//invoke %17 = (%24) While_Valid_42:reverse : function([int]) -> [int]
            var r25 = 6;//const %25 = 6 : int
            var r26 = 5;//const %26 = 5 : int
            var r27 = 4;//const %27 = 4 : int
            var r28 = 3;//const %28 = 3 : int
            var r29 = 2;//const %29 = 2 : int
            var r30 = 1;//const %30 = 1 : int
            var r31 = [r25, r26, r27, r28, r29, r30];
            if(r17.length ==  r31.length){
               var listComp = true;
               for(var i = 0; i<r17.length;i++){
                  if(r17[i]  !=  r31[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){//ifeq %17, %31 goto label846 : [int]
                  control_flow_pc = 846;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 846:
      }
   }
}

test();
