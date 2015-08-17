function f$Z9_FsNBVk4D(){//function() -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = new WyJS.List([]);
            return r0;//return %0 : [int]
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
            var r0 = f$Z9_FsNBVk4D();//invoke %0 = () ConstrainedList_Valid_15:f : function() -> [int]
            var r1 = new WyJS.List([]);
            if(WyJS.equals(r0, r1, true)){
               control_flow_pc = 157;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 157:
      }
   }
}

