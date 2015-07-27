function invertByte(r0){//function([bool]) -> [bool]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(0);
            r3 = r4;//assign %3 = %4  : int
            r1 = r3;//assign %1 = %3  : int
            r5 = r0.clone();//assign %5 = %0  : [bool]
            r2 = r5.clone();//assign %2 = %5  : [bool]
            while(true){//loop (%1, %2, %6, %7, %8, %9, %11, %12, %13, %14, %15, %16, %17, %18, %19, %20, %21, %22, %23, %24, %25, %26, %27, %28)
               var r18 = new WyJS.Integer(8);
               if(WyJS.gt(r1, r18, true)){
                  control_flow_pc = 756;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r19 = r0.getValue(r1);
               var r21 = r0.getValue(r1);
               var r22 = true;
               if(r21 === r22){
                  var r20 = false;
               case 758:
                  continue;
               }
               var r20 = true;
            }
         case 756:
            return r2;//return %2 : [bool]
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
            var r1 = true;
            var r2 = false;
            var r3 = true;
            var r4 = false;
            var r5 = true;
            var r6 = false;
            var r7 = true;
            var r8 = false;
            var r9 = new WyJS.List([r1, r2, r3, r4, r5, r6, r7, r8], new WyJS.List('bool'));
            var r0 = invertByte(r9);//invoke %0 = (%9) While_Valid_37:invertByte : function([bool]) -> [bool]
            var r10 = false;
            var r11 = true;
            var r12 = false;
            var r13 = true;
            var r14 = false;
            var r15 = true;
            var r16 = false;
            var r17 = true;
            var r18 = new WyJS.List([r10, r11, r12, r13, r14, r15, r16, r17], new WyJS.List('bool'));
            if(WyJS.equals(r0, r18, true)){
               control_flow_pc = 761;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 761:
            var r20 = true;
            var r21 = true;
            var r22 = true;
            var r23 = true;
            var r24 = false;
            var r25 = false;
            var r26 = false;
            var r27 = false;
            var r28 = new WyJS.List([r20, r21, r22, r23, r24, r25, r26, r27], new WyJS.List('bool'));
            var r19 = invertByte(r28);//invoke %19 = (%28) While_Valid_37:invertByte : function([bool]) -> [bool]
            var r29 = false;
            var r30 = false;
            var r31 = false;
            var r32 = false;
            var r33 = true;
            var r34 = true;
            var r35 = true;
            var r36 = true;
            var r37 = new WyJS.List([r29, r30, r31, r32, r33, r34, r35, r36], new WyJS.List('bool'));
            if(WyJS.equals(r19, r37, true)){
               control_flow_pc = 762;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 762:
      }
   }
}

