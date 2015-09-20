function f$_9_FsNBVV54XckE(){//function() -> (bool,bool)[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = false;
            var r1 = false;
            var r2 = new WyJS.Tuple([r0, r1], new WyJS.Type.Tuple([new WyJS.Type.Bool(), new WyJS.Type.Bool()]));
            var r3 = new WyJS.Integer(2);
            var r4 = WyJS.ListGen(r2, r3, new WyJS.Type.List(new WyJS.Type.Tuple([new WyJS.Type.Bool(), new WyJS.Type.Bool()])));
            return r4;//return %4 : (bool,bool)[]
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
            var r0 = f$_9_FsNBVV54XckE();//invoke %0 = () ListGenerator_Valid_9:f : function() -> (bool,bool)[]
            var r1 = false;
            var r2 = false;
            var r3 = new WyJS.Tuple([r1, r2], new WyJS.Type.Tuple([new WyJS.Type.Bool(), new WyJS.Type.Bool()]));
            var r4 = false;
            var r5 = false;
            var r6 = new WyJS.Tuple([r4, r5], new WyJS.Type.Tuple([new WyJS.Type.Bool(), new WyJS.Type.Bool()]));
            var r7 = new WyJS.List([r3, r6], new WyJS.Type.List(new WyJS.Type.Tuple([new WyJS.Type.Bool(), new WyJS.Type.Bool()])));
            if(WyJS.equals(r0, r7, true)){
               control_flow_pc = 1095;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1095:
            return;
      }
   }
}

