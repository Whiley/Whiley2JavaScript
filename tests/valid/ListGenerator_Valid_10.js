function f$_9_FsNBV$62m41(){//function() -> int[][]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = new WyJS.Integer(0);
            var r1 = new WyJS.List([r0], new WyJS.Type.List(new WyJS.Type.Int()));
            var r2 = new WyJS.Integer(1);
            var r3 = WyJS.ListGen(r1, r2, new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
            return r3;//return %3 : int[][]
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
            var r0 = f$_9_FsNBV$62m41();//invoke %0 = () ListGenerator_Valid_10:f : function() -> int[][]
            var r1 = new WyJS.Integer(0);
            var r2 = new WyJS.List([r1], new WyJS.Type.List(new WyJS.Type.Int()));
            var r3 = new WyJS.List([r2], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 255;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 255:
            return;
      }
   }
}

