function f$Z9bF1D527RWz(r0){//function([int]) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(0);
            var r2 = r0.getValue(r1);
            var r3 = new WyJS.Integer(0);
            if(WyJS.equals(r2, r3, true)){
               control_flow_pc = 1750;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1750:
            return r0;//return %0 : [int]
      }
   }
}

function g$Z9bF1D527RWz(r0){//function([int]) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.length();//lengthof %1 = %0 : [int]
            var r2 = new WyJS.Integer(0);
            if(WyJS.gt(r1, r2, false)){
               control_flow_pc = 1752;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1752:
            return r0;//return %0 : [int]
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
            var r1 = new WyJS.Integer(0);
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.List([r1, r2, r3], new WyJS.Type.List(new WyJS.Type.Int()));
            var r0 = f$Z9bF1D527RWz(r4);//invoke %0 = (%4) ConstrainedList_Valid_7:f : function([int]) -> [int]
            var r5 = new WyJS.Integer(0);
            var r6 = new WyJS.Integer(1);
            var r7 = new WyJS.Integer(2);
            var r8 = new WyJS.List([r5, r6, r7], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r8, true)){
               control_flow_pc = 1753;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1753:
            var r10 = new WyJS.Integer(0);
            var r11 = new WyJS.List([r10], new WyJS.Type.List(new WyJS.Type.Int()));
            var r9 = g$Z9bF1D527RWz(r11);//invoke %9 = (%11) ConstrainedList_Valid_7:g : function([int]) -> [int]
            var r12 = new WyJS.Integer(0);
            var r13 = new WyJS.List([r12], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r9, r13, true)){
               control_flow_pc = 1754;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1754:
            var r15 = new WyJS.Integer(0);
            var r16 = new WyJS.Integer(1);
            var r17 = new WyJS.Integer(2);
            var r18 = new WyJS.List([r15, r16, r17], new WyJS.Type.List(new WyJS.Type.Int()));
            var r14 = g$Z9bF1D527RWz(r18);//invoke %14 = (%18) ConstrainedList_Valid_7:g : function([int]) -> [int]
            var r19 = new WyJS.Integer(0);
            var r20 = new WyJS.Integer(1);
            var r21 = new WyJS.Integer(2);
            var r22 = new WyJS.List([r19, r20, r21], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r14, r22, true)){
               control_flow_pc = 1755;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1755:
      }
   }
}

