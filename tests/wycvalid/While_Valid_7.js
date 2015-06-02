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
               var r11 = r0.length;
               if(r1  >=  r11){
                  control_flow_pc = 3;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r12 = r0[r1];
               var r13 = [r12];
               var r2 = r14;//assign %2 = %14  : [int]
               var r15 = 1;//const %15 = 1 : int
               var r16 = r1 + r15;//add %16 = %1, %15 : int
               var r1 = r16;//assign %1 = %16  : int
            }
         case 3:
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
            var r3 = 2;//const %3 = 2 : int
            var r4 = -r3;
            var r5 = 3;//const %5 = 3 : int
            var r6 = -r5;
            var r7 = 1;//const %7 = 1 : int
            var r8 = 2;//const %8 = 2 : int
            var r9 = 23;//const %9 = 23 : int
            var r10 = -r9;
            var r11 = 3;//const %11 = 3 : int
            var r12 = 2345;//const %12 = 2345 : int
            var r13 = 4;//const %13 = 4 : int
            var r14 = 5;//const %14 = 5 : int
            var r15 = [r4, r6, r7, r8, r10, r11, r12, r13, r14];
            var r2 = extract(r15);
            var r1 = r2;//assign %1 = %2  : [int]
            var r0 = r1;//assign %0 = %1  : [int]
            var r16 = 2;//const %16 = 2 : int
            var r17 = -r16;
            var r18 = 3;//const %18 = 3 : int
            var r19 = -r18;
            var r20 = 1;//const %20 = 1 : int
            var r21 = 2;//const %21 = 2 : int
            var r22 = 23;//const %22 = 23 : int
            var r23 = -r22;
            var r24 = 3;//const %24 = 3 : int
            var r25 = 2345;//const %25 = 2345 : int
            var r26 = 4;//const %26 = 4 : int
            var r27 = 5;//const %27 = 5 : int
            var r28 = [r17, r19, r20, r21, r23, r24, r25, r26, r27];
            if(r0.length ==  r28.length){
               var listComp = true;
               for(var i = 0; i<r0.length;i++){
                  if(r0[i]  !=  r28[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){
                  control_flow_pc = 4;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 4:
      }
   }
}

test();
