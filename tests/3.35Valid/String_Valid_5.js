function indexOf(r0, r1){//function(int,[int]) -> int|null
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(0);
            r3 = r4;//assign %3 = %4  : int
            r2 = r3;//assign %2 = %3  : int
            while(true){//loop (%2, %5, %6, %7, %8)
               var r5 = r1.length;//lengthof %5 = %1 : [int]
               if(WyJS.gt(r2, r5, true)){
                  control_flow_pc = 2161;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r6 = r1.getValue(r2);
               if(WyJS.equals(r0, r6, false)){
                  var r7 = new WyJS.Integer(1);
                  var r8 = r2.add(r7);//add %8 = %2, %7 : int
                  r2 = r8;//assign %2 = %8  : int
                  continue;
               }
               return r2;//return %2 : null|int
            }
         case 2161:
            var r9 = null;/n            return r9;//return %9 : null|int
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
            var r2 = new WyJS.List([72,101,108,108,111,32,87,111,114,108,100]);
            var r0 = indexOf(r1, r2);//invoke %0 = (%1, %2) String_Valid_5:indexOf : function(int,[int]) -> int|null
            var r3 = new WyJS.Integer(0);
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 2163;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2163:
            var r5 = new WyJS.Integer(101);
            var r6 = new WyJS.List([72,101,108,108,111,32,87,111,114,108,100]);
            var r4 = indexOf(r5, r6);//invoke %4 = (%5, %6) String_Valid_5:indexOf : function(int,[int]) -> int|null
            var r7 = new WyJS.Integer(1);
            if(WyJS.equals(r4, r7, true)){
               control_flow_pc = 2164;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2164:
            var r9 = new WyJS.Integer(108);
            var r10 = new WyJS.List([72,101,108,108,111,32,87,111,114,108,100]);
            var r8 = indexOf(r9, r10);//invoke %8 = (%9, %10) String_Valid_5:indexOf : function(int,[int]) -> int|null
            var r11 = new WyJS.Integer(2);
            if(WyJS.equals(r8, r11, true)){
               control_flow_pc = 2165;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2165:
            var r13 = new WyJS.Integer(111);
            var r14 = new WyJS.List([72,101,108,108,111,32,87,111,114,108,100]);
            var r12 = indexOf(r13, r14);//invoke %12 = (%13, %14) String_Valid_5:indexOf : function(int,[int]) -> int|null
            var r15 = new WyJS.Integer(4);
            if(WyJS.equals(r12, r15, true)){
               control_flow_pc = 2166;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2166:
            var r17 = new WyJS.Integer(32);
            var r18 = new WyJS.List([72,101,108,108,111,32,87,111,114,108,100]);
            var r16 = indexOf(r17, r18);//invoke %16 = (%17, %18) String_Valid_5:indexOf : function(int,[int]) -> int|null
            var r19 = new WyJS.Integer(5);
            if(WyJS.equals(r16, r19, true)){
               control_flow_pc = 2167;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2167:
            var r21 = new WyJS.Integer(87);
            var r22 = new WyJS.List([72,101,108,108,111,32,87,111,114,108,100]);
            var r20 = indexOf(r21, r22);//invoke %20 = (%21, %22) String_Valid_5:indexOf : function(int,[int]) -> int|null
            var r23 = new WyJS.Integer(6);
            if(WyJS.equals(r20, r23, true)){
               control_flow_pc = 2168;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2168:
            var r25 = new WyJS.Integer(114);
            var r26 = new WyJS.List([72,101,108,108,111,32,87,111,114,108,100]);
            var r24 = indexOf(r25, r26);//invoke %24 = (%25, %26) String_Valid_5:indexOf : function(int,[int]) -> int|null
            var r27 = new WyJS.Integer(8);
            if(WyJS.equals(r24, r27, true)){
               control_flow_pc = 2169;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2169:
            var r29 = new WyJS.Integer(100);
            var r30 = new WyJS.List([72,101,108,108,111,32,87,111,114,108,100]);
            var r28 = indexOf(r29, r30);//invoke %28 = (%29, %30) String_Valid_5:indexOf : function(int,[int]) -> int|null
            var r31 = new WyJS.Integer(10);
            if(WyJS.equals(r28, r31, true)){
               control_flow_pc = 2170;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2170:
            var r33 = new WyJS.Integer(122);
            var r34 = new WyJS.List([72,101,108,108,111,32,87,111,114,108,100]);
            var r32 = indexOf(r33, r34);//invoke %32 = (%33, %34) String_Valid_5:indexOf : function(int,[int]) -> int|null
            var r35 = null;/n            if(WyJS.equals(r32, r35, true)){
               control_flow_pc = 2171;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2171:
            var r37 = new WyJS.Integer(49);
            var r38 = new WyJS.List([72,101,108,108,111,32,87,111,114,108,100]);
            var r36 = indexOf(r37, r38);//invoke %36 = (%37, %38) String_Valid_5:indexOf : function(int,[int]) -> int|null
            var r39 = null;/n            if(WyJS.equals(r36, r39, true)){
               control_flow_pc = 2172;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2172:
      }
   }
}

