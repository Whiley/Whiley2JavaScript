function indexOf$Z9dFas1FVYGs(r0, r1){//function([int],int) -> int
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
            var r5 = new WyJS.Integer(0);
            if(WyJS.lt(r2, r5, false)){
               control_flow_pc = 871;
               control_flow_repeat = true;
               continue outer;
            }
            var r6 = r0.length();//lengthof %6 = %0 : [int]
            if(WyJS.lt(r2, r6, true)){
               control_flow_pc = 872;
               control_flow_repeat = true;
               continue outer;
            }
         case 871:
            throw {name: 'Assert Failed', message: 'fail'}
         case 872:
            var r7 = r0.length();//lengthof %7 = %0 : [int]
            if(WyJS.gt(r2, r7, true)){
               control_flow_pc = 873;
               control_flow_repeat = true;
               continue outer;
            }
            var r8 = r0.getValue(r2);
            if(WyJS.equals(r8, r1, false)){
               control_flow_pc = 874;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -3;
               control_flow_repeat = true;
               break;
            }
         case -3:
            control_flow_pc = 873;
            control_flow_repeat = true;
            continue outer;//goto label873
            control_flow_pc = 874;
            control_flow_repeat = true;
            break;
         case 874:
            var r9 = new WyJS.Integer(1);
            var r10 = r2.add(r9);//add %10 = %2, %9 : int
            var r2 = r10;//assign %2 = %10  : int
         case 873:
            return r2;//return %2 : int
      }
   }
}

function test$1A_7VkE(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(1);
            var r2 = new WyJS.Integer(2);
            var r3 = new WyJS.Integer(3);
            var r4 = new WyJS.Integer(4);
            var r5 = new WyJS.List([r1, r2, r3, r4], new WyJS.Type.List(new WyJS.Type.Int()));
            var r6 = new WyJS.Integer(0);
            var r0 = indexOf$Z9dFas1FVYGs(r5, r6);//invoke %0 = (%5, %6) While_Valid_46:indexOf : function([int],int) -> int
            var r7 = new WyJS.Integer(4);
            if(WyJS.equals(r0, r7, true)){
               control_flow_pc = 875;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 875:
            var r9 = new WyJS.Integer(1);
            var r10 = new WyJS.Integer(2);
            var r11 = new WyJS.Integer(3);
            var r12 = new WyJS.Integer(4);
            var r13 = new WyJS.List([r9, r10, r11, r12], new WyJS.Type.List(new WyJS.Type.Int()));
            var r14 = new WyJS.Integer(1);
            var r8 = indexOf$Z9dFas1FVYGs(r13, r14);//invoke %8 = (%13, %14) While_Valid_46:indexOf : function([int],int) -> int
            var r15 = new WyJS.Integer(0);
            if(WyJS.equals(r8, r15, true)){
               control_flow_pc = 876;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 876:
            var r17 = new WyJS.Integer(1);
            var r18 = new WyJS.Integer(2);
            var r19 = new WyJS.Integer(3);
            var r20 = new WyJS.Integer(4);
            var r21 = new WyJS.List([r17, r18, r19, r20], new WyJS.Type.List(new WyJS.Type.Int()));
            var r22 = new WyJS.Integer(2);
            var r16 = indexOf$Z9dFas1FVYGs(r21, r22);//invoke %16 = (%21, %22) While_Valid_46:indexOf : function([int],int) -> int
            var r23 = new WyJS.Integer(1);
            if(WyJS.equals(r16, r23, true)){
               control_flow_pc = 877;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 877:
            var r25 = new WyJS.Integer(1);
            var r26 = new WyJS.Integer(2);
            var r27 = new WyJS.Integer(3);
            var r28 = new WyJS.Integer(4);
            var r29 = new WyJS.List([r25, r26, r27, r28], new WyJS.Type.List(new WyJS.Type.Int()));
            var r30 = new WyJS.Integer(3);
            var r24 = indexOf$Z9dFas1FVYGs(r29, r30);//invoke %24 = (%29, %30) While_Valid_46:indexOf : function([int],int) -> int
            var r31 = new WyJS.Integer(2);
            if(WyJS.equals(r24, r31, true)){
               control_flow_pc = 878;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 878:
            var r33 = new WyJS.Integer(1);
            var r34 = new WyJS.Integer(2);
            var r35 = new WyJS.Integer(3);
            var r36 = new WyJS.Integer(4);
            var r37 = new WyJS.List([r33, r34, r35, r36], new WyJS.Type.List(new WyJS.Type.Int()));
            var r38 = new WyJS.Integer(4);
            var r32 = indexOf$Z9dFas1FVYGs(r37, r38);//invoke %32 = (%37, %38) While_Valid_46:indexOf : function([int],int) -> int
            var r39 = new WyJS.Integer(3);
            if(WyJS.equals(r32, r39, true)){
               control_flow_pc = 879;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 879:
      }
   }
}

