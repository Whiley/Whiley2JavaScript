function f$Z9bFaA$0D5Wz(r0){//function([int]) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.equals(r0, new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void())), true)){
               control_flow_pc = 1350;
               control_flow_repeat = true;
               continue outer;
            }
             else if(WyJS.equals(r0, new WyJS.List([new WyJS.Integer(1)], new WyJS.Type.List(new WyJS.Type.Int())), true)){
               control_flow_pc = 1351;
               control_flow_repeat = true;
               continue outer;
            }
            else{
               control_flow_pc = 1349;
               control_flow_repeat = true;
               continue outer;
            }
         case 1350:
            var r1 = new WyJS.Integer(0);
            return r1;//return %1 : int
            control_flow_pc = 1349;
            control_flow_repeat = true;
            continue outer;//goto label1349
         case 1351:
            var r2 = new WyJS.Integer(1);
            var r3 = r2.neg();//neg %3 = %2 : int
            return r3;//return %3 : int
            control_flow_pc = 1349;
            control_flow_repeat = true;
            continue outer;//goto label1349
         case 1349:
            var r4 = new WyJS.Integer(10);
            return r4;//return %4 : int
            return;
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
            var r1 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r0 = f$Z9bFaA$0D5Wz(r1);//invoke %0 = (%1) Switch_Valid_12:f : function([int]) -> int
            var r2 = new WyJS.Integer(0);
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 1352;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1352:
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.List([r4], new WyJS.Type.List(new WyJS.Type.Int()));
            var r3 = f$Z9bFaA$0D5Wz(r5);//invoke %3 = (%5) Switch_Valid_12:f : function([int]) -> int
            var r6 = new WyJS.Integer(1);
            var r7 = r6.neg();//neg %7 = %6 : int
            if(WyJS.equals(r3, r7, true)){
               control_flow_pc = 1353;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1353:
            var r9 = new WyJS.Integer(3);
            var r10 = new WyJS.List([r9], new WyJS.Type.List(new WyJS.Type.Int()));
            var r8 = f$Z9bFaA$0D5Wz(r10);//invoke %8 = (%10) Switch_Valid_12:f : function([int]) -> int
            var r11 = new WyJS.Integer(10);
            if(WyJS.equals(r8, r11, true)){
               control_flow_pc = 1354;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1354:
            var r13 = new WyJS.Integer(1);
            var r14 = new WyJS.Integer(2);
            var r15 = new WyJS.Integer(3);
            var r16 = new WyJS.List([r13, r14, r15], new WyJS.Type.List(new WyJS.Type.Int()));
            var r12 = f$Z9bFaA$0D5Wz(r16);//invoke %12 = (%16) Switch_Valid_12:f : function([int]) -> int
            var r17 = new WyJS.Integer(10);
            if(WyJS.equals(r12, r17, true)){
               control_flow_pc = 1355;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1355:
            return;
      }
   }
}

