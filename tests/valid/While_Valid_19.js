function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = new WyJS.Integer(0);
            var r4 = new WyJS.Integer(0);
            var r5 = WyJS.ListGen(r3, r4, new WyJS.Type.List(new WyJS.Type.Int()));
            var r6 = new WyJS.Integer(5);
            var r7 = WyJS.ListGen(r5, r6, new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
            var r2 = r7.clone(new WyJS.Type.List(new WyJS.Type.Int()));//assign %2 = %7  : int[][]
            var r0 = r2.clone(new WyJS.Type.List(new WyJS.Type.Int()));//assign %0 = %2  : int[][]
            var r9 = new WyJS.Integer(0);
            var r8 = r9;//assign %8 = %9  : int
            var r1 = r8;//assign %1 = %8  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r11 = r0.length();//lengthof %11 = %0 : int[][]
            if(WyJS.gt(r1, r11, true)){
               control_flow_pc = 1;
               control_flow_repeat = true;
               continue outer;
            }
            var r12 = new WyJS.Integer(0);
            var r13 = new WyJS.List([r12], new WyJS.Type.List(new WyJS.Type.Int()));
            var r14 = new WyJS.Integer(0);
            var r15 = new WyJS.List([r14], new WyJS.Type.List(new WyJS.Type.Int()));
            r0.setValue(r1, r15);
            var r16 = new WyJS.Integer(1);
            var r17 = r1.add(r16);//add %17 = %1, %16 : int
            var r1 = r17;//assign %1 = %17  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 1:
            var r18 = new WyJS.Integer(0);
            var r19 = new WyJS.List([r18], new WyJS.Type.List(new WyJS.Type.Int()));
            var r20 = new WyJS.Integer(0);
            var r21 = new WyJS.List([r20], new WyJS.Type.List(new WyJS.Type.Int()));
            var r22 = new WyJS.Integer(0);
            var r23 = new WyJS.List([r22], new WyJS.Type.List(new WyJS.Type.Int()));
            var r24 = new WyJS.Integer(0);
            var r25 = new WyJS.List([r24], new WyJS.Type.List(new WyJS.Type.Int()));
            var r26 = new WyJS.Integer(0);
            var r27 = new WyJS.List([r26], new WyJS.Type.List(new WyJS.Type.Int()));
            var r28 = new WyJS.List([r19, r21, r23, r25, r27], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
            if(WyJS.equals(r0, r28, true)){
               control_flow_pc = 2;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2:
            return;
      }
   }
}

