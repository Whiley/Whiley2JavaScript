function f(r0){//function([int]) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(0);
            var r2 = r0[r1];
            var r3 = new WyJS.Integer(0);
            if(WyJS.equals(r2, r3, true)){
               control_flow_pc = 1759;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1759:
            return r0;//return %0 : [int]
      }
   }
}

function g(r0){//function([int]) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.length;//lengthof %1 = %0 : [int]
            var r2 = new WyJS.Integer(0);
            if(WyJS.gt(r1, r2, false)){
               control_flow_pc = 1761;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1761:
            return r0;//return %0 : [int]
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
            var r1 = new WyJS.Integer(0);
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(2);
            var r4 = [r1, r2, r3];
            var r0 = f(r4);//invoke %0 = (%4) ConstrainedList_Valid_7:f : function([int]) -> [int]
            var r5 = new WyJS.Integer(0);
            var r6 = new WyJS.Integer(1);
            var r7 = new WyJS.Integer(2);
            var r8 = [r5, r6, r7];
            if(WyJS.equals(r0, r8, true)){
               control_flow_pc = 1762;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1762:
            var r10 = new WyJS.Integer(0);
            var r11 = [r10];
            var r9 = g(r11);//invoke %9 = (%11) ConstrainedList_Valid_7:g : function([int]) -> [int]
            var r12 = new WyJS.Integer(0);
            var r13 = [r12];
            if(WyJS.equals(r9, r13, true)){
               control_flow_pc = 1763;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1763:
            var r15 = new WyJS.Integer(0);
            var r16 = new WyJS.Integer(1);
            var r17 = new WyJS.Integer(2);
            var r18 = [r15, r16, r17];
            var r14 = g(r18);//invoke %14 = (%18) ConstrainedList_Valid_7:g : function([int]) -> [int]
            var r19 = new WyJS.Integer(0);
            var r20 = new WyJS.Integer(1);
            var r21 = new WyJS.Integer(2);
            var r22 = [r19, r20, r21];
            if(WyJS.equals(r14, r22, true)){
               control_flow_pc = 1764;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1764:
      }
   }
}

