function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = new WyJS.Byte(0);
            var r4 = new WyJS.Byte(1);
            var r5 = new WyJS.Byte(3);
            var r6 = new WyJS.Byte(2);
            var r7 = new WyJS.Array([r3, r4, r5, r6], new WyJS.Type.Array(new WyJS.Type.Byte()));
            var r2 = r7.clone(new WyJS.Type.Byte());//assign %2 = %7  : byte[]
            var r0 = r2.clone(new WyJS.Type.Byte());//assign %0 = %2  : byte[]
            var r9 = new WyJS.Byte(255);
            var r10 = new WyJS.Byte(254);
            var r11 = new WyJS.Byte(252);
            var r12 = new WyJS.Byte(253);
            var r13 = new WyJS.Array([r9, r10, r11, r12], new WyJS.Type.Array(new WyJS.Type.Byte()));
            var r8 = r13.clone(new WyJS.Type.Byte());//assign %8 = %13  : byte[]
            var r1 = r8.clone(new WyJS.Type.Byte());//assign %1 = %8  : byte[]
            var r14 = new WyJS.Integer(0);
            var r15 = r0.getValue(r14);
            var r16 = WyJS.invert(r15);//invert %16 = %15 : byte
            var r17 = new WyJS.Integer(0);
            var r18 = r1.getValue(r17);
            if(WyJS.equals(r16, r18, true)){
               control_flow_pc = 1353;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1353:
            return;
      }
   }
}

