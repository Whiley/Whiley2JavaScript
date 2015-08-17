function f$Y9bF19$W(r0){//function(bool) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : bool
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
            var r2 = true;
            var r1 = r2;//assign %1 = %2  : bool
            var r0 = r1;//assign %0 = %1  : bool
            var r3 = f$Y9bF19$W(r0);//invoke %3 = (%0) BoolFun_Valid_1:f : function(bool) -> bool
            var r4 = true;
            if(r3 === r4){
               control_flow_pc = 1175;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1175:
            var r5 = false;
            var r0 = r5;//assign %0 = %5  : bool
            var r6 = f$Y9bF19$W(r0);//invoke %6 = (%0) BoolFun_Valid_1:f : function(bool) -> bool
            var r7 = true;
            if(r6 === r7){
               control_flow_pc = 1176;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1177;
            control_flow_repeat = true;
            continue outer;//goto label1177
         case 1176:
            throw {name: 'Assert Failed', message: 'fail'}
         case 1177:
      }
   }
}

