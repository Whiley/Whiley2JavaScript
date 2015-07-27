function f(r0){//method(int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : int
      }
   }
}

function g(r0){//method([int]) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : [int]
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
            var r2 = new WyJS.Integer(123);
            r1 = r2;//assign %1 = %2  : int
            r0 = r1;//assign %0 = %1  : int|[int]
            var r3 = f(r0);//invoke %3 = (%0) UnionType_Valid_17:f : method(int) -> int
            var r4 = new WyJS.Integer(123);
            if(WyJS.equals(r3, r4, true)){
               control_flow_pc = 405;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 405:
            var r5 = new WyJS.Integer(1);
            var r6 = new WyJS.Integer(2);
            var r7 = new WyJS.Integer(3);
            var r8 = new WyJS.List([r5, r6, r7], new WyJS.List('int'));
            r0 = r8.clone();//assign %0 = %8  : [int]
            var r9 = g(r0);//invoke %9 = (%0) UnionType_Valid_17:g : method([int]) -> [int]
            var r10 = new WyJS.Integer(1);
            var r11 = new WyJS.Integer(2);
            var r12 = new WyJS.Integer(3);
            var r13 = new WyJS.List([r10, r11, r12], new WyJS.List('int'));
            if(WyJS.equals(r9, r13, true)){
               control_flow_pc = 406;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 406:
      }
   }
}

