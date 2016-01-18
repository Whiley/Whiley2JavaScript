function inc$Y9bFX9$W(r0){//function(byte) -> byte
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
            var r6 = new WyJS.Byte(1);
            var r5 = r6;//assign %5 = %6  : byte
            var r2 = r5;//assign %2 = %5  : byte
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r7 = new WyJS.Integer(8);
            if(WyJS.gt(r1, r7, true)){
               control_flow_pc = 0;
               control_flow_repeat = true;
               continue outer;
            }
            var r8 = r0.and(r2);//and %8 = %0, %2 : byte
            if(WyJS.equals(r8, r2, false)){
               control_flow_pc = 0;
               control_flow_repeat = true;
               continue outer;
            }
            var r9 = new WyJS.Integer(1);
            var r10 = r1.add(r9);//add %10 = %1, %9 : int
            var r1 = r10;//assign %1 = %10  : int
            var r11 = r2.invert();//invert %11 = %2 : byte
            var r12 = r0.and(r11);//and %12 = %0, %11 : byte
            var r0 = r12;//assign %0 = %12  : byte
            var r13 = new WyJS.Integer(1);
            var r14 = r2.sll(r13);//shl %14 = %2, %13 : byte
            var r2 = r14;//assign %2 = %14  : byte
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 0:
            var r15 = r0.or(r2);//or %15 = %0, %2 : byte
            return r15;//return %15 : byte
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
            var r3 = new WyJS.Byte(0);
            var r2 = r3;//assign %2 = %3  : byte
            var r0 = r2;//assign %0 = %2  : byte
            var r5 = new WyJS.Integer(0);
            var r4 = r5;//assign %4 = %5  : int
            var r1 = r4;//assign %1 = %4  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case -3:
            var r6 = new WyJS.Array([new WyJS.Byte(0), new WyJS.Byte(1), new WyJS.Byte(2), new WyJS.Byte(3), new WyJS.Byte(4), new WyJS.Byte(5), new WyJS.Byte(6), new WyJS.Byte(7), new WyJS.Byte(8), new WyJS.Byte(9), new WyJS.Byte(10), new WyJS.Byte(11), new WyJS.Byte(12), new WyJS.Byte(13), new WyJS.Byte(14), new WyJS.Byte(15), new WyJS.Byte(16), new WyJS.Byte(17), new WyJS.Byte(18), new WyJS.Byte(19), new WyJS.Byte(20), new WyJS.Byte(21), new WyJS.Byte(22), new WyJS.Byte(23), new WyJS.Byte(24), new WyJS.Byte(25), new WyJS.Byte(26), new WyJS.Byte(27), new WyJS.Byte(28), new WyJS.Byte(29), new WyJS.Byte(30), new WyJS.Byte(31), new WyJS.Byte(32), new WyJS.Byte(33), new WyJS.Byte(34), new WyJS.Byte(35), new WyJS.Byte(36), new WyJS.Byte(37), new WyJS.Byte(38), new WyJS.Byte(39), new WyJS.Byte(40), new WyJS.Byte(41), new WyJS.Byte(42), new WyJS.Byte(43), new WyJS.Byte(44), new WyJS.Byte(45), new WyJS.Byte(46), new WyJS.Byte(47), new WyJS.Byte(48), new WyJS.Byte(49), new WyJS.Byte(50), new WyJS.Byte(51), new WyJS.Byte(52), new WyJS.Byte(53), new WyJS.Byte(54), new WyJS.Byte(55), new WyJS.Byte(56), new WyJS.Byte(57), new WyJS.Byte(58), new WyJS.Byte(59), new WyJS.Byte(60), new WyJS.Byte(61), new WyJS.Byte(62), new WyJS.Byte(63), new WyJS.Byte(64), new WyJS.Byte(65), new WyJS.Byte(66), new WyJS.Byte(67), new WyJS.Byte(68), new WyJS.Byte(69), new WyJS.Byte(70), new WyJS.Byte(71), new WyJS.Byte(72), new WyJS.Byte(73), new WyJS.Byte(74), new WyJS.Byte(75), new WyJS.Byte(76), new WyJS.Byte(77), new WyJS.Byte(78), new WyJS.Byte(79), new WyJS.Byte(80), new WyJS.Byte(81), new WyJS.Byte(82), new WyJS.Byte(83), new WyJS.Byte(84), new WyJS.Byte(85), new WyJS.Byte(86), new WyJS.Byte(87), new WyJS.Byte(88), new WyJS.Byte(89), new WyJS.Byte(90), new WyJS.Byte(91), new WyJS.Byte(92), new WyJS.Byte(93), new WyJS.Byte(94), new WyJS.Byte(95), new WyJS.Byte(96), new WyJS.Byte(97), new WyJS.Byte(98), new WyJS.Byte(99), new WyJS.Byte(100), new WyJS.Byte(101), new WyJS.Byte(102), new WyJS.Byte(103), new WyJS.Byte(104), new WyJS.Byte(105), new WyJS.Byte(106), new WyJS.Byte(107), new WyJS.Byte(108), new WyJS.Byte(109), new WyJS.Byte(110), new WyJS.Byte(111), new WyJS.Byte(112), new WyJS.Byte(113), new WyJS.Byte(114), new WyJS.Byte(115), new WyJS.Byte(116), new WyJS.Byte(117), new WyJS.Byte(118), new WyJS.Byte(119), new WyJS.Byte(120), new WyJS.Byte(121), new WyJS.Byte(122), new WyJS.Byte(123), new WyJS.Byte(124), new WyJS.Byte(125), new WyJS.Byte(126), new WyJS.Byte(127), new WyJS.Byte(-128), new WyJS.Byte(-127), new WyJS.Byte(-126), new WyJS.Byte(-125), new WyJS.Byte(-124), new WyJS.Byte(-123), new WyJS.Byte(-122), new WyJS.Byte(-121), new WyJS.Byte(-120), new WyJS.Byte(-119), new WyJS.Byte(-118), new WyJS.Byte(-117), new WyJS.Byte(-116), new WyJS.Byte(-115), new WyJS.Byte(-114), new WyJS.Byte(-113), new WyJS.Byte(-112), new WyJS.Byte(-111), new WyJS.Byte(-110), new WyJS.Byte(-109), new WyJS.Byte(-108), new WyJS.Byte(-107), new WyJS.Byte(-106), new WyJS.Byte(-105), new WyJS.Byte(-104), new WyJS.Byte(-103), new WyJS.Byte(-102), new WyJS.Byte(-101), new WyJS.Byte(-100), new WyJS.Byte(-99), new WyJS.Byte(-98), new WyJS.Byte(-97), new WyJS.Byte(-96), new WyJS.Byte(-95), new WyJS.Byte(-94), new WyJS.Byte(-93), new WyJS.Byte(-92), new WyJS.Byte(-91), new WyJS.Byte(-90), new WyJS.Byte(-89), new WyJS.Byte(-88), new WyJS.Byte(-87), new WyJS.Byte(-86), new WyJS.Byte(-85), new WyJS.Byte(-84), new WyJS.Byte(-83), new WyJS.Byte(-82), new WyJS.Byte(-81), new WyJS.Byte(-80), new WyJS.Byte(-79), new WyJS.Byte(-78), new WyJS.Byte(-77), new WyJS.Byte(-76), new WyJS.Byte(-75), new WyJS.Byte(-74), new WyJS.Byte(-73), new WyJS.Byte(-72), new WyJS.Byte(-71), new WyJS.Byte(-70), new WyJS.Byte(-69), new WyJS.Byte(-68), new WyJS.Byte(-67), new WyJS.Byte(-66), new WyJS.Byte(-65), new WyJS.Byte(-64), new WyJS.Byte(-63), new WyJS.Byte(-62), new WyJS.Byte(-61), new WyJS.Byte(-60), new WyJS.Byte(-59), new WyJS.Byte(-58), new WyJS.Byte(-57), new WyJS.Byte(-56), new WyJS.Byte(-55), new WyJS.Byte(-54), new WyJS.Byte(-53), new WyJS.Byte(-52), new WyJS.Byte(-51), new WyJS.Byte(-50), new WyJS.Byte(-49), new WyJS.Byte(-48), new WyJS.Byte(-47), new WyJS.Byte(-46), new WyJS.Byte(-45), new WyJS.Byte(-44), new WyJS.Byte(-43), new WyJS.Byte(-42), new WyJS.Byte(-41), new WyJS.Byte(-40), new WyJS.Byte(-39), new WyJS.Byte(-38), new WyJS.Byte(-37), new WyJS.Byte(-36), new WyJS.Byte(-35), new WyJS.Byte(-34), new WyJS.Byte(-33), new WyJS.Byte(-32), new WyJS.Byte(-31), new WyJS.Byte(-30), new WyJS.Byte(-29), new WyJS.Byte(-28), new WyJS.Byte(-27), new WyJS.Byte(-26), new WyJS.Byte(-25), new WyJS.Byte(-24), new WyJS.Byte(-23), new WyJS.Byte(-22), new WyJS.Byte(-21), new WyJS.Byte(-20), new WyJS.Byte(-19), new WyJS.Byte(-18), new WyJS.Byte(-17), new WyJS.Byte(-16), new WyJS.Byte(-15), new WyJS.Byte(-14), new WyJS.Byte(-13), new WyJS.Byte(-12), new WyJS.Byte(-11), new WyJS.Byte(-10), new WyJS.Byte(-9), new WyJS.Byte(-8), new WyJS.Byte(-7), new WyJS.Byte(-6), new WyJS.Byte(-5), new WyJS.Byte(-4), new WyJS.Byte(-3), new WyJS.Byte(-2), new WyJS.Byte(-1)], new WyJS.Type.Array(new WyJS.Type.Byte()));
            var r7 = r6.length();//lengthof %7 = %6 : byte[]
            if(WyJS.gt(r1, r7, true)){
               control_flow_pc = 1;
               control_flow_repeat = true;
               continue outer;
            }
            var r8 = new WyJS.Array([new WyJS.Byte(0), new WyJS.Byte(1), new WyJS.Byte(2), new WyJS.Byte(3), new WyJS.Byte(4), new WyJS.Byte(5), new WyJS.Byte(6), new WyJS.Byte(7), new WyJS.Byte(8), new WyJS.Byte(9), new WyJS.Byte(10), new WyJS.Byte(11), new WyJS.Byte(12), new WyJS.Byte(13), new WyJS.Byte(14), new WyJS.Byte(15), new WyJS.Byte(16), new WyJS.Byte(17), new WyJS.Byte(18), new WyJS.Byte(19), new WyJS.Byte(20), new WyJS.Byte(21), new WyJS.Byte(22), new WyJS.Byte(23), new WyJS.Byte(24), new WyJS.Byte(25), new WyJS.Byte(26), new WyJS.Byte(27), new WyJS.Byte(28), new WyJS.Byte(29), new WyJS.Byte(30), new WyJS.Byte(31), new WyJS.Byte(32), new WyJS.Byte(33), new WyJS.Byte(34), new WyJS.Byte(35), new WyJS.Byte(36), new WyJS.Byte(37), new WyJS.Byte(38), new WyJS.Byte(39), new WyJS.Byte(40), new WyJS.Byte(41), new WyJS.Byte(42), new WyJS.Byte(43), new WyJS.Byte(44), new WyJS.Byte(45), new WyJS.Byte(46), new WyJS.Byte(47), new WyJS.Byte(48), new WyJS.Byte(49), new WyJS.Byte(50), new WyJS.Byte(51), new WyJS.Byte(52), new WyJS.Byte(53), new WyJS.Byte(54), new WyJS.Byte(55), new WyJS.Byte(56), new WyJS.Byte(57), new WyJS.Byte(58), new WyJS.Byte(59), new WyJS.Byte(60), new WyJS.Byte(61), new WyJS.Byte(62), new WyJS.Byte(63), new WyJS.Byte(64), new WyJS.Byte(65), new WyJS.Byte(66), new WyJS.Byte(67), new WyJS.Byte(68), new WyJS.Byte(69), new WyJS.Byte(70), new WyJS.Byte(71), new WyJS.Byte(72), new WyJS.Byte(73), new WyJS.Byte(74), new WyJS.Byte(75), new WyJS.Byte(76), new WyJS.Byte(77), new WyJS.Byte(78), new WyJS.Byte(79), new WyJS.Byte(80), new WyJS.Byte(81), new WyJS.Byte(82), new WyJS.Byte(83), new WyJS.Byte(84), new WyJS.Byte(85), new WyJS.Byte(86), new WyJS.Byte(87), new WyJS.Byte(88), new WyJS.Byte(89), new WyJS.Byte(90), new WyJS.Byte(91), new WyJS.Byte(92), new WyJS.Byte(93), new WyJS.Byte(94), new WyJS.Byte(95), new WyJS.Byte(96), new WyJS.Byte(97), new WyJS.Byte(98), new WyJS.Byte(99), new WyJS.Byte(100), new WyJS.Byte(101), new WyJS.Byte(102), new WyJS.Byte(103), new WyJS.Byte(104), new WyJS.Byte(105), new WyJS.Byte(106), new WyJS.Byte(107), new WyJS.Byte(108), new WyJS.Byte(109), new WyJS.Byte(110), new WyJS.Byte(111), new WyJS.Byte(112), new WyJS.Byte(113), new WyJS.Byte(114), new WyJS.Byte(115), new WyJS.Byte(116), new WyJS.Byte(117), new WyJS.Byte(118), new WyJS.Byte(119), new WyJS.Byte(120), new WyJS.Byte(121), new WyJS.Byte(122), new WyJS.Byte(123), new WyJS.Byte(124), new WyJS.Byte(125), new WyJS.Byte(126), new WyJS.Byte(127), new WyJS.Byte(-128), new WyJS.Byte(-127), new WyJS.Byte(-126), new WyJS.Byte(-125), new WyJS.Byte(-124), new WyJS.Byte(-123), new WyJS.Byte(-122), new WyJS.Byte(-121), new WyJS.Byte(-120), new WyJS.Byte(-119), new WyJS.Byte(-118), new WyJS.Byte(-117), new WyJS.Byte(-116), new WyJS.Byte(-115), new WyJS.Byte(-114), new WyJS.Byte(-113), new WyJS.Byte(-112), new WyJS.Byte(-111), new WyJS.Byte(-110), new WyJS.Byte(-109), new WyJS.Byte(-108), new WyJS.Byte(-107), new WyJS.Byte(-106), new WyJS.Byte(-105), new WyJS.Byte(-104), new WyJS.Byte(-103), new WyJS.Byte(-102), new WyJS.Byte(-101), new WyJS.Byte(-100), new WyJS.Byte(-99), new WyJS.Byte(-98), new WyJS.Byte(-97), new WyJS.Byte(-96), new WyJS.Byte(-95), new WyJS.Byte(-94), new WyJS.Byte(-93), new WyJS.Byte(-92), new WyJS.Byte(-91), new WyJS.Byte(-90), new WyJS.Byte(-89), new WyJS.Byte(-88), new WyJS.Byte(-87), new WyJS.Byte(-86), new WyJS.Byte(-85), new WyJS.Byte(-84), new WyJS.Byte(-83), new WyJS.Byte(-82), new WyJS.Byte(-81), new WyJS.Byte(-80), new WyJS.Byte(-79), new WyJS.Byte(-78), new WyJS.Byte(-77), new WyJS.Byte(-76), new WyJS.Byte(-75), new WyJS.Byte(-74), new WyJS.Byte(-73), new WyJS.Byte(-72), new WyJS.Byte(-71), new WyJS.Byte(-70), new WyJS.Byte(-69), new WyJS.Byte(-68), new WyJS.Byte(-67), new WyJS.Byte(-66), new WyJS.Byte(-65), new WyJS.Byte(-64), new WyJS.Byte(-63), new WyJS.Byte(-62), new WyJS.Byte(-61), new WyJS.Byte(-60), new WyJS.Byte(-59), new WyJS.Byte(-58), new WyJS.Byte(-57), new WyJS.Byte(-56), new WyJS.Byte(-55), new WyJS.Byte(-54), new WyJS.Byte(-53), new WyJS.Byte(-52), new WyJS.Byte(-51), new WyJS.Byte(-50), new WyJS.Byte(-49), new WyJS.Byte(-48), new WyJS.Byte(-47), new WyJS.Byte(-46), new WyJS.Byte(-45), new WyJS.Byte(-44), new WyJS.Byte(-43), new WyJS.Byte(-42), new WyJS.Byte(-41), new WyJS.Byte(-40), new WyJS.Byte(-39), new WyJS.Byte(-38), new WyJS.Byte(-37), new WyJS.Byte(-36), new WyJS.Byte(-35), new WyJS.Byte(-34), new WyJS.Byte(-33), new WyJS.Byte(-32), new WyJS.Byte(-31), new WyJS.Byte(-30), new WyJS.Byte(-29), new WyJS.Byte(-28), new WyJS.Byte(-27), new WyJS.Byte(-26), new WyJS.Byte(-25), new WyJS.Byte(-24), new WyJS.Byte(-23), new WyJS.Byte(-22), new WyJS.Byte(-21), new WyJS.Byte(-20), new WyJS.Byte(-19), new WyJS.Byte(-18), new WyJS.Byte(-17), new WyJS.Byte(-16), new WyJS.Byte(-15), new WyJS.Byte(-14), new WyJS.Byte(-13), new WyJS.Byte(-12), new WyJS.Byte(-11), new WyJS.Byte(-10), new WyJS.Byte(-9), new WyJS.Byte(-8), new WyJS.Byte(-7), new WyJS.Byte(-6), new WyJS.Byte(-5), new WyJS.Byte(-4), new WyJS.Byte(-3), new WyJS.Byte(-2), new WyJS.Byte(-1)], new WyJS.Type.Array(new WyJS.Type.Byte()));
            var r9 = r8.getValue(r1);
            if(WyJS.equals(r0, r9, true)){
               control_flow_pc = 2;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2:
            var r10 = inc$Y9bFX9$W(r0);//invoke %10 = (%0) Byte_Valid_1:inc : function(byte) -> byte
            var r0 = r10;//assign %0 = %10  : byte
            var r11 = new WyJS.Integer(1);
            var r12 = r1.add(r11);//add %12 = %1, %11 : int
            var r1 = r12;//assign %1 = %12  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case 1:
            return;
      }
   }
}

