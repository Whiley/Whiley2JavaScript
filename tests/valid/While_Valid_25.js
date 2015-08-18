function f$Y9bFXA$W(r0){//function(int) -> int
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
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r7 = new WyJS.Integer(2);
            var r8 = r7.mul(r1);//mul %8 = %7, %1 : int
            if(WyJS.equals(r2, r8, true)){
               control_flow_pc = 622;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 622:
            if(WyJS.gt(r1, r0, true)){
               control_flow_pc = 623;
               control_flow_repeat = true;
               continue outer;
            }
            var r9 = new WyJS.Integer(1);
            var r10 = r1.add(r9);//add %10 = %1, %9 : int
            var r1 = r10;//assign %1 = %10  : int
            var r11 = new WyJS.Integer(2);
            var r12 = r2.add(r11);//add %12 = %2, %11 : int
            var r2 = r12;//assign %2 = %12  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 623:
            var r13 = r1.add(r2);//add %13 = %1, %2 : int
            return r13;//return %13 : int
      }
   }
}

function test$1A_7VkE(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(10);
            var r0 = f$Y9bFXA$W(r1);//invoke %0 = (%1) While_Valid_25:f : function(int) -> int
            var r2 = new WyJS.Integer(30);
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 624;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 624:
      }
   }
}

