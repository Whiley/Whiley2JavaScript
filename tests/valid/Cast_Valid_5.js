function bases$Z9_FsNBVk4D(){//function() -> int[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = new WyJS.List([new WyJS.Integer(1), new WyJS.Integer(2), new WyJS.Integer(4), new WyJS.Integer(8), new WyJS.Integer(16), new WyJS.Integer(32), new WyJS.Integer(64), new WyJS.Integer(128)], new WyJS.Type.List(new WyJS.Type.Int()));
            return r0;//return %0 : int[]
            return;
      }
   }
}

function toUnsignedInt$Z9bFaA$W9$(r0){//function(byte) -> int
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
            var r7 = new WyJS.Integer(1);
            var r6 = r7;//assign %6 = %7  : int
            var r2 = r6;//assign %2 = %6  : int
            var r9 = new WyJS.Integer(0);
            var r8 = r9;//assign %8 = %9  : int
            var r3 = r8;//assign %3 = %8  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r14 = new WyJS.Integer(7);
            if(WyJS.gt(r3, r14, false)){
               control_flow_pc = 53;
               control_flow_repeat = true;
               continue outer;
            }
            var r15 = ;
            var r17 = ;
            if(WyJS.equals(r16, r17, false)){
               control_flow_pc = 54;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -3;
               control_flow_repeat = true;
               break;
            }
         case -3:
            var r18 = r1.add(r2);//add %18 = %1, %2 : int
            var r1 = r18;//assign %1 = %18  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 54:
            var r19 = new WyJS.Integer(1);
            var r0 = r20;//assign %0 = %20  : byte
            var r21 = new WyJS.Integer(2);
            var r22 = r2.mul(r21);//mul %22 = %2, %21 : int
            var r2 = r22;//assign %2 = %22  : int
            var r23 = new WyJS.Integer(1);
            var r24 = r3.add(r23);//add %24 = %3, %23 : int
            var r3 = r24;//assign %3 = %24  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 53:
            return r1;//return %1 : int
            return;
      }
   }
}

function toUnsignedByte$Z9bFa9$WL1R$kF$35$n0$S$w4$L0FN$k5$d0$O$w4$p7$J6$s$(r0){//function(Cast_Valid_5:u8) -> byte
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = ;
            var r4 = r5;//assign %4 = %5  : byte
            var r1 = r4;//assign %1 = %4  : byte
            var r7 = ;
            var r6 = r7;//assign %6 = %7  : byte
            var r2 = r6;//assign %2 = %6  : byte
            var r9 = new WyJS.Integer(0);
            var r8 = r9;//assign %8 = %9  : int
            var r3 = r8;//assign %3 = %8  : int
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
         case -4:
            var r10 = new WyJS.Integer(8);
            if(WyJS.gt(r3, r10, true)){
               control_flow_pc = 55;
               control_flow_repeat = true;
               continue outer;
            }
            var r11 = new WyJS.Integer(2);
            var r12 = r0.rem(r11);//rem %12 = %0, %11 : int
            var r13 = new WyJS.Integer(1);
            if(WyJS.equals(r12, r13, false)){
               control_flow_pc = 56;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -5;
               control_flow_repeat = true;
               break;
            }
         case -5:
            var r2 = r14;//assign %2 = %14  : byte
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
         case 56:
            var r15 = new WyJS.Integer(2);
            var r16 = r0.div(r15);//div %16 = %0, %15 : int
            var r0 = r16;//assign %0 = %16  : int
            var r17 = new WyJS.Integer(1);
            var r1 = r18;//assign %1 = %18  : byte
            var r19 = new WyJS.Integer(1);
            var r20 = r3.add(r19);//add %20 = %3, %19 : int
            var r3 = r20;//assign %3 = %20  : int
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
         case 55:
            return r2;//return %2 : byte
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
            var r3 = new WyJS.Integer(32);
            var r2 = r3;//assign %2 = %3  : int
            var r0 = r2;//assign %0 = %2  : int
            control_flow_pc = -6;
            control_flow_repeat = true;
            break;
         case -6:
            var r5 = new WyJS.Integer(127);
            if(WyJS.gt(r0, r5, true)){
               control_flow_pc = 58;
               control_flow_repeat = true;
               continue outer;
            }
            var r8 = toUnsignedByte$Z9bFa9$WL1R$kF$35$n0$S$w4$L0FN$k5$d0$O$w4$p7$J6$s$(r0);//invoke %8 = (%0) Cast_Valid_5:toUnsignedByte : function(Cast_Valid_5:u8) -> byte
            var r7 = toUnsignedInt$Z9bFaA$W9$(r8);//invoke %7 = (%8) Cast_Valid_5:toUnsignedInt : function(byte) -> int
            var r6 = r7;//assign %6 = %7  : int
            var r1 = r6;//assign %1 = %6  : int
            if(WyJS.equals(r1, r0, true)){
               control_flow_pc = 59;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 59:
            var r9 = new WyJS.Integer(1);
            var r10 = r0.add(r9);//add %10 = %0, %9 : int
            var r0 = r10;//assign %0 = %10  : int
            control_flow_pc = -6;
            control_flow_repeat = true;
            break;
         case 58:
            return;
      }
   }
}

