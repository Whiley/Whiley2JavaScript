function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            console.log("debug %0  : int[]");
            return;
      }
   }
}

