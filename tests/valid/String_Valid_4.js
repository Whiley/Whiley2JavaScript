function repl(r0, r1, r2){//function(int,int,[int]) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = 0;//const %5 = 0 : int
            var r4 = r5;//assign %4 = %5  : int
            var r3 = r4;//assign %3 = %4  : int
            while(true){//loop (%2, %3, %6, %7, %8, %9, %10)
               var r7 = r2.length;//lengthof %7 = %2 : [int]
               if(r3  >=  r7){//ifge %3, %7 goto label2211 : int
                  control_flow_pc = 2211;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r8 = r2[r3];
               if(r8  !=  r0){
                  var r9 = 1;//const %9 = 1 : int
                  var r10 = r3 + r9;//add %10 = %3, %9 : int
                  var r3 = r10;//assign %3 = %10  : int
                  continue;
               }
               r2[r3] = r1;//update %2[%3] = %1 : [int] -> [int]
               var r9 = 1;//const %9 = 1 : int
               var r10 = r3 + r9;//add %10 = %3, %9 : int
               var r3 = r10;//assign %3 = %10  : int
            }
         case 2211:
            return r2;//return %2 : [int]
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
            var r2 = [72,101,108,108,111,32,87,111,114,108,100];//const %2 = [72,101,108,108,111,32,87,111,114,108,100] : [int+]
            var r1 = r2;//assign %1 = %2  : [int+]
            var r0 = r1;//assign %0 = %1  : [int]
            var r4 = 108;//const %4 = 108 : int
            var r5 = 49;//const %5 = 49 : int
            var r3 = repl(r4, r5, r0);//invoke %3 = (%4, %5, %0) String_Valid_4:repl : function(int,int,[int]) -> [int]
            var r6 = [72,101,49,49,111,32,87,111,114,49,100];//const %6 = [72,101,49,49,111,32,87,111,114,49,100] : [int+]
            if(r3.length ==  r6.length){
               var listComp = true;
               for(var i = 0; i<r3.length;i++){
                  if(r3[i]  !=  r6[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){//ifeq %3, %6 goto label2213 : [int]
                  control_flow_pc = 2213;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2213:
      }
   }
}

test();
