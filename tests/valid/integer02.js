function testint(r0){//function(int) -> int
   return r0;//return %0 : int
}

function test(){//function() -> void
   var r1 = 1;//const %1 = 1 : int
   var r0 = testint(r1);
   var r2 = 1;//const %2 = 1 : int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(r0  !=  r2){
               throw {name: 'Assert Failed', message: 'fail'}
            }
         case 2:
            var r4 = 10;//const %4 = 10 : int
            var r3 = testint(r4);
            var r5 = 10;//const %5 = 10 : int
            if(r3  !=  r5){
               throw {name: 'Assert Failed', message: 'fail'}
            }
      }
   }
}

test();
