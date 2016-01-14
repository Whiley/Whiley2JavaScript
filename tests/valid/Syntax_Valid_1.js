function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = new WyJS.Array([], new WyJS.Type.Array(new WyJS.Type.Void()));
            WyJS.debug(r0);
            return;
      }
   }
}

