function f(r0){//function([int]) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(0);
            var r5 = r0[r4];
            var r3 = r5;//assign %3 = %5  : int
            var r1 = r3;//assign %1 = %3  : int
            var r7 = new WyJS.Integer(1);
            var r6 = r7;//assign %6 = %7  : int
            var r2 = r6;//assign %2 = %6  : int
            while(true){//loop (%1, %2, %8, %10, %11, %12, %13, %14, %15, %16)
               var r13 = r0.length;//lengthof %13 = %0 : [int]
               if(WyJS.gt(r2, r13, true)){
                  control_flow_pc = 620;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r14 = r0[r2];
               var r1 = r14;//assign %1 = %14  : int
               var r15 = new WyJS.Integer(1);
               var r16 = r2.add(r15);//add %16 = %2, %15 : int
               var r2 = r16;//assign %2 = %16  : int
            }
         case 620:
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
            var r1 = new WyJS.Integer(1);
            var r2 = new WyJS.Integer(2);
            var r3 = new WyJS.Integer(3);
            var r4 = new WyJS.Integer(4);
            var r5 = new WyJS.Integer(5);
            var r6 = new WyJS.Integer(6);
            var r7 = new WyJS.Integer(7);
            var r8 = new WyJS.Integer(8);
            var r9 = new WyJS.Integer(9);
            var r10 = new WyJS.Integer(10);
            var r11 = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10];
            var r0 = f(r11);//invoke %0 = (%11) While_Valid_23:f : function([int]) -> int
            var r12 = new WyJS.Integer(10);
            if(WyJS.equals(r0, r12, true)){
               control_flow_pc = 621;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 621:
      }
   }
}

