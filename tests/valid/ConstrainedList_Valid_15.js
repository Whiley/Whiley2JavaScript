function f$Z9_FsNBVk4D(){//function() -> int[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = new WyJS.Array([], new WyJS.Type.Array(new WyJS.Type.Void()));
            return r0;//return %0 : int[]
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
            var r0 = f$Z9_FsNBVk4D();//invoke %0 = () ConstrainedList_Valid_15:f : function() -> int[]
            var r1 = new WyJS.Array([], new WyJS.Type.Array(new WyJS.Type.Void()));
            if(WyJS.equals(r0, r1, true)){
               control_flow_pc = 129;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 129:
            return;
      }
   }
}

