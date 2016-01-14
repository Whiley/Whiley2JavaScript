function indexOf$a9dF514mJFs1RB5Is2(r0, r1){//function(int,int[]) -> int|null
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
            var r6 = r1.length();//lengthof %6 = %1 : int[]
            if(WyJS.gt(r2, r6, true)){
               control_flow_pc = 1643;
               control_flow_repeat = true;
               continue outer;
            }
            var r7 = r1.getValue(r2);
            if(WyJS.equals(r0, r7, false)){
               control_flow_pc = 1644;
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
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 1644:
            var r8 = new WyJS.Integer(1);
            var r9 = r2.add(r8);//add %9 = %2, %8 : int
            var r2 = r9;//assign %2 = %9  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 1643:
            var r10 = null;
            return r10;//return %10 : null|int
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
            var r1 = new WyJS.Integer(72);
            var r2 = new WyJS.List([new WyJS.Integer(72), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111), new WyJS.Integer(32), new WyJS.Integer(87), new WyJS.Integer(111), new WyJS.Integer(114), new WyJS.Integer(108), new WyJS.Integer(100)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r0 = indexOf$a9dF514mJFs1RB5Is2(r1, r2);//invoke %0 = (%1, %2) String_Valid_5:indexOf : function(int,int[]) -> int|null
            var r3 = new WyJS.Integer(0);
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 1645;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1645:
            var r5 = new WyJS.Integer(101);
            var r6 = new WyJS.List([new WyJS.Integer(72), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111), new WyJS.Integer(32), new WyJS.Integer(87), new WyJS.Integer(111), new WyJS.Integer(114), new WyJS.Integer(108), new WyJS.Integer(100)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r4 = indexOf$a9dF514mJFs1RB5Is2(r5, r6);//invoke %4 = (%5, %6) String_Valid_5:indexOf : function(int,int[]) -> int|null
            var r7 = new WyJS.Integer(1);
            if(WyJS.equals(r4, r7, true)){
               control_flow_pc = 1646;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1646:
            var r9 = new WyJS.Integer(108);
            var r10 = new WyJS.List([new WyJS.Integer(72), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111), new WyJS.Integer(32), new WyJS.Integer(87), new WyJS.Integer(111), new WyJS.Integer(114), new WyJS.Integer(108), new WyJS.Integer(100)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r8 = indexOf$a9dF514mJFs1RB5Is2(r9, r10);//invoke %8 = (%9, %10) String_Valid_5:indexOf : function(int,int[]) -> int|null
            var r11 = new WyJS.Integer(2);
            if(WyJS.equals(r8, r11, true)){
               control_flow_pc = 1647;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1647:
            var r13 = new WyJS.Integer(111);
            var r14 = new WyJS.List([new WyJS.Integer(72), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111), new WyJS.Integer(32), new WyJS.Integer(87), new WyJS.Integer(111), new WyJS.Integer(114), new WyJS.Integer(108), new WyJS.Integer(100)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r12 = indexOf$a9dF514mJFs1RB5Is2(r13, r14);//invoke %12 = (%13, %14) String_Valid_5:indexOf : function(int,int[]) -> int|null
            var r15 = new WyJS.Integer(4);
            if(WyJS.equals(r12, r15, true)){
               control_flow_pc = 1648;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1648:
            var r17 = new WyJS.Integer(32);
            var r18 = new WyJS.List([new WyJS.Integer(72), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111), new WyJS.Integer(32), new WyJS.Integer(87), new WyJS.Integer(111), new WyJS.Integer(114), new WyJS.Integer(108), new WyJS.Integer(100)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r16 = indexOf$a9dF514mJFs1RB5Is2(r17, r18);//invoke %16 = (%17, %18) String_Valid_5:indexOf : function(int,int[]) -> int|null
            var r19 = new WyJS.Integer(5);
            if(WyJS.equals(r16, r19, true)){
               control_flow_pc = 1649;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1649:
            var r21 = new WyJS.Integer(87);
            var r22 = new WyJS.List([new WyJS.Integer(72), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111), new WyJS.Integer(32), new WyJS.Integer(87), new WyJS.Integer(111), new WyJS.Integer(114), new WyJS.Integer(108), new WyJS.Integer(100)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r20 = indexOf$a9dF514mJFs1RB5Is2(r21, r22);//invoke %20 = (%21, %22) String_Valid_5:indexOf : function(int,int[]) -> int|null
            var r23 = new WyJS.Integer(6);
            if(WyJS.equals(r20, r23, true)){
               control_flow_pc = 1650;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1650:
            var r25 = new WyJS.Integer(114);
            var r26 = new WyJS.List([new WyJS.Integer(72), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111), new WyJS.Integer(32), new WyJS.Integer(87), new WyJS.Integer(111), new WyJS.Integer(114), new WyJS.Integer(108), new WyJS.Integer(100)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r24 = indexOf$a9dF514mJFs1RB5Is2(r25, r26);//invoke %24 = (%25, %26) String_Valid_5:indexOf : function(int,int[]) -> int|null
            var r27 = new WyJS.Integer(8);
            if(WyJS.equals(r24, r27, true)){
               control_flow_pc = 1651;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1651:
            var r29 = new WyJS.Integer(100);
            var r30 = new WyJS.List([new WyJS.Integer(72), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111), new WyJS.Integer(32), new WyJS.Integer(87), new WyJS.Integer(111), new WyJS.Integer(114), new WyJS.Integer(108), new WyJS.Integer(100)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r28 = indexOf$a9dF514mJFs1RB5Is2(r29, r30);//invoke %28 = (%29, %30) String_Valid_5:indexOf : function(int,int[]) -> int|null
            var r31 = new WyJS.Integer(10);
            if(WyJS.equals(r28, r31, true)){
               control_flow_pc = 1652;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1652:
            var r33 = new WyJS.Integer(122);
            var r34 = new WyJS.List([new WyJS.Integer(72), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111), new WyJS.Integer(32), new WyJS.Integer(87), new WyJS.Integer(111), new WyJS.Integer(114), new WyJS.Integer(108), new WyJS.Integer(100)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r32 = indexOf$a9dF514mJFs1RB5Is2(r33, r34);//invoke %32 = (%33, %34) String_Valid_5:indexOf : function(int,int[]) -> int|null
            var r35 = null;
            if(WyJS.equals(r32, r35, true)){
               control_flow_pc = 1653;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1653:
            var r37 = new WyJS.Integer(49);
            var r38 = new WyJS.List([new WyJS.Integer(72), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111), new WyJS.Integer(32), new WyJS.Integer(87), new WyJS.Integer(111), new WyJS.Integer(114), new WyJS.Integer(108), new WyJS.Integer(100)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r36 = indexOf$a9dF514mJFs1RB5Is2(r37, r38);//invoke %36 = (%37, %38) String_Valid_5:indexOf : function(int,int[]) -> int|null
            var r39 = null;
            if(WyJS.equals(r36, r39, true)){
               control_flow_pc = 1654;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1654:
            return;
      }
   }
}

