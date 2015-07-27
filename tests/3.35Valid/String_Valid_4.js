function repl(r0, r1, r2){//function(int,int,[int]) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = new WyJS.Integer(0);
            r4 = r5;//assign %4 = %5  : int
            r3 = r4;//assign %3 = %4  : int
            while(true){//loop (%2, %3, %6, %7, %8, %9, %10)
               var r7 = r2.length;//lengthof %7 = %2 : [int]
               if(WyJS.gt(r3, r7, true)){
                  control_flow_pc = 2158;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r8 = r2.getValue(r3);
               if(WyJS.equals(r8, r0, false)){
                  var r9 = new WyJS.Integer(1);
                  var r10 = r3.add(r9);//add %10 = %3, %9 : int
                  r3 = r10;//assign %3 = %10  : int
                  continue;
               }
               r2.setValue(r3, r1);//update %2[%3] = %1 : [int] -> [int]
            }
         case 2158:
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
            var r2 = new WyJS.List([72,101,108,108,111,32,87,111,114,108,100]);
            r1 = r2.clone();//assign %1 = %2  : [int+]
            r0 = r1.clone();//assign %0 = %1  : [int]
            var r4 = new WyJS.Integer(108);
            var r5 = new WyJS.Integer(49);
            var r3 = repl(r4, r5, r0);//invoke %3 = (%4, %5, %0) String_Valid_4:repl : function(int,int,[int]) -> [int]
            var r6 = new WyJS.List([72,101,49,49,111,32,87,111,114,49,100]);
            if(WyJS.equals(r3, r6, true)){
               control_flow_pc = 2160;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2160:
      }
   }
}

