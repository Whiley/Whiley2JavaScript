function indexOf$Z9dFas1FVYGs(r0, r1){//function(int[],int) -> int
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
            var r7 = r0.length();//lengthof %7 = %0 : int[]
            if(WyJS.gt(r2, r7, true)){
               control_flow_pc = 639;
               control_flow_repeat = true;
               continue outer;
            }
            var r8 = r0.getValue(r2);
            if(WyJS.equals(r8, r1, true)){
               control_flow_pc = 639;
               control_flow_repeat = true;
               continue outer;
            }
            var r9 = new WyJS.Integer(1);
            var r10 = r2.add(r9);//add %10 = %2, %9 : int
            var r2 = r10;//assign %2 = %10  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 639:
            return r2;//return %2 : int
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
            var r1 = new WyJS.List([new WyJS.Integer(104), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111), new WyJS.Integer(32), new WyJS.Integer(119), new WyJS.Integer(111), new WyJS.Integer(114), new WyJS.Integer(108), new WyJS.Integer(100)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r2 = new WyJS.Integer(104);
            var r0 = indexOf$Z9dFas1FVYGs(r1, r2);//invoke %0 = (%1, %2) While_Valid_31:indexOf : function(int[],int) -> int
            var r3 = new WyJS.Integer(0);
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 640;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 640:
            var r5 = new WyJS.List([new WyJS.Integer(104), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111), new WyJS.Integer(32), new WyJS.Integer(119), new WyJS.Integer(111), new WyJS.Integer(114), new WyJS.Integer(108), new WyJS.Integer(100)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r6 = new WyJS.Integer(101);
            var r4 = indexOf$Z9dFas1FVYGs(r5, r6);//invoke %4 = (%5, %6) While_Valid_31:indexOf : function(int[],int) -> int
            var r7 = new WyJS.Integer(1);
            if(WyJS.equals(r4, r7, true)){
               control_flow_pc = 641;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 641:
            var r9 = new WyJS.List([new WyJS.Integer(104), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111), new WyJS.Integer(32), new WyJS.Integer(119), new WyJS.Integer(111), new WyJS.Integer(114), new WyJS.Integer(108), new WyJS.Integer(100)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r10 = new WyJS.Integer(108);
            var r8 = indexOf$Z9dFas1FVYGs(r9, r10);//invoke %8 = (%9, %10) While_Valid_31:indexOf : function(int[],int) -> int
            var r11 = new WyJS.Integer(2);
            if(WyJS.equals(r8, r11, true)){
               control_flow_pc = 642;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 642:
            var r13 = new WyJS.List([new WyJS.Integer(104), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111), new WyJS.Integer(32), new WyJS.Integer(119), new WyJS.Integer(111), new WyJS.Integer(114), new WyJS.Integer(108), new WyJS.Integer(100)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r14 = new WyJS.Integer(111);
            var r12 = indexOf$Z9dFas1FVYGs(r13, r14);//invoke %12 = (%13, %14) While_Valid_31:indexOf : function(int[],int) -> int
            var r15 = new WyJS.Integer(4);
            if(WyJS.equals(r12, r15, true)){
               control_flow_pc = 643;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 643:
            var r17 = new WyJS.List([new WyJS.Integer(104), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111), new WyJS.Integer(32), new WyJS.Integer(119), new WyJS.Integer(111), new WyJS.Integer(114), new WyJS.Integer(108), new WyJS.Integer(100)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r18 = new WyJS.Integer(32);
            var r16 = indexOf$Z9dFas1FVYGs(r17, r18);//invoke %16 = (%17, %18) While_Valid_31:indexOf : function(int[],int) -> int
            var r19 = new WyJS.Integer(5);
            if(WyJS.equals(r16, r19, true)){
               control_flow_pc = 644;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 644:
            var r21 = new WyJS.List([new WyJS.Integer(104), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111), new WyJS.Integer(32), new WyJS.Integer(119), new WyJS.Integer(111), new WyJS.Integer(114), new WyJS.Integer(108), new WyJS.Integer(100)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r22 = new WyJS.Integer(119);
            var r20 = indexOf$Z9dFas1FVYGs(r21, r22);//invoke %20 = (%21, %22) While_Valid_31:indexOf : function(int[],int) -> int
            var r23 = new WyJS.Integer(6);
            if(WyJS.equals(r20, r23, true)){
               control_flow_pc = 645;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 645:
            var r25 = new WyJS.List([new WyJS.Integer(104), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111), new WyJS.Integer(32), new WyJS.Integer(119), new WyJS.Integer(111), new WyJS.Integer(114), new WyJS.Integer(108), new WyJS.Integer(100)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r26 = new WyJS.Integer(114);
            var r24 = indexOf$Z9dFas1FVYGs(r25, r26);//invoke %24 = (%25, %26) While_Valid_31:indexOf : function(int[],int) -> int
            var r27 = new WyJS.Integer(8);
            if(WyJS.equals(r24, r27, true)){
               control_flow_pc = 646;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 646:
            var r29 = new WyJS.List([new WyJS.Integer(104), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111), new WyJS.Integer(32), new WyJS.Integer(119), new WyJS.Integer(111), new WyJS.Integer(114), new WyJS.Integer(108), new WyJS.Integer(100)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r30 = new WyJS.Integer(100);
            var r28 = indexOf$Z9dFas1FVYGs(r29, r30);//invoke %28 = (%29, %30) While_Valid_31:indexOf : function(int[],int) -> int
            var r31 = new WyJS.Integer(10);
            if(WyJS.equals(r28, r31, true)){
               control_flow_pc = 647;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 647:
            var r33 = new WyJS.List([new WyJS.Integer(104), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111), new WyJS.Integer(32), new WyJS.Integer(119), new WyJS.Integer(111), new WyJS.Integer(114), new WyJS.Integer(108), new WyJS.Integer(100)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r34 = new WyJS.Integer(122);
            var r32 = indexOf$Z9dFas1FVYGs(r33, r34);//invoke %32 = (%33, %34) While_Valid_31:indexOf : function(int[],int) -> int
            var r35 = new WyJS.Integer(11);
            if(WyJS.equals(r32, r35, true)){
               control_flow_pc = 648;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 648:
            return;
      }
   }
}

