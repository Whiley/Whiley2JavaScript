function f(r0, r1){//function(int,int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.equals(r0, r1, true)){
               control_flow_pc = 2034;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = false;
            control_flow_pc = 2035;
            control_flow_repeat = true;
            continue outer;//goto label2035
         case 2034:
            var r4 = true;
         case 2035:
            r3 = r4;//assign %3 = %4  : bool
            r2 = r3;//assign %2 = %3  : bool
            var r5 = true;
            if(r2 === r5){
               control_flow_pc = 2036;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 2037;
            control_flow_repeat = true;
            continue outer;//goto label2037
         case 2036:
            var r6 = new WyJS.Integer(1);
            return r6;//return %6 : int
            control_flow_pc = 2038;
            control_flow_repeat = true;
            continue outer;//goto label2038
         case 2037:
            var r7 = r0.add(r1);//add %7 = %0, %1 : int
            return r7;//return %7 : int
         case 2038:
      }
   }
}

function g(r0, r1){//function(int,int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.gt(r0, r1, true)){
               control_flow_pc = 2042;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = false;
            control_flow_pc = 2043;
            control_flow_repeat = true;
            continue outer;//goto label2043
         case 2042:
            var r4 = true;
         case 2043:
            r3 = r4;//assign %3 = %4  : bool
            r2 = r3;//assign %2 = %3  : bool
            var r5 = true;
            if(r2 === r5){
               control_flow_pc = 2044;
               control_flow_repeat = true;
               continue outer;
            }
            var r6 = r0.add(r1);//add %6 = %0, %1 : int
            return r6;//return %6 : int
            control_flow_pc = 2045;
            control_flow_repeat = true;
            continue outer;//goto label2045
         case 2044:
            var r7 = new WyJS.Integer(1);
            return r7;//return %7 : int
         case 2045:
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
            var r1 = new WyJS.Integer(1);
            var r2 = new WyJS.Integer(1);
            var r0 = f(r1, r2);//invoke %0 = (%1, %2) BoolAssign_Valid_3:f : function(int,int) -> int
            var r3 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 2046;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2046:
            var r5 = new WyJS.Integer(0);
            var r6 = new WyJS.Integer(0);
            var r4 = f(r5, r6);//invoke %4 = (%5, %6) BoolAssign_Valid_3:f : function(int,int) -> int
            var r7 = new WyJS.Integer(1);
            if(WyJS.equals(r4, r7, true)){
               control_flow_pc = 2047;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2047:
            var r9 = new WyJS.Integer(4);
            var r10 = new WyJS.Integer(345);
            var r8 = f(r9, r10);//invoke %8 = (%9, %10) BoolAssign_Valid_3:f : function(int,int) -> int
            var r11 = new WyJS.Integer(349);
            if(WyJS.equals(r8, r11, true)){
               control_flow_pc = 2048;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2048:
            var r13 = new WyJS.Integer(1);
            var r14 = new WyJS.Integer(1);
            var r12 = g(r13, r14);//invoke %12 = (%13, %14) BoolAssign_Valid_3:g : function(int,int) -> int
            var r15 = new WyJS.Integer(1);
            if(WyJS.equals(r12, r15, true)){
               control_flow_pc = 2049;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2049:
            var r17 = new WyJS.Integer(0);
            var r18 = new WyJS.Integer(0);
            var r16 = g(r17, r18);//invoke %16 = (%17, %18) BoolAssign_Valid_3:g : function(int,int) -> int
            var r19 = new WyJS.Integer(1);
            if(WyJS.equals(r16, r19, true)){
               control_flow_pc = 2050;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2050:
            var r21 = new WyJS.Integer(4);
            var r22 = new WyJS.Integer(345);
            var r20 = g(r21, r22);//invoke %20 = (%21, %22) BoolAssign_Valid_3:g : function(int,int) -> int
            var r23 = new WyJS.Integer(349);
            if(WyJS.equals(r20, r23, true)){
               control_flow_pc = 2051;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2051:
      }
   }
}
