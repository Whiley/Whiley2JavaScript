function f$2A_Fi$3y(){//method() -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(0);
            var r1 = r2;//assign %1 = %2  : int
            var r0 = r1;//assign %0 = %1  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r3 = new WyJS.Integer(10);
            if(WyJS.gt(r0, r3, true)){
               control_flow_pc = 0;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = new WyJS.Integer(5);
            if(WyJS.equals(r0, r4, false)){
               control_flow_pc = 1;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -3;
               control_flow_repeat = true;
               break;
            }
         case -3:
            var r5 = new WyJS.Integer(7);
            var r0 = r5;//assign %0 = %5  : int
            control_flow_pc = 2;
            control_flow_repeat = true;
            break;
         case 1:
            var r6 = new WyJS.Integer(8);
            if(WyJS.equals(r0, r6, false)){
               control_flow_pc = 2;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -4;
               control_flow_repeat = true;
               break;
            }
         case -4:
            var r7 = new WyJS.Integer(10);
            var r0 = r7;//assign %0 = %7  : int
            control_flow_pc = 2;
            control_flow_repeat = true;
            break;
         case 2:
            var r8 = new WyJS.Integer(1);
            var r9 = r0.add(r8);//add %9 = %0, %8 : int
            var r0 = r9;//assign %0 = %9  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 0:
            return r0;//return %0 : int
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
            var r0 = f$2A_Fi$3y();//invoke %0 = () whilevalid2:f : method() -> int
            var r1 = new WyJS.Integer(10);
            if(WyJS.equals(r0, r1, true)){
               control_flow_pc = 3;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 3:
      }
   }
}

