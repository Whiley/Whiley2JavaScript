function f$Y9bFXA$W(r0){//function(int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(10);
            if(WyJS.gt(r0, r1, true)){
               control_flow_pc = 424;
               control_flow_repeat = true;
               continue outer;
            }
            var r2 = new WyJS.Integer(1);
            return r2;//return %2 : int
            control_flow_pc = 425;
            control_flow_repeat = true;
            continue outer;//goto label425
         case 424:
            var r3 = new WyJS.Integer(10);
            if(WyJS.lt(r0, r3, true)){
               control_flow_pc = 425;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = new WyJS.Integer(2);
            return r4;//return %4 : int
         case 425:
            var r5 = new WyJS.Integer(0);
            return r5;//return %5 : int
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
            var r1 = new WyJS.Integer(1);
            var r0 = f$Y9bFXA$W(r1);//invoke %0 = (%1) IfElse_Valid_2:f : function(int) -> int
            var r2 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 426;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 426:
            var r4 = new WyJS.Integer(10);
            var r3 = f$Y9bFXA$W(r4);//invoke %3 = (%4) IfElse_Valid_2:f : function(int) -> int
            var r5 = new WyJS.Integer(0);
            if(WyJS.equals(r3, r5, true)){
               control_flow_pc = 427;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 427:
            var r7 = new WyJS.Integer(11);
            var r6 = f$Y9bFXA$W(r7);//invoke %6 = (%7) IfElse_Valid_2:f : function(int) -> int
            var r8 = new WyJS.Integer(2);
            if(WyJS.equals(r6, r8, true)){
               control_flow_pc = 428;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 428:
            var r10 = new WyJS.Integer(1212);
            var r9 = f$Y9bFXA$W(r10);//invoke %9 = (%10) IfElse_Valid_2:f : function(int) -> int
            var r11 = new WyJS.Integer(2);
            if(WyJS.equals(r9, r11, true)){
               control_flow_pc = 429;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 429:
            var r13 = new WyJS.Integer(1212);
            var r14 = r13.neg();//neg %14 = %13 : int
            var r12 = f$Y9bFXA$W(r14);//invoke %12 = (%14) IfElse_Valid_2:f : function(int) -> int
            var r15 = new WyJS.Integer(1);
            if(WyJS.equals(r12, r15, true)){
               control_flow_pc = 430;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 430:
            return;
      }
   }
}

