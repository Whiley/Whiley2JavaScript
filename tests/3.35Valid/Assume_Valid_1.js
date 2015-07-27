function sum(r0){//function([Assume_Valid_1:nat]) -> Assume_Valid_1:nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(0);
            r3 = r4;//assign %3 = %4  : int
            r1 = r3;//assign %1 = %3  : int
            var r6 = new WyJS.Integer(0);
            r5 = r6;//assign %5 = %6  : int
            r2 = r5;//assign %2 = %5  : int
            while(true){//loop (%1, %2, %7, %8, %9, %10, %11, %12, %13)
               var r8 = r0.length;//lengthof %8 = %0 : [int]
               if(WyJS.gt(r2, r8, true)){
                  control_flow_pc = 2404;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r10 = r0.getValue(r2);
               var r11 = r1.add(r10);//add %11 = %1, %10 : int
               r1 = r11;//assign %1 = %11  : int
               var r12 = new WyJS.Integer(1);
               var r13 = r2.add(r12);//add %13 = %2, %12 : int
               r2 = r13;//assign %2 = %13  : int
            }
         case 2404:
            return r1;//return %1 : int
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
            var r3 = new WyJS.Integer(0);
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.Integer(2);
            var r6 = new WyJS.Integer(3);
            var r7 = new WyJS.List([r3, r4, r5, r6], new WyJS.List('int'));
            var r2 = sum(r7);//invoke %2 = (%7) Assume_Valid_1:sum : function([Assume_Valid_1:nat]) -> Assume_Valid_1:nat
            r1 = r2;//assign %1 = %2  : int
            r0 = r1;//assign %0 = %1  : int
            var r8 = new WyJS.Integer(6);
            if(WyJS.equals(r0, r8, true)){
               control_flow_pc = 2406;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2406:
      }
   }
}

