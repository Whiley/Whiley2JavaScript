function search$b9dF514HOFVY0t1Ic_V6$R4$c0FP$k5$_0kM$N4$W0$Q$Z5$Z0kM$72$qB$s5$W0$SE(r0, r1){//function(int[],int) -> null|While_Valid_26:nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(0);
            var r3 = r4;//assign %3 = %4  : int
            var r2 = r3;//assign %2 = %3  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r10 = r0.length();//lengthof %10 = %0 : int[]
            if(WyJS.gt(r2, r10, true)){
               control_flow_pc = 677;
               control_flow_repeat = true;
               continue outer;
            }
            var r11 = r0.getValue(r2);
            if(WyJS.equals(r11, r1, false)){
               control_flow_pc = 678;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -3;
               control_flow_repeat = true;
               break;
            }
         case -3:
            return r2;//return %2 : null|int
            control_flow_pc = 678;
            control_flow_repeat = true;
            break;
         case 678:
            var r12 = new WyJS.Integer(1);
            var r13 = r2.add(r12);//add %13 = %2, %12 : int
            var r2 = r13;//assign %2 = %13  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 677:
            var r14 = null;
            return r14;//return %14 : null|int
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
            var r2 = new WyJS.Integer(3);
            var r3 = new WyJS.Integer(5);
            var r4 = new WyJS.Integer(6);
            var r5 = new WyJS.Integer(9);
            var r6 = new WyJS.List([r2, r3, r4, r5], new WyJS.Type.List(new WyJS.Type.Int()));
            var r1 = r6.clone(new WyJS.Type.Int());//assign %1 = %6  : int[]
            var r0 = r1.clone(new WyJS.Type.Int());//assign %0 = %1  : int[]
            var r8 = new WyJS.Integer(0);
            var r7 = search$b9dF514HOFVY0t1Ic_V6$R4$c0FP$k5$_0kM$N4$W0$Q$Z5$Z0kM$72$qB$s5$W0$SE(r0, r8);//invoke %7 = (%0, %8) While_Valid_26:search : function(int[],int) -> null|While_Valid_26:nat
            var r9 = null;
            if(WyJS.equals(r7, r9, true)){
               control_flow_pc = 679;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 679:
            var r11 = new WyJS.Integer(1);
            var r10 = search$b9dF514HOFVY0t1Ic_V6$R4$c0FP$k5$_0kM$N4$W0$Q$Z5$Z0kM$72$qB$s5$W0$SE(r0, r11);//invoke %10 = (%0, %11) While_Valid_26:search : function(int[],int) -> null|While_Valid_26:nat
            var r12 = null;
            if(WyJS.equals(r10, r12, true)){
               control_flow_pc = 680;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 680:
            var r14 = new WyJS.Integer(2);
            var r13 = search$b9dF514HOFVY0t1Ic_V6$R4$c0FP$k5$_0kM$N4$W0$Q$Z5$Z0kM$72$qB$s5$W0$SE(r0, r14);//invoke %13 = (%0, %14) While_Valid_26:search : function(int[],int) -> null|While_Valid_26:nat
            var r15 = null;
            if(WyJS.equals(r13, r15, true)){
               control_flow_pc = 681;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 681:
            var r17 = new WyJS.Integer(3);
            var r16 = search$b9dF514HOFVY0t1Ic_V6$R4$c0FP$k5$_0kM$N4$W0$Q$Z5$Z0kM$72$qB$s5$W0$SE(r0, r17);//invoke %16 = (%0, %17) While_Valid_26:search : function(int[],int) -> null|While_Valid_26:nat
            var r18 = new WyJS.Integer(0);
            if(WyJS.equals(r16, r18, true)){
               control_flow_pc = 682;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 682:
            var r20 = new WyJS.Integer(4);
            var r19 = search$b9dF514HOFVY0t1Ic_V6$R4$c0FP$k5$_0kM$N4$W0$Q$Z5$Z0kM$72$qB$s5$W0$SE(r0, r20);//invoke %19 = (%0, %20) While_Valid_26:search : function(int[],int) -> null|While_Valid_26:nat
            var r21 = null;
            if(WyJS.equals(r19, r21, true)){
               control_flow_pc = 683;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 683:
            var r23 = new WyJS.Integer(5);
            var r22 = search$b9dF514HOFVY0t1Ic_V6$R4$c0FP$k5$_0kM$N4$W0$Q$Z5$Z0kM$72$qB$s5$W0$SE(r0, r23);//invoke %22 = (%0, %23) While_Valid_26:search : function(int[],int) -> null|While_Valid_26:nat
            var r24 = new WyJS.Integer(1);
            if(WyJS.equals(r22, r24, true)){
               control_flow_pc = 684;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 684:
            var r26 = new WyJS.Integer(6);
            var r25 = search$b9dF514HOFVY0t1Ic_V6$R4$c0FP$k5$_0kM$N4$W0$Q$Z5$Z0kM$72$qB$s5$W0$SE(r0, r26);//invoke %25 = (%0, %26) While_Valid_26:search : function(int[],int) -> null|While_Valid_26:nat
            var r27 = new WyJS.Integer(2);
            if(WyJS.equals(r25, r27, true)){
               control_flow_pc = 685;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 685:
            var r29 = new WyJS.Integer(7);
            var r28 = search$b9dF514HOFVY0t1Ic_V6$R4$c0FP$k5$_0kM$N4$W0$Q$Z5$Z0kM$72$qB$s5$W0$SE(r0, r29);//invoke %28 = (%0, %29) While_Valid_26:search : function(int[],int) -> null|While_Valid_26:nat
            var r30 = null;
            if(WyJS.equals(r28, r30, true)){
               control_flow_pc = 686;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 686:
            var r32 = new WyJS.Integer(8);
            var r31 = search$b9dF514HOFVY0t1Ic_V6$R4$c0FP$k5$_0kM$N4$W0$Q$Z5$Z0kM$72$qB$s5$W0$SE(r0, r32);//invoke %31 = (%0, %32) While_Valid_26:search : function(int[],int) -> null|While_Valid_26:nat
            var r33 = null;
            if(WyJS.equals(r31, r33, true)){
               control_flow_pc = 687;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 687:
            var r35 = new WyJS.Integer(9);
            var r34 = search$b9dF514HOFVY0t1Ic_V6$R4$c0FP$k5$_0kM$N4$W0$Q$Z5$Z0kM$72$qB$s5$W0$SE(r0, r35);//invoke %34 = (%0, %35) While_Valid_26:search : function(int[],int) -> null|While_Valid_26:nat
            var r36 = new WyJS.Integer(3);
            if(WyJS.equals(r34, r36, true)){
               control_flow_pc = 688;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 688:
            var r38 = new WyJS.Integer(10);
            var r37 = search$b9dF514HOFVY0t1Ic_V6$R4$c0FP$k5$_0kM$N4$W0$Q$Z5$Z0kM$72$qB$s5$W0$SE(r0, r38);//invoke %37 = (%0, %38) While_Valid_26:search : function(int[],int) -> null|While_Valid_26:nat
            var r39 = null;
            if(WyJS.equals(r37, r39, true)){
               control_flow_pc = 689;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 689:
            return;
      }
   }
}

