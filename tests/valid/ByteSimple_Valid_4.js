function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = new WyJS.Byte(0);
            var r6 = new WyJS.Byte(1);
            var r7 = new WyJS.Byte(0);
            var r8 = new WyJS.Byte(1);
            var r9 = new WyJS.Array([r5, r6, r7, r8], new WyJS.Type.Array(new WyJS.Type.Byte()));
            var r4 = r9.clone(new WyJS.Type.Byte());//assign %4 = %9  : byte[]
            var r0 = r4.clone(new WyJS.Type.Byte());//assign %0 = %4  : byte[]
            var r11 = new WyJS.Byte(0);
            var r12 = new WyJS.Byte(0);
            var r13 = new WyJS.Byte(1);
            var r14 = new WyJS.Byte(1);
            var r15 = new WyJS.Array([r11, r12, r13, r14], new WyJS.Type.Array(new WyJS.Type.Byte()));
            var r10 = r15.clone(new WyJS.Type.Byte());//assign %10 = %15  : byte[]
            var r1 = r10.clone(new WyJS.Type.Byte());//assign %1 = %10  : byte[]
            var r17 = new WyJS.Byte(0);
            var r18 = new WyJS.Byte(1);
            var r19 = new WyJS.Byte(1);
            var r20 = new WyJS.Byte(0);
            var r21 = new WyJS.Array([r17, r18, r19, r20], new WyJS.Type.Array(new WyJS.Type.Byte()));
            var r16 = r21.clone(new WyJS.Type.Byte());//assign %16 = %21  : byte[]
            var r2 = r16.clone(new WyJS.Type.Byte());//assign %2 = %16  : byte[]
            var r23 = new WyJS.Integer(0);
            var r22 = r23;//assign %22 = %23  : int
            var r3 = r22;//assign %3 = %22  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case -3:
            var r25 = r0.length();//lengthof %25 = %0 : byte[]
            if(WyJS.gt(r3, r25, true)){
               control_flow_pc = 1450;
               control_flow_repeat = true;
               continue outer;
            }
            var r26 = r0.getValue(r3);
            var r27 = r1.getValue(r3);
            var r28 = r26.xor(r27);//xor %28 = %26, %27 : byte
            var r29 = r2.getValue(r3);
            if(WyJS.equals(r28, r29, true)){
               control_flow_pc = 1451;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1451:
            var r30 = new WyJS.Integer(1);
            var r31 = r3.add(r30);//add %31 = %3, %30 : int
            var r3 = r31;//assign %3 = %31  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case 1450:
            return;
      }
   }
}

