function f(r0){//function(ConstrainedInt_Valid_19:a_nat) -> ConstrainedInt_Valid_19:b_nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(0);
            if(WyJS.equals(r0, r1, false)){
               control_flow_pc = 2314;
               control_flow_repeat = true;
               continue outer;
            }
            var r2 = new WyJS.Integer(1);
            return r2;//return %2 : int
            control_flow_pc = 2315;
            control_flow_repeat = true;
            continue outer;//goto label2315
         case 2314:
            var r4 = new WyJS.Integer(1);
            var r5 = r0.sub(r4);//sub %5 = %0, %4 : int
            var r3 = f(r5);//invoke %3 = (%5) ConstrainedInt_Valid_19:f : function(ConstrainedInt_Valid_19:a_nat) -> ConstrainedInt_Valid_19:b_nat
            return r3;//return %3 : int
         case 2315:
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
            var r2 = new WyJS.Integer(0);
            r1 = r2;//assign %1 = %2  : int
            r0 = r1;//assign %0 = %1  : int
            var r3 = f(r0);//invoke %3 = (%0) ConstrainedInt_Valid_19:f : function(ConstrainedInt_Valid_19:a_nat) -> ConstrainedInt_Valid_19:b_nat
            r0 = r3;//assign %0 = %3  : int
            var r4 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r4, true)){
               control_flow_pc = 2316;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2316:
      }
   }
}

