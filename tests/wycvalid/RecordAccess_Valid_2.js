function sum(r0){//function(RecordAccess_Valid_2:Point) -> real
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = r3;//assign %2 = %3  : {real x,real y}
            var r1 = r2;//assign %1 = %2  : {real x,real y}
            var r4 = r1.x;
            var r5 = r1.y;
            var r6 = r4 + r5;//add %6 = %4, %5 : real
            return r6;//return %6 : real
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
            var r4 = {x: r2, y: r3};
            var r1 = r4;//assign %1 = %4  : {int x,int y}
            var r0 = r1;//assign %0 = %1  : {int x,int y}|{real x,real y}
            var r5 = sum(r0);
            var r6 = 3.0;//const %6 = 3.0 : real
            if(r5  ==  r6){
               control_flow_pc = 2;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2:
            var r7 = 1.23;//const %7 = 1.23 : real
            var r8 = 2.34;//const %8 = 2.34 : real
            var r9 = {x: r7, y: r8};
            var r0 = r9;//assign %0 = %9  : {real x,real y}
            var r10 = sum(r0);
            var r11 = 3.57;//const %11 = 3.57 : real
            if(r10  ==  r11){
               control_flow_pc = 3;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 3:
      }
   }
}

test();
