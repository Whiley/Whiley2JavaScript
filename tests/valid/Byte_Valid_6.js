function shl$Z9dFXd1Fs1E(r0, r1){//function(byte,int) -> byte
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case -3:
            var r2 = new WyJS.Integer(0);
            if(WyJS.lt(r1, r2, true)){
               control_flow_pc = 61;
               control_flow_repeat = true;
               continue outer;
            }
            var r3 = new WyJS.Integer(1);
            var r4 = r0.srl(r3);//shr %4 = %0, %3 : byte
            var r0 = r4;//assign %0 = %4  : byte
            var r5 = new WyJS.Integer(1);
            var r6 = r1.sub(r5);//sub %6 = %1, %5 : int
            var r1 = r6;//assign %1 = %6  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case 61:
            return r0;//return %0 : byte
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
            var r4 = new WyJS.Integer(0);
            var r3 = r4;//assign %3 = %4  : int
            var r0 = r3;//assign %0 = %3  : int
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
         case -4:
            var r6 = new WyJS.Array([new WyJS.Byte(128), new WyJS.Byte(129), new WyJS.Byte(130), new WyJS.Byte(131), new WyJS.Byte(132), new WyJS.Byte(133), new WyJS.Byte(134), new WyJS.Byte(135), new WyJS.Byte(136), new WyJS.Byte(137), new WyJS.Byte(138), new WyJS.Byte(139), new WyJS.Byte(140), new WyJS.Byte(141), new WyJS.Byte(142), new WyJS.Byte(143), new WyJS.Byte(144), new WyJS.Byte(145), new WyJS.Byte(146), new WyJS.Byte(147), new WyJS.Byte(148), new WyJS.Byte(149), new WyJS.Byte(150), new WyJS.Byte(151), new WyJS.Byte(152), new WyJS.Byte(153), new WyJS.Byte(154), new WyJS.Byte(155), new WyJS.Byte(156), new WyJS.Byte(157), new WyJS.Byte(158), new WyJS.Byte(159), new WyJS.Byte(160), new WyJS.Byte(161), new WyJS.Byte(162), new WyJS.Byte(163), new WyJS.Byte(164), new WyJS.Byte(165), new WyJS.Byte(166), new WyJS.Byte(167), new WyJS.Byte(168), new WyJS.Byte(169), new WyJS.Byte(170), new WyJS.Byte(171), new WyJS.Byte(172), new WyJS.Byte(173), new WyJS.Byte(174), new WyJS.Byte(175), new WyJS.Byte(176), new WyJS.Byte(177), new WyJS.Byte(178), new WyJS.Byte(179), new WyJS.Byte(180), new WyJS.Byte(181), new WyJS.Byte(182), new WyJS.Byte(183), new WyJS.Byte(184), new WyJS.Byte(185), new WyJS.Byte(186), new WyJS.Byte(187), new WyJS.Byte(188), new WyJS.Byte(189), new WyJS.Byte(190), new WyJS.Byte(191), new WyJS.Byte(192), new WyJS.Byte(193), new WyJS.Byte(194), new WyJS.Byte(195), new WyJS.Byte(196), new WyJS.Byte(197), new WyJS.Byte(198), new WyJS.Byte(199), new WyJS.Byte(200), new WyJS.Byte(201), new WyJS.Byte(202), new WyJS.Byte(203), new WyJS.Byte(204), new WyJS.Byte(205), new WyJS.Byte(206), new WyJS.Byte(207), new WyJS.Byte(208), new WyJS.Byte(209), new WyJS.Byte(210), new WyJS.Byte(211), new WyJS.Byte(212), new WyJS.Byte(213), new WyJS.Byte(214), new WyJS.Byte(215), new WyJS.Byte(216), new WyJS.Byte(217), new WyJS.Byte(218), new WyJS.Byte(219), new WyJS.Byte(220), new WyJS.Byte(221), new WyJS.Byte(222), new WyJS.Byte(223), new WyJS.Byte(224), new WyJS.Byte(225), new WyJS.Byte(226), new WyJS.Byte(227), new WyJS.Byte(228), new WyJS.Byte(229), new WyJS.Byte(230), new WyJS.Byte(231), new WyJS.Byte(232), new WyJS.Byte(233), new WyJS.Byte(234), new WyJS.Byte(235), new WyJS.Byte(236), new WyJS.Byte(237), new WyJS.Byte(238), new WyJS.Byte(239), new WyJS.Byte(240), new WyJS.Byte(241), new WyJS.Byte(242), new WyJS.Byte(243), new WyJS.Byte(244), new WyJS.Byte(245), new WyJS.Byte(246), new WyJS.Byte(247), new WyJS.Byte(248), new WyJS.Byte(249), new WyJS.Byte(250), new WyJS.Byte(251), new WyJS.Byte(252), new WyJS.Byte(253), new WyJS.Byte(254), new WyJS.Byte(255), new WyJS.Byte(0), new WyJS.Byte(1), new WyJS.Byte(2), new WyJS.Byte(3), new WyJS.Byte(4), new WyJS.Byte(5), new WyJS.Byte(6), new WyJS.Byte(7), new WyJS.Byte(8), new WyJS.Byte(9), new WyJS.Byte(10), new WyJS.Byte(11), new WyJS.Byte(12), new WyJS.Byte(13), new WyJS.Byte(14), new WyJS.Byte(15), new WyJS.Byte(16), new WyJS.Byte(17), new WyJS.Byte(18), new WyJS.Byte(19), new WyJS.Byte(20), new WyJS.Byte(21), new WyJS.Byte(22), new WyJS.Byte(23), new WyJS.Byte(24), new WyJS.Byte(25), new WyJS.Byte(26), new WyJS.Byte(27), new WyJS.Byte(28), new WyJS.Byte(29), new WyJS.Byte(30), new WyJS.Byte(31), new WyJS.Byte(32), new WyJS.Byte(33), new WyJS.Byte(34), new WyJS.Byte(35), new WyJS.Byte(36), new WyJS.Byte(37), new WyJS.Byte(38), new WyJS.Byte(39), new WyJS.Byte(40), new WyJS.Byte(41), new WyJS.Byte(42), new WyJS.Byte(43), new WyJS.Byte(44), new WyJS.Byte(45), new WyJS.Byte(46), new WyJS.Byte(47), new WyJS.Byte(48), new WyJS.Byte(49), new WyJS.Byte(50), new WyJS.Byte(51), new WyJS.Byte(52), new WyJS.Byte(53), new WyJS.Byte(54), new WyJS.Byte(55), new WyJS.Byte(56), new WyJS.Byte(57), new WyJS.Byte(58), new WyJS.Byte(59), new WyJS.Byte(60), new WyJS.Byte(61), new WyJS.Byte(62), new WyJS.Byte(63), new WyJS.Byte(64), new WyJS.Byte(65), new WyJS.Byte(66), new WyJS.Byte(67), new WyJS.Byte(68), new WyJS.Byte(69), new WyJS.Byte(70), new WyJS.Byte(71), new WyJS.Byte(72), new WyJS.Byte(73), new WyJS.Byte(74), new WyJS.Byte(75), new WyJS.Byte(76), new WyJS.Byte(77), new WyJS.Byte(78), new WyJS.Byte(79), new WyJS.Byte(80), new WyJS.Byte(81), new WyJS.Byte(82), new WyJS.Byte(83), new WyJS.Byte(84), new WyJS.Byte(85), new WyJS.Byte(86), new WyJS.Byte(87), new WyJS.Byte(88), new WyJS.Byte(89), new WyJS.Byte(90), new WyJS.Byte(91), new WyJS.Byte(92), new WyJS.Byte(93), new WyJS.Byte(94), new WyJS.Byte(95), new WyJS.Byte(96), new WyJS.Byte(97), new WyJS.Byte(98), new WyJS.Byte(99), new WyJS.Byte(100), new WyJS.Byte(101), new WyJS.Byte(102), new WyJS.Byte(103), new WyJS.Byte(104), new WyJS.Byte(105), new WyJS.Byte(106), new WyJS.Byte(107), new WyJS.Byte(108), new WyJS.Byte(109), new WyJS.Byte(110), new WyJS.Byte(111), new WyJS.Byte(112), new WyJS.Byte(113), new WyJS.Byte(114), new WyJS.Byte(115), new WyJS.Byte(116), new WyJS.Byte(117), new WyJS.Byte(118), new WyJS.Byte(119), new WyJS.Byte(120), new WyJS.Byte(121), new WyJS.Byte(122), new WyJS.Byte(123), new WyJS.Byte(124), new WyJS.Byte(125), new WyJS.Byte(126)], new WyJS.Type.Array(new WyJS.Type.Byte()));
            var r7 = r6.length();//lengthof %7 = %6 : byte[]
            if(WyJS.gt(r0, r7, true)){
               control_flow_pc = 63;
               control_flow_repeat = true;
               continue outer;
            }
            var r9 = new WyJS.Array([new WyJS.Byte(128), new WyJS.Byte(129), new WyJS.Byte(130), new WyJS.Byte(131), new WyJS.Byte(132), new WyJS.Byte(133), new WyJS.Byte(134), new WyJS.Byte(135), new WyJS.Byte(136), new WyJS.Byte(137), new WyJS.Byte(138), new WyJS.Byte(139), new WyJS.Byte(140), new WyJS.Byte(141), new WyJS.Byte(142), new WyJS.Byte(143), new WyJS.Byte(144), new WyJS.Byte(145), new WyJS.Byte(146), new WyJS.Byte(147), new WyJS.Byte(148), new WyJS.Byte(149), new WyJS.Byte(150), new WyJS.Byte(151), new WyJS.Byte(152), new WyJS.Byte(153), new WyJS.Byte(154), new WyJS.Byte(155), new WyJS.Byte(156), new WyJS.Byte(157), new WyJS.Byte(158), new WyJS.Byte(159), new WyJS.Byte(160), new WyJS.Byte(161), new WyJS.Byte(162), new WyJS.Byte(163), new WyJS.Byte(164), new WyJS.Byte(165), new WyJS.Byte(166), new WyJS.Byte(167), new WyJS.Byte(168), new WyJS.Byte(169), new WyJS.Byte(170), new WyJS.Byte(171), new WyJS.Byte(172), new WyJS.Byte(173), new WyJS.Byte(174), new WyJS.Byte(175), new WyJS.Byte(176), new WyJS.Byte(177), new WyJS.Byte(178), new WyJS.Byte(179), new WyJS.Byte(180), new WyJS.Byte(181), new WyJS.Byte(182), new WyJS.Byte(183), new WyJS.Byte(184), new WyJS.Byte(185), new WyJS.Byte(186), new WyJS.Byte(187), new WyJS.Byte(188), new WyJS.Byte(189), new WyJS.Byte(190), new WyJS.Byte(191), new WyJS.Byte(192), new WyJS.Byte(193), new WyJS.Byte(194), new WyJS.Byte(195), new WyJS.Byte(196), new WyJS.Byte(197), new WyJS.Byte(198), new WyJS.Byte(199), new WyJS.Byte(200), new WyJS.Byte(201), new WyJS.Byte(202), new WyJS.Byte(203), new WyJS.Byte(204), new WyJS.Byte(205), new WyJS.Byte(206), new WyJS.Byte(207), new WyJS.Byte(208), new WyJS.Byte(209), new WyJS.Byte(210), new WyJS.Byte(211), new WyJS.Byte(212), new WyJS.Byte(213), new WyJS.Byte(214), new WyJS.Byte(215), new WyJS.Byte(216), new WyJS.Byte(217), new WyJS.Byte(218), new WyJS.Byte(219), new WyJS.Byte(220), new WyJS.Byte(221), new WyJS.Byte(222), new WyJS.Byte(223), new WyJS.Byte(224), new WyJS.Byte(225), new WyJS.Byte(226), new WyJS.Byte(227), new WyJS.Byte(228), new WyJS.Byte(229), new WyJS.Byte(230), new WyJS.Byte(231), new WyJS.Byte(232), new WyJS.Byte(233), new WyJS.Byte(234), new WyJS.Byte(235), new WyJS.Byte(236), new WyJS.Byte(237), new WyJS.Byte(238), new WyJS.Byte(239), new WyJS.Byte(240), new WyJS.Byte(241), new WyJS.Byte(242), new WyJS.Byte(243), new WyJS.Byte(244), new WyJS.Byte(245), new WyJS.Byte(246), new WyJS.Byte(247), new WyJS.Byte(248), new WyJS.Byte(249), new WyJS.Byte(250), new WyJS.Byte(251), new WyJS.Byte(252), new WyJS.Byte(253), new WyJS.Byte(254), new WyJS.Byte(255), new WyJS.Byte(0), new WyJS.Byte(1), new WyJS.Byte(2), new WyJS.Byte(3), new WyJS.Byte(4), new WyJS.Byte(5), new WyJS.Byte(6), new WyJS.Byte(7), new WyJS.Byte(8), new WyJS.Byte(9), new WyJS.Byte(10), new WyJS.Byte(11), new WyJS.Byte(12), new WyJS.Byte(13), new WyJS.Byte(14), new WyJS.Byte(15), new WyJS.Byte(16), new WyJS.Byte(17), new WyJS.Byte(18), new WyJS.Byte(19), new WyJS.Byte(20), new WyJS.Byte(21), new WyJS.Byte(22), new WyJS.Byte(23), new WyJS.Byte(24), new WyJS.Byte(25), new WyJS.Byte(26), new WyJS.Byte(27), new WyJS.Byte(28), new WyJS.Byte(29), new WyJS.Byte(30), new WyJS.Byte(31), new WyJS.Byte(32), new WyJS.Byte(33), new WyJS.Byte(34), new WyJS.Byte(35), new WyJS.Byte(36), new WyJS.Byte(37), new WyJS.Byte(38), new WyJS.Byte(39), new WyJS.Byte(40), new WyJS.Byte(41), new WyJS.Byte(42), new WyJS.Byte(43), new WyJS.Byte(44), new WyJS.Byte(45), new WyJS.Byte(46), new WyJS.Byte(47), new WyJS.Byte(48), new WyJS.Byte(49), new WyJS.Byte(50), new WyJS.Byte(51), new WyJS.Byte(52), new WyJS.Byte(53), new WyJS.Byte(54), new WyJS.Byte(55), new WyJS.Byte(56), new WyJS.Byte(57), new WyJS.Byte(58), new WyJS.Byte(59), new WyJS.Byte(60), new WyJS.Byte(61), new WyJS.Byte(62), new WyJS.Byte(63), new WyJS.Byte(64), new WyJS.Byte(65), new WyJS.Byte(66), new WyJS.Byte(67), new WyJS.Byte(68), new WyJS.Byte(69), new WyJS.Byte(70), new WyJS.Byte(71), new WyJS.Byte(72), new WyJS.Byte(73), new WyJS.Byte(74), new WyJS.Byte(75), new WyJS.Byte(76), new WyJS.Byte(77), new WyJS.Byte(78), new WyJS.Byte(79), new WyJS.Byte(80), new WyJS.Byte(81), new WyJS.Byte(82), new WyJS.Byte(83), new WyJS.Byte(84), new WyJS.Byte(85), new WyJS.Byte(86), new WyJS.Byte(87), new WyJS.Byte(88), new WyJS.Byte(89), new WyJS.Byte(90), new WyJS.Byte(91), new WyJS.Byte(92), new WyJS.Byte(93), new WyJS.Byte(94), new WyJS.Byte(95), new WyJS.Byte(96), new WyJS.Byte(97), new WyJS.Byte(98), new WyJS.Byte(99), new WyJS.Byte(100), new WyJS.Byte(101), new WyJS.Byte(102), new WyJS.Byte(103), new WyJS.Byte(104), new WyJS.Byte(105), new WyJS.Byte(106), new WyJS.Byte(107), new WyJS.Byte(108), new WyJS.Byte(109), new WyJS.Byte(110), new WyJS.Byte(111), new WyJS.Byte(112), new WyJS.Byte(113), new WyJS.Byte(114), new WyJS.Byte(115), new WyJS.Byte(116), new WyJS.Byte(117), new WyJS.Byte(118), new WyJS.Byte(119), new WyJS.Byte(120), new WyJS.Byte(121), new WyJS.Byte(122), new WyJS.Byte(123), new WyJS.Byte(124), new WyJS.Byte(125), new WyJS.Byte(126)], new WyJS.Type.Array(new WyJS.Type.Byte()));
            var r10 = r9.getValue(r0);
            var r8 = r10;//assign %8 = %10  : byte
            var r1 = r8;//assign %1 = %8  : byte
            var r12 = new WyJS.Integer(0);
            var r11 = r12;//assign %11 = %12  : int
            var r2 = r11;//assign %2 = %11  : int
            control_flow_pc = -5;
            control_flow_repeat = true;
            break;
         case -5:
            var r13 = new WyJS.Integer(9);
            if(WyJS.gt(r2, r13, true)){
               control_flow_pc = 64;
               control_flow_repeat = true;
               continue outer;
            }
            var r14 = r1.srl(r2);//shr %14 = %1, %2 : byte
            var r15 = shl$Z9dFXd1Fs1E(r1, r2);//invoke %15 = (%1, %2) Byte_Valid_6:shl : function(byte,int) -> byte
            if(WyJS.equals(r14, r15, true)){
               control_flow_pc = 65;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 65:
            var r16 = new WyJS.Integer(1);
            var r17 = r2.add(r16);//add %17 = %2, %16 : int
            var r2 = r17;//assign %2 = %17  : int
            control_flow_pc = -5;
            control_flow_repeat = true;
            break;
            control_flow_pc = -4;
            control_flow_repeat = true;
         case 64:
            var r18 = new WyJS.Integer(1);
            var r19 = r0.add(r18);//add %19 = %0, %18 : int
            var r0 = r19;//assign %0 = %19  : int
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
         case 63:
            return;
      }
   }
}

