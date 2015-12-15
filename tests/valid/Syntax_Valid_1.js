function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = new WyJS.List([new WyJS.Integer(100), new WyJS.Integer(101), new WyJS.Integer(98), new WyJS.Integer(117), new WyJS.Integer(103), new WyJS.Integer(32), new WyJS.Integer(104), new WyJS.Integer(101), new WyJS.Integer(114), new WyJS.Integer(101)], new WyJS.Type.List(new WyJS.Type.Int()));
            console.log("debug %0  : int[]");
            return;
      }
   }
}

