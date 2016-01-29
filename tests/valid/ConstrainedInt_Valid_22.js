function inc$Y9bFXL1j$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$80VQ$F6$U0VK$35$g0FP$F5$U0VB$720FP$F6$_0FQF7(r0){//function(ConstrainedInt_Valid_22:item) -> ConstrainedInt_Valid_22:item
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(1);
            var r2 = r0.add(r1);//add %2 = %0, %1 : int
            var r3 = new WyJS.Integer(7);
            var r4 = r2.rem(r3);//rem %4 = %2, %3 : int
            return r4;//return %4 : int
            return;
      }
   }
}

function get$4AdF5XY001h3T0VW$sC$R2Vt$VD$Z2Vk$7C$R2Vm$VB$H1$r$VD$y1$f$7B$N2Vo$VB$y1$O$F51Vo$VD$92Vqik(r0, r1){//method(ConstrainedInt_Valid_22:item,int) -> int[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(0);
            if(WyJS.lt(r1, r2, true)){
               control_flow_pc = 1311;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = inc$Y9bFXL1j$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$80VQ$F6$U0VK$35$g0FP$F5$U0VB$720FP$F6$_0FQF7(r0);//invoke %4 = (%0) ConstrainedInt_Valid_22:inc : function(ConstrainedInt_Valid_22:item) -> ConstrainedInt_Valid_22:item
            var r5 = new WyJS.Integer(1);
            var r6 = r1.sub(r5);//sub %6 = %1, %5 : int
            var r3 = get$4AdF5XY001h3T0VW$sC$R2Vt$VD$Z2Vk$7C$R2Vm$VB$H1$r$VD$y1$f$7B$N2Vo$VB$y1$O$F51Vo$VD$92Vqik(r4, r6);//invoke %3 = (%4, %6) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> int[]
            return r3;//return %3 : int[]
            control_flow_pc = 1312;
            control_flow_repeat = true;
            continue outer;//goto label1312
         case 1311:
            var r7 = new WyJS.Array([new WyJS.Array([new WyJS.Integer(77), new WyJS.Integer(111), new WyJS.Integer(110), new WyJS.Integer(100), new WyJS.Integer(97), new WyJS.Integer(121)], new WyJS.Type.Array(new WyJS.Type.Int())), new WyJS.Array([new WyJS.Integer(84), new WyJS.Integer(117), new WyJS.Integer(101), new WyJS.Integer(115), new WyJS.Integer(100), new WyJS.Integer(97), new WyJS.Integer(121)], new WyJS.Type.Array(new WyJS.Type.Int())), new WyJS.Array([new WyJS.Integer(87), new WyJS.Integer(101), new WyJS.Integer(100), new WyJS.Integer(110), new WyJS.Integer(101), new WyJS.Integer(115), new WyJS.Integer(100), new WyJS.Integer(97), new WyJS.Integer(121)], new WyJS.Type.Array(new WyJS.Type.Int())), new WyJS.Array([new WyJS.Integer(84), new WyJS.Integer(104), new WyJS.Integer(117), new WyJS.Integer(114), new WyJS.Integer(115), new WyJS.Integer(100), new WyJS.Integer(97), new WyJS.Integer(121)], new WyJS.Type.Array(new WyJS.Type.Int())), new WyJS.Array([new WyJS.Integer(70), new WyJS.Integer(114), new WyJS.Integer(105), new WyJS.Integer(100), new WyJS.Integer(97), new WyJS.Integer(121)], new WyJS.Type.Array(new WyJS.Type.Int())), new WyJS.Array([new WyJS.Integer(83), new WyJS.Integer(97), new WyJS.Integer(116), new WyJS.Integer(117), new WyJS.Integer(114), new WyJS.Integer(100), new WyJS.Integer(97), new WyJS.Integer(121)], new WyJS.Type.Array(new WyJS.Type.Int())), new WyJS.Array([new WyJS.Integer(83), new WyJS.Integer(117), new WyJS.Integer(110), new WyJS.Integer(100), new WyJS.Integer(97), new WyJS.Integer(121)], new WyJS.Type.Array(new WyJS.Type.Int()))], new WyJS.Type.Array(new WyJS.Type.Array(new WyJS.Type.Int())));
            var r8 = r7.getValue(r0);
            return r8;//return %8 : int[]
         case 1312:
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
            var r1 = new WyJS.Integer(0);
            var r2 = new WyJS.Integer(0);
            var r0 = get$4AdF5XY001h3T0VW$sC$R2Vt$VD$Z2Vk$7C$R2Vm$VB$H1$r$VD$y1$f$7B$N2Vo$VB$y1$O$F51Vo$VD$92Vqik(r1, r2);//invoke %0 = (%1, %2) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> int[]
            var r3 = new WyJS.Array([new WyJS.Integer(77), new WyJS.Integer(111), new WyJS.Integer(110), new WyJS.Integer(100), new WyJS.Integer(97), new WyJS.Integer(121)], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 1313;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1313:
            var r5 = new WyJS.Integer(0);
            var r6 = new WyJS.Integer(1);
            var r4 = get$4AdF5XY001h3T0VW$sC$R2Vt$VD$Z2Vk$7C$R2Vm$VB$H1$r$VD$y1$f$7B$N2Vo$VB$y1$O$F51Vo$VD$92Vqik(r5, r6);//invoke %4 = (%5, %6) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> int[]
            var r7 = new WyJS.Array([new WyJS.Integer(84), new WyJS.Integer(117), new WyJS.Integer(101), new WyJS.Integer(115), new WyJS.Integer(100), new WyJS.Integer(97), new WyJS.Integer(121)], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r4, r7, true)){
               control_flow_pc = 1314;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1314:
            var r9 = new WyJS.Integer(0);
            var r10 = new WyJS.Integer(2);
            var r8 = get$4AdF5XY001h3T0VW$sC$R2Vt$VD$Z2Vk$7C$R2Vm$VB$H1$r$VD$y1$f$7B$N2Vo$VB$y1$O$F51Vo$VD$92Vqik(r9, r10);//invoke %8 = (%9, %10) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> int[]
            var r11 = new WyJS.Array([new WyJS.Integer(87), new WyJS.Integer(101), new WyJS.Integer(100), new WyJS.Integer(110), new WyJS.Integer(101), new WyJS.Integer(115), new WyJS.Integer(100), new WyJS.Integer(97), new WyJS.Integer(121)], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r8, r11, true)){
               control_flow_pc = 1315;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1315:
            var r13 = new WyJS.Integer(0);
            var r14 = new WyJS.Integer(3);
            var r12 = get$4AdF5XY001h3T0VW$sC$R2Vt$VD$Z2Vk$7C$R2Vm$VB$H1$r$VD$y1$f$7B$N2Vo$VB$y1$O$F51Vo$VD$92Vqik(r13, r14);//invoke %12 = (%13, %14) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> int[]
            var r15 = new WyJS.Array([new WyJS.Integer(84), new WyJS.Integer(104), new WyJS.Integer(117), new WyJS.Integer(114), new WyJS.Integer(115), new WyJS.Integer(100), new WyJS.Integer(97), new WyJS.Integer(121)], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r12, r15, true)){
               control_flow_pc = 1316;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1316:
            var r17 = new WyJS.Integer(0);
            var r18 = new WyJS.Integer(4);
            var r16 = get$4AdF5XY001h3T0VW$sC$R2Vt$VD$Z2Vk$7C$R2Vm$VB$H1$r$VD$y1$f$7B$N2Vo$VB$y1$O$F51Vo$VD$92Vqik(r17, r18);//invoke %16 = (%17, %18) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> int[]
            var r19 = new WyJS.Array([new WyJS.Integer(70), new WyJS.Integer(114), new WyJS.Integer(105), new WyJS.Integer(100), new WyJS.Integer(97), new WyJS.Integer(121)], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r16, r19, true)){
               control_flow_pc = 1317;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1317:
            var r21 = new WyJS.Integer(0);
            var r22 = new WyJS.Integer(5);
            var r20 = get$4AdF5XY001h3T0VW$sC$R2Vt$VD$Z2Vk$7C$R2Vm$VB$H1$r$VD$y1$f$7B$N2Vo$VB$y1$O$F51Vo$VD$92Vqik(r21, r22);//invoke %20 = (%21, %22) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> int[]
            var r23 = new WyJS.Array([new WyJS.Integer(83), new WyJS.Integer(97), new WyJS.Integer(116), new WyJS.Integer(117), new WyJS.Integer(114), new WyJS.Integer(100), new WyJS.Integer(97), new WyJS.Integer(121)], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r20, r23, true)){
               control_flow_pc = 1318;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1318:
            var r25 = new WyJS.Integer(0);
            var r26 = new WyJS.Integer(6);
            var r24 = get$4AdF5XY001h3T0VW$sC$R2Vt$VD$Z2Vk$7C$R2Vm$VB$H1$r$VD$y1$f$7B$N2Vo$VB$y1$O$F51Vo$VD$92Vqik(r25, r26);//invoke %24 = (%25, %26) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> int[]
            var r27 = new WyJS.Array([new WyJS.Integer(83), new WyJS.Integer(117), new WyJS.Integer(110), new WyJS.Integer(100), new WyJS.Integer(97), new WyJS.Integer(121)], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r24, r27, true)){
               control_flow_pc = 1319;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1319:
            var r29 = new WyJS.Integer(0);
            var r30 = new WyJS.Integer(7);
            var r28 = get$4AdF5XY001h3T0VW$sC$R2Vt$VD$Z2Vk$7C$R2Vm$VB$H1$r$VD$y1$f$7B$N2Vo$VB$y1$O$F51Vo$VD$92Vqik(r29, r30);//invoke %28 = (%29, %30) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> int[]
            var r31 = new WyJS.Array([new WyJS.Integer(77), new WyJS.Integer(111), new WyJS.Integer(110), new WyJS.Integer(100), new WyJS.Integer(97), new WyJS.Integer(121)], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r28, r31, true)){
               control_flow_pc = 1320;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1320:
            var r33 = new WyJS.Integer(0);
            var r34 = new WyJS.Integer(8);
            var r32 = get$4AdF5XY001h3T0VW$sC$R2Vt$VD$Z2Vk$7C$R2Vm$VB$H1$r$VD$y1$f$7B$N2Vo$VB$y1$O$F51Vo$VD$92Vqik(r33, r34);//invoke %32 = (%33, %34) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> int[]
            var r35 = new WyJS.Array([new WyJS.Integer(84), new WyJS.Integer(117), new WyJS.Integer(101), new WyJS.Integer(115), new WyJS.Integer(100), new WyJS.Integer(97), new WyJS.Integer(121)], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r32, r35, true)){
               control_flow_pc = 1321;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1321:
            var r37 = new WyJS.Integer(0);
            var r38 = new WyJS.Integer(9);
            var r36 = get$4AdF5XY001h3T0VW$sC$R2Vt$VD$Z2Vk$7C$R2Vm$VB$H1$r$VD$y1$f$7B$N2Vo$VB$y1$O$F51Vo$VD$92Vqik(r37, r38);//invoke %36 = (%37, %38) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> int[]
            var r39 = new WyJS.Array([new WyJS.Integer(87), new WyJS.Integer(101), new WyJS.Integer(100), new WyJS.Integer(110), new WyJS.Integer(101), new WyJS.Integer(115), new WyJS.Integer(100), new WyJS.Integer(97), new WyJS.Integer(121)], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r36, r39, true)){
               control_flow_pc = 1322;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1322:
            var r41 = new WyJS.Integer(0);
            var r42 = new WyJS.Integer(10);
            var r40 = get$4AdF5XY001h3T0VW$sC$R2Vt$VD$Z2Vk$7C$R2Vm$VB$H1$r$VD$y1$f$7B$N2Vo$VB$y1$O$F51Vo$VD$92Vqik(r41, r42);//invoke %40 = (%41, %42) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> int[]
            var r43 = new WyJS.Array([new WyJS.Integer(84), new WyJS.Integer(104), new WyJS.Integer(117), new WyJS.Integer(114), new WyJS.Integer(115), new WyJS.Integer(100), new WyJS.Integer(97), new WyJS.Integer(121)], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r40, r43, true)){
               control_flow_pc = 1323;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1323:
            var r45 = new WyJS.Integer(0);
            var r46 = new WyJS.Integer(11);
            var r44 = get$4AdF5XY001h3T0VW$sC$R2Vt$VD$Z2Vk$7C$R2Vm$VB$H1$r$VD$y1$f$7B$N2Vo$VB$y1$O$F51Vo$VD$92Vqik(r45, r46);//invoke %44 = (%45, %46) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> int[]
            var r47 = new WyJS.Array([new WyJS.Integer(70), new WyJS.Integer(114), new WyJS.Integer(105), new WyJS.Integer(100), new WyJS.Integer(97), new WyJS.Integer(121)], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r44, r47, true)){
               control_flow_pc = 1324;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1324:
            var r49 = new WyJS.Integer(0);
            var r50 = new WyJS.Integer(12);
            var r48 = get$4AdF5XY001h3T0VW$sC$R2Vt$VD$Z2Vk$7C$R2Vm$VB$H1$r$VD$y1$f$7B$N2Vo$VB$y1$O$F51Vo$VD$92Vqik(r49, r50);//invoke %48 = (%49, %50) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> int[]
            var r51 = new WyJS.Array([new WyJS.Integer(83), new WyJS.Integer(97), new WyJS.Integer(116), new WyJS.Integer(117), new WyJS.Integer(114), new WyJS.Integer(100), new WyJS.Integer(97), new WyJS.Integer(121)], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r48, r51, true)){
               control_flow_pc = 1325;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1325:
            var r53 = new WyJS.Integer(0);
            var r54 = new WyJS.Integer(13);
            var r52 = get$4AdF5XY001h3T0VW$sC$R2Vt$VD$Z2Vk$7C$R2Vm$VB$H1$r$VD$y1$f$7B$N2Vo$VB$y1$O$F51Vo$VD$92Vqik(r53, r54);//invoke %52 = (%53, %54) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> int[]
            var r55 = new WyJS.Array([new WyJS.Integer(83), new WyJS.Integer(117), new WyJS.Integer(110), new WyJS.Integer(100), new WyJS.Integer(97), new WyJS.Integer(121)], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r52, r55, true)){
               control_flow_pc = 1326;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1326:
            var r57 = new WyJS.Integer(0);
            var r58 = new WyJS.Integer(14);
            var r56 = get$4AdF5XY001h3T0VW$sC$R2Vt$VD$Z2Vk$7C$R2Vm$VB$H1$r$VD$y1$f$7B$N2Vo$VB$y1$O$F51Vo$VD$92Vqik(r57, r58);//invoke %56 = (%57, %58) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> int[]
            var r59 = new WyJS.Array([new WyJS.Integer(77), new WyJS.Integer(111), new WyJS.Integer(110), new WyJS.Integer(100), new WyJS.Integer(97), new WyJS.Integer(121)], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r56, r59, true)){
               control_flow_pc = 1327;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1327:
            var r61 = new WyJS.Integer(0);
            var r62 = new WyJS.Integer(15);
            var r60 = get$4AdF5XY001h3T0VW$sC$R2Vt$VD$Z2Vk$7C$R2Vm$VB$H1$r$VD$y1$f$7B$N2Vo$VB$y1$O$F51Vo$VD$92Vqik(r61, r62);//invoke %60 = (%61, %62) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> int[]
            var r63 = new WyJS.Array([new WyJS.Integer(84), new WyJS.Integer(117), new WyJS.Integer(101), new WyJS.Integer(115), new WyJS.Integer(100), new WyJS.Integer(97), new WyJS.Integer(121)], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r60, r63, true)){
               control_flow_pc = 1328;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1328:
            return;
      }
   }
}

