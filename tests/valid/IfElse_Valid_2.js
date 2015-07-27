function f(r0){//function(int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(10);
            if(WyJS.gt(r0, r1, true)){
               control_flow_pc = 230;
               control_flow_repeat = true;
               continue outer;
            }
            var r2 = new WyJS.Integer(1);
            return r2;//return %2 : int
            control_flow_pc = 231;
            control_flow_repeat = true;
            continue outer;//goto label231
         case 230:
            var r3 = new WyJS.Integer(10);
            if(WyJS.lt(r0, r3, true)){
               control_flow_pc = 231;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = new WyJS.Integer(2);
            return r4;//return %4 : int
         case 231:
            var r5 = new WyJS.Integer(0);
            return r5;//return %5 : int
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
            var r0 = f(r1);//invoke %0 = (%1) IfElse_Valid_2:f : function(int) -> int
            var r2 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 232;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 232:
            var r4 = new WyJS.Integer(10);
            var r3 = f(r4);//invoke %3 = (%4) IfElse_Valid_2:f : function(int) -> int
            var r5 = new WyJS.Integer(0);
            if(WyJS.equals(r3, r5, true)){
               control_flow_pc = 233;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 233:
            var r7 = new WyJS.Integer(11);
            var r6 = f(r7);//invoke %6 = (%7) IfElse_Valid_2:f : function(int) -> int
            var r8 = new WyJS.Integer(2);
            if(WyJS.equals(r6, r8, true)){
               control_flow_pc = 234;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 234:
            var r10 = new WyJS.Integer(1212);
            var r9 = f(r10);//invoke %9 = (%10) IfElse_Valid_2:f : function(int) -> int
            var r11 = new WyJS.Integer(2);
            if(WyJS.equals(r9, r11, true)){
               control_flow_pc = 235;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 235:
            var r13 = new WyJS.Integer(1212);
            var r14 = r13.neg();//neg %14 = %13 : int
            var r12 = f(r14);//invoke %12 = (%14) IfElse_Valid_2:f : function(int) -> int
            var r15 = new WyJS.Integer(1);
            if(WyJS.equals(r12, r15, true)){
               control_flow_pc = 236;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 236:
      }
   }
}

