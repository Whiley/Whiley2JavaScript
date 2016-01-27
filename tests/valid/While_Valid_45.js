function buildNatList$Z9bF5D527RWz(r0){//function(int) -> int[]
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
            var r6 = new WyJS.Integer(0);
            var r7 = WyJS.ArrayGen(r6, r0, new WyJS.Type.Array(new WyJS.Type.Int()));
            var r5 = r7.clone(new WyJS.Type.Int());//assign %5 = %7  : int[]
            var r2 = r5.clone(new WyJS.Type.Int());//assign %2 = %5  : int[]
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case -3:
            if(WyJS.gt(r1, r0, true)){
               control_flow_pc = 507;
               control_flow_repeat = true;
               continue outer;
            }
            r2.setValue(r1, r1);
            var r14 = new WyJS.Integer(1);
            var r15 = r1.add(r14);//add %15 = %1, %14 : int
            var r1 = r15;//assign %1 = %15  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case 507:
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
            var r0 = buildNatList$Z9bF5D527RWz(r1);//invoke %0 = (%1) While_Valid_45:buildNatList : function(int) -> int[]
            var r2 = new WyJS.Integer(0);
            var r3 = new WyJS.Integer(0);
            var r4 = WyJS.ArrayGen(r2, r3, new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r4, true)){
               control_flow_pc = 508;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 508:
            var r6 = new WyJS.Integer(1);
            var r5 = buildNatList$Z9bF5D527RWz(r6);//invoke %5 = (%6) While_Valid_45:buildNatList : function(int) -> int[]
            var r7 = new WyJS.Integer(0);
            var r8 = new WyJS.Array([r7], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r5, r8, true)){
               control_flow_pc = 509;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 509:
            var r10 = new WyJS.Integer(2);
            var r9 = buildNatList$Z9bF5D527RWz(r10);//invoke %9 = (%10) While_Valid_45:buildNatList : function(int) -> int[]
            var r11 = new WyJS.Integer(0);
            var r12 = new WyJS.Integer(1);
            var r13 = new WyJS.Array([r11, r12], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r9, r13, true)){
               control_flow_pc = 510;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 510:
            var r15 = new WyJS.Integer(3);
            var r14 = buildNatList$Z9bF5D527RWz(r15);//invoke %14 = (%15) While_Valid_45:buildNatList : function(int) -> int[]
            var r16 = new WyJS.Integer(0);
            var r17 = new WyJS.Integer(1);
            var r18 = new WyJS.Integer(2);
            var r19 = new WyJS.Array([r16, r17, r18], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r14, r19, true)){
               control_flow_pc = 511;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 511:
            var r21 = new WyJS.Integer(4);
            var r20 = buildNatList$Z9bF5D527RWz(r21);//invoke %20 = (%21) While_Valid_45:buildNatList : function(int) -> int[]
            var r22 = new WyJS.Integer(0);
            var r23 = new WyJS.Integer(1);
            var r24 = new WyJS.Integer(2);
            var r25 = new WyJS.Integer(3);
            var r26 = new WyJS.Array([r22, r23, r24, r25], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r20, r26, true)){
               control_flow_pc = 512;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 512:
            var r28 = new WyJS.Integer(10);
            var r27 = buildNatList$Z9bF5D527RWz(r28);//invoke %27 = (%28) While_Valid_45:buildNatList : function(int) -> int[]
            var r29 = new WyJS.Integer(0);
            var r30 = new WyJS.Integer(1);
            var r31 = new WyJS.Integer(2);
            var r32 = new WyJS.Integer(3);
            var r33 = new WyJS.Integer(4);
            var r34 = new WyJS.Integer(5);
            var r35 = new WyJS.Integer(6);
            var r36 = new WyJS.Integer(7);
            var r37 = new WyJS.Integer(8);
            var r38 = new WyJS.Integer(9);
            var r39 = new WyJS.Array([r29, r30, r31, r32, r33, r34, r35, r36, r37, r38], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r27, r39, true)){
               control_flow_pc = 513;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 513:
            return;
      }
   }
}

