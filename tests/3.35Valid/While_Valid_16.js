function inc(r0){//function([While_Valid_16:nat]) -> [While_Valid_16:nat]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = new WyJS.Integer(0);
            r2 = r3;//assign %2 = %3  : int
            r1 = r2;//assign %1 = %2  : int
            while(true){//loop (%0, %1, %4, %5, %7, %8, %9, %10, %11, %12, %13, %14, %15, %16, %17, %18, %19)
               var r11 = r0.length;//lengthof %11 = %0 : [int]
               if(WyJS.gt(r1, r11, true)){
                  control_flow_pc = 558;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r12 = r0.getValue(r1);
               var r13 = new WyJS.Integer(1);
               var r14 = r12.add(r13);//add %14 = %12, %13 : int
               var r15 = r0.getValue(r1);
               var r16 = new WyJS.Integer(1);
               var r17 = r15.add(r16);//add %17 = %15, %16 : int
               r0.setValue(r1, r17);//update %0[%1] = %17 : [int] -> [int]
               var r18 = new WyJS.Integer(1);
               var r19 = r1.add(r18);//add %19 = %1, %18 : int
               r1 = r19;//assign %1 = %19  : int
            }
         case 558:
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
            var r3 = new WyJS.Integer(3);
            var r4 = new WyJS.Integer(5);
            var r5 = new WyJS.Integer(7);
            var r6 = new WyJS.Integer(9);
            var r7 = new WyJS.Integer(11);
            var r8 = new WyJS.List([r2, r3, r4, r5, r6, r7], new WyJS.List('int'));
            r1 = r8.clone();//assign %1 = %8  : [int]
            r0 = r1.clone();//assign %0 = %1  : [int]
            var r9 = inc(r0);//invoke %9 = (%0) While_Valid_16:inc : function([While_Valid_16:nat]) -> [While_Valid_16:nat]
            r0 = r9.clone();//assign %0 = %9  : [int]
            var r10 = new WyJS.Integer(2);
            var r11 = new WyJS.Integer(4);
            var r12 = new WyJS.Integer(6);
            var r13 = new WyJS.Integer(8);
            var r14 = new WyJS.Integer(10);
            var r15 = new WyJS.Integer(12);
            var r16 = new WyJS.List([r10, r11, r12, r13, r14, r15], new WyJS.List('int'));
            if(WyJS.equals(r0, r16, true)){
               control_flow_pc = 559;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 559:
      }
   }
}

