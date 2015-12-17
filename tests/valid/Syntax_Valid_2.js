function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = new WyJS.List([new WyJS.Integer(100), new WyJS.Integer(101), new WyJS.Integer(98), new WyJS.Integer(117), new WyJS.Integer(103), new WyJS.Integer(103), new WyJS.Integer(105), new WyJS.Integer(110), new WyJS.Integer(103)], new WyJS.Type.List(new WyJS.Type.Int()));
            return;
      }
   }
}

