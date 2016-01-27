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
            var r7 = new WyJS.Byte(2);
            var r8 = new WyJS.Array([r4, r5, r6, r7], new WyJS.Type.Array(new WyJS.Type.Byte()));
            var r3 = r8.clone(new WyJS.Type.Byte());//assign %3 = %8  : byte[]
            var r0 = r3.clone(new WyJS.Type.Byte());//assign %0 = %3  : byte[]
            var r10 = new WyJS.Byte(255);
            var r11 = new WyJS.Byte(254);
            var r12 = new WyJS.Byte(252);
            var r13 = new WyJS.Byte(253);
            var r14 = new WyJS.Array([r10, r11, r12, r13], new WyJS.Type.Array(new WyJS.Type.Byte()));
            var r9 = r14.clone(new WyJS.Type.Byte());//assign %9 = %14  : byte[]
            var r1 = r9.clone(new WyJS.Type.Byte());//assign %1 = %9  : byte[]
            var r16 = new WyJS.Integer(0);
            var r15 = r16;//assign %15 = %16  : int
            var r2 = r15;//assign %2 = %15  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case -3:
            var r18 = r0.length();//lengthof %18 = %0 : byte[]
            if(WyJS.gt(r2, r18, true)){
               control_flow_pc = 1429;
               control_flow_repeat = true;
               continue outer;
            }
            var r19 = r0.getValue(r2);
            var r20 = WyJS.invert(r19);//invert %20 = %19 : byte
            var r21 = r1.getValue(r2);
            if(WyJS.equals(r20, r21, true)){
               control_flow_pc = 1430;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1430:
            var r22 = new WyJS.Integer(1);
            var r23 = r2.add(r22);//add %23 = %2, %22 : int
            var r2 = r23;//assign %2 = %23  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case 1429:
            return;
      }
   }
}

