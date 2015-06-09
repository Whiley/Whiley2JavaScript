function f(r0){//function(int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            while(true){
               var r1 = 10;//const %1 = 10 : int
               if(r0  >=  r1){
                  control_flow_pc = 22;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r2 = 1;//const %2 = 1 : int
               if(r0  !=  r2){
                  var r3 = 1;//const %3 = 1 : int
                  var r4 = r0 + r3;//add %4 = %0, %3 : int
                  var r0 = r4;//assign %0 = %4  : int
                  continue;
               }
               control_flow_pc = 22;
               control_flow_repeat = true;
               continue outer;
               var r3 = 1;//const %3 = 1 : int
               var r4 = r0 + r3;//add %4 = %0, %3 : int
               var r0 = r4;//assign %0 = %4  : int
            }
         case 22:
            return r0;//return %0 : int
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
            var r1 = 0;//const %1 = 0 : int
            var r0 = f(r1);
            var r2 = 16;//const %2 = 16 : int
            if(r0  ==  r2){
               control_flow_pc = 24;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 24:
            var r4 = 5;//const %4 = 5 : int
            var r3 = f(r4);
            var r5 = 10;//const %5 = 10 : int
            if(r3  ==  r5){
               control_flow_pc = 25;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 25:
      }
   }
}

test();
