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
               control_flow_pc = 222;
               control_flow_repeat = true;
               continue outer;
            }
            var r2 = new WyJS.Integer(1);
            var r3 = r2.neg();//neg %3 = %2 : int
            return r3;//return %3 : int
            control_flow_pc = 223;
            control_flow_repeat = true;
            continue outer;//goto label223
         case 222:
            var r4 = new WyJS.Integer(10);
            if(WyJS.lt(r0, r4, true)){
               control_flow_pc = 224;
               control_flow_repeat = true;
               continue outer;
            }
            var r5 = new WyJS.Integer(1);
            return r5;//return %5 : int
            control_flow_pc = 223;
            control_flow_repeat = true;
            continue outer;//goto label223
         case 224:
            var r6 = new WyJS.Integer(0);
            return r6;//return %6 : int
         case 223:
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
            var r0 = f$Y9bFXA$W(r1);//invoke %0 = (%1) IfElse_Valid_1:f : function(int) -> int
            var r2 = new WyJS.Integer(1);
            var r3 = r2.neg();//neg %3 = %2 : int
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 225;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 225:
            var r5 = new WyJS.Integer(10);
            var r4 = f$Y9bFXA$W(r5);//invoke %4 = (%5) IfElse_Valid_1:f : function(int) -> int
            var r6 = new WyJS.Integer(0);
            if(WyJS.equals(r4, r6, true)){
               control_flow_pc = 226;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 226:
            var r8 = new WyJS.Integer(11);
            var r7 = f$Y9bFXA$W(r8);//invoke %7 = (%8) IfElse_Valid_1:f : function(int) -> int
            var r9 = new WyJS.Integer(1);
            if(WyJS.equals(r7, r9, true)){
               control_flow_pc = 227;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 227:
            var r11 = new WyJS.Integer(1212);
            var r10 = f$Y9bFXA$W(r11);//invoke %10 = (%11) IfElse_Valid_1:f : function(int) -> int
            var r12 = new WyJS.Integer(1);
            if(WyJS.equals(r10, r12, true)){
               control_flow_pc = 228;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 228:
            var r14 = new WyJS.Integer(1212);
            var r15 = r14.neg();//neg %15 = %14 : int
            var r13 = f$Y9bFXA$W(r15);//invoke %13 = (%15) IfElse_Valid_1:f : function(int) -> int
            var r16 = new WyJS.Integer(1);
            var r17 = r16.neg();//neg %17 = %16 : int
            if(WyJS.equals(r13, r17, true)){
               control_flow_pc = 229;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 229:
      }
   }
}

