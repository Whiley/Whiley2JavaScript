function move(r0, r1, r2){//function(int,int,[[ListAssign_Valid_5:nint]]) -> [[ListAssign_Valid_5:nint]]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = r2[r0];
            var r6 = 1;//const %6 = 1 : int
            var r7 = r0 + r6;//add %7 = %0, %6 : int
            var r8 = r5[r7];
            var r4 = r8;//assign %4 = %8  : null|int
            var r3 = r4;//assign %3 = %4  : null|int
            var r9 = null;//const %9 = null : null
            var r10 = 1;//const %10 = 1 : int
            var r11 = r0 + r10;//add %11 = %0, %10 : int
            var r12 = null;//const %12 = null : null
            r2[r0] = r11;//update %2[%0][%11] = %12 : [[null|int]] -> [[null|int]]
            var r13 = 1;//const %13 = 1 : int
            var r14 = r1 + r13;//add %14 = %1, %13 : int
            r2[r1] = r14;//update %2[%1][%14] = %3 : [[null|int]] -> [[null|int]]
            return r2;//return %2 : [[null|int]]
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
            var r2 = 1;//const %2 = 1 : int
            var r3 = 2;//const %3 = 2 : int
            var r4 = 3;//const %4 = 3 : int
            var r5 = [r2, r3, r4];
            var r6 = 4;//const %6 = 4 : int
            var r7 = 5;//const %7 = 5 : int
            var r8 = 6;//const %8 = 6 : int
            var r9 = [r6, r7, r8];
            var r10 = 7;//const %10 = 7 : int
            var r11 = 8;//const %11 = 8 : int
            var r12 = 9;//const %12 = 9 : int
            var r13 = [r10, r11, r12];
            var r14 = [r5, r9, r13];
            var r1 = r14;//assign %1 = %14  : [[int]]
            var r0 = r1;//assign %0 = %1  : [[null|int]]
            var r16 = 0;//const %16 = 0 : int
            var r17 = 1;//const %17 = 1 : int
            var r15 = move(r16, r17, r0);//invoke %15 = (%16, %17, %0) ListAssign_Valid_5:move : function(int,int,[[ListAssign_Valid_5:nint]]) -> [[ListAssign_Valid_5:nint]]
            var r0 = r15;//assign %0 = %15  : [[null|int]]
            var r18 = 1;//const %18 = 1 : int
            var r19 = null;//const %19 = null : null
            var r20 = 3;//const %20 = 3 : int
            var r21 = [r18, r19, r20];
            var r22 = 4;//const %22 = 4 : int
            var r23 = 5;//const %23 = 5 : int
            var r24 = 2;//const %24 = 2 : int
            var r25 = [r22, r23, r24];
            var r26 = 7;//const %26 = 7 : int
            var r27 = 8;//const %27 = 8 : int
            var r28 = 9;//const %28 = 9 : int
            var r29 = [r26, r27, r28];
            var r30 = [r21, r25, r29];
            if(r0.length ==  r30.length){
               var listComp = true;
               for(var i = 0; i<r0.length;i++){
                  if(r0[i]  !=  r30[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){//ifeq %0, %30 goto label23 : [[null|int]]
                  control_flow_pc = 23;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 23:
      }
   }
}

test();
