function g(r0){//function([ConstrainedList_Valid_19:nat]) -> [ConstrainedList_Valid_19:nat]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : [int]
      }
   }
}

function f(r0){//function([ConstrainedList_Valid_19:nat]) -> [ConstrainedList_Valid_19:nat]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = g(r0);//invoke %1 = (%0) ConstrainedList_Valid_19:g : function([ConstrainedList_Valid_19:nat]) -> [ConstrainedList_Valid_19:nat]
            return r1;//return %1 : [int]
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
            var r3 = new WyJS.Integer(1);
            var r4 = new WyJS.Integer(2);
            var r5 = new WyJS.Integer(3);
            var r6 = new WyJS.List([r3, r4, r5]);
            var r2 = f(r6);//invoke %2 = (%6) ConstrainedList_Valid_19:f : function([ConstrainedList_Valid_19:nat]) -> [ConstrainedList_Valid_19:nat]
            var r1 = r2.clone();//assign %1 = %2  : [int]
            var r0 = r1.clone();//assign %0 = %1  : [int]
            var r7 = new WyJS.Integer(1);
            var r8 = new WyJS.Integer(2);
            var r9 = new WyJS.Integer(3);
            var r10 = new WyJS.List([r7, r8, r9]);
            if(WyJS.equals(r0, r10, true)){
               control_flow_pc = 169;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 169:
      }
   }
}

