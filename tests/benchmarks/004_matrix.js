function buildMatrix$a9hFaWeL1P$$B$$2$o$kM$o5$W0$S$76$d0$T5$C0FN$F6$m0FP$V63P8c0$k$$B$F2$U0FQ$35$o0VR$Z5$sC$s5$W0$SRB9M7(r0, r1, r2, r3){//function(004_matrix:nat,004_matrix:nat,[int],int) -> 004_matrix:Matrix
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r7 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            r6 = r7.clone();//assign %6 = %7  : [void]
            r4 = r6.clone();//assign %4 = %6  : [[int]]
            var r9 = new WyJS.Integer(0);
            var r8 = r9;//assign %8 = %9  : int
            var r5 = r8;//assign %5 = %8  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            if(WyJS.gt(r5, r1, true)){
               control_flow_pc = 4;
               control_flow_repeat = true;
               continue outer;
            }
            var r10 = r3.add(r0);//add %10 = %3, %0 : int
            var r11 = r2.sublist(r3, r10);
            var r12 = new WyJS.List([r11], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
            var r13 = r4.append(r12);
            r4 = r13.clone();//assign %4 = %13  : [[int]]
            var r14 = new WyJS.Integer(1);
            var r15 = r5.add(r14);//add %15 = %5, %14 : int
            var r5 = r15;//assign %5 = %15  : int
            var r16 = r3.add(r0);//add %16 = %3, %0 : int
            var r3 = r16;//assign %3 = %16  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 4:
            var r17 = Matrix$b9fFaWP8c0$k$$B$F2$U0FQ$35$o0VR$Z5$sO$o3$W0$S$76$d0$TFc_V5$$2$k$$C$w4$h0FN$F6$m0FP$Vr$VQ$35$ollcklkRW2(r0, r1, r4);//invoke %17 = (%0, %1, %4) 004_matrix:Matrix : function(004_matrix:nat,004_matrix:nat,[[int]]) -> 004_matrix:Matrix
            return r17;//return %17 : {[[int]] data,int height,int width}
      }
   }
}

function Matrix$b9fFaWP8c0$k$$B$F2$U0FQ$35$o0VR$Z5$sO$o3$W0$S$76$d0$TFc_V5$$2$k$$C$w4$h0FN$F6$m0FP$Vr$VQ$35$ollcklkRW2(r0, r1, r2){//function(004_matrix:nat,004_matrix:nat,[[int]]) -> 004_matrix:Matrix
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = new WyJS.Record(["data", "height", "width"], [r2, r1, r0], new WyJS.Type.Record(["data", "height", "width"], [new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())), new WyJS.Type.Int(), new WyJS.Type.Int()]));
            return r3;//return %3 : {[[int]] data,int height,int width}
      }
   }
}

function multiply$Y9dFXc_V5$$2$k$$C$w4$h0FN$F6$m0FP$Vb0FI$35$o0VR$Z5$s0WE(r0, r1){//function(004_matrix:Matrix,004_matrix:Matrix) -> 004_matrix:Matrix
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r9 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            r8 = r9.clone();//assign %8 = %9  : [void]
            r2 = r8.clone();//assign %2 = %8  : [[int]]
            var r11 = new WyJS.Integer(0);
            var r10 = r11;//assign %10 = %11  : int
            var r3 = r10;//assign %3 = %10  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case -3:
            var r12 = new WyJS.Integer(0);
            if(WyJS.gt(r3, r12, true)){
               control_flow_pc = 13;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 13:
            var r13 = r0.fieldLoad("height");//fieldload %13 = %0 height : {[[int]] data,int height,int width}
            if(WyJS.gt(r3, r13, true)){
               control_flow_pc = 14;
               control_flow_repeat = true;
               continue outer;
            }
            var r15 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            r14 = r15.clone();//assign %14 = %15  : [void]
            r4 = r14.clone();//assign %4 = %14  : [int]
            var r17 = new WyJS.Integer(0);
            var r16 = r17;//assign %16 = %17  : int
            var r5 = r16;//assign %5 = %16  : int
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
         case -4:
            var r18 = new WyJS.Integer(0);
            if(WyJS.gt(r5, r18, true)){
               control_flow_pc = 15;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 15:
            var r19 = r1.fieldLoad("width");//fieldload %19 = %1 width : {[[int]] data,int height,int width}
            if(WyJS.gt(r5, r19, true)){
               control_flow_pc = 16;
               control_flow_repeat = true;
               continue outer;
            }
            var r21 = new WyJS.Integer(0);
            var r20 = r21;//assign %20 = %21  : int
            var r6 = r20;//assign %6 = %20  : int
            var r23 = new WyJS.Integer(0);
            var r22 = r23;//assign %22 = %23  : int
            var r7 = r22;//assign %7 = %22  : int
            control_flow_pc = -5;
            control_flow_repeat = true;
            break;
         case -5:
            var r24 = new WyJS.Integer(0);
            if(WyJS.gt(r7, r24, true)){
               control_flow_pc = 17;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 17:
            var r25 = r0.fieldLoad("width");//fieldload %25 = %0 width : {[[int]] data,int height,int width}
            if(WyJS.gt(r7, r25, true)){
               control_flow_pc = 18;
               control_flow_repeat = true;
               continue outer;
            }
            var r26 = r0.fieldLoad("data");//fieldload %26 = %0 data : {[[int]] data,int height,int width}
            var r27 = r26.getValue(r3);
            var r28 = r27.getValue(r7);
            var r29 = r1.fieldLoad("data");//fieldload %29 = %1 data : {[[int]] data,int height,int width}
            var r30 = r29.getValue(r7);
            var r31 = r30.getValue(r5);
            var r32 = r28.mul(r31);//mul %32 = %28, %31 : int
            var r33 = r6.add(r32);//add %33 = %6, %32 : int
            var r6 = r33;//assign %6 = %33  : int
            var r34 = new WyJS.Integer(1);
            var r35 = r7.add(r34);//add %35 = %7, %34 : int
            var r7 = r35;//assign %7 = %35  : int
            control_flow_pc = -5;
            control_flow_repeat = true;
            break;
            control_flow_pc = 18;
            control_flow_repeat = true;
            break;
         case 18:
            var r36 = new WyJS.List([r6], new WyJS.Type.List(new WyJS.Type.Int()));
            var r37 = r4.append(r36);
            r4 = r37.clone();//assign %4 = %37  : [int]
            var r38 = new WyJS.Integer(1);
            var r39 = r5.add(r38);//add %39 = %5, %38 : int
            var r5 = r39;//assign %5 = %39  : int
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
            control_flow_pc = 16;
            control_flow_repeat = true;
            break;
         case 16:
            var r40 = new WyJS.List([r4], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
            var r41 = r2.append(r40);
            r2 = r41.clone();//assign %2 = %41  : [[int]]
            var r42 = new WyJS.Integer(1);
            var r43 = r3.add(r42);//add %43 = %3, %42 : int
            var r3 = r43;//assign %3 = %43  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case 14:
            var r45 = r1.fieldLoad("width");//fieldload %45 = %1 width : {[[int]] data,int height,int width}
            var r46 = r0.fieldLoad("height");//fieldload %46 = %0 height : {[[int]] data,int height,int width}
            var r44 = Matrix$b9fFaWP8c0$k$$B$F2$U0FQ$35$o0VR$Z5$sO$o3$W0$S$76$d0$TFc_V5$$2$k$$C$w4$h0FN$F6$m0FP$Vr$VQ$35$ollcklkRW2(r45, r46, r2);//invoke %44 = (%45, %46, %2) 004_matrix:Matrix : function(004_matrix:nat,004_matrix:nat,[[int]]) -> 004_matrix:Matrix
            return r44;//return %44 : {[[int]] data,int height,int width}
      }
   }
}

function test$X9_7VkE(){//function() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(10);
            var r5 = new WyJS.Integer(10);
            var r6 = new WyJS.Integer(99);
            var r7 = new WyJS.Integer(33);
            var r8 = new WyJS.Integer(22);
            var r9 = new WyJS.Integer(87);
            var r10 = new WyJS.Integer(51);
            var r11 = new WyJS.Integer(34);
            var r12 = new WyJS.Integer(71);
            var r13 = new WyJS.Integer(71);
            var r14 = new WyJS.Integer(73);
            var r15 = new WyJS.Integer(28);
            var r16 = new WyJS.Integer(78);
            var r17 = new WyJS.Integer(52);
            var r18 = new WyJS.Integer(43);
            var r19 = new WyJS.Integer(45);
            var r20 = new WyJS.Integer(90);
            var r21 = new WyJS.Integer(69);
            var r22 = new WyJS.Integer(52);
            var r23 = new WyJS.Integer(8);
            var r24 = new WyJS.Integer(3);
            var r25 = new WyJS.Integer(66);
            var r26 = new WyJS.Integer(78);
            var r27 = new WyJS.Integer(0);
            var r28 = new WyJS.Integer(89);
            var r29 = new WyJS.Integer(51);
            var r30 = new WyJS.Integer(10);
            var r31 = new WyJS.Integer(0);
            var r32 = new WyJS.Integer(82);
            var r33 = new WyJS.Integer(41);
            var r34 = new WyJS.Integer(72);
            var r35 = new WyJS.Integer(33);
            var r36 = new WyJS.Integer(39);
            var r37 = new WyJS.Integer(15);
            var r38 = new WyJS.Integer(87);
            var r39 = new WyJS.Integer(76);
            var r40 = new WyJS.Integer(68);
            var r41 = new WyJS.Integer(0);
            var r42 = new WyJS.Integer(58);
            var r43 = new WyJS.Integer(17);
            var r44 = new WyJS.Integer(72);
            var r45 = new WyJS.Integer(44);
            var r46 = new WyJS.Integer(28);
            var r47 = new WyJS.Integer(41);
            var r48 = new WyJS.Integer(97);
            var r49 = new WyJS.Integer(78);
            var r50 = new WyJS.Integer(84);
            var r51 = new WyJS.Integer(49);
            var r52 = new WyJS.Integer(38);
            var r53 = new WyJS.Integer(17);
            var r54 = new WyJS.Integer(74);
            var r55 = new WyJS.Integer(82);
            var r56 = new WyJS.Integer(50);
            var r57 = new WyJS.Integer(54);
            var r58 = new WyJS.Integer(31);
            var r59 = new WyJS.Integer(38);
            var r60 = new WyJS.Integer(86);
            var r61 = new WyJS.Integer(38);
            var r62 = new WyJS.Integer(42);
            var r63 = new WyJS.Integer(98);
            var r64 = new WyJS.Integer(16);
            var r65 = new WyJS.Integer(20);
            var r66 = new WyJS.Integer(61);
            var r67 = new WyJS.Integer(94);
            var r68 = new WyJS.Integer(2);
            var r69 = new WyJS.Integer(53);
            var r70 = new WyJS.Integer(33);
            var r71 = new WyJS.Integer(68);
            var r72 = new WyJS.Integer(38);
            var r73 = new WyJS.Integer(21);
            var r74 = new WyJS.Integer(85);
            var r75 = new WyJS.Integer(26);
            var r76 = new WyJS.Integer(45);
            var r77 = new WyJS.Integer(51);
            var r78 = new WyJS.Integer(52);
            var r79 = new WyJS.Integer(45);
            var r80 = new WyJS.Integer(58);
            var r81 = new WyJS.Integer(28);
            var r82 = new WyJS.Integer(10);
            var r83 = new WyJS.Integer(97);
            var r84 = new WyJS.Integer(56);
            var r85 = new WyJS.Integer(88);
            var r86 = new WyJS.Integer(44);
            var r87 = new WyJS.Integer(72);
            var r88 = new WyJS.Integer(84);
            var r89 = new WyJS.Integer(39);
            var r90 = new WyJS.Integer(18);
            var r91 = new WyJS.Integer(15);
            var r92 = new WyJS.Integer(26);
            var r93 = new WyJS.Integer(60);
            var r94 = new WyJS.Integer(70);
            var r95 = new WyJS.Integer(53);
            var r96 = new WyJS.Integer(45);
            var r97 = new WyJS.Integer(4);
            var r98 = new WyJS.Integer(74);
            var r99 = new WyJS.Integer(22);
            var r100 = new WyJS.Integer(52);
            var r101 = new WyJS.Integer(17);
            var r102 = new WyJS.Integer(67);
            var r103 = new WyJS.Integer(33);
            var r104 = new WyJS.Integer(13);
            var r105 = new WyJS.Integer(24);
            var r106 = new WyJS.List([r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, r21, r22, r23, r24, r25, r26, r27, r28, r29, r30, r31, r32, r33, r34, r35, r36, r37, r38, r39, r40, r41, r42, r43, r44, r45, r46, r47, r48, r49, r50, r51, r52, r53, r54, r55, r56, r57, r58, r59, r60, r61, r62, r63, r64, r65, r66, r67, r68, r69, r70, r71, r72, r73, r74, r75, r76, r77, r78, r79, r80, r81, r82, r83, r84, r85, r86, r87, r88, r89, r90, r91, r92, r93, r94, r95, r96, r97, r98, r99, r100, r101, r102, r103, r104, r105], new WyJS.Type.List(new WyJS.Type.Int()));
            var r107 = new WyJS.Integer(2);
            var r3 = buildMatrix$a9hFaWeL1P$$B$$2$o$kM$o5$W0$S$76$d0$T5$C0FN$F6$m0FP$V63P8c0$k$$B$F2$U0FQ$35$o0VR$Z5$sC$s5$W0$SRB9M7(r4, r5, r106, r107);//invoke %3 = (%4, %5, %106, %107) 004_matrix:buildMatrix : function(004_matrix:nat,004_matrix:nat,[int],int) -> 004_matrix:Matrix
            var r109 = new WyJS.Integer(10);
            var r110 = new WyJS.Integer(10);
            var r111 = new WyJS.Integer(72);
            var r112 = new WyJS.Integer(37);
            var r113 = new WyJS.Integer(33);
            var r114 = new WyJS.Integer(15);
            var r115 = new WyJS.Integer(90);
            var r116 = new WyJS.Integer(73);
            var r117 = new WyJS.Integer(1);
            var r118 = new WyJS.Integer(80);
            var r119 = new WyJS.Integer(55);
            var r120 = new WyJS.Integer(61);
            var r121 = new WyJS.Integer(51);
            var r122 = new WyJS.Integer(13);
            var r123 = new WyJS.Integer(15);
            var r124 = new WyJS.Integer(17);
            var r125 = new WyJS.Integer(70);
            var r126 = new WyJS.Integer(75);
            var r127 = new WyJS.Integer(91);
            var r128 = new WyJS.Integer(39);
            var r129 = new WyJS.Integer(72);
            var r130 = new WyJS.Integer(92);
            var r131 = new WyJS.Integer(41);
            var r132 = new WyJS.Integer(86);
            var r133 = new WyJS.Integer(8);
            var r134 = new WyJS.Integer(5);
            var r135 = new WyJS.Integer(69);
            var r136 = new WyJS.Integer(50);
            var r137 = new WyJS.Integer(45);
            var r138 = new WyJS.Integer(39);
            var r139 = new WyJS.Integer(48);
            var r140 = new WyJS.Integer(51);
            var r141 = new WyJS.Integer(56);
            var r142 = new WyJS.Integer(97);
            var r143 = new WyJS.Integer(53);
            var r144 = new WyJS.Integer(59);
            var r145 = new WyJS.Integer(79);
            var r146 = new WyJS.Integer(23);
            var r147 = new WyJS.Integer(73);
            var r148 = new WyJS.Integer(67);
            var r149 = new WyJS.Integer(94);
            var r150 = new WyJS.Integer(70);
            var r151 = new WyJS.Integer(15);
            var r152 = new WyJS.Integer(62);
            var r153 = new WyJS.Integer(53);
            var r154 = new WyJS.Integer(64);
            var r155 = new WyJS.Integer(24);
            var r156 = new WyJS.Integer(78);
            var r157 = new WyJS.Integer(19);
            var r158 = new WyJS.Integer(3);
            var r159 = new WyJS.Integer(26);
            var r160 = new WyJS.Integer(0);
            var r161 = new WyJS.Integer(51);
            var r162 = new WyJS.Integer(62);
            var r163 = new WyJS.Integer(38);
            var r164 = new WyJS.Integer(9);
            var r165 = new WyJS.Integer(75);
            var r166 = new WyJS.Integer(37);
            var r167 = new WyJS.Integer(84);
            var r168 = new WyJS.Integer(28);
            var r169 = new WyJS.Integer(55);
            var r170 = new WyJS.Integer(42);
            var r171 = new WyJS.Integer(60);
            var r172 = new WyJS.Integer(19);
            var r173 = new WyJS.Integer(20);
            var r174 = new WyJS.Integer(24);
            var r175 = new WyJS.Integer(98);
            var r176 = new WyJS.Integer(60);
            var r177 = new WyJS.Integer(34);
            var r178 = new WyJS.Integer(33);
            var r179 = new WyJS.Integer(97);
            var r180 = new WyJS.Integer(72);
            var r181 = new WyJS.Integer(25);
            var r182 = new WyJS.Integer(8);
            var r183 = new WyJS.Integer(69);
            var r184 = new WyJS.Integer(34);
            var r185 = new WyJS.Integer(96);
            var r186 = new WyJS.Integer(91);
            var r187 = new WyJS.Integer(59);
            var r188 = new WyJS.Integer(62);
            var r189 = new WyJS.Integer(60);
            var r190 = new WyJS.Integer(2);
            var r191 = new WyJS.Integer(28);
            var r192 = new WyJS.Integer(60);
            var r193 = new WyJS.Integer(14);
            var r194 = new WyJS.Integer(15);
            var r195 = new WyJS.Integer(22);
            var r196 = new WyJS.Integer(84);
            var r197 = new WyJS.Integer(6);
            var r198 = new WyJS.Integer(94);
            var r199 = new WyJS.Integer(25);
            var r200 = new WyJS.Integer(47);
            var r201 = new WyJS.Integer(27);
            var r202 = new WyJS.Integer(41);
            var r203 = new WyJS.Integer(43);
            var r204 = new WyJS.Integer(45);
            var r205 = new WyJS.Integer(85);
            var r206 = new WyJS.Integer(96);
            var r207 = new WyJS.Integer(78);
            var r208 = new WyJS.Integer(27);
            var r209 = new WyJS.Integer(72);
            var r210 = new WyJS.Integer(1);
            var r211 = new WyJS.List([r111, r112, r113, r114, r115, r116, r117, r118, r119, r120, r121, r122, r123, r124, r125, r126, r127, r128, r129, r130, r131, r132, r133, r134, r135, r136, r137, r138, r139, r140, r141, r142, r143, r144, r145, r146, r147, r148, r149, r150, r151, r152, r153, r154, r155, r156, r157, r158, r159, r160, r161, r162, r163, r164, r165, r166, r167, r168, r169, r170, r171, r172, r173, r174, r175, r176, r177, r178, r179, r180, r181, r182, r183, r184, r185, r186, r187, r188, r189, r190, r191, r192, r193, r194, r195, r196, r197, r198, r199, r200, r201, r202, r203, r204, r205, r206, r207, r208, r209, r210], new WyJS.Type.List(new WyJS.Type.Int()));
            var r212 = new WyJS.Integer(2);
            var r213 = new WyJS.Integer(10);
            var r214 = new WyJS.Integer(10);
            var r215 = r213.mul(r214);//mul %215 = %213, %214 : int
            var r216 = r212.add(r215);//add %216 = %212, %215 : int
            var r108 = buildMatrix$a9hFaWeL1P$$B$$2$o$kM$o5$W0$S$76$d0$T5$C0FN$F6$m0FP$V63P8c0$k$$B$F2$U0FQ$35$o0VR$Z5$sC$s5$W0$SRB9M7(r109, r110, r211, r216);//invoke %108 = (%109, %110, %211, %216) 004_matrix:buildMatrix : function(004_matrix:nat,004_matrix:nat,[int],int) -> 004_matrix:Matrix
            var r2 = multiply$Y9dFXc_V5$$2$k$$C$w4$h0FN$F6$m0FP$Vb0FI$35$o0VR$Z5$s0WE(r3, r108);//invoke %2 = (%3, %108) 004_matrix:multiply : function(004_matrix:Matrix,004_matrix:Matrix) -> 004_matrix:Matrix
            var r1 = r2;//assign %1 = %2  : {[[int]] data,int height,int width}
            var r0 = r1;//assign %0 = %1  : {[[int]] data,int height,int width}
      }
   }
}

