function f(r0){//function([int]) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = r0.length;
            var r2 = r3;//assign %2 = %3  : int
            var r1 = r2;//assign %1 = %2  : int
            var r4 = 1;//const %4 = 1 : int
            var r5 = r1 - r4;//sub %5 = %1, %4 : int
            var r6 = r0[r5];
            return r6;//return %6 : int
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
            var r2 = 1;//const %2 = 1 : int
            var r3 = 2;//const %3 = 2 : int
            var r4 = 3;//const %4 = 3 : int
            var r5 = [r2, r3, r4];
            var r1 = r5;//assign %1 = %5  : [int]
            var r0 = r1;//assign %0 = %1  : [int]
            var r6 = f(r0);
            var r7 = 3;//const %7 = 3 : int
            if(r6  ==  r7){
               control_flow_pc = 141;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 141:
      }
   }
}

test();
