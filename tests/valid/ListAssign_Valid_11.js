function f$Z9bF1D527RWz(r0){//function(int[]) -> int[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(5);
            var r2 = new WyJS.Integer(0);
            var r3 = new WyJS.Integer(5);
            r0.setValue(r2, r3);
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
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.Integer(3);
            var r5 = new WyJS.List([r2, r3, r4], new WyJS.Type.List(new WyJS.Type.Int()));
            var r1 = r5.clone(new WyJS.Type.Int());//assign %1 = %5  : int[]
            var r0 = r1.clone(new WyJS.Type.Int());//assign %0 = %1  : int[]
            var r6 = f$Z9bF1D527RWz(r0);//invoke %6 = (%0) ListAssign_Valid_11:f : function(int[]) -> int[]
            var r7 = new WyJS.Integer(5);
            var r8 = new WyJS.Integer(2);
            var r9 = new WyJS.Integer(3);
            var r10 = new WyJS.List([r7, r8, r9], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r6, r10, true)){
               control_flow_pc = 2023;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2023:
            return;
      }
   }
}

