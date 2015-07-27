function g(r0){//function(int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(1);
            return r1;//return %1 : int
      }
   }
}

function f(r0){//function(int) -> [ConstrainedList_Valid_4:i8]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = g(r0);//invoke %1 = (%0) ConstrainedList_Valid_4:g : function(int) -> int
            var r2 = new WyJS.List([r1]);
            return r2;//return %2 : [int]
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
            var r3 = new WyJS.Integer(0);
            var r2 = f(r3);//invoke %2 = (%3) ConstrainedList_Valid_4:f : function(int) -> [ConstrainedList_Valid_4:i8]
            var r1 = r2.clone();//assign %1 = %2  : [int]
            var r0 = r1.clone();//assign %0 = %1  : [int]
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.List([r4]);
            if(WyJS.equals(r0, r5, true)){
               control_flow_pc = 1735;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1735:
      }
   }
}

