function indexOf(r0, r1){//function([int],int) -> int|null
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(0);
            r3 = r4;//assign %3 = %4  : int
            r2 = r3;//assign %2 = %3  : int
            while(true){//loop (%2, %5, %6, %7, %8, %9)
               var r6 = r0.length;//lengthof %6 = %0 : [int]
               if(WyJS.gt(r2, r6, true)){
                  control_flow_pc = 600;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r7 = r0.getValue(r2);
               if(WyJS.equals(r7, r1, false)){
                  var r8 = new WyJS.Integer(1);
                  var r9 = r2.add(r8);//add %9 = %2, %8 : int
                  r2 = r9;//assign %2 = %9  : int
                  continue;
               }
               return r2;//return %2 : null|int
            }
         case 600:
            var r10 = null;/n            return r10;//return %10 : null|int
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
            var r2 = new WyJS.Integer(2);
            var r3 = new WyJS.Integer(3);
            var r4 = new WyJS.List([r1, r2, r3], new WyJS.List('int'));
            var r5 = new WyJS.Integer(1);
            var r0 = indexOf(r4, r5);//invoke %0 = (%4, %5) While_Valid_24:indexOf : function([int],int) -> int|null
            var r6 = new WyJS.Integer(0);
            if(WyJS.equals(r0, r6, true)){
               control_flow_pc = 602;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 602:
            var r8 = new WyJS.Integer(1);
            var r9 = new WyJS.Integer(2);
            var r10 = new WyJS.Integer(3);
            var r11 = new WyJS.List([r8, r9, r10], new WyJS.List('int'));
            var r12 = new WyJS.Integer(0);
            var r7 = indexOf(r11, r12);//invoke %7 = (%11, %12) While_Valid_24:indexOf : function([int],int) -> int|null
            var r13 = null;/n            if(WyJS.equals(r7, r13, true)){
               control_flow_pc = 603;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 603:
      }
   }
}

