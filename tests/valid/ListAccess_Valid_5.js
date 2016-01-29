function f$Z9bFaA$0D5Wz(r0){//function(int[]) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.length();//lengthof %1 = %0 : int[]
            return r1;//return %1 : int
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
            var r6 = new WyJS.Array([r5], new WyJS.Type.Array(new WyJS.Type.Array(new WyJS.Type.Int())));
            var r1 = r6.clone(new WyJS.Type.Array(new WyJS.Type.Int()));//assign %1 = %6  : int[][]
            var r0 = r1.clone(new WyJS.Type.Array(new WyJS.Type.Int()));//assign %0 = %1  : int[][]
            var r8 = new WyJS.Integer(0);
            var r9 = r0.getValue(r8);
            var r7 = f$Z9bFaA$0D5Wz(r9);//invoke %7 = (%9) ListAccess_Valid_5:f : function(int[]) -> int
            var r10 = new WyJS.Integer(3);
            if(WyJS.equals(r7, r10, true)){
               control_flow_pc = 869;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 869:
            return;
      }
   }
}

