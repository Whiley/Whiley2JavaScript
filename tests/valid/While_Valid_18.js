function match$a9fF5Xi$3sNJP8s0$M0$P$Z5$g0FO$w4$L0FN$k5$d0$O$w4$l$$D2$i0FN$FM4y(r0, r1, r2){//function(byte[],While_Valid_18:nat,While_Valid_18:nat) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = r2;//assign %5 = %2  : int
            var r3 = r5;//assign %3 = %5  : int
            var r7 = new WyJS.Integer(0);
            var r6 = r7;//assign %6 = %7  : int
            var r4 = r6;//assign %4 = %6  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            if(WyJS.gt(r1, r3, true)){
               control_flow_pc = 3;
               control_flow_repeat = true;
               continue outer;
            }
            var r10 = r0.length();//lengthof %10 = %0 : byte[]
            if(WyJS.gt(r3, r10, true)){
               control_flow_pc = 3;
               control_flow_repeat = true;
               continue outer;
            }
            var r11 = r0.getValue(r1);
            var r12 = r0.getValue(r3);
            if(WyJS.equals(r11, r12, false)){
               control_flow_pc = 3;
               control_flow_repeat = true;
               continue outer;
            }
            var r13 = new WyJS.Integer(1);
            var r14 = r1.add(r13);//add %14 = %1, %13 : int
            var r1 = r14;//assign %1 = %14  : int
            var r15 = new WyJS.Integer(1);
            var r16 = r3.add(r15);//add %16 = %3, %15 : int
            var r3 = r16;//assign %3 = %16  : int
            var r17 = new WyJS.Integer(1);
            var r18 = r4.add(r17);//add %18 = %4, %17 : int
            var r4 = r18;//assign %4 = %18  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 3:
            return r4;//return %4 : int
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
            var r3 = new WyJS.Byte("00000000b");
            var r4 = new WyJS.Byte("00000101b");
            var r5 = new WyJS.Byte("00000000b");
            var r6 = new WyJS.Byte("00000110b");
            var r7 = new WyJS.Byte("00000000b");
            var r8 = new WyJS.Byte("00000101b");
            var r9 = new WyJS.List([r3, r4, r5, r6, r7, r8], new WyJS.Type.List(new WyJS.Type.Byte()));
            var r2 = r9.clone(new WyJS.Type.Byte());//assign %2 = %9  : byte[]
            var r0 = r2.clone(new WyJS.Type.Byte());//assign %0 = %2  : byte[]
            var r12 = new WyJS.Integer(0);
            var r13 = r0.length();//lengthof %13 = %0 : byte[]
            var r14 = new WyJS.Integer(2);
            var r15 = r13.sub(r14);//sub %15 = %13, %14 : int
            var r11 = match$a9fF5Xi$3sNJP8s0$M0$P$Z5$g0FO$w4$L0FN$k5$d0$O$w4$l$$D2$i0FN$FM4y(r0, r12, r15);//invoke %11 = (%0, %12, %15) While_Valid_18:match : function(byte[],While_Valid_18:nat,While_Valid_18:nat) -> int
            var r10 = r11;//assign %10 = %11  : int
            var r1 = r10;//assign %1 = %10  : int
            var r16 = new WyJS.Integer(2);
            if(WyJS.equals(r1, r16, true)){
               control_flow_pc = 4;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 4:
            return;
      }
   }
}

