function reverse$Z9bF1D527RWz(r0){//function([int]) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = r0.length();//lengthof %4 = %0 : [int]
            var r3 = r4;//assign %3 = %4  : int
            var r1 = r3;//assign %1 = %3  : int
            var r6 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            r5 = r6.clone();//assign %5 = %6  : [void]
            r2 = r5.clone();//assign %2 = %5  : [int]
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r7 = r0.length();//lengthof %7 = %0 : [int]
            if(WyJS.gt(r1, r7, false)){
               control_flow_pc = 850;
               control_flow_repeat = true;
               continue outer;
            }
            var r8 = r2.length();//lengthof %8 = %2 : [int]
            var r9 = r0.length();//lengthof %9 = %0 : [int]
            var r10 = r9.sub(r1);//sub %10 = %9, %1 : int
            if(WyJS.equals(r8, r10, true)){
               control_flow_pc = 851;
               control_flow_repeat = true;
               continue outer;
            }
         case 850:
            throw {name: 'Assert Failed', message: 'fail'}
         case 851:
            var r11 = new WyJS.Integer(0);
            if(WyJS.lt(r1, r11, true)){
               control_flow_pc = 852;
               control_flow_repeat = true;
               continue outer;
            }
            var r12 = new WyJS.Integer(1);
            var r13 = r1.sub(r12);//sub %13 = %1, %12 : int
            var r1 = r13;//assign %1 = %13  : int
            var r14 = r0.getValue(r1);
            var r15 = new WyJS.List([r14], new WyJS.Type.List(new WyJS.Type.Int()));
            var r16 = r2.append(r15);
            r2 = r16.clone();//assign %2 = %16  : [int]
         case 852:
            return r2;//return %2 : [int]
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
            var r1 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r0 = reverse$Z9bF1D527RWz(r1);//invoke %0 = (%1) While_Valid_44:reverse : function([int]) -> [int]
            var r2 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 853;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 853:
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.List([r4], new WyJS.Type.List(new WyJS.Type.Int()));
            var r3 = reverse$Z9bF1D527RWz(r5);//invoke %3 = (%5) While_Valid_44:reverse : function([int]) -> [int]
            var r6 = new WyJS.Integer(1);
            var r7 = new WyJS.List([r6], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r3, r7, true)){
               control_flow_pc = 854;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 854:
            var r9 = new WyJS.Integer(1);
            var r10 = new WyJS.Integer(2);
            var r11 = new WyJS.List([r9, r10], new WyJS.Type.List(new WyJS.Type.Int()));
            var r8 = reverse$Z9bF1D527RWz(r11);//invoke %8 = (%11) While_Valid_44:reverse : function([int]) -> [int]
            var r12 = new WyJS.Integer(2);
            var r13 = new WyJS.Integer(1);
            var r14 = new WyJS.List([r12, r13], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r8, r14, true)){
               control_flow_pc = 855;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 855:
            var r16 = new WyJS.Integer(1);
            var r17 = new WyJS.Integer(2);
            var r18 = new WyJS.Integer(3);
            var r19 = new WyJS.List([r16, r17, r18], new WyJS.Type.List(new WyJS.Type.Int()));
            var r15 = reverse$Z9bF1D527RWz(r19);//invoke %15 = (%19) While_Valid_44:reverse : function([int]) -> [int]
            var r20 = new WyJS.Integer(3);
            var r21 = new WyJS.Integer(2);
            var r22 = new WyJS.Integer(1);
            var r23 = new WyJS.List([r20, r21, r22], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r15, r23, true)){
               control_flow_pc = 856;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 856:
            var r25 = new WyJS.Integer(1);
            var r26 = new WyJS.Integer(2);
            var r27 = new WyJS.Integer(3);
            var r28 = new WyJS.Integer(4);
            var r29 = new WyJS.List([r25, r26, r27, r28], new WyJS.Type.List(new WyJS.Type.Int()));
            var r24 = reverse$Z9bF1D527RWz(r29);//invoke %24 = (%29) While_Valid_44:reverse : function([int]) -> [int]
            var r30 = new WyJS.Integer(4);
            var r31 = new WyJS.Integer(3);
            var r32 = new WyJS.Integer(2);
            var r33 = new WyJS.Integer(1);
            var r34 = new WyJS.List([r30, r31, r32, r33], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r24, r34, true)){
               control_flow_pc = 857;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 857:
            var r36 = new WyJS.Integer(1);
            var r37 = new WyJS.Integer(2);
            var r38 = new WyJS.Integer(3);
            var r39 = new WyJS.Integer(4);
            var r40 = new WyJS.Integer(5);
            var r41 = new WyJS.List([r36, r37, r38, r39, r40], new WyJS.Type.List(new WyJS.Type.Int()));
            var r35 = reverse$Z9bF1D527RWz(r41);//invoke %35 = (%41) While_Valid_44:reverse : function([int]) -> [int]
            var r42 = new WyJS.Integer(5);
            var r43 = new WyJS.Integer(4);
            var r44 = new WyJS.Integer(3);
            var r45 = new WyJS.Integer(2);
            var r46 = new WyJS.Integer(1);
            var r47 = new WyJS.List([r42, r43, r44, r45, r46], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r35, r47, true)){
               control_flow_pc = 858;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 858:
      }
   }
}

