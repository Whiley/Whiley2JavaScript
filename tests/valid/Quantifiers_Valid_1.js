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
            var r3 = new WyJS.Integer(1);
            var r4 = new WyJS.Integer(2);
            var r5 = new WyJS.Integer(3);
            var r6 = new WyJS.List([r3, r4, r5], new WyJS.Type.List(new WyJS.Type.Int()));
            var r2 = r6.clone(new WyJS.Type.Int());//assign %2 = %6  : int[]
            var r0 = r2.clone(new WyJS.Type.Int());//assign %0 = %2  : int[]
            var r7 = r0.clone(new WyJS.Type.Int());//assign %7 = %0  : int[]
            var r1 = r7.clone(new WyJS.Type.Int());//assign %1 = %7  : int[]
            var r8 = f$Z9bF1D527RWz(r1);//invoke %8 = (%1) Quantifiers_Valid_1:f : function(int[]) -> int[]
            var r9 = new WyJS.Integer(1);
            var r10 = new WyJS.Integer(2);
            var r11 = new WyJS.Integer(3);
            var r12 = new WyJS.List([r9, r10, r11], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r8, r12, true)){
               control_flow_pc = 1671;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1671:
            var r13 = new WyJS.Integer(1);
            var r14 = new WyJS.Integer(2);
            var r15 = new WyJS.Integer(3);
            var r16 = new WyJS.List([r13, r14, r15], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r16, true)){
               control_flow_pc = 1672;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1672:
            return;
      }
   }
}

