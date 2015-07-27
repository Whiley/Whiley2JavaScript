function update(r0, r1, r2){//function([ConstrainedList_Valid_8:nat],ConstrainedList_Valid_8:nat,ConstrainedList_Valid_8:nat) -> [ConstrainedList_Valid_8:nat]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            r0.setValue(r1, r2);//update %0[%1] = %2 : [int] -> [int]
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
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.Integer(3);
            var r5 = new WyJS.Integer(4);
            var r6 = new WyJS.List([r2, r3, r4, r5], new WyJS.List('int'));
            r1 = r6.clone();//assign %1 = %6  : [int]
            r0 = r1.clone();//assign %0 = %1  : [int]
            var r8 = new WyJS.Integer(0);
            var r9 = new WyJS.Integer(2);
            var r7 = update(r0, r8, r9);//invoke %7 = (%0, %8, %9) ConstrainedList_Valid_8:update : function([ConstrainedList_Valid_8:nat],ConstrainedList_Valid_8:nat,ConstrainedList_Valid_8:nat) -> [ConstrainedList_Valid_8:nat]
            r0 = r7.clone();//assign %0 = %7  : [int]
            var r11 = new WyJS.Integer(1);
            var r12 = new WyJS.Integer(3);
            var r10 = update(r0, r11, r12);//invoke %10 = (%0, %11, %12) ConstrainedList_Valid_8:update : function([ConstrainedList_Valid_8:nat],ConstrainedList_Valid_8:nat,ConstrainedList_Valid_8:nat) -> [ConstrainedList_Valid_8:nat]
            r0 = r10.clone();//assign %0 = %10  : [int]
            var r14 = new WyJS.Integer(2);
            var r15 = new WyJS.Integer(4);
            var r13 = update(r0, r14, r15);//invoke %13 = (%0, %14, %15) ConstrainedList_Valid_8:update : function([ConstrainedList_Valid_8:nat],ConstrainedList_Valid_8:nat,ConstrainedList_Valid_8:nat) -> [ConstrainedList_Valid_8:nat]
            r0 = r13.clone();//assign %0 = %13  : [int]
            var r17 = new WyJS.Integer(3);
            var r18 = new WyJS.Integer(5);
            var r16 = update(r0, r17, r18);//invoke %16 = (%0, %17, %18) ConstrainedList_Valid_8:update : function([ConstrainedList_Valid_8:nat],ConstrainedList_Valid_8:nat,ConstrainedList_Valid_8:nat) -> [ConstrainedList_Valid_8:nat]
            r0 = r16.clone();//assign %0 = %16  : [int]
            var r19 = new WyJS.Integer(2);
            var r20 = new WyJS.Integer(3);
            var r21 = new WyJS.Integer(4);
            var r22 = new WyJS.Integer(5);
            var r23 = new WyJS.List([r19, r20, r21, r22], new WyJS.List('int'));
            if(WyJS.equals(r0, r23, true)){
               control_flow_pc = 1714;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1714:
      }
   }
}

