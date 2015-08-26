function f$Z9bF1D527RWz(r0){//function([int]) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : [int]
            return;
      }
   }
}

function test$1A_7VkE(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(1);
            var r2 = new WyJS.Integer(4);
            var r3 = new WyJS.List([r1, r2], new WyJS.Type.List(new WyJS.Type.Int()));
            var r0 = f$Z9bF1D527RWz(r3);//invoke %0 = (%3) ListEmpty_Valid_1:f : function([int]) -> [int]
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.Integer(4);
            var r6 = new WyJS.List([r4, r5], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r6, true)){
               control_flow_pc = 507;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 507:
            var r8 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r7 = f$Z9bF1D527RWz(r8);//invoke %7 = (%8) ListEmpty_Valid_1:f : function([int]) -> [int]
            var r9 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            if(WyJS.equals(r7, r9, true)){
               control_flow_pc = 508;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 508:
            return;
      }
   }
}

