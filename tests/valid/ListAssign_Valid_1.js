function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = new WyJS.Integer(1);
            var r4 = new WyJS.Integer(2);
            var r5 = new WyJS.Integer(3);
            var r6 = new WyJS.List([r3, r4, r5], new WyJS.Type.List(new WyJS.Type.Int()));
            var r2 = r6.clone(new WyJS.Type.Int());//assign %2 = %6  : int[]
            var r0 = r2.clone(new WyJS.Type.Int());//assign %0 = %2  : int[]
            var r7 = r0.clone(new WyJS.Type.Int());//assign %7 = %0  : int[]
            var r1 = r7.clone(new WyJS.Type.Int());//assign %1 = %7  : int[]
            var r8 = new WyJS.Integer(2);
            var r9 = new WyJS.Integer(2);
            var r10 = new WyJS.Integer(2);
            r1.setValue(r9, r10);
            var r11 = new WyJS.Integer(2);
            var r12 = r1.getValue(r11);
            var r13 = r0.length();//lengthof %13 = %0 : int[]
            if(WyJS.equals(r12, r13, false)){
               control_flow_pc = 2366;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2366:
            var r14 = new WyJS.Integer(1);
            var r15 = new WyJS.Integer(2);
            var r16 = new WyJS.Integer(3);
            var r17 = new WyJS.List([r14, r15, r16], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r17, true)){
               control_flow_pc = 2367;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2367:
            var r18 = new WyJS.Integer(1);
            var r19 = new WyJS.Integer(2);
            var r20 = new WyJS.Integer(2);
            var r21 = new WyJS.List([r18, r19, r20], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r1, r21, true)){
               control_flow_pc = 2368;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2368:
            return;
      }
   }
}

