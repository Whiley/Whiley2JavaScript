function sum$Z9bFaL1S$kK$V5$d0$Q$J5$U0VK$35$g0FP$F5$U0kB2$i0FN$F63sN3y2(r0){//function([While_Valid_3:nat]) -> While_Valid_3:nat
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
            while(true){//loop (%1, %2, %7, %8, %9, %10, %11, %12, %13)
               var r7 = new WyJS.Integer(0);
               if(WyJS.lt(r1, r7, false)){
                  control_flow_pc = 1151;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r8 = new WyJS.Integer(0);
               if(WyJS.gt(r2, r8, true)){
                  control_flow_pc = 1152;
                  control_flow_repeat = true;
                  continue outer;
               }
            case 1151:
               throw {name: 'Assert Failed', message: 'fail'}
            case 1152:
               var r9 = r0.length();//lengthof %9 = %0 : [int]
               var r10 = r0.getValue(r1);
               var r11 = r2.add(r10);//add %11 = %2, %10 : int
               var r2 = r11;//assign %2 = %11  : int
               var r12 = new WyJS.Integer(1);
               var r13 = r1.add(r12);//add %13 = %1, %12 : int
               var r1 = r13;//assign %1 = %13  : int
            }
         case 1153:
            return r2;//return %2 : int
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
            var r1 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r0 = sum$Z9bFaL1S$kK$V5$d0$Q$J5$U0VK$35$g0FP$F5$U0kB2$i0FN$F63sN3y2(r1);//invoke %0 = (%1) While_Valid_3:sum : function([While_Valid_3:nat]) -> While_Valid_3:nat
            var r2 = new WyJS.Integer(0);
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 1154;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1154:
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.Integer(2);
            var r6 = new WyJS.Integer(3);
            var r7 = new WyJS.List([r4, r5, r6], new WyJS.Type.List(new WyJS.Type.Int()));
            var r3 = sum$Z9bFaL1S$kK$V5$d0$Q$J5$U0VK$35$g0FP$F5$U0kB2$i0FN$F63sN3y2(r7);//invoke %3 = (%7) While_Valid_3:sum : function([While_Valid_3:nat]) -> While_Valid_3:nat
            var r8 = new WyJS.Integer(6);
            if(WyJS.equals(r3, r8, true)){
               control_flow_pc = 1155;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1155:
            var r10 = new WyJS.Integer(12387);
            var r11 = new WyJS.Integer(98123);
            var r12 = new WyJS.Integer(12398);
            var r13 = new WyJS.Integer(12309);
            var r14 = new WyJS.Integer(0);
            var r15 = new WyJS.List([r10, r11, r12, r13, r14], new WyJS.Type.List(new WyJS.Type.Int()));
            var r9 = sum$Z9bFaL1S$kK$V5$d0$Q$J5$U0VK$35$g0FP$F5$U0kB2$i0FN$F63sN3y2(r15);//invoke %9 = (%15) While_Valid_3:sum : function([While_Valid_3:nat]) -> While_Valid_3:nat
            var r16 = new WyJS.Integer(135217);
            if(WyJS.equals(r9, r16, true)){
               control_flow_pc = 1156;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1156:
      }
   }
}

