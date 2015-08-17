function f$Z9_FsNBVk4D(){//function() -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = new WyJS.Integer(1);
            var r1 = new WyJS.Integer(2);
            var r2 = new WyJS.List([r0, r1], new WyJS.Type.List(new WyJS.Type.Int()));
            return r2;//return %2 : [int]
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
            var r3 = f$Z9_FsNBVk4D();//invoke %3 = () ListAssign_Valid_9:f : function() -> [int]
            r2 = r3.clone();//assign %2 = %3  : [int]
            r0 = r2.clone();//assign %0 = %2  : [int]
            var r5 = f$Z9_FsNBVk4D();//invoke %5 = () ListAssign_Valid_9:f : function() -> [int]
            r4 = r5.clone();//assign %4 = %5  : [int]
            r1 = r4.clone();//assign %1 = %4  : [int]
            var r6 = new WyJS.Integer(0);
            var r7 = new WyJS.Integer(0);
            var r8 = new WyJS.Integer(0);
            r1.setValue(r7, r8);
            var r9 = new WyJS.Integer(0);
            var r10 = r0.getValue(r9);
            var r11 = new WyJS.Integer(1);
            if(WyJS.equals(r10, r11, true)){
               control_flow_pc = 2422;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2422:
            var r12 = new WyJS.Integer(1);
            var r13 = r0.getValue(r12);
            var r14 = new WyJS.Integer(2);
            if(WyJS.equals(r13, r14, true)){
               control_flow_pc = 2423;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2423:
            var r15 = new WyJS.Integer(0);
            var r16 = r1.getValue(r15);
            var r17 = new WyJS.Integer(0);
            if(WyJS.equals(r16, r17, true)){
               control_flow_pc = 2424;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2424:
            var r18 = new WyJS.Integer(1);
            var r19 = r1.getValue(r18);
            var r20 = new WyJS.Integer(2);
            if(WyJS.equals(r19, r20, true)){
               control_flow_pc = 2425;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2425:
      }
   }
}

