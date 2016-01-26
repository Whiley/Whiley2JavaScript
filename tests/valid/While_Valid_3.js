function sum$Z9bFaL1S$kK$V5$d0$Q$J5$U0VK$35$g0FP$F5$U0kB2$i0FN$F63sN3y2(r0){//function(While_Valid_3:nat[]) -> While_Valid_3:nat
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
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case -3:
            var r9 = r0.length();//lengthof %9 = %0 : int[]
            if(WyJS.gt(r1, r9, true)){
               control_flow_pc = 685;
               control_flow_repeat = true;
               continue outer;
            }
            var r10 = r0.getValue(r1);
            var r11 = r2.add(r10);//add %11 = %2, %10 : int
            var r2 = r11;//assign %2 = %11  : int
            var r12 = new WyJS.Integer(1);
            var r13 = r1.add(r12);//add %13 = %1, %12 : int
            var r1 = r13;//assign %1 = %13  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case 685:
            return r2;//return %2 : int
            return;
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
            var r2 = new WyJS.Integer(0);
            var r3 = WyJS.ArrayGen(r1, r2, new WyJS.Type.Array(new WyJS.Type.Int()));
            var r0 = sum$Z9bFaL1S$kK$V5$d0$Q$J5$U0VK$35$g0FP$F5$U0kB2$i0FN$F63sN3y2(r3);//invoke %0 = (%3) While_Valid_3:sum : function(While_Valid_3:nat[]) -> While_Valid_3:nat
            var r4 = new WyJS.Integer(0);
            if(WyJS.equals(r0, r4, true)){
               control_flow_pc = 686;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 686:
            var r6 = new WyJS.Integer(1);
            var r7 = new WyJS.Integer(2);
            var r8 = new WyJS.Integer(3);
            var r9 = new WyJS.Array([r6, r7, r8], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r5 = sum$Z9bFaL1S$kK$V5$d0$Q$J5$U0VK$35$g0FP$F5$U0kB2$i0FN$F63sN3y2(r9);//invoke %5 = (%9) While_Valid_3:sum : function(While_Valid_3:nat[]) -> While_Valid_3:nat
            var r10 = new WyJS.Integer(6);
            if(WyJS.equals(r5, r10, true)){
               control_flow_pc = 687;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 687:
            var r12 = new WyJS.Integer(12387);
            var r13 = new WyJS.Integer(98123);
            var r14 = new WyJS.Integer(12398);
            var r15 = new WyJS.Integer(12309);
            var r16 = new WyJS.Integer(0);
            var r17 = new WyJS.Array([r12, r13, r14, r15, r16], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r11 = sum$Z9bFaL1S$kK$V5$d0$Q$J5$U0VK$35$g0FP$F5$U0kB2$i0FN$F63sN3y2(r17);//invoke %11 = (%17) While_Valid_3:sum : function(While_Valid_3:nat[]) -> While_Valid_3:nat
            var r18 = new WyJS.Integer(135217);
            if(WyJS.equals(r11, r18, true)){
               control_flow_pc = 688;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 688:
            return;
      }
   }
}

