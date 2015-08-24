function f$Y9bFXA$W(r0){//function(int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(1);
            var r2 = r0.add(r1);//add %2 = %0, %1 : int
            var r0 = r2;//assign %0 = %2  : int
            return r0;//return %0 : int
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
            var r3 = new WyJS.Integer(1);
            var r2 = f$Y9bFXA$W(r3);//invoke %2 = (%3) Ensures_Valid_2:f : function(int) -> int
            var r1 = r2;//assign %1 = %2  : int
            var r0 = r1;//assign %0 = %1  : int
            var r4 = new WyJS.Integer(2);
            if(WyJS.equals(r0, r4, true)){
               control_flow_pc = 1814;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1814:
      }
   }
}

