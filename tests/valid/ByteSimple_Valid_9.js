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
               control_flow_pc = 1461;
               control_flow_repeat = true;
               continue outer;
            }
            var r7 = false;
            control_flow_pc = 1462;
            control_flow_repeat = true;
            continue outer;//goto label1462
         case 1461:
            var r7 = true;
         case 1462:
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
               control_flow_pc = 1463;
               control_flow_repeat = true;
               continue outer;
            }
            var r12 = set$_9dF5X1Fc1Ms(r0, r4);//invoke %12 = (%0, %4) ByteSimple_Valid_9:set : function(byte,int) -> bool
            var r13 = true;
            if(r12 === r13){
               control_flow_pc = 1464;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -4;
               control_flow_repeat = true;
               break;
            }
         case -4:
            control_flow_pc = 1465;
            control_flow_repeat = true;
            continue outer;//goto label1465
            control_flow_pc = -3;
            control_flow_repeat = true;
         case 1464:
            var r14 = r3.or(r2);//or %14 = %3, %2 : byte
            var r3 = r14;//assign %3 = %14  : byte
            control_flow_pc = -3;
            control_flow_repeat = true;
         case 1465:
            var r15 = new WyJS.Integer(1);
            var r16 = r2.shl(r15);//shl %16 = %2, %15 : byte
            var r2 = r16;//assign %2 = %16  : byte
            var r17 = new WyJS.Integer(1);
            var r18 = r4.add(r17);//add %18 = %4, %17 : int
            var r4 = r18;//assign %4 = %18  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case 1463:
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
            var r0 = new WyJS.Byte(-128);
            var r2 = new WyJS.Array([new WyJS.Byte(-128), new WyJS.Byte(-127), new WyJS.Byte(-126), new WyJS.Byte(-125), new WyJS.Byte(-124), new WyJS.Byte(-123), new WyJS.Byte(-122), new WyJS.Byte(-121), new WyJS.Byte(-120)], new WyJS.Type.Array(new WyJS.Type.Byte()));
            var r3 = new WyJS.Integer(0);
            var r4 = r2.getValue(r3);
            var r5 = new WyJS.Array([new WyJS.Byte(-128), new WyJS.Byte(-127), new WyJS.Byte(-126), new WyJS.Byte(-125), new WyJS.Byte(-124), new WyJS.Byte(-123), new WyJS.Byte(-122), new WyJS.Byte(-121), new WyJS.Byte(-120)], new WyJS.Type.Array(new WyJS.Type.Byte()));
            var r6 = new WyJS.Integer(0);
            var r7 = r5.getValue(r6);
            var r1 = and$Y9dFXc1Fs2(r4, r7);//invoke %1 = (%4, %7) ByteSimple_Valid_9:and : function(byte,byte) -> byte
            if(WyJS.equals(r0, r1, true)){
               control_flow_pc = 1466;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1466:
            return;
      }
   }
}

