function testint$Y9bFXA$W(r0){//function(int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : int
      }
   }
}

function test$X9_7VkE(){//function() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(1);
            var r0 = testint(r1);//invoke %0 = (%1) integer02:testint : function(int) -> int
            var r2 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 0;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 0:
            var r4 = new WyJS.Integer(10);
            var r3 = testint(r4);//invoke %3 = (%4) integer02:testint : function(int) -> int
            var r5 = new WyJS.Integer(10);
            if(WyJS.equals(r3, r5, true)){
               control_flow_pc = 1;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1:
      }
   }
}

