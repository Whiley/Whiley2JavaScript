function f(r0){//function([int]) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.length;//lengthof %1 = %0 : [int]
            var r2 = new WyJS.Integer(0);
            if(WyJS.equals(r1, r2, false)){
               control_flow_pc = 216;
               control_flow_repeat = true;
               continue outer;
            }
            return r0;//return %0 : [int]
            control_flow_pc = 217;
            control_flow_repeat = true;
            continue outer;//goto label217
         case 216:
            var r3 = [];
            return r3;//return %3 : [int]
         case 217:
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
            var r2 = new WyJS.Integer(5);
            var r3 = new WyJS.Integer(4);
            var r4 = new WyJS.Integer(6);
            var r5 = new WyJS.Integer(3);
            var r6 = new WyJS.Integer(7);
            var r7 = new WyJS.Integer(2);
            var r8 = new WyJS.Integer(8);
            var r9 = new WyJS.Integer(1);
            var r10 = [r2, r3, r4, r5, r6, r7, r8, r9];
            var r1 = r10;//assign %1 = %10  : [int]
            var r0 = r1;//assign %0 = %1  : [int]
            var r11 = f(r0);//invoke %11 = (%0) ConstrainedList_Valid_26:f : function([int]) -> [int]
            var r12 = [];
            if(WyJS.equals(r11, r12, true)){
               control_flow_pc = 218;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 218:
            var r14 = [];
            var r13 = f(r14);//invoke %13 = (%14) ConstrainedList_Valid_26:f : function([int]) -> [int]
            var r15 = [];
            if(WyJS.equals(r13, r15, true)){
               control_flow_pc = 219;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 219:
      }
   }
}

