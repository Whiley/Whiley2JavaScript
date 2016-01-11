function reverse$Z9bF1D527RWz(r0){//function(int[]) -> int[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = new WyJS.Integer(0);
            var r4 = r5;//assign %4 = %5  : int
            var r1 = r4;//assign %1 = %4  : int
            var r6 = r0.clone(new WyJS.Type.Int());//assign %6 = %0  : int[]
            var r2 = r6.clone(new WyJS.Type.Int());//assign %2 = %6  : int[]
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r19 = r0.length();//lengthof %19 = %0 : int[]
            if(WyJS.gt(r1, r19, true)){
               control_flow_pc = 502;
               control_flow_repeat = true;
               continue outer;
            }
            var r21 = r0.length();//lengthof %21 = %0 : int[]
            var r22 = new WyJS.Integer(1);
            var r23 = r1.add(r22);//add %23 = %1, %22 : int
            var r24 = r21.sub(r23);//sub %24 = %21, %23 : int
            var r20 = r24;//assign %20 = %24  : int
            var r11 = r20;//assign %11 = %20  : int
            var r25 = r2.getValue(r11);
            var r26 = r2.getValue(r11);
            r0.setValue(r1, r26);
            var r27 = new WyJS.Integer(1);
            var r28 = r1.add(r27);//add %28 = %1, %27 : int
            var r1 = r28;//assign %1 = %28  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 502:
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
            var r3 = WyJS.ListGen(r1, r2, new WyJS.Type.List(new WyJS.Type.Int()));
            var r0 = reverse$Z9bF1D527RWz(r3);//invoke %0 = (%3) While_Valid_42:reverse : function(int[]) -> int[]
            var r4 = new WyJS.Integer(0);
            var r5 = new WyJS.Integer(0);
            var r6 = WyJS.ListGen(r4, r5, new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r6, true)){
               control_flow_pc = 503;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 503:
            var r8 = new WyJS.Integer(1);
            var r9 = new WyJS.List([r8], new WyJS.Type.List(new WyJS.Type.Int()));
            var r7 = reverse$Z9bF1D527RWz(r9);//invoke %7 = (%9) While_Valid_42:reverse : function(int[]) -> int[]
            var r10 = new WyJS.Integer(1);
            var r11 = new WyJS.List([r10], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r7, r11, true)){
               control_flow_pc = 504;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 504:
            var r13 = new WyJS.Integer(1);
            var r14 = new WyJS.Integer(2);
            var r15 = new WyJS.Integer(3);
            var r16 = new WyJS.List([r13, r14, r15], new WyJS.Type.List(new WyJS.Type.Int()));
            var r12 = reverse$Z9bF1D527RWz(r16);//invoke %12 = (%16) While_Valid_42:reverse : function(int[]) -> int[]
            var r17 = new WyJS.Integer(3);
            var r18 = new WyJS.Integer(2);
            var r19 = new WyJS.Integer(1);
            var r20 = new WyJS.List([r17, r18, r19], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r12, r20, true)){
               control_flow_pc = 505;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 505:
            var r22 = new WyJS.Integer(1);
            var r23 = new WyJS.Integer(2);
            var r24 = new WyJS.Integer(3);
            var r25 = new WyJS.Integer(4);
            var r26 = new WyJS.Integer(5);
            var r27 = new WyJS.Integer(6);
            var r28 = new WyJS.List([r22, r23, r24, r25, r26, r27], new WyJS.Type.List(new WyJS.Type.Int()));
            var r21 = reverse$Z9bF1D527RWz(r28);//invoke %21 = (%28) While_Valid_42:reverse : function(int[]) -> int[]
            var r29 = new WyJS.Integer(6);
            var r30 = new WyJS.Integer(5);
            var r31 = new WyJS.Integer(4);
            var r32 = new WyJS.Integer(3);
            var r33 = new WyJS.Integer(2);
            var r34 = new WyJS.Integer(1);
            var r35 = new WyJS.List([r29, r30, r31, r32, r33, r34], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r21, r35, true)){
               control_flow_pc = 506;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 506:
            return;
      }
   }
}

