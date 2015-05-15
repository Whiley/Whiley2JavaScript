function testint(r0){//function(int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = 5;//const %1 = 5 : int
            var r2 = r0 + r1;//add %2 = %0, %1 : int
            return r2;//return %2 : int
      }
   }
}

function test(){//function() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = 1;//const %1 = 1 : int
            var r0 = testint(r1);
            var r2 = 6;//const %2 = 6 : int
            if(r0  ==  r2){
               control_flow_pc = 4;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 4:
            var r4 = 10;//const %4 = 10 : int
            var r3 = testint(r4);
            var r5 = 15;//const %5 = 15 : int
            if(r3  ==  r5){
               control_flow_pc = 5;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 5:
      }
   }
}

test();
