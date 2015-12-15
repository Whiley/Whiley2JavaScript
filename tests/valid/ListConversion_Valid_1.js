function f$Z9bF1D527VGs(r0){//function(real[]) -> real[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : real[]
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
            var r7 = WyJS.cast(new WyJS.Type.List(new WyJS.Type.Real()), r0);
            var r6 = f$Z9bF1D527VGs(r7);//invoke %6 = (%7) ListConversion_Valid_1:f : function(real[]) -> real[]
            var r8 = new WyJS.Real(1.0);
            var r9 = new WyJS.Real(2.0);
            var r10 = new WyJS.Real(3.0);
            var r11 = new WyJS.List([r8, r9, r10], new WyJS.Type.List(new WyJS.Type.Real()));
            if(WyJS.equals(r6, r11, true)){
               control_flow_pc = 414;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 414:
            return;
      }
   }
}

