function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = 0;//const %0 = 0 : int
            var r1 = 7;//const %1 = 7 : int
            var r2 =             var r3 = 0;//const %3 = 0 : int
            var r4 = 1;//const %4 = 1 : int
            var r5 = 2;//const %5 = 2 : int
            var r6 = 3;//const %6 = 3 : int
            var r7 = 4;//const %7 = 4 : int
            var r8 = 5;//const %8 = 5 : int
            var r9 = 6;//const %9 = 6 : int
            var r10 = [r3, r4, r5, r6, r7, r8, r9];
            if(r2.length ==  r10.length){
               var listComp = true;
               for(var i = 0; i<r2.length;i++){
                  if(r2[i]  !=  r10[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){//ifeq %2, %10 goto label1926 : [int]
                  control_flow_pc = 1926;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1926:
      }
   }
}

test();
