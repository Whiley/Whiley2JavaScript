function toInt(r0){//function([int]) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(0);
            var r3 = r4;//assign %3 = %4  : int
            var r1 = r3;//assign %1 = %3  : int
            var r6 = new WyJS.Integer(0);
            var r5 = r6;//assign %5 = %6  : int
            var r2 = r5;//assign %2 = %5  : int
            while(true){//loop (%1, %2, %7, %8, %9, %10, %11)
               var r7 = r0.length;//lengthof %7 = %0 : [int]
               if(WyJS.gt(r2, r7, true)){
                  control_flow_pc = 1208;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r8 = r0[r2];
               var r9 = r1.add(r8);//add %9 = %1, %8 : int
               var r1 = r9;//assign %1 = %9  : int
               var r10 = new WyJS.Integer(1);
               var r11 = r2.add(r10);//add %11 = %2, %10 : int
               var r2 = r11;//assign %2 = %11  : int
            }
         case 1208:
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
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.Integer(3);
            var r5 = new WyJS.Integer(4);
            var r6 = [r2, r3, r4, r5];
            var r1 = r6;//assign %1 = %6  : [int]
            var r0 = r1;//assign %0 = %1  : [int]
            var r7 = toInt(r0);//invoke %7 = (%0) Import_Valid_3:toInt : function([int]) -> int
            var r8 = new WyJS.Integer(10);
            if(WyJS.equals(r7, r8, true)){
               control_flow_pc = 1209;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1209:
      }
   }
}

