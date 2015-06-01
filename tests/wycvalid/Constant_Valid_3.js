var ITEMS = [-1,2,3];
function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = [-1,2,3];//const %0 = [-1,2,3] : [int+]
            var r1 = 1;//const %1 = 1 : int
            var r2 = -r1;
            var r3 = 2;//const %3 = 2 : int
            var r4 = 3;//const %4 = 3 : int
            var r5 = [r2, r3, r4];
            if(r0.length ==  r5.length){
               var listComp = true;
               for(var i = 0; i<r0.length;i++){
                  if(r0[i]  !=  r5[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){
                  control_flow_pc = 194;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 194:
      }
   }
}

test();
