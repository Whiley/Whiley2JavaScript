function f(r0){//function([int]) -> ConstrainedList_Valid_14:wierd
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(1);
            var r2 = new WyJS.Integer(0);
            var r3 = new WyJS.Integer(1);
            r0[r2] = r3;//update %0[%2] = %3 : [int] -> [int]
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
            var r1 = new WyJS.Integer(1);
            var r2 = r1.neg();//neg %2 = %1 : int
            var r3 = new WyJS.Integer(2);
            var r4 = r3.neg();//neg %4 = %3 : int
            var r5 = [r2, r4];
            var r0 = f(r5);//invoke %0 = (%5) ConstrainedList_Valid_14:f : function([int]) -> ConstrainedList_Valid_14:wierd
            var r6 = new WyJS.Integer(1);
            var r7 = new WyJS.Integer(2);
            var r8 = r7.neg();//neg %8 = %7 : int
            var r9 = [r6, r8];
            if(WyJS.equals(r0, r9, true)){
               control_flow_pc = 156;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 156:
      }
   }
}

