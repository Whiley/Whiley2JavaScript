function reverse$Z9bF1D527RWz(r0){//function(int[]) -> int[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = r0.length();//lengthof %5 = %0 : int[]
            var r4 = r5;//assign %4 = %5  : int
            var r1 = r4;//assign %1 = %4  : int
            var r7 = new WyJS.Integer(0);
            var r8 = r0.length();//lengthof %8 = %0 : int[]
            var r9 = WyJS.ArrayGen(r7, r8, new WyJS.Type.Array(new WyJS.Type.Int()));
            var r6 = r9.clone(new WyJS.Type.Int());//assign %6 = %9  : int[]
            var r2 = r6.clone(new WyJS.Type.Int());//assign %2 = %6  : int[]
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case -3:
            var r13 = new WyJS.Integer(0);
            if(WyJS.lt(r1, r13, true)){
               control_flow_pc = 454;
               control_flow_repeat = true;
               continue outer;
            }
            var r15 = r0.length();//lengthof %15 = %0 : int[]
            var r16 = r15.sub(r1);//sub %16 = %15, %1 : int
            var r17 = r0.getValue(r16);
            var r14 = r17;//assign %14 = %17  : int
            var r3 = r14;//assign %3 = %14  : int
            var r18 = new WyJS.Integer(1);
            var r19 = r1.sub(r18);//sub %19 = %1, %18 : int
            var r1 = r19;//assign %1 = %19  : int
            r2.setValue(r1, r3);
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case 454:
            return r2;//return %2 : int[]
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
            var r0 = reverse$Z9bF1D527RWz(r3);//invoke %0 = (%3) While_Valid_44:reverse : function(int[]) -> int[]
            var r4 = new WyJS.Integer(0);
            var r5 = new WyJS.Integer(0);
            var r6 = WyJS.ArrayGen(r4, r5, new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r6, true)){
               control_flow_pc = 455;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 455:
            var r8 = new WyJS.Integer(1);
            var r9 = new WyJS.Array([r8], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r7 = reverse$Z9bF1D527RWz(r9);//invoke %7 = (%9) While_Valid_44:reverse : function(int[]) -> int[]
            var r10 = new WyJS.Integer(1);
            var r11 = new WyJS.Array([r10], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r7, r11, true)){
               control_flow_pc = 456;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 456:
            var r13 = new WyJS.Integer(1);
            var r14 = new WyJS.Integer(2);
            var r15 = new WyJS.Array([r13, r14], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r12 = reverse$Z9bF1D527RWz(r15);//invoke %12 = (%15) While_Valid_44:reverse : function(int[]) -> int[]
            var r16 = new WyJS.Integer(2);
            var r17 = new WyJS.Integer(1);
            var r18 = new WyJS.Array([r16, r17], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r12, r18, true)){
               control_flow_pc = 457;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 457:
            var r20 = new WyJS.Integer(1);
            var r21 = new WyJS.Integer(2);
            var r22 = new WyJS.Integer(3);
            var r23 = new WyJS.Array([r20, r21, r22], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r19 = reverse$Z9bF1D527RWz(r23);//invoke %19 = (%23) While_Valid_44:reverse : function(int[]) -> int[]
            var r24 = new WyJS.Integer(3);
            var r25 = new WyJS.Integer(2);
            var r26 = new WyJS.Integer(1);
            var r27 = new WyJS.Array([r24, r25, r26], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r19, r27, true)){
               control_flow_pc = 458;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 458:
            var r29 = new WyJS.Integer(1);
            var r30 = new WyJS.Integer(2);
            var r31 = new WyJS.Integer(3);
            var r32 = new WyJS.Integer(4);
            var r33 = new WyJS.Array([r29, r30, r31, r32], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r28 = reverse$Z9bF1D527RWz(r33);//invoke %28 = (%33) While_Valid_44:reverse : function(int[]) -> int[]
            var r34 = new WyJS.Integer(4);
            var r35 = new WyJS.Integer(3);
            var r36 = new WyJS.Integer(2);
            var r37 = new WyJS.Integer(1);
            var r38 = new WyJS.Array([r34, r35, r36, r37], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r28, r38, true)){
               control_flow_pc = 459;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 459:
            var r40 = new WyJS.Integer(1);
            var r41 = new WyJS.Integer(2);
            var r42 = new WyJS.Integer(3);
            var r43 = new WyJS.Integer(4);
            var r44 = new WyJS.Integer(5);
            var r45 = new WyJS.Array([r40, r41, r42, r43, r44], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r39 = reverse$Z9bF1D527RWz(r45);//invoke %39 = (%45) While_Valid_44:reverse : function(int[]) -> int[]
            var r46 = new WyJS.Integer(5);
            var r47 = new WyJS.Integer(4);
            var r48 = new WyJS.Integer(3);
            var r49 = new WyJS.Integer(2);
            var r50 = new WyJS.Integer(1);
            var r51 = new WyJS.Array([r46, r47, r48, r49, r50], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r39, r51, true)){
               control_flow_pc = 460;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 460:
            return;
      }
   }
}

