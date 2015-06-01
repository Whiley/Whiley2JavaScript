function sum(r0){//function([Assume_Valid_1:nat]) -> Assume_Valid_1:nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = 0;//const %4 = 0 : int
            var r3 = r4;//assign %3 = %4  : int
            var r1 = r3;//assign %1 = %3  : int
            loopBegin0:
            while(true){
               var r5 = 0;//const %5 = 0 : int
               if(r1  >=  r5){
                  control_flow_pc = 325;
                  control_flow_repeat = true;
                  continue outer;
               }
               throw {name: 'Assert Failed', message: 'fail'}
            case 325:
               var r6 = 0;//const %6 = 0 : int
               if(r1  >=  r6){
                  control_flow_pc = 326;
                  control_flow_repeat = true;
                  continue outer;
               }
               throw {name: 'Assert Failed', message: 'fail'}
            case 326:
               var r7 = r1 + r2;//add %7 = %1, %2 : int
               var r1 = r7;//assign %1 = %7  : int
            }
            return r1;//return %1 : int
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
            var r3 = 0;//const %3 = 0 : int
            var r4 = 1;//const %4 = 1 : int
            var r5 = 2;//const %5 = 2 : int
            var r6 = 3;//const %6 = 3 : int
            var r7 = [r3, r4, r5, r6];
            var r2 = sum(r7);
            var r1 = r2;//assign %1 = %2  : int
            var r0 = r1;//assign %0 = %1  : int
            var r8 = 6;//const %8 = 6 : int
            if(r0  ==  r8){
               control_flow_pc = 327;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 327:
      }
   }
}

test();
