function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Byte(0);
            var r5 = new WyJS.Byte(1);
            var r6 = new WyJS.Byte(3);
            var r7 = new WyJS.Array([r4, r5, r6], new WyJS.Type.Array(new WyJS.Type.Byte()));
            var r3 = r7.clone(new WyJS.Type.Byte());//assign %3 = %7  : byte[]
            var r0 = r3.clone(new WyJS.Type.Byte());//assign %0 = %3  : byte[]
            var r9 = new WyJS.Byte(-1);
            var r10 = new WyJS.Byte(-2);
            var r11 = new WyJS.Byte(-4);
            var r12 = new WyJS.Array([r9, r10, r11], new WyJS.Type.Array(new WyJS.Type.Byte()));
            var r8 = r12.clone(new WyJS.Type.Byte());//assign %8 = %12  : byte[]
            var r1 = r8.clone(new WyJS.Type.Byte());//assign %1 = %8  : byte[]
            var r14 = new WyJS.Integer(0);
            var r13 = r14;//assign %13 = %14  : int
            var r2 = r13;//assign %2 = %13  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r16 = r0.length();//lengthof %16 = %0 : byte[]
            if(WyJS.gt(r2, r16, true)){
               control_flow_pc = 1;
               control_flow_repeat = true;
               continue outer;
            }
            var r17 = r0.getValue(r2);
            var r18 = WyJS.invert(r17);//invert %18 = %17 : byte
            var r19 = r1.getValue(r2);
            if(WyJS.equals(r18, r19, true)){
               control_flow_pc = 2;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2:
            var r20 = new WyJS.Integer(1);
            var r21 = r2.add(r20);//add %21 = %2, %20 : int
            var r2 = r21;//assign %2 = %21  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 1:
            return;
      }
   }
}

