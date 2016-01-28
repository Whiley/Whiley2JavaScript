function set$_9dF5X1Fc1Ms(r0, r1){//function(byte,int) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Byte(1);
            var r5 = r4.shl(r1);//shl %5 = %4, %1 : byte
            var r3 = r5;//assign %3 = %5  : byte
            var r2 = r3;//assign %2 = %3  : byte
            var r6 = r0.and(r2);//and %6 = %0, %2 : byte
            if(WyJS.equals(r6, r2, true)){
               control_flow_pc = 1429;
               control_flow_repeat = true;
               continue outer;
            }
            var r7 = false;
            control_flow_pc = 1430;
            control_flow_repeat = true;
            continue outer;//goto label1430
         case 1429:
            var r7 = true;
         case 1430:
            return r7;//return %7 : bool
            return;
      }
   }
}

function and$Y9dFXc1Fs2(r0, r1){//function(byte,byte) -> byte
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r6 = new WyJS.Byte(1);
            var r5 = r6;//assign %5 = %6  : byte
            var r2 = r5;//assign %2 = %5  : byte
            var r8 = new WyJS.Byte(0);
            var r7 = r8;//assign %7 = %8  : byte
            var r3 = r7;//assign %3 = %7  : byte
            var r10 = new WyJS.Integer(0);
            var r9 = r10;//assign %9 = %10  : int
            var r4 = r9;//assign %4 = %9  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case -3:
            var r11 = new WyJS.Integer(8);
            if(WyJS.gt(r4, r11, true)){
               control_flow_pc = 1431;
               control_flow_repeat = true;
               continue outer;
            }
            var r12 = set$_9dF5X1Fc1Ms(r0, r4);//invoke %12 = (%0, %4) ByteSimple_Valid_9:set : function(byte,int) -> bool
            var r13 = true;
            if(r12 === r13){
               control_flow_pc = 1432;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -4;
               control_flow_repeat = true;
               break;
            }
         case -4:
            control_flow_pc = 1433;
            control_flow_repeat = true;
            continue outer;//goto label1433
            control_flow_pc = -3;
            control_flow_repeat = true;
         case 1432:
            var r14 = set$_9dF5X1Fc1Ms(r1, r4);//invoke %14 = (%1, %4) ByteSimple_Valid_9:set : function(byte,int) -> bool
            var r15 = true;
            if(r14 === r15){
               control_flow_pc = 1434;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -5;
               control_flow_repeat = true;
               break;
            }
         case -5:
            control_flow_pc = 1433;
            control_flow_repeat = true;
            continue outer;//goto label1433
            control_flow_pc = -3;
            control_flow_repeat = true;
         case 1434:
            var r16 = r3.or(r2);//or %16 = %3, %2 : byte
            var r3 = r16;//assign %3 = %16  : byte
            control_flow_pc = -3;
            control_flow_repeat = true;
         case 1433:
            var r17 = new WyJS.Integer(1);
            var r18 = r2.shl(r17);//shl %18 = %2, %17 : byte
            var r2 = r18;//assign %2 = %18  : byte
            var r19 = new WyJS.Integer(1);
            var r20 = r4.add(r19);//add %20 = %4, %19 : int
            var r4 = r20;//assign %4 = %20  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case 1431:
            return r3;//return %3 : byte
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
            var r0 = new WyJS.Array([new WyJS.Byte(128), new WyJS.Byte(129), new WyJS.Byte(130), new WyJS.Byte(131), new WyJS.Byte(132), new WyJS.Byte(133), new WyJS.Byte(134), new WyJS.Byte(135), new WyJS.Byte(136)], new WyJS.Type.Array(new WyJS.Type.Byte()));
            var r1 = new WyJS.Integer(0);
            var r2 = r0.getValue(r1);
            var r3 = new WyJS.Array([new WyJS.Byte(128), new WyJS.Byte(129), new WyJS.Byte(130), new WyJS.Byte(131), new WyJS.Byte(132), new WyJS.Byte(133), new WyJS.Byte(134), new WyJS.Byte(135), new WyJS.Byte(136)], new WyJS.Type.Array(new WyJS.Type.Byte()));
            var r4 = new WyJS.Integer(0);
            var r5 = r3.getValue(r4);
            var r6 = r2.and(r5);//and %6 = %2, %5 : byte
            var r8 = new WyJS.Array([new WyJS.Byte(128), new WyJS.Byte(129), new WyJS.Byte(130), new WyJS.Byte(131), new WyJS.Byte(132), new WyJS.Byte(133), new WyJS.Byte(134), new WyJS.Byte(135), new WyJS.Byte(136)], new WyJS.Type.Array(new WyJS.Type.Byte()));
            var r9 = new WyJS.Integer(0);
            var r10 = r8.getValue(r9);
            var r11 = new WyJS.Array([new WyJS.Byte(128), new WyJS.Byte(129), new WyJS.Byte(130), new WyJS.Byte(131), new WyJS.Byte(132), new WyJS.Byte(133), new WyJS.Byte(134), new WyJS.Byte(135), new WyJS.Byte(136)], new WyJS.Type.Array(new WyJS.Type.Byte()));
            var r12 = new WyJS.Integer(0);
            var r13 = r11.getValue(r12);
            var r7 = and$Y9dFXc1Fs2(r10, r13);//invoke %7 = (%10, %13) ByteSimple_Valid_9:and : function(byte,byte) -> byte
            if(WyJS.equals(r6, r7, true)){
               control_flow_pc = 1435;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1435:
            return;
      }
   }
}

