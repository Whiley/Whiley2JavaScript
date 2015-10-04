function sort$_9fF5XP8F$o3$W0FP$sa5$B6$j0VR$F6$_0$O$k3$d0kR$F63sNFikE(r0, r1, r2){//function(int[],int,int) -> Main:sortedList
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r9 = new WyJS.Integer(1);
            var r10 = r1.add(r9);//add %10 = %1, %9 : int
            if(WyJS.gt(r10, r2, true)){
               control_flow_pc = 2;
               control_flow_repeat = true;
               continue outer;
            }
            var r12 = r2.add(r1);//add %12 = %2, %1 : int
            var r13 = new WyJS.Integer(2);
            var r14 = r12.div(r13);//div %14 = %12, %13 : int
            var r11 = r14;//assign %11 = %14  : int
            var r3 = r11;//assign %3 = %11  : int
            var r16 = sort$_9fF5XP8F$o3$W0FP$sa5$B6$j0VR$F6$_0$O$k3$d0kR$F63sNFikE(r0, r1, r3);//invoke %16 = (%0, %1, %3) Main:sort : function(int[],int,int) -> Main:sortedList
            var r15 = r16.clone(new WyJS.Type.Int());//assign %15 = %16  : int[]
            var r4 = r15.clone(new WyJS.Type.Int());//assign %4 = %15  : int[]
            var r18 = sort$_9fF5XP8F$o3$W0FP$sa5$B6$j0VR$F6$_0$O$k3$d0kR$F63sNFikE(r0, r3, r2);//invoke %18 = (%0, %3, %2) Main:sort : function(int[],int,int) -> Main:sortedList
            var r17 = r18.clone(new WyJS.Type.Int());//assign %17 = %18  : int[]
            var r5 = r17.clone(new WyJS.Type.Int());//assign %5 = %17  : int[]
            var r20 = new WyJS.Tuple([r1, r3, r1], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r19 = r20;//assign %19 = %20  : (int,int,int)
            var r21 = r19.tupleLoad(0);
            var r6 = r21;//assign %6 = %21  : int
            var r22 = r19.tupleLoad(1);
            var r7 = r22;//assign %7 = %22  : int
            var r23 = r19.tupleLoad(2);
            var r8 = r23;//assign %8 = %23  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            if(WyJS.gt(r8, r2, true)){
               control_flow_pc = 5;
               control_flow_repeat = true;
               continue outer;
            }
            if(WyJS.gt(r6, r3, true)){
               control_flow_pc = 5;
               control_flow_repeat = true;
               continue outer;
            }
            if(WyJS.gt(r7, r2, true)){
               control_flow_pc = 5;
               control_flow_repeat = true;
               continue outer;
            }
            var r27 = r4.getValue(r6);
            var r28 = r5.getValue(r7);
            if(WyJS.gt(r27, r28, false)){
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
            var r29 = r4.getValue(r6);
            var r30 = r4.getValue(r6);
            r0.setValue(r8, r30);
            var r31 = new WyJS.Integer(1);
            var r32 = r6.add(r31);//add %32 = %6, %31 : int
            var r6 = r32;//assign %6 = %32  : int
            control_flow_pc = 7;
            control_flow_repeat = true;
            continue outer;//goto label7
            control_flow_pc = 7;
            control_flow_repeat = true;
            break;
         case 6:
            var r33 = r5.getValue(r7);
            var r34 = r5.getValue(r7);
            r0.setValue(r8, r34);
            var r35 = new WyJS.Integer(1);
            var r36 = r7.add(r35);//add %36 = %7, %35 : int
            var r7 = r36;//assign %7 = %36  : int
            control_flow_pc = 7;
            control_flow_repeat = true;
            break;
         case 7:
            var r37 = new WyJS.Integer(1);
            var r38 = r8.add(r37);//add %38 = %8, %37 : int
            var r8 = r38;//assign %8 = %38  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 5:
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
         case -4:
            if(WyJS.gt(r6, r3, true)){
               control_flow_pc = 8;
               control_flow_repeat = true;
               continue outer;
            }
            var r39 = r4.getValue(r6);
            var r40 = r4.getValue(r6);
            r0.setValue(r8, r40);
            var r41 = new WyJS.Integer(1);
            var r42 = r8.add(r41);//add %42 = %8, %41 : int
            var r8 = r42;//assign %8 = %42  : int
            var r43 = new WyJS.Integer(1);
            var r44 = r6.add(r43);//add %44 = %6, %43 : int
            var r6 = r44;//assign %6 = %44  : int
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
         case 8:
            control_flow_pc = -5;
            control_flow_repeat = true;
            break;
         case -5:
            if(WyJS.gt(r7, r2, true)){
               control_flow_pc = 2;
               control_flow_repeat = true;
               continue outer;
            }
            var r45 = r5.getValue(r7);
            var r46 = r5.getValue(r7);
            r0.setValue(r8, r46);
            var r47 = new WyJS.Integer(1);
            var r48 = r8.add(r47);//add %48 = %8, %47 : int
            var r8 = r48;//assign %8 = %48  : int
            var r49 = new WyJS.Integer(1);
            var r50 = r7.add(r49);//add %50 = %7, %49 : int
            var r7 = r50;//assign %7 = %50  : int
            control_flow_pc = -5;
            control_flow_repeat = true;
            break;
         case 2:
            return r0;//return %0 : int[]
            return;
      }
   }
}

function search$a9dF5141KFc_$0FI$35$d0VQP$kR$w5$m0$S$J5$Z0$I$Z5$n0$SMN1z(r0, r1){//function(Main:sortedList,int) -> int|null
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
            var r9 = r0.length();//lengthof %9 = %0 : int[]
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