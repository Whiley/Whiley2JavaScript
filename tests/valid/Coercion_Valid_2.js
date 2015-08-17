function f$Z9bF1D527RWz(r0){//function([int]) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : [int]
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
            var r1 = new WyJS.List([72,101,108,108,111,32,87,111,114,108,100]);
            var r0 = f$Z9bF1D527RWz(r1);//invoke %0 = (%1) Coercion_Valid_2:f : function([int]) -> [int]
            var r2 = new WyJS.Integer(72);
            var r3 = new WyJS.Integer(101);
            var r4 = new WyJS.Integer(108);
            var r5 = new WyJS.Integer(108);
            var r6 = new WyJS.Integer(111);
            var r7 = new WyJS.Integer(32);
            var r8 = new WyJS.Integer(87);
            var r9 = new WyJS.Integer(111);
            var r10 = new WyJS.Integer(114);
            var r11 = new WyJS.Integer(108);
            var r12 = new WyJS.Integer(100);
            var r13 = new WyJS.List([r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r13, true)){
               control_flow_pc = 1353;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1353:
      }
   }
}

