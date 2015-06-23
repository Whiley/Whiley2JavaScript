function f(r0){//function(ConstrainedInt_Valid_20:a_nat) -> ConstrainedInt_Valid_20:b_nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = 0;//const %1 = 0 : int
            if(r0  !=  r1){//ifne %0, %1 goto label2370 : int
               control_flow_pc = 2370;
               control_flow_repeat = true;
               continue outer;
            }
            var r2 = 1;//const %2 = 1 : int
            return r2;//return %2 : int
            control_flow_pc = 2371;
            control_flow_repeat = true;
            continue outer;//goto label2371
         case 2370:
            var r4 = 1;//const %4 = 1 : int
            var r5 = r0 - r4;//sub %5 = %0, %4 : int
            var r3 = f(r5);//invoke %3 = (%5) ConstrainedInt_Valid_20:f : function(ConstrainedInt_Valid_20:a_nat) -> ConstrainedInt_Valid_20:b_nat
            return r3;//return %3 : int
         case 2371:
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
            var r2 = 0;//const %2 = 0 : int
            var r1 = r2;//assign %1 = %2  : int
            var r0 = r1;//assign %0 = %1  : int
            var r3 = f(r0);//invoke %3 = (%0) ConstrainedInt_Valid_20:f : function(ConstrainedInt_Valid_20:a_nat) -> ConstrainedInt_Valid_20:b_nat
            var r0 = r3;//assign %0 = %3  : int
            var r4 = 1;//const %4 = 1 : int
            if(r0  ==  r4){//ifeq %0, %4 goto label2372 : int
               control_flow_pc = 2372;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2372:
      }
   }
}

test();
