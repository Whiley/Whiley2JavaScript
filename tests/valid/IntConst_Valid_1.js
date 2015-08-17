function test$1A_7VkE(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(1234567891011121314151617181920);
            var r1 = r2;//assign %1 = %2  : int
            var r0 = r1;//assign %0 = %1  : int
            var r3 = new WyJS.Integer(1);
            var r4 = r0.add(r3);//add %4 = %0, %3 : int
            var r0 = r4;//assign %0 = %4  : int
            var r5 = new WyJS.Integer(1234567891011121314151617181921);
            if(WyJS.equals(r0, r5, true)){
               control_flow_pc = 1281;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1281:
      }
   }
}

