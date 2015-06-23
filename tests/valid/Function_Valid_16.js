function f(r0){//function(int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(1);
            var r2 = r0.add(r1);//add %2 = %0, %1 : int
            return r2;//return %2 : int
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
            var r2 = r0.add(r1);//add %2 = %0, %1 : int
            return r2;//return %2 : int
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
            var r4 = new WyJS.Integer(2);
            var r3 = r4;//assign %3 = %4  : int
            var r0 = r3;//assign %0 = %3  : int
            var r6 = new WyJS.Integer(1);
            var r5 = r6;//assign %5 = %6  : int
            var r1 = r5;//assign %1 = %5  : int
            if(WyJS.gt(r0, r1, true)){
               control_flow_pc = 283;
               control_flow_repeat = true;
               continue outer;
            }
            var r7 = f(r1);//invoke %7 = (%1) Function_Valid_16:f : function(int) -> int
            var r0 = r7;//assign %0 = %7  : int
         case 283:
            var r9 = g(r0, r1);//invoke %9 = (%0, %1) Function_Valid_16:g : function(int,int) -> int
            var r8 = r9;//assign %8 = %9  : int
            var r2 = r8;//assign %2 = %8  : int
            var r10 = new WyJS.Integer(3);
            if(WyJS.equals(r2, r10, true)){
               control_flow_pc = 284;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 284:
      }
   }
}

