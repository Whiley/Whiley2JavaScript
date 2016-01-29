function f$Z9_FsNBV$5Wz(){//function() -> real[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = new WyJS.Real(1.0);
            var r1 = new WyJS.Integer(2);
            var r2 = WyJS.ListGen(r0, r1, new WyJS.Type.List(new WyJS.Type.Real()));
            return r2;//return %2 : real[]
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
            var r0 = f$Z9_FsNBV$5Wz();//invoke %0 = () ListGenerator_Valid_8:f : function() -> real[]
            var r1 = new WyJS.Real(1.0);
            var r2 = new WyJS.Real(1.0);
            var r3 = new WyJS.List([r1, r2], new WyJS.Type.List(new WyJS.Type.Real()));
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 12;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 12:
            return;
      }
   }
}

