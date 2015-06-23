function len(r0){//function(LengthOf_Valid_5:list) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.length;//lengthof %1 = %0 : [int]
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
            var r3 = new WyJS.Integer(1);
            var r4 = new WyJS.Integer(2);
            var r5 = [r3, r4];
            var r2 = r5;//assign %2 = %5  : [int]
            var r0 = r2;//assign %0 = %2  : [int]
            var r6 = len(r0);//invoke %6 = (%0) LengthOf_Valid_5:len : function(LengthOf_Valid_5:list) -> int
            var r7 = new WyJS.Integer(2);
            if(WyJS.equals(r6, r7, true)){
               control_flow_pc = 1216;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1216:
            var r9 = new WyJS.List([72,101,108,108,111,32,87,111,114,108,100]);
            var r8 = r9;//assign %8 = %9  : [int+]
            var r1 = r8;//assign %1 = %8  : [int]
            var r10 = len(r1);//invoke %10 = (%1) LengthOf_Valid_5:len : function(LengthOf_Valid_5:list) -> int
            var r11 = new WyJS.Integer(11);
            if(WyJS.equals(r10, r11, true)){
               control_flow_pc = 1217;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1217:
      }
   }
}

