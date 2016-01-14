function set$_9dF5X1Fc1Ms(r0, r1){//function(byte,int) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Byte(1);
            var r5 = r4.sll(r1);//shl %5 = %4, %1 : byte
            var r3 = r5;//assign %3 = %5  : byte
            var r2 = r3;//assign %2 = %3  : byte
            var r6 = r0.and(r2);//and %6 = %0, %2 : byte
            if(WyJS.equals(r6, r2, true)){
               control_flow_pc = 59;
               control_flow_repeat = true;
               continue outer;
            }
            var r7 = false;
            control_flow_pc = 60;
            control_flow_repeat = true;
            continue outer;//goto label60
         case 59:
            var r7 = true;
         case 60:
            return r7;//return %7 : bool
            return;
      }
   }
}

function xor$Y9dFXc1Fs2(r0, r1){//function(byte,byte) -> byte
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
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r11 = new WyJS.Integer(8);
            if(WyJS.gt(r4, r11, true)){
               control_flow_pc = 61;
               control_flow_repeat = true;
               continue outer;
            }
            var r12 = set$_9dF5X1Fc1Ms(r0, r4);//invoke %12 = (%0, %4) Byte_Valid_4:set : function(byte,int) -> bool
            var r13 = set$_9dF5X1Fc1Ms(r1, r4);//invoke %13 = (%1, %4) Byte_Valid_4:set : function(byte,int) -> bool
            if(r12 === r13){
               control_flow_pc = 62;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -3;
               control_flow_repeat = true;
               break;
            }
         case -3:
            var r14 = r3.or(r2);//or %14 = %3, %2 : byte
            var r3 = r14;//assign %3 = %14  : byte
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 62:
            var r15 = new WyJS.Integer(1);
            var r16 = r2.sll(r15);//shl %16 = %2, %15 : byte
            var r2 = r16;//assign %2 = %16  : byte
            var r17 = new WyJS.Integer(1);
            var r18 = r4.add(r17);//add %18 = %4, %17 : int
            var r4 = r18;//assign %4 = %18  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 61:
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
            var r5 = new WyJS.Integer(0);
            var r4 = r5;//assign %4 = %5  : int
            var r0 = r4;//assign %0 = %4  : int
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
         case -4:
            var r7 = new WyJS.Array([new WyJS.Byte(-128), new WyJS.Byte(-127), new WyJS.Byte(-126), new WyJS.Byte(-125), new WyJS.Byte(-124), new WyJS.Byte(-123), new WyJS.Byte(-122), new WyJS.Byte(-121), new WyJS.Byte(-120), new WyJS.Byte(-119), new WyJS.Byte(-118), new WyJS.Byte(-117), new WyJS.Byte(-116), new WyJS.Byte(-115), new WyJS.Byte(-114), new WyJS.Byte(-113), new WyJS.Byte(-112), new WyJS.Byte(-111), new WyJS.Byte(-110), new WyJS.Byte(-109), new WyJS.Byte(-108), new WyJS.Byte(-107), new WyJS.Byte(-106), new WyJS.Byte(-105), new WyJS.Byte(-104), new WyJS.Byte(-103), new WyJS.Byte(-102), new WyJS.Byte(-101), new WyJS.Byte(-100), new WyJS.Byte(-99), new WyJS.Byte(-98), new WyJS.Byte(-97), new WyJS.Byte(-96), new WyJS.Byte(-95), new WyJS.Byte(-94), new WyJS.Byte(-93), new WyJS.Byte(-92), new WyJS.Byte(-91), new WyJS.Byte(-90), new WyJS.Byte(-89), new WyJS.Byte(-88), new WyJS.Byte(-87), new WyJS.Byte(-86), new WyJS.Byte(-85), new WyJS.Byte(-84), new WyJS.Byte(-83), new WyJS.Byte(-82), new WyJS.Byte(-81), new WyJS.Byte(-80), new WyJS.Byte(-79), new WyJS.Byte(-78), new WyJS.Byte(-77), new WyJS.Byte(-76), new WyJS.Byte(-75), new WyJS.Byte(-74), new WyJS.Byte(-73), new WyJS.Byte(-72), new WyJS.Byte(-71), new WyJS.Byte(-70), new WyJS.Byte(-69), new WyJS.Byte(-68), new WyJS.Byte(-67), new WyJS.Byte(-66), new WyJS.Byte(-65), new WyJS.Byte(-64), new WyJS.Byte(-63), new WyJS.Byte(-62), new WyJS.Byte(-61), new WyJS.Byte(-60), new WyJS.Byte(-59), new WyJS.Byte(-58), new WyJS.Byte(-57), new WyJS.Byte(-56), new WyJS.Byte(-55), new WyJS.Byte(-54), new WyJS.Byte(-53), new WyJS.Byte(-52), new WyJS.Byte(-51), new WyJS.Byte(-50), new WyJS.Byte(-49), new WyJS.Byte(-48), new WyJS.Byte(-47), new WyJS.Byte(-46), new WyJS.Byte(-45), new WyJS.Byte(-44), new WyJS.Byte(-43), new WyJS.Byte(-42), new WyJS.Byte(-41), new WyJS.Byte(-40), new WyJS.Byte(-39), new WyJS.Byte(-38), new WyJS.Byte(-37), new WyJS.Byte(-36), new WyJS.Byte(-35), new WyJS.Byte(-34), new WyJS.Byte(-33), new WyJS.Byte(-32), new WyJS.Byte(-31), new WyJS.Byte(-30), new WyJS.Byte(-29), new WyJS.Byte(-28), new WyJS.Byte(-27), new WyJS.Byte(-26), new WyJS.Byte(-25), new WyJS.Byte(-24), new WyJS.Byte(-23), new WyJS.Byte(-22), new WyJS.Byte(-21), new WyJS.Byte(-20), new WyJS.Byte(-19), new WyJS.Byte(-18), new WyJS.Byte(-17), new WyJS.Byte(-16), new WyJS.Byte(-15), new WyJS.Byte(-14), new WyJS.Byte(-13), new WyJS.Byte(-12), new WyJS.Byte(-11), new WyJS.Byte(-10), new WyJS.Byte(-9), new WyJS.Byte(-8), new WyJS.Byte(-7), new WyJS.Byte(-6), new WyJS.Byte(-5), new WyJS.Byte(-4), new WyJS.Byte(-3), new WyJS.Byte(-2), new WyJS.Byte(-1), new WyJS.Byte(0), new WyJS.Byte(1), new WyJS.Byte(2), new WyJS.Byte(3), new WyJS.Byte(4), new WyJS.Byte(5), new WyJS.Byte(6), new WyJS.Byte(7), new WyJS.Byte(8), new WyJS.Byte(9), new WyJS.Byte(10), new WyJS.Byte(11), new WyJS.Byte(12), new WyJS.Byte(13), new WyJS.Byte(14), new WyJS.Byte(15), new WyJS.Byte(16), new WyJS.Byte(17), new WyJS.Byte(18), new WyJS.Byte(19), new WyJS.Byte(20), new WyJS.Byte(21), new WyJS.Byte(22), new WyJS.Byte(23), new WyJS.Byte(24), new WyJS.Byte(25), new WyJS.Byte(26), new WyJS.Byte(27), new WyJS.Byte(28), new WyJS.Byte(29), new WyJS.Byte(30), new WyJS.Byte(31), new WyJS.Byte(32), new WyJS.Byte(33), new WyJS.Byte(34), new WyJS.Byte(35), new WyJS.Byte(36), new WyJS.Byte(37), new WyJS.Byte(38), new WyJS.Byte(39), new WyJS.Byte(40), new WyJS.Byte(41), new WyJS.Byte(42), new WyJS.Byte(43), new WyJS.Byte(44), new WyJS.Byte(45), new WyJS.Byte(46), new WyJS.Byte(47), new WyJS.Byte(48), new WyJS.Byte(49), new WyJS.Byte(50), new WyJS.Byte(51), new WyJS.Byte(52), new WyJS.Byte(53), new WyJS.Byte(54), new WyJS.Byte(55), new WyJS.Byte(56), new WyJS.Byte(57), new WyJS.Byte(58), new WyJS.Byte(59), new WyJS.Byte(60), new WyJS.Byte(61), new WyJS.Byte(62), new WyJS.Byte(63), new WyJS.Byte(64), new WyJS.Byte(65), new WyJS.Byte(66), new WyJS.Byte(67), new WyJS.Byte(68), new WyJS.Byte(69), new WyJS.Byte(70), new WyJS.Byte(71), new WyJS.Byte(72), new WyJS.Byte(73), new WyJS.Byte(74), new WyJS.Byte(75), new WyJS.Byte(76), new WyJS.Byte(77), new WyJS.Byte(78), new WyJS.Byte(79), new WyJS.Byte(80), new WyJS.Byte(81), new WyJS.Byte(82), new WyJS.Byte(83), new WyJS.Byte(84), new WyJS.Byte(85), new WyJS.Byte(86), new WyJS.Byte(87), new WyJS.Byte(88), new WyJS.Byte(89), new WyJS.Byte(90), new WyJS.Byte(91), new WyJS.Byte(92), new WyJS.Byte(93), new WyJS.Byte(94), new WyJS.Byte(95), new WyJS.Byte(96), new WyJS.Byte(97), new WyJS.Byte(98), new WyJS.Byte(99), new WyJS.Byte(100), new WyJS.Byte(101), new WyJS.Byte(102), new WyJS.Byte(103), new WyJS.Byte(104), new WyJS.Byte(105), new WyJS.Byte(106), new WyJS.Byte(107), new WyJS.Byte(108), new WyJS.Byte(109), new WyJS.Byte(110), new WyJS.Byte(111), new WyJS.Byte(112), new WyJS.Byte(113), new WyJS.Byte(114), new WyJS.Byte(115), new WyJS.Byte(116), new WyJS.Byte(117), new WyJS.Byte(118), new WyJS.Byte(119), new WyJS.Byte(120), new WyJS.Byte(121), new WyJS.Byte(122), new WyJS.Byte(123), new WyJS.Byte(124), new WyJS.Byte(125), new WyJS.Byte(126)], new WyJS.Type.Array(new WyJS.Type.Byte()));
            var r8 = r7.length();//lengthof %8 = %7 : byte[]
            if(WyJS.gt(r0, r8, true)){
               control_flow_pc = 64;
               control_flow_repeat = true;
               continue outer;
            }
            var r10 = new WyJS.Array([new WyJS.Byte(-128), new WyJS.Byte(-127), new WyJS.Byte(-126), new WyJS.Byte(-125), new WyJS.Byte(-124), new WyJS.Byte(-123), new WyJS.Byte(-122), new WyJS.Byte(-121), new WyJS.Byte(-120), new WyJS.Byte(-119), new WyJS.Byte(-118), new WyJS.Byte(-117), new WyJS.Byte(-116), new WyJS.Byte(-115), new WyJS.Byte(-114), new WyJS.Byte(-113), new WyJS.Byte(-112), new WyJS.Byte(-111), new WyJS.Byte(-110), new WyJS.Byte(-109), new WyJS.Byte(-108), new WyJS.Byte(-107), new WyJS.Byte(-106), new WyJS.Byte(-105), new WyJS.Byte(-104), new WyJS.Byte(-103), new WyJS.Byte(-102), new WyJS.Byte(-101), new WyJS.Byte(-100), new WyJS.Byte(-99), new WyJS.Byte(-98), new WyJS.Byte(-97), new WyJS.Byte(-96), new WyJS.Byte(-95), new WyJS.Byte(-94), new WyJS.Byte(-93), new WyJS.Byte(-92), new WyJS.Byte(-91), new WyJS.Byte(-90), new WyJS.Byte(-89), new WyJS.Byte(-88), new WyJS.Byte(-87), new WyJS.Byte(-86), new WyJS.Byte(-85), new WyJS.Byte(-84), new WyJS.Byte(-83), new WyJS.Byte(-82), new WyJS.Byte(-81), new WyJS.Byte(-80), new WyJS.Byte(-79), new WyJS.Byte(-78), new WyJS.Byte(-77), new WyJS.Byte(-76), new WyJS.Byte(-75), new WyJS.Byte(-74), new WyJS.Byte(-73), new WyJS.Byte(-72), new WyJS.Byte(-71), new WyJS.Byte(-70), new WyJS.Byte(-69), new WyJS.Byte(-68), new WyJS.Byte(-67), new WyJS.Byte(-66), new WyJS.Byte(-65), new WyJS.Byte(-64), new WyJS.Byte(-63), new WyJS.Byte(-62), new WyJS.Byte(-61), new WyJS.Byte(-60), new WyJS.Byte(-59), new WyJS.Byte(-58), new WyJS.Byte(-57), new WyJS.Byte(-56), new WyJS.Byte(-55), new WyJS.Byte(-54), new WyJS.Byte(-53), new WyJS.Byte(-52), new WyJS.Byte(-51), new WyJS.Byte(-50), new WyJS.Byte(-49), new WyJS.Byte(-48), new WyJS.Byte(-47), new WyJS.Byte(-46), new WyJS.Byte(-45), new WyJS.Byte(-44), new WyJS.Byte(-43), new WyJS.Byte(-42), new WyJS.Byte(-41), new WyJS.Byte(-40), new WyJS.Byte(-39), new WyJS.Byte(-38), new WyJS.Byte(-37), new WyJS.Byte(-36), new WyJS.Byte(-35), new WyJS.Byte(-34), new WyJS.Byte(-33), new WyJS.Byte(-32), new WyJS.Byte(-31), new WyJS.Byte(-30), new WyJS.Byte(-29), new WyJS.Byte(-28), new WyJS.Byte(-27), new WyJS.Byte(-26), new WyJS.Byte(-25), new WyJS.Byte(-24), new WyJS.Byte(-23), new WyJS.Byte(-22), new WyJS.Byte(-21), new WyJS.Byte(-20), new WyJS.Byte(-19), new WyJS.Byte(-18), new WyJS.Byte(-17), new WyJS.Byte(-16), new WyJS.Byte(-15), new WyJS.Byte(-14), new WyJS.Byte(-13), new WyJS.Byte(-12), new WyJS.Byte(-11), new WyJS.Byte(-10), new WyJS.Byte(-9), new WyJS.Byte(-8), new WyJS.Byte(-7), new WyJS.Byte(-6), new WyJS.Byte(-5), new WyJS.Byte(-4), new WyJS.Byte(-3), new WyJS.Byte(-2), new WyJS.Byte(-1), new WyJS.Byte(0), new WyJS.Byte(1), new WyJS.Byte(2), new WyJS.Byte(3), new WyJS.Byte(4), new WyJS.Byte(5), new WyJS.Byte(6), new WyJS.Byte(7), new WyJS.Byte(8), new WyJS.Byte(9), new WyJS.Byte(10), new WyJS.Byte(11), new WyJS.Byte(12), new WyJS.Byte(13), new WyJS.Byte(14), new WyJS.Byte(15), new WyJS.Byte(16), new WyJS.Byte(17), new WyJS.Byte(18), new WyJS.Byte(19), new WyJS.Byte(20), new WyJS.Byte(21), new WyJS.Byte(22), new WyJS.Byte(23), new WyJS.Byte(24), new WyJS.Byte(25), new WyJS.Byte(26), new WyJS.Byte(27), new WyJS.Byte(28), new WyJS.Byte(29), new WyJS.Byte(30), new WyJS.Byte(31), new WyJS.Byte(32), new WyJS.Byte(33), new WyJS.Byte(34), new WyJS.Byte(35), new WyJS.Byte(36), new WyJS.Byte(37), new WyJS.Byte(38), new WyJS.Byte(39), new WyJS.Byte(40), new WyJS.Byte(41), new WyJS.Byte(42), new WyJS.Byte(43), new WyJS.Byte(44), new WyJS.Byte(45), new WyJS.Byte(46), new WyJS.Byte(47), new WyJS.Byte(48), new WyJS.Byte(49), new WyJS.Byte(50), new WyJS.Byte(51), new WyJS.Byte(52), new WyJS.Byte(53), new WyJS.Byte(54), new WyJS.Byte(55), new WyJS.Byte(56), new WyJS.Byte(57), new WyJS.Byte(58), new WyJS.Byte(59), new WyJS.Byte(60), new WyJS.Byte(61), new WyJS.Byte(62), new WyJS.Byte(63), new WyJS.Byte(64), new WyJS.Byte(65), new WyJS.Byte(66), new WyJS.Byte(67), new WyJS.Byte(68), new WyJS.Byte(69), new WyJS.Byte(70), new WyJS.Byte(71), new WyJS.Byte(72), new WyJS.Byte(73), new WyJS.Byte(74), new WyJS.Byte(75), new WyJS.Byte(76), new WyJS.Byte(77), new WyJS.Byte(78), new WyJS.Byte(79), new WyJS.Byte(80), new WyJS.Byte(81), new WyJS.Byte(82), new WyJS.Byte(83), new WyJS.Byte(84), new WyJS.Byte(85), new WyJS.Byte(86), new WyJS.Byte(87), new WyJS.Byte(88), new WyJS.Byte(89), new WyJS.Byte(90), new WyJS.Byte(91), new WyJS.Byte(92), new WyJS.Byte(93), new WyJS.Byte(94), new WyJS.Byte(95), new WyJS.Byte(96), new WyJS.Byte(97), new WyJS.Byte(98), new WyJS.Byte(99), new WyJS.Byte(100), new WyJS.Byte(101), new WyJS.Byte(102), new WyJS.Byte(103), new WyJS.Byte(104), new WyJS.Byte(105), new WyJS.Byte(106), new WyJS.Byte(107), new WyJS.Byte(108), new WyJS.Byte(109), new WyJS.Byte(110), new WyJS.Byte(111), new WyJS.Byte(112), new WyJS.Byte(113), new WyJS.Byte(114), new WyJS.Byte(115), new WyJS.Byte(116), new WyJS.Byte(117), new WyJS.Byte(118), new WyJS.Byte(119), new WyJS.Byte(120), new WyJS.Byte(121), new WyJS.Byte(122), new WyJS.Byte(123), new WyJS.Byte(124), new WyJS.Byte(125), new WyJS.Byte(126)], new WyJS.Type.Array(new WyJS.Type.Byte()));
            var r11 = r10.getValue(r0);
            var r9 = r11;//assign %9 = %11  : byte
            var r1 = r9;//assign %1 = %9  : byte
            var r13 = new WyJS.Integer(0);
            var r12 = r13;//assign %12 = %13  : int
            var r2 = r12;//assign %2 = %12  : int
            control_flow_pc = -5;
            control_flow_repeat = true;
            break;
         case -5:
            var r15 = new WyJS.Array([new WyJS.Byte(-128), new WyJS.Byte(-127), new WyJS.Byte(-126), new WyJS.Byte(-125), new WyJS.Byte(-124), new WyJS.Byte(-123), new WyJS.Byte(-122), new WyJS.Byte(-121), new WyJS.Byte(-120), new WyJS.Byte(-119), new WyJS.Byte(-118), new WyJS.Byte(-117), new WyJS.Byte(-116), new WyJS.Byte(-115), new WyJS.Byte(-114), new WyJS.Byte(-113), new WyJS.Byte(-112), new WyJS.Byte(-111), new WyJS.Byte(-110), new WyJS.Byte(-109), new WyJS.Byte(-108), new WyJS.Byte(-107), new WyJS.Byte(-106), new WyJS.Byte(-105), new WyJS.Byte(-104), new WyJS.Byte(-103), new WyJS.Byte(-102), new WyJS.Byte(-101), new WyJS.Byte(-100), new WyJS.Byte(-99), new WyJS.Byte(-98), new WyJS.Byte(-97), new WyJS.Byte(-96), new WyJS.Byte(-95), new WyJS.Byte(-94), new WyJS.Byte(-93), new WyJS.Byte(-92), new WyJS.Byte(-91), new WyJS.Byte(-90), new WyJS.Byte(-89), new WyJS.Byte(-88), new WyJS.Byte(-87), new WyJS.Byte(-86), new WyJS.Byte(-85), new WyJS.Byte(-84), new WyJS.Byte(-83), new WyJS.Byte(-82), new WyJS.Byte(-81), new WyJS.Byte(-80), new WyJS.Byte(-79), new WyJS.Byte(-78), new WyJS.Byte(-77), new WyJS.Byte(-76), new WyJS.Byte(-75), new WyJS.Byte(-74), new WyJS.Byte(-73), new WyJS.Byte(-72), new WyJS.Byte(-71), new WyJS.Byte(-70), new WyJS.Byte(-69), new WyJS.Byte(-68), new WyJS.Byte(-67), new WyJS.Byte(-66), new WyJS.Byte(-65), new WyJS.Byte(-64), new WyJS.Byte(-63), new WyJS.Byte(-62), new WyJS.Byte(-61), new WyJS.Byte(-60), new WyJS.Byte(-59), new WyJS.Byte(-58), new WyJS.Byte(-57), new WyJS.Byte(-56), new WyJS.Byte(-55), new WyJS.Byte(-54), new WyJS.Byte(-53), new WyJS.Byte(-52), new WyJS.Byte(-51), new WyJS.Byte(-50), new WyJS.Byte(-49), new WyJS.Byte(-48), new WyJS.Byte(-47), new WyJS.Byte(-46), new WyJS.Byte(-45), new WyJS.Byte(-44), new WyJS.Byte(-43), new WyJS.Byte(-42), new WyJS.Byte(-41), new WyJS.Byte(-40), new WyJS.Byte(-39), new WyJS.Byte(-38), new WyJS.Byte(-37), new WyJS.Byte(-36), new WyJS.Byte(-35), new WyJS.Byte(-34), new WyJS.Byte(-33), new WyJS.Byte(-32), new WyJS.Byte(-31), new WyJS.Byte(-30), new WyJS.Byte(-29), new WyJS.Byte(-28), new WyJS.Byte(-27), new WyJS.Byte(-26), new WyJS.Byte(-25), new WyJS.Byte(-24), new WyJS.Byte(-23), new WyJS.Byte(-22), new WyJS.Byte(-21), new WyJS.Byte(-20), new WyJS.Byte(-19), new WyJS.Byte(-18), new WyJS.Byte(-17), new WyJS.Byte(-16), new WyJS.Byte(-15), new WyJS.Byte(-14), new WyJS.Byte(-13), new WyJS.Byte(-12), new WyJS.Byte(-11), new WyJS.Byte(-10), new WyJS.Byte(-9), new WyJS.Byte(-8), new WyJS.Byte(-7), new WyJS.Byte(-6), new WyJS.Byte(-5), new WyJS.Byte(-4), new WyJS.Byte(-3), new WyJS.Byte(-2), new WyJS.Byte(-1), new WyJS.Byte(0), new WyJS.Byte(1), new WyJS.Byte(2), new WyJS.Byte(3), new WyJS.Byte(4), new WyJS.Byte(5), new WyJS.Byte(6), new WyJS.Byte(7), new WyJS.Byte(8), new WyJS.Byte(9), new WyJS.Byte(10), new WyJS.Byte(11), new WyJS.Byte(12), new WyJS.Byte(13), new WyJS.Byte(14), new WyJS.Byte(15), new WyJS.Byte(16), new WyJS.Byte(17), new WyJS.Byte(18), new WyJS.Byte(19), new WyJS.Byte(20), new WyJS.Byte(21), new WyJS.Byte(22), new WyJS.Byte(23), new WyJS.Byte(24), new WyJS.Byte(25), new WyJS.Byte(26), new WyJS.Byte(27), new WyJS.Byte(28), new WyJS.Byte(29), new WyJS.Byte(30), new WyJS.Byte(31), new WyJS.Byte(32), new WyJS.Byte(33), new WyJS.Byte(34), new WyJS.Byte(35), new WyJS.Byte(36), new WyJS.Byte(37), new WyJS.Byte(38), new WyJS.Byte(39), new WyJS.Byte(40), new WyJS.Byte(41), new WyJS.Byte(42), new WyJS.Byte(43), new WyJS.Byte(44), new WyJS.Byte(45), new WyJS.Byte(46), new WyJS.Byte(47), new WyJS.Byte(48), new WyJS.Byte(49), new WyJS.Byte(50), new WyJS.Byte(51), new WyJS.Byte(52), new WyJS.Byte(53), new WyJS.Byte(54), new WyJS.Byte(55), new WyJS.Byte(56), new WyJS.Byte(57), new WyJS.Byte(58), new WyJS.Byte(59), new WyJS.Byte(60), new WyJS.Byte(61), new WyJS.Byte(62), new WyJS.Byte(63), new WyJS.Byte(64), new WyJS.Byte(65), new WyJS.Byte(66), new WyJS.Byte(67), new WyJS.Byte(68), new WyJS.Byte(69), new WyJS.Byte(70), new WyJS.Byte(71), new WyJS.Byte(72), new WyJS.Byte(73), new WyJS.Byte(74), new WyJS.Byte(75), new WyJS.Byte(76), new WyJS.Byte(77), new WyJS.Byte(78), new WyJS.Byte(79), new WyJS.Byte(80), new WyJS.Byte(81), new WyJS.Byte(82), new WyJS.Byte(83), new WyJS.Byte(84), new WyJS.Byte(85), new WyJS.Byte(86), new WyJS.Byte(87), new WyJS.Byte(88), new WyJS.Byte(89), new WyJS.Byte(90), new WyJS.Byte(91), new WyJS.Byte(92), new WyJS.Byte(93), new WyJS.Byte(94), new WyJS.Byte(95), new WyJS.Byte(96), new WyJS.Byte(97), new WyJS.Byte(98), new WyJS.Byte(99), new WyJS.Byte(100), new WyJS.Byte(101), new WyJS.Byte(102), new WyJS.Byte(103), new WyJS.Byte(104), new WyJS.Byte(105), new WyJS.Byte(106), new WyJS.Byte(107), new WyJS.Byte(108), new WyJS.Byte(109), new WyJS.Byte(110), new WyJS.Byte(111), new WyJS.Byte(112), new WyJS.Byte(113), new WyJS.Byte(114), new WyJS.Byte(115), new WyJS.Byte(116), new WyJS.Byte(117), new WyJS.Byte(118), new WyJS.Byte(119), new WyJS.Byte(120), new WyJS.Byte(121), new WyJS.Byte(122), new WyJS.Byte(123), new WyJS.Byte(124), new WyJS.Byte(125), new WyJS.Byte(126)], new WyJS.Type.Array(new WyJS.Type.Byte()));
            var r16 = r15.length();//lengthof %16 = %15 : byte[]
            if(WyJS.gt(r2, r16, true)){
               control_flow_pc = 66;
               control_flow_repeat = true;
               continue outer;
            }
            var r18 = new WyJS.Array([new WyJS.Byte(-128), new WyJS.Byte(-127), new WyJS.Byte(-126), new WyJS.Byte(-125), new WyJS.Byte(-124), new WyJS.Byte(-123), new WyJS.Byte(-122), new WyJS.Byte(-121), new WyJS.Byte(-120), new WyJS.Byte(-119), new WyJS.Byte(-118), new WyJS.Byte(-117), new WyJS.Byte(-116), new WyJS.Byte(-115), new WyJS.Byte(-114), new WyJS.Byte(-113), new WyJS.Byte(-112), new WyJS.Byte(-111), new WyJS.Byte(-110), new WyJS.Byte(-109), new WyJS.Byte(-108), new WyJS.Byte(-107), new WyJS.Byte(-106), new WyJS.Byte(-105), new WyJS.Byte(-104), new WyJS.Byte(-103), new WyJS.Byte(-102), new WyJS.Byte(-101), new WyJS.Byte(-100), new WyJS.Byte(-99), new WyJS.Byte(-98), new WyJS.Byte(-97), new WyJS.Byte(-96), new WyJS.Byte(-95), new WyJS.Byte(-94), new WyJS.Byte(-93), new WyJS.Byte(-92), new WyJS.Byte(-91), new WyJS.Byte(-90), new WyJS.Byte(-89), new WyJS.Byte(-88), new WyJS.Byte(-87), new WyJS.Byte(-86), new WyJS.Byte(-85), new WyJS.Byte(-84), new WyJS.Byte(-83), new WyJS.Byte(-82), new WyJS.Byte(-81), new WyJS.Byte(-80), new WyJS.Byte(-79), new WyJS.Byte(-78), new WyJS.Byte(-77), new WyJS.Byte(-76), new WyJS.Byte(-75), new WyJS.Byte(-74), new WyJS.Byte(-73), new WyJS.Byte(-72), new WyJS.Byte(-71), new WyJS.Byte(-70), new WyJS.Byte(-69), new WyJS.Byte(-68), new WyJS.Byte(-67), new WyJS.Byte(-66), new WyJS.Byte(-65), new WyJS.Byte(-64), new WyJS.Byte(-63), new WyJS.Byte(-62), new WyJS.Byte(-61), new WyJS.Byte(-60), new WyJS.Byte(-59), new WyJS.Byte(-58), new WyJS.Byte(-57), new WyJS.Byte(-56), new WyJS.Byte(-55), new WyJS.Byte(-54), new WyJS.Byte(-53), new WyJS.Byte(-52), new WyJS.Byte(-51), new WyJS.Byte(-50), new WyJS.Byte(-49), new WyJS.Byte(-48), new WyJS.Byte(-47), new WyJS.Byte(-46), new WyJS.Byte(-45), new WyJS.Byte(-44), new WyJS.Byte(-43), new WyJS.Byte(-42), new WyJS.Byte(-41), new WyJS.Byte(-40), new WyJS.Byte(-39), new WyJS.Byte(-38), new WyJS.Byte(-37), new WyJS.Byte(-36), new WyJS.Byte(-35), new WyJS.Byte(-34), new WyJS.Byte(-33), new WyJS.Byte(-32), new WyJS.Byte(-31), new WyJS.Byte(-30), new WyJS.Byte(-29), new WyJS.Byte(-28), new WyJS.Byte(-27), new WyJS.Byte(-26), new WyJS.Byte(-25), new WyJS.Byte(-24), new WyJS.Byte(-23), new WyJS.Byte(-22), new WyJS.Byte(-21), new WyJS.Byte(-20), new WyJS.Byte(-19), new WyJS.Byte(-18), new WyJS.Byte(-17), new WyJS.Byte(-16), new WyJS.Byte(-15), new WyJS.Byte(-14), new WyJS.Byte(-13), new WyJS.Byte(-12), new WyJS.Byte(-11), new WyJS.Byte(-10), new WyJS.Byte(-9), new WyJS.Byte(-8), new WyJS.Byte(-7), new WyJS.Byte(-6), new WyJS.Byte(-5), new WyJS.Byte(-4), new WyJS.Byte(-3), new WyJS.Byte(-2), new WyJS.Byte(-1), new WyJS.Byte(0), new WyJS.Byte(1), new WyJS.Byte(2), new WyJS.Byte(3), new WyJS.Byte(4), new WyJS.Byte(5), new WyJS.Byte(6), new WyJS.Byte(7), new WyJS.Byte(8), new WyJS.Byte(9), new WyJS.Byte(10), new WyJS.Byte(11), new WyJS.Byte(12), new WyJS.Byte(13), new WyJS.Byte(14), new WyJS.Byte(15), new WyJS.Byte(16), new WyJS.Byte(17), new WyJS.Byte(18), new WyJS.Byte(19), new WyJS.Byte(20), new WyJS.Byte(21), new WyJS.Byte(22), new WyJS.Byte(23), new WyJS.Byte(24), new WyJS.Byte(25), new WyJS.Byte(26), new WyJS.Byte(27), new WyJS.Byte(28), new WyJS.Byte(29), new WyJS.Byte(30), new WyJS.Byte(31), new WyJS.Byte(32), new WyJS.Byte(33), new WyJS.Byte(34), new WyJS.Byte(35), new WyJS.Byte(36), new WyJS.Byte(37), new WyJS.Byte(38), new WyJS.Byte(39), new WyJS.Byte(40), new WyJS.Byte(41), new WyJS.Byte(42), new WyJS.Byte(43), new WyJS.Byte(44), new WyJS.Byte(45), new WyJS.Byte(46), new WyJS.Byte(47), new WyJS.Byte(48), new WyJS.Byte(49), new WyJS.Byte(50), new WyJS.Byte(51), new WyJS.Byte(52), new WyJS.Byte(53), new WyJS.Byte(54), new WyJS.Byte(55), new WyJS.Byte(56), new WyJS.Byte(57), new WyJS.Byte(58), new WyJS.Byte(59), new WyJS.Byte(60), new WyJS.Byte(61), new WyJS.Byte(62), new WyJS.Byte(63), new WyJS.Byte(64), new WyJS.Byte(65), new WyJS.Byte(66), new WyJS.Byte(67), new WyJS.Byte(68), new WyJS.Byte(69), new WyJS.Byte(70), new WyJS.Byte(71), new WyJS.Byte(72), new WyJS.Byte(73), new WyJS.Byte(74), new WyJS.Byte(75), new WyJS.Byte(76), new WyJS.Byte(77), new WyJS.Byte(78), new WyJS.Byte(79), new WyJS.Byte(80), new WyJS.Byte(81), new WyJS.Byte(82), new WyJS.Byte(83), new WyJS.Byte(84), new WyJS.Byte(85), new WyJS.Byte(86), new WyJS.Byte(87), new WyJS.Byte(88), new WyJS.Byte(89), new WyJS.Byte(90), new WyJS.Byte(91), new WyJS.Byte(92), new WyJS.Byte(93), new WyJS.Byte(94), new WyJS.Byte(95), new WyJS.Byte(96), new WyJS.Byte(97), new WyJS.Byte(98), new WyJS.Byte(99), new WyJS.Byte(100), new WyJS.Byte(101), new WyJS.Byte(102), new WyJS.Byte(103), new WyJS.Byte(104), new WyJS.Byte(105), new WyJS.Byte(106), new WyJS.Byte(107), new WyJS.Byte(108), new WyJS.Byte(109), new WyJS.Byte(110), new WyJS.Byte(111), new WyJS.Byte(112), new WyJS.Byte(113), new WyJS.Byte(114), new WyJS.Byte(115), new WyJS.Byte(116), new WyJS.Byte(117), new WyJS.Byte(118), new WyJS.Byte(119), new WyJS.Byte(120), new WyJS.Byte(121), new WyJS.Byte(122), new WyJS.Byte(123), new WyJS.Byte(124), new WyJS.Byte(125), new WyJS.Byte(126)], new WyJS.Type.Array(new WyJS.Type.Byte()));
            var r19 = r18.getValue(r2);
            var r17 = r19;//assign %17 = %19  : byte
            var r3 = r17;//assign %3 = %17  : byte
            var r20 = r1.xor(r3);//xor %20 = %1, %3 : byte
            var r21 = xor$Y9dFXc1Fs2(r1, r3);//invoke %21 = (%1, %3) Byte_Valid_4:xor : function(byte,byte) -> byte
            if(WyJS.equals(r20, r21, true)){
               control_flow_pc = 67;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 67:
            var r22 = new WyJS.Integer(1);
            var r23 = r2.add(r22);//add %23 = %2, %22 : int
            var r2 = r23;//assign %2 = %23  : int
            control_flow_pc = -5;
            control_flow_repeat = true;
            break;
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
         case 66:
            var r24 = new WyJS.Integer(1);
            var r25 = r0.add(r24);//add %25 = %0, %24 : int
            var r0 = r25;//assign %0 = %25  : int
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
         case 64:
            return;
      }
   }
}

