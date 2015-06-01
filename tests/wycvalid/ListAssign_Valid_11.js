function f(r0){//function([int]) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = 5;//const %1 = 5 : int
            var r2 = 0;//const %2 = 0 : int
            var r3 = 5;//const %3 = 5 : int
            r0[r2] = r3;
            return r0;//return %0 : [int]
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
            var r7 = 5;//const %7 = 5 : int
            var r8 = 2;//const %8 = 2 : int
            var r9 = 3;//const %9 = 3 : int
            var r10 = [r7, r8, r9];
            if(r6.length ==  r10.length){
               var listComp = true;
               for(var i = 0; i<r6.length;i++){
                  if(r6[i]  !=  r10[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){
                  control_flow_pc = 196;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 196:
      }
   }
}

test();
