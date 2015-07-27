function f(r0){//function([int]) -> [ConstrainedList_Valid_16:nat]
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

function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = new WyJS.List([];
);
            var r2 = f(r3);//invoke %2 = (%3) ConstrainedList_Valid_16:f : function([int]) -> [ConstrainedList_Valid_16:nat]
            var r1 = r2.clone();//assign %1 = %2  : [int]
            var r0 = r1.clone();//assign %0 = %1  : [int]
            var r4 = new WyJS.List([];
);
            if(WyJS.equals(r0, r4, true)){
               control_flow_pc = 160;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 160:
      }
   }
}

