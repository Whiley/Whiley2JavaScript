function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = 12376523476123.98712345;//const %2 = 12376523476123.98712345 : real
            var r1 = r2;//assign %1 = %2  : real
            var r0 = r1;//assign %0 = %1  : real
            var r3 = 0.002348976;//const %3 = 0.002348976 : real
            var r4 = r0 + r3;//add %4 = %0, %3 : real
            var r0 = r4;//assign %0 = %4  : real
            var r5 = 12376523476123.989472426;//const %5 = 12376523476123.989472426 : real
            if(r0  ==  r5){
               control_flow_pc = 81;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 81:
      }
   }
}

test();
