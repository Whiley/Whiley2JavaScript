function f$Z9bF1D527RWz(r0){//function(int[]) -> int[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
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
            var r1 = new WyJS.Integer(1);
            var r2 = new WyJS.Integer(4);
            var r3 = new WyJS.Array([r1, r2], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r0 = f$Z9bF1D527RWz(r3);//invoke %0 = (%3) ListEmpty_Valid_1:f : function(int[]) -> int[]
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.Integer(4);
            var r6 = new WyJS.Array([r4, r5], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r6, true)){
               control_flow_pc = 363;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 363:
            var r8 = new WyJS.Integer(0);
            var r9 = new WyJS.Integer(0);
            var r10 = WyJS.ArrayGen(r8, r9, new WyJS.Type.Array(new WyJS.Type.Int()));
            var r7 = f$Z9bF1D527RWz(r10);//invoke %7 = (%10) ListEmpty_Valid_1:f : function(int[]) -> int[]
            var r11 = new WyJS.Integer(0);
            var r12 = new WyJS.Integer(0);
            var r13 = WyJS.ArrayGen(r11, r12, new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r7, r13, true)){
               control_flow_pc = 364;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 364:
            return;
      }
   }
}

