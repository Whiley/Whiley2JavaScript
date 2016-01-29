function invertByte$Z9bF1D527FWz(r0){//function(bool[]) -> bool[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(0);
            var r3 = r4;//assign %3 = %4  : int
            var r1 = r3;//assign %1 = %3  : int
            var r5 = r0.clone(new WyJS.Type.Bool());//assign %5 = %0  : bool[]
            var r2 = r5.clone(new WyJS.Type.Bool());//assign %2 = %5  : bool[]
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case -3:
            var r17 = new WyJS.Integer(8);
            if(WyJS.gt(r1, r17, true)){
               control_flow_pc = 815;
               control_flow_repeat = true;
               continue outer;
            }
            var r18 = r0.getValue(r1);
            var r20 = r0.getValue(r1);
            var r21 = true;
            if(r20 === r21){
               control_flow_pc = 816;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -4;
               control_flow_repeat = true;
               break;
            }
         case -4:
            var r19 = true;
            control_flow_pc = 817;
            control_flow_repeat = true;
            continue outer;//goto label817
            control_flow_pc = -3;
            control_flow_repeat = true;
         case 816:
            var r19 = false;
            control_flow_pc = -3;
            control_flow_repeat = true;
         case 817:
            var r22 = r0.getValue(r1);
            var r24 = r0.getValue(r1);
            var r25 = true;
            if(r24 === r25){
               control_flow_pc = 818;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -5;
               control_flow_repeat = true;
               break;
            }
         case -5:
            var r23 = true;
            control_flow_pc = 819;
            control_flow_repeat = true;
            continue outer;//goto label819
            control_flow_pc = -3;
            control_flow_repeat = true;
         case 818:
            var r23 = false;
            control_flow_pc = -3;
            control_flow_repeat = true;
         case 819:
            r2.setValue(r1, r23);
            var r26 = new WyJS.Integer(1);
            var r27 = r1.add(r26);//add %27 = %1, %26 : int
            var r1 = r27;//assign %1 = %27  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case 815:
            return r2;//return %2 : bool[]
            return;
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
            var r9 = new WyJS.Array([r1, r2, r3, r4, r5, r6, r7, r8], new WyJS.Type.Array(new WyJS.Type.Bool()));
            var r0 = invertByte$Z9bF1D527FWz(r9);//invoke %0 = (%9) While_Valid_37:invertByte : function(bool[]) -> bool[]
            var r10 = false;
            var r11 = true;
            var r12 = false;
            var r13 = true;
            var r14 = false;
            var r15 = true;
            var r16 = false;
            var r17 = true;
            var r18 = new WyJS.Array([r10, r11, r12, r13, r14, r15, r16, r17], new WyJS.Type.Array(new WyJS.Type.Bool()));
            if(WyJS.equals(r0, r18, true)){
               control_flow_pc = 820;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 820:
            var r20 = true;
            var r21 = true;
            var r22 = true;
            var r23 = true;
            var r24 = false;
            var r25 = false;
            var r26 = false;
            var r27 = false;
            var r28 = new WyJS.Array([r20, r21, r22, r23, r24, r25, r26, r27], new WyJS.Type.Array(new WyJS.Type.Bool()));
            var r19 = invertByte$Z9bF1D527FWz(r28);//invoke %19 = (%28) While_Valid_37:invertByte : function(bool[]) -> bool[]
            var r29 = false;
            var r30 = false;
            var r31 = false;
            var r32 = false;
            var r33 = true;
            var r34 = true;
            var r35 = true;
            var r36 = true;
            var r37 = new WyJS.Array([r29, r30, r31, r32, r33, r34, r35, r36], new WyJS.Type.Array(new WyJS.Type.Bool()));
            if(WyJS.equals(r19, r37, true)){
               control_flow_pc = 821;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 821:
            return;
      }
   }
}

