function sum$Z9bFaL1T$FF$B6$n0FS$o5$_0kM$N4$W0$Q$Z5$Z0kM$3n$VQ$35$o00D5Wz(r0){//function([Assume_Valid_1:nat]) -> Assume_Valid_1:nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(0);
            var r3 = r4;//assign %3 = %4  : int
            var r1 = r3;//assign %1 = %3  : int
            var r6 = new WyJS.Integer(0);
            var r5 = r6;//assign %5 = %6  : int
            var r2 = r5;//assign %2 = %5  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r7 = new WyJS.Integer(0);
            if(WyJS.gt(r1, r7, true)){
               control_flow_pc = 2438;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2438:
            return;
            var r8 = r0.length();//lengthof %8 = %0 : [int]
            if(WyJS.gt(r2, r8, true)){
               control_flow_pc = 2439;
               control_flow_repeat = true;
               continue outer;
            }
            var r9 = new WyJS.Integer(0);
            if(WyJS.gt(r1, r9, true)){
               control_flow_pc = 2440;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2440:
            var r10 = r0.getValue(r2);
            var r11 = r1.add(r10);//add %11 = %1, %10 : int
            var r1 = r11;//assign %1 = %11  : int
            var r12 = new WyJS.Integer(1);
            var r13 = r2.add(r12);//add %13 = %2, %12 : int
            var r2 = r13;//assign %2 = %13  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 2439:
            return r1;//return %1 : int
            return;
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
            var r3 = new WyJS.Integer(0);
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.Integer(2);
            var r6 = new WyJS.Integer(3);
            var r7 = new WyJS.List([r3, r4, r5, r6], new WyJS.Type.List(new WyJS.Type.Int()));
            var r2 = sum$Z9bFaL1T$FF$B6$n0FS$o5$_0kM$N4$W0$Q$Z5$Z0kM$3n$VQ$35$o00D5Wz(r7);//invoke %2 = (%7) Assume_Valid_1:sum : function([Assume_Valid_1:nat]) -> Assume_Valid_1:nat
            var r1 = r2;//assign %1 = %2  : int
            var r0 = r1;//assign %0 = %1  : int
            var r8 = new WyJS.Integer(6);
            if(WyJS.equals(r0, r8, true)){
               control_flow_pc = 2441;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2441:
            return;
      }
   }
}

