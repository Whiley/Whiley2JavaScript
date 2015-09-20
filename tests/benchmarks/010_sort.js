function sort$_9bFaL1N$$B$32$k$kM$B6$j0VR$Fb5$B6$j0VR$F6$_0$O$k3$d0kR$F63sNFik(r0){//function([int]) -> 010_sort:sortedList
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r7 = r0.length();//lengthof %7 = %0 : [int]
            var r8 = new WyJS.Integer(1);
            if(WyJS.lt(r7, r8, true)){
               control_flow_pc = 2;
               control_flow_repeat = true;
               continue outer;
            }
            var r10 = r0.length();//lengthof %10 = %0 : [int]
            var r11 = new WyJS.Integer(2);
            var r12 = r10.div(r11);//div %12 = %10, %11 : int
            var r9 = r12;//assign %9 = %12  : int
            var r1 = r9;//assign %1 = %9  : int
            var r15 = new WyJS.Integer(0);
            var r16 = r0.sublist(r15, r1);
            var r14 = sort$_9bFaL1N$$B$32$k$kM$B6$j0VR$Fb5$B6$j0VR$F6$_0$O$k3$d0kR$F63sNFik(r16);//invoke %14 = (%16) 010_sort:sort : function([int]) -> 010_sort:sortedList
            var r13 = r14.clone(new WyJS.Type.Int());//assign %13 = %14  : [int]
            var r2 = r13.clone(new WyJS.Type.Int());//assign %2 = %13  : [int]
            var r19 = r0.length();//lengthof %19 = %0 : [int]
            var r20 = r0.sublist(r1, r19);
            var r18 = sort$_9bFaL1N$$B$32$k$kM$B6$j0VR$Fb5$B6$j0VR$F6$_0$O$k3$d0kR$F63sNFik(r20);//invoke %18 = (%20) 010_sort:sort : function([int]) -> 010_sort:sortedList
            var r17 = r18.clone(new WyJS.Type.Int());//assign %17 = %18  : [int]
            var r3 = r17.clone(new WyJS.Type.Int());//assign %3 = %17  : [int]
            var r22 = new WyJS.Integer(0);
            var r23 = new WyJS.Integer(0);
            var r24 = new WyJS.Integer(0);
            var r25 = new WyJS.Tuple([r22, r23, r24], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r21 = r25;//assign %21 = %25  : (int,int,int)
            var r26 = r21.tupleLoad(0);
            var r4 = r26;//assign %4 = %26  : int
            var r27 = r21.tupleLoad(1);
            var r5 = r27;//assign %5 = %27  : int
            var r28 = r21.tupleLoad(2);
            var r6 = r28;//assign %6 = %28  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r32 = r0.length();//lengthof %32 = %0 : [int]
            if(WyJS.gt(r6, r32, true)){
               control_flow_pc = 5;
               control_flow_repeat = true;
               continue outer;
            }
            var r33 = r2.length();//lengthof %33 = %2 : [int]
            if(WyJS.gt(r4, r33, true)){
               control_flow_pc = 5;
               control_flow_repeat = true;
               continue outer;
            }
            var r34 = r3.length();//lengthof %34 = %3 : [int]
            if(WyJS.gt(r5, r34, true)){
               control_flow_pc = 5;
               control_flow_repeat = true;
               continue outer;
            }
            var r35 = r2.getValue(r4);
            var r36 = r3.getValue(r5);
            if(WyJS.gt(r35, r36, false)){
               control_flow_pc = 6;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -3;
               control_flow_repeat = true;
               break;
            }
         case -3:
            var r37 = r2.getValue(r4);
            var r38 = r2.getValue(r4);
            r0.setValue(r6, r38);
            var r39 = new WyJS.Integer(1);
            var r40 = r4.add(r39);//add %40 = %4, %39 : int
            var r4 = r40;//assign %4 = %40  : int
            control_flow_pc = 7;
            control_flow_repeat = true;
            continue outer;//goto label7
            control_flow_pc = 7;
            control_flow_repeat = true;
            break;
         case 6:
            var r41 = r3.getValue(r5);
            var r42 = r3.getValue(r5);
            r0.setValue(r6, r42);
            var r43 = new WyJS.Integer(1);
            var r44 = r5.add(r43);//add %44 = %5, %43 : int
            var r5 = r44;//assign %5 = %44  : int
            control_flow_pc = 7;
            control_flow_repeat = true;
            break;
         case 7:
            var r45 = new WyJS.Integer(1);
            var r46 = r6.add(r45);//add %46 = %6, %45 : int
            var r6 = r46;//assign %6 = %46  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 5:
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
         case -4:
            var r47 = r2.length();//lengthof %47 = %2 : [int]
            if(WyJS.gt(r4, r47, true)){
               control_flow_pc = 8;
               control_flow_repeat = true;
               continue outer;
            }
            var r48 = r2.getValue(r4);
            var r49 = r2.getValue(r4);
            r0.setValue(r6, r49);
            var r50 = new WyJS.Integer(1);
            var r51 = r6.add(r50);//add %51 = %6, %50 : int
            var r6 = r51;//assign %6 = %51  : int
            var r52 = new WyJS.Integer(1);
            var r53 = r4.add(r52);//add %53 = %4, %52 : int
            var r4 = r53;//assign %4 = %53  : int
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
         case 8:
            control_flow_pc = -5;
            control_flow_repeat = true;
            break;
         case -5:
            var r54 = r3.length();//lengthof %54 = %3 : [int]
            if(WyJS.gt(r5, r54, true)){
               control_flow_pc = 2;
               control_flow_repeat = true;
               continue outer;
            }
            var r55 = r3.getValue(r5);
            var r56 = r3.getValue(r5);
            r0.setValue(r6, r56);
            var r57 = new WyJS.Integer(1);
            var r58 = r6.add(r57);//add %58 = %6, %57 : int
            var r6 = r58;//assign %6 = %58  : int
            var r59 = new WyJS.Integer(1);
            var r60 = r5.add(r59);//add %60 = %5, %59 : int
            var r5 = r60;//assign %5 = %60  : int
            control_flow_pc = -5;
            control_flow_repeat = true;
            break;
         case 2:
            return r0;//return %0 : [int]
            return;
      }
   }
}

function search$a9dF5141KFc_$5$$2$l$$B$w4$n0kQ$76$od0$n0kQ$76$o0FO$F5$B0FP$B6$oSW8B(r0, r1){//function(010_sort:sortedList,int) -> int|null
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r7 = new WyJS.Integer(0);
            var r6 = r7;//assign %6 = %7  : int
            var r2 = r6;//assign %2 = %6  : int
            var r9 = r0.length();//lengthof %9 = %0 : [int]
            var r8 = r9;//assign %8 = %9  : int
            var r3 = r8;//assign %3 = %8  : int
            control_flow_pc = -6;
            control_flow_repeat = true;
            break;
         case -6:
            if(WyJS.gt(r2, r3, true)){
               control_flow_pc = 9;
               control_flow_repeat = true;
               continue outer;
            }
            var r11 = r2.add(r3);//add %11 = %2, %3 : int
            var r12 = new WyJS.Integer(2);
            var r13 = r11.div(r12);//div %13 = %11, %12 : int
            var r10 = r13;//assign %10 = %13  : int
            var r4 = r10;//assign %4 = %10  : int
            var r15 = r0.getValue(r4);
            var r14 = r15;//assign %14 = %15  : int
            var r5 = r14;//assign %5 = %14  : int
            if(WyJS.equals(r5, r1, false)){
               control_flow_pc = 10;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -7;
               control_flow_repeat = true;
               break;
            }
         case -7:
            return r4;//return %4 : null|int
            control_flow_pc = 11;
            control_flow_repeat = true;
            continue outer;//goto label11
            control_flow_pc = 11;
            control_flow_repeat = true;
            break;
         case 10:
            if(WyJS.gt(r5, r1, true)){
               control_flow_pc = 12;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -8;
               control_flow_repeat = true;
               break;
            }
         case -8:
            var r16 = new WyJS.Integer(1);
            var r17 = r4.add(r16);//add %17 = %4, %16 : int
            var r2 = r17;//assign %2 = %17  : int
            control_flow_pc = 11;
            control_flow_repeat = true;
            continue outer;//goto label11
            control_flow_pc = 11;
            control_flow_repeat = true;
            break;
         case 12:
            var r3 = r4;//assign %3 = %4  : int
            control_flow_pc = 11;
            control_flow_repeat = true;
            break;
         case 11:
            control_flow_pc = -6;
            control_flow_repeat = true;
            break;
         case 9:
            var r18 = null;
            return r18;//return %18 : null|int
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
            var r1 = new WyJS.Integer(3);
            var r2 = new WyJS.Integer(2);
            var r3 = new WyJS.Integer(1);
            var r4 = new WyJS.List([r1, r2, r3], new WyJS.Type.List(new WyJS.Type.Int()));
            var r0 = sort$_9bFaL1N$$B$32$k$kM$B6$j0VR$Fb5$B6$j0VR$F6$_0$O$k3$d0kR$F63sNFik(r4);//invoke %0 = (%4) 010_sort:sort : function([int]) -> 010_sort:sortedList
            var r5 = new WyJS.Integer(1);
            var r6 = new WyJS.Integer(2);
            var r7 = new WyJS.Integer(3);
            var r8 = new WyJS.List([r5, r6, r7], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r8, true)){
               control_flow_pc = 13;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 13:
            var r10 = new WyJS.Integer(2);
            var r11 = new WyJS.Integer(24);
            var r12 = new WyJS.Integer(532);
            var r13 = new WyJS.Integer(53);
            var r14 = new WyJS.Integer(534);
            var r15 = new WyJS.Integer(5);
            var r16 = new WyJS.Integer(4365);
            var r17 = new WyJS.Integer(32);
            var r18 = new WyJS.Integer(3453);
            var r19 = new WyJS.List([r10, r11, r12, r13, r14, r15, r16, r17, r18], new WyJS.Type.List(new WyJS.Type.Int()));
            var r9 = sort$_9bFaL1N$$B$32$k$kM$B6$j0VR$Fb5$B6$j0VR$F6$_0$O$k3$d0kR$F63sNFik(r19);//invoke %9 = (%19) 010_sort:sort : function([int]) -> 010_sort:sortedList
            var r20 = new WyJS.Integer(2);
            var r21 = new WyJS.Integer(5);
            var r22 = new WyJS.Integer(24);
            var r23 = new WyJS.Integer(32);
            var r24 = new WyJS.Integer(53);
            var r25 = new WyJS.Integer(532);
            var r26 = new WyJS.Integer(534);
            var r27 = new WyJS.Integer(3453);
            var r28 = new WyJS.Integer(4365);
            var r29 = new WyJS.List([r20, r21, r22, r23, r24, r25, r26, r27, r28], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r9, r29, true)){
               control_flow_pc = 14;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 14:
            return;
      }
   }
}

