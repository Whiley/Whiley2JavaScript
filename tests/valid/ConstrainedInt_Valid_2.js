function f(r0){//function(ConstrainedInt_Valid_2:cr3nat) -> ConstrainedInt_Valid_2:cr3nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(1);
            return r1;//return %1 : int
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
            var r3 = new WyJS.Integer(9);
            var r2 = f(r3);//invoke %2 = (%3) ConstrainedInt_Valid_2:f : function(ConstrainedInt_Valid_2:cr3nat) -> ConstrainedInt_Valid_2:cr3nat
            var r1 = r2;//assign %1 = %2  : int
            var r0 = r1;//assign %0 = %1  : int
            var r4 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r4, true)){
               control_flow_pc = 512;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 512:
      }
   }
}

