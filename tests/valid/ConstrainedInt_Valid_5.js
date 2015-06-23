function f(){//function() -> ConstrainedInt_Valid_5:nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = new WyJS.Integer(1);
            return r0;//return %0 : int
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
            var r0 = f();//invoke %0 = () ConstrainedInt_Valid_5:f : function() -> ConstrainedInt_Valid_5:nat
            var r1 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r1, true)){
               control_flow_pc = 522;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 522:
      }
   }
}

