function toUnsignedInt$Z9bFaA$W9$(r0){//function(byte) -> int
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
            var r6 = new WyJS.Integer(1);
            var r5 = r6;//assign %5 = %6  : int
            var r2 = r5;//assign %2 = %5  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r7 = new WyJS.Byte("00000000b");
            if(WyJS.equals(r0, r7, true)){
               control_flow_pc = 878;
               control_flow_repeat = true;
               continue outer;
            }
            var r8 = new WyJS.Byte("00000001b");
            var r10 = new WyJS.Byte("00000001b");
            if(WyJS.equals(r9, r10, false)){
               control_flow_pc = 879;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -3;
               control_flow_repeat = true;
               break;
            }
         case -3:
            var r11 = r1.add(r2);//add %11 = %1, %2 : int
            var r1 = r11;//assign %1 = %11  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 879:
            var r12 = new WyJS.Integer(1);
            var r0 = r13;//assign %0 = %13  : byte
            var r14 = new WyJS.Integer(2);
            var r15 = r2.mul(r14);//mul %15 = %2, %14 : int
            var r2 = r15;//assign %2 = %15  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 878:
            return r1;//return %1 : int
            return;
      }
   }
}

function meth$a9bF5D537klcRW9w(r0){//function(byte[]) -> int[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(0);
            var r5 = r0.length();//lengthof %5 = %0 : byte[]
            var r6 = WyJS.ListGen(r4, r5, new WyJS.Type.List(new WyJS.Type.Int()));
            var r3 = r6.clone(new WyJS.Type.Int());//assign %3 = %6  : int[]
            var r1 = r3.clone(new WyJS.Type.Int());//assign %1 = %3  : int[]
            var r8 = new WyJS.Integer(0);
            var r7 = r8;//assign %7 = %8  : int
            var r2 = r7;//assign %2 = %7  : int
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
         case -4:
            var r12 = r0.length();//lengthof %12 = %0 : byte[]
            if(WyJS.gt(r2, r12, true)){
               control_flow_pc = 882;
               control_flow_repeat = true;
               continue outer;
            }
            var r14 = r0.getValue(r2);
            var r13 = toUnsignedInt$Z9bFaA$W9$(r14);//invoke %13 = (%14) ListAccess_Valid_8:toUnsignedInt : function(byte) -> int
            var r16 = r0.getValue(r2);
            var r15 = toUnsignedInt$Z9bFaA$W9$(r16);//invoke %15 = (%16) ListAccess_Valid_8:toUnsignedInt : function(byte) -> int
            r1.setValue(r2, r15);
            var r17 = new WyJS.Integer(1);
            var r18 = r2.add(r17);//add %18 = %2, %17 : int
            var r2 = r18;//assign %2 = %18  : int
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
         case 882:
            return r1;//return %1 : int[]
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
            var r2 = new WyJS.Byte("00000000b");
            var r3 = new WyJS.Byte("00000001b");
            var r4 = new WyJS.Byte("00000011b");
            var r5 = new WyJS.Byte("00000111b");
            var r6 = new WyJS.List([r2, r3, r4, r5], new WyJS.Type.List(new WyJS.Type.Byte()));
            var r1 = r6.clone(new WyJS.Type.Byte());//assign %1 = %6  : byte[]
            var r0 = r1.clone(new WyJS.Type.Byte());//assign %0 = %1  : byte[]
            var r7 = meth$a9bF5D537klcRW9w(r0);//invoke %7 = (%0) ListAccess_Valid_8:meth : function(byte[]) -> int[]
            var r8 = new WyJS.Integer(0);
            var r9 = new WyJS.Integer(1);
            var r10 = new WyJS.Integer(3);
            var r11 = new WyJS.Integer(7);
            var r12 = new WyJS.List([r8, r9, r10, r11], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r7, r12, true)){
               control_flow_pc = 883;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 883:
            return;
      }
   }
}

