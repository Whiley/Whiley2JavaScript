function f(r0){//function([int]) -> !(int|null)
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : !(null|int)
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
            var r1 = new WyJS.List([72,101,108,108,111,32,87,111,114,108,100]);
            var r0 = f(r1);//invoke %0 = (%1) NegationType_Valid_4:f : function([int]) -> !(int|null)
            var r2 = new WyJS.List([72,101,108,108,111,32,87,111,114,108,100]);
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 1579;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1579:
      }
   }
}

