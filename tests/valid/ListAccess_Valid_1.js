function f$Z9b737klNRWz(r0){//function(int[]) -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(0);
            var r5 = r0.getValue(r4);
            var r3 = r5;//assign %3 = %5  : int
            var r1 = r3;//assign %1 = %3  : int
            var r7 = new WyJS.Integer(0);
            var r8 = r0.getValue(r7);
            var r6 = r8;//assign %6 = %8  : int
            var r2 = r6;//assign %2 = %6  : int
            if(WyJS.equals(r1, r2, true)){
               control_flow_pc = 908;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 908:
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
            var r5 = new WyJS.Array([r2, r3, r4], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r1 = r5.clone(new WyJS.Type.Int());//assign %1 = %5  : int[]
            var r0 = r1.clone(new WyJS.Type.Int());//assign %0 = %1  : int[]
            f$Z9b737klNRWz(r0);//invoke %(%0) ListAccess_Valid_1:f : function(int[]) -> void
            var r6 = new WyJS.Integer(0);
            var r7 = r0.getValue(r6);
            var r8 = new WyJS.Integer(1);
            if(WyJS.equals(r7, r8, true)){
               control_flow_pc = 909;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 909:
            return;
      }
   }
}

