function zeroOut$Z9bF1D527RWz(r0){//function(int[]) -> int[]
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
            var r5 = r0.clone(new WyJS.Type.Int());//assign %5 = %0  : int[]
            var r2 = r5.clone(new WyJS.Type.Int());//assign %2 = %5  : int[]
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case -3:
            var r14 = r0.length();//lengthof %14 = %0 : int[]
            if(WyJS.gt(r1, r14, true)){
               control_flow_pc = 504;
               control_flow_repeat = true;
               continue outer;
            }
            var r15 = new WyJS.Integer(0);
            var r16 = new WyJS.Integer(0);
            r0.setValue(r1, r16);
            var r17 = new WyJS.Integer(1);
            var r18 = r1.add(r17);//add %18 = %1, %17 : int
            var r1 = r18;//assign %1 = %18  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case 504:
            return r0;//return %0 : int[]
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
            var r1 = new WyJS.Integer(0);
            var r2 = new WyJS.Integer(0);
            var r3 = WyJS.ArrayGen(r1, r2, new WyJS.Type.Array(new WyJS.Type.Int()));
            var r0 = zeroOut$Z9bF1D527RWz(r3);//invoke %0 = (%3) While_Valid_41:zeroOut : function(int[]) -> int[]
            var r4 = new WyJS.Integer(0);
            var r5 = new WyJS.Integer(0);
            var r6 = WyJS.ArrayGen(r4, r5, new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r6, true)){
               control_flow_pc = 505;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 505:
            var r8 = new WyJS.Integer(1);
            var r9 = new WyJS.Array([r8], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r7 = zeroOut$Z9bF1D527RWz(r9);//invoke %7 = (%9) While_Valid_41:zeroOut : function(int[]) -> int[]
            var r10 = new WyJS.Integer(0);
            var r11 = new WyJS.Array([r10], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r7, r11, true)){
               control_flow_pc = 506;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 506:
            var r13 = new WyJS.Integer(1);
            var r14 = new WyJS.Integer(2);
            var r15 = new WyJS.Array([r13, r14], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r12 = zeroOut$Z9bF1D527RWz(r15);//invoke %12 = (%15) While_Valid_41:zeroOut : function(int[]) -> int[]
            var r16 = new WyJS.Integer(0);
            var r17 = new WyJS.Integer(0);
            var r18 = new WyJS.Array([r16, r17], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r12, r18, true)){
               control_flow_pc = 507;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 507:
            var r20 = new WyJS.Integer(1);
            var r21 = new WyJS.Integer(2);
            var r22 = new WyJS.Integer(3);
            var r23 = new WyJS.Array([r20, r21, r22], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r19 = zeroOut$Z9bF1D527RWz(r23);//invoke %19 = (%23) While_Valid_41:zeroOut : function(int[]) -> int[]
            var r24 = new WyJS.Integer(0);
            var r25 = new WyJS.Integer(0);
            var r26 = new WyJS.Integer(0);
            var r27 = new WyJS.Array([r24, r25, r26], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r19, r27, true)){
               control_flow_pc = 508;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 508:
            var r29 = new WyJS.Integer(1);
            var r30 = new WyJS.Integer(2);
            var r31 = new WyJS.Integer(3);
            var r32 = new WyJS.Integer(4);
            var r33 = new WyJS.Array([r29, r30, r31, r32], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r28 = zeroOut$Z9bF1D527RWz(r33);//invoke %28 = (%33) While_Valid_41:zeroOut : function(int[]) -> int[]
            var r34 = new WyJS.Integer(0);
            var r35 = new WyJS.Integer(0);
            var r36 = new WyJS.Integer(0);
            var r37 = new WyJS.Integer(0);
            var r38 = new WyJS.Array([r34, r35, r36, r37], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r28, r38, true)){
               control_flow_pc = 509;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 509:
            return;
      }
   }
}

