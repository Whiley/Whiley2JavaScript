function f(r0){//function(int) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.List([r0], new WyJS.List('int'));
            return r1;//return %1 : [int]
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
            var r1 = new WyJS.Integer(0);
            var r0 = f(r1);//invoke %0 = (%1) ConstrainedList_Valid_12:f : function(int) -> [int]
            var r2 = new WyJS.Integer(0);
            var r3 = new WyJS.List([r2], new WyJS.List('int'));
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 153;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 153:
      }
   }
}

