function lastIndexOf$Z9dFas1FVYGs(r0, r1){//function([int],int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = r0.length();//lengthof %4 = %0 : [int]
            var r3 = r4;//assign %3 = %4  : int
            var r2 = r3;//assign %2 = %3  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r5 = new WyJS.Integer(1);
            var r6 = r2.sub(r5);//sub %6 = %2, %5 : int
            var r2 = r6;//assign %2 = %6  : int
            var r7 = new WyJS.Integer(1);
            var r8 = r7.neg();//neg %8 = %7 : int
            if(WyJS.lt(r2, r8, false)){
               control_flow_pc = 479;
               control_flow_repeat = true;
               continue outer;
            }
            var r9 = r0.length();//lengthof %9 = %0 : [int]
            if(WyJS.lt(r2, r9, false)){
               control_flow_pc = 480;
               control_flow_repeat = true;
               continue outer;
            }
         case 479:
            throw {name: 'Assert Failed', message: 'fail'}
         case 480:
            var r10 = new WyJS.Integer(0);
            if(WyJS.lt(r2, r10, false)){
               control_flow_pc = 481;
               control_flow_repeat = true;
               continue outer;
            }
            var r11 = r0.getValue(r2);
            if(WyJS.equals(r11, r1, true)){
               control_flow_pc = 481;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 481:
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
            var r5 = new WyJS.Integer(5);
            var r6 = new WyJS.Integer(4);
            var r7 = new WyJS.Integer(3);
            var r8 = new WyJS.Integer(2);
            var r9 = new WyJS.Integer(1);
            var r10 = new WyJS.List([r1, r2, r3, r4, r5, r6, r7, r8, r9], new WyJS.Type.List(new WyJS.Type.Int()));
            var r11 = new WyJS.Integer(1);
            var r0 = lastIndexOf$Z9dFas1FVYGs(r10, r11);//invoke %0 = (%10, %11) DoWhile_Valid_6:lastIndexOf : function([int],int) -> int
            var r12 = new WyJS.Integer(8);
            if(WyJS.equals(r0, r12, true)){
               control_flow_pc = 482;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 482:
            var r14 = new WyJS.Integer(1);
            var r15 = new WyJS.Integer(2);
            var r16 = new WyJS.Integer(3);
            var r17 = new WyJS.Integer(4);
            var r18 = new WyJS.Integer(5);
            var r19 = new WyJS.Integer(4);
            var r20 = new WyJS.Integer(3);
            var r21 = new WyJS.Integer(2);
            var r22 = new WyJS.Integer(1);
            var r23 = new WyJS.List([r14, r15, r16, r17, r18, r19, r20, r21, r22], new WyJS.Type.List(new WyJS.Type.Int()));
            var r24 = new WyJS.Integer(2);
            var r13 = lastIndexOf$Z9dFas1FVYGs(r23, r24);//invoke %13 = (%23, %24) DoWhile_Valid_6:lastIndexOf : function([int],int) -> int
            var r25 = new WyJS.Integer(7);
            if(WyJS.equals(r13, r25, true)){
               control_flow_pc = 483;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 483:
            var r27 = new WyJS.Integer(1);
            var r28 = new WyJS.Integer(2);
            var r29 = new WyJS.Integer(3);
            var r30 = new WyJS.Integer(4);
            var r31 = new WyJS.Integer(5);
            var r32 = new WyJS.Integer(4);
            var r33 = new WyJS.Integer(3);
            var r34 = new WyJS.Integer(2);
            var r35 = new WyJS.Integer(1);
            var r36 = new WyJS.List([r27, r28, r29, r30, r31, r32, r33, r34, r35], new WyJS.Type.List(new WyJS.Type.Int()));
            var r37 = new WyJS.Integer(3);
            var r26 = lastIndexOf$Z9dFas1FVYGs(r36, r37);//invoke %26 = (%36, %37) DoWhile_Valid_6:lastIndexOf : function([int],int) -> int
            var r38 = new WyJS.Integer(6);
            if(WyJS.equals(r26, r38, true)){
               control_flow_pc = 484;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 484:
            var r40 = new WyJS.Integer(1);
            var r41 = new WyJS.Integer(2);
            var r42 = new WyJS.Integer(3);
            var r43 = new WyJS.Integer(4);
            var r44 = new WyJS.Integer(5);
            var r45 = new WyJS.Integer(4);
            var r46 = new WyJS.Integer(3);
            var r47 = new WyJS.Integer(2);
            var r48 = new WyJS.Integer(1);
            var r49 = new WyJS.List([r40, r41, r42, r43, r44, r45, r46, r47, r48], new WyJS.Type.List(new WyJS.Type.Int()));
            var r50 = new WyJS.Integer(4);
            var r39 = lastIndexOf$Z9dFas1FVYGs(r49, r50);//invoke %39 = (%49, %50) DoWhile_Valid_6:lastIndexOf : function([int],int) -> int
            var r51 = new WyJS.Integer(5);
            if(WyJS.equals(r39, r51, true)){
               control_flow_pc = 485;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 485:
            var r53 = new WyJS.Integer(1);
            var r54 = new WyJS.Integer(2);
            var r55 = new WyJS.Integer(3);
            var r56 = new WyJS.Integer(4);
            var r57 = new WyJS.Integer(5);
            var r58 = new WyJS.Integer(4);
            var r59 = new WyJS.Integer(3);
            var r60 = new WyJS.Integer(2);
            var r61 = new WyJS.Integer(1);
            var r62 = new WyJS.List([r53, r54, r55, r56, r57, r58, r59, r60, r61], new WyJS.Type.List(new WyJS.Type.Int()));
            var r63 = new WyJS.Integer(5);
            var r52 = lastIndexOf$Z9dFas1FVYGs(r62, r63);//invoke %52 = (%62, %63) DoWhile_Valid_6:lastIndexOf : function([int],int) -> int
            var r64 = new WyJS.Integer(4);
            if(WyJS.equals(r52, r64, true)){
               control_flow_pc = 486;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 486:
      }
   }
}

