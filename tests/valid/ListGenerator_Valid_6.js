function f$Z9_FsNBV$4D(){//function() -> bool[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = false;
            var r1 = new WyJS.Integer(3);
            var r2 = WyJS.ListGen(r0, r1, new WyJS.Type.List(new WyJS.Type.Bool()));
            return r2;//return %2 : bool[]
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
            var r0 = f$Z9_FsNBV$4D();//invoke %0 = () ListGenerator_Valid_6:f : function() -> bool[]
            var r1 = false;
            var r2 = false;
            var r3 = false;
            var r4 = new WyJS.List([r1, r2, r3], new WyJS.Type.List(new WyJS.Type.Bool()));
            if(WyJS.equals(r0, r4, true)){
               control_flow_pc = 1093;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1093:
            return;
      }
   }
}

