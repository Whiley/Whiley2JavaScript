function pred(){//function() -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = false;
            return r0;//return %0 : bool
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
            var r0 = pred();//invoke %0 = () BoolReturn_Valid_1:pred : function() -> bool
            var r1 = true;
            if(r0 === r1){
               control_flow_pc = 1168;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1169;
            control_flow_repeat = true;
            continue outer;//goto label1169
         case 1168:
            throw {name: 'Assert Failed', message: 'fail'}
         case 1169:
      }
   }
}

