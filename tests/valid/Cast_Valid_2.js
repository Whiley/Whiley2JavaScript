function f$a9bF5D537klcVGs1(r0){//function([int]) -> [real]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = WyJS.Cast(r0, new WyJS.Type.List(new WyJS.Type.Real()));
            return r1;//return %1 : [real]
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
            var r1 = new WyJS.Integer(1);
            var r2 = new WyJS.Integer(2);
            var r3 = new WyJS.Integer(3);
            var r4 = new WyJS.List([r1, r2, r3], new WyJS.Type.List(new WyJS.Type.Int()));
            var r0 = f$a9bF5D537klcVGs1(r4);//invoke %0 = (%4) Cast_Valid_2:f : function([int]) -> [real]
            var r5 = new WyJS.Real(1.0);
            var r6 = new WyJS.Real(2.0);
            var r7 = new WyJS.Real(3.0);
            var r8 = new WyJS.List([r5, r6, r7], new WyJS.Type.List(new WyJS.Type.Real()));
            if(WyJS.equals(r0, r8, true)){
               control_flow_pc = 2011;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2011:
      }
   }
}

