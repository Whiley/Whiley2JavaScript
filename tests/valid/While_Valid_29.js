function find$Z9dFas1FVYGs(r0, r1){//function([int],int) -> int
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
            if(WyJS.gt(r5, r2, false)){
               control_flow_pc = 669;
               control_flow_repeat = true;
               continue outer;
            }
            var r6 = r0.length();//lengthof %6 = %0 : [int]
            if(WyJS.lt(r2, r6, true)){
               control_flow_pc = 670;
               control_flow_repeat = true;
               continue outer;
            }
         case 669:
            throw {name: 'Assert Failed', message: 'fail'}
         case 670:
            var r7 = r0.length();//lengthof %7 = %0 : [int]
            if(WyJS.gt(r2, r7, true)){
               control_flow_pc = 671;
               control_flow_repeat = true;
               continue outer;
            }
            var r8 = r0.getValue(r2);
            if(WyJS.equals(r8, r1, false)){
               control_flow_pc = 672;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -3;
               control_flow_repeat = true;
               break;
            }
         case -3:
            var r9 = new WyJS.Integer(0);
            if(WyJS.gt(r9, r2, false)){
               control_flow_pc = 673;
               control_flow_repeat = true;
               continue outer;
            }
            var r10 = r0.length();//lengthof %10 = %0 : [int]
            if(WyJS.lt(r2, r10, false)){
               control_flow_pc = 674;
               control_flow_repeat = true;
               continue outer;
            }
         case 673:
            throw {name: 'Assert Failed', message: 'fail'}
         case 674:
            control_flow_pc = 671;
            control_flow_repeat = true;
            continue outer;//goto label671
            control_flow_pc = 672;
            control_flow_repeat = true;
            break;
         case 672:
            var r11 = new WyJS.Integer(1);
            var r12 = r2.add(r11);//add %12 = %2, %11 : int
            var r2 = r12;//assign %2 = %12  : int
         case 671:
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
            var r4 = new WyJS.List([r1, r2, r3], new WyJS.Type.List(new WyJS.Type.Int()));
            var r5 = new WyJS.Integer(1);
            var r0 = find$Z9dFas1FVYGs(r4, r5);//invoke %0 = (%4, %5) While_Valid_29:find : function([int],int) -> int
            var r6 = new WyJS.Integer(0);
            if(WyJS.equals(r0, r6, true)){
               control_flow_pc = 675;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 675:
            var r8 = new WyJS.Integer(1);
            var r9 = new WyJS.Integer(2);
            var r10 = new WyJS.Integer(3);
            var r11 = new WyJS.List([r8, r9, r10], new WyJS.Type.List(new WyJS.Type.Int()));
            var r12 = new WyJS.Integer(2);
            var r7 = find$Z9dFas1FVYGs(r11, r12);//invoke %7 = (%11, %12) While_Valid_29:find : function([int],int) -> int
            var r13 = new WyJS.Integer(1);
            if(WyJS.equals(r7, r13, true)){
               control_flow_pc = 676;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 676:
            var r15 = new WyJS.Integer(1);
            var r16 = new WyJS.Integer(2);
            var r17 = new WyJS.Integer(3);
            var r18 = new WyJS.List([r15, r16, r17], new WyJS.Type.List(new WyJS.Type.Int()));
            var r19 = new WyJS.Integer(3);
            var r14 = find$Z9dFas1FVYGs(r18, r19);//invoke %14 = (%18, %19) While_Valid_29:find : function([int],int) -> int
            var r20 = new WyJS.Integer(2);
            if(WyJS.equals(r14, r20, true)){
               control_flow_pc = 677;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 677:
            var r22 = new WyJS.Integer(1);
            var r23 = new WyJS.Integer(2);
            var r24 = new WyJS.Integer(3);
            var r25 = new WyJS.List([r22, r23, r24], new WyJS.Type.List(new WyJS.Type.Int()));
            var r26 = new WyJS.Integer(1);
            var r27 = r26.neg();//neg %27 = %26 : int
            var r21 = find$Z9dFas1FVYGs(r25, r27);//invoke %21 = (%25, %27) While_Valid_29:find : function([int],int) -> int
            var r28 = new WyJS.Integer(3);
            if(WyJS.equals(r21, r28, true)){
               control_flow_pc = 678;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 678:
      }
   }
}

