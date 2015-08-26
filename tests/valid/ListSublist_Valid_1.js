function sum$Z9bFaA$WL1f$$I$Z5$n0$S$B4$p0VN$k5$d0kR$F6$U0VK$35$g0FP$F5$U0FBP$$R$w5$n0FP$s5$o0$Q$Z5$n0$SE(r0){//function(ListSublist_Valid_1:posintlist) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = r0.length();//lengthof %2 = %0 : [int]
            var r3 = new WyJS.Integer(0);
            if(WyJS.equals(r2, r3, false)){
               control_flow_pc = 1421;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = new WyJS.Integer(0);
            return r4;//return %4 : int
            control_flow_pc = 1422;
            control_flow_repeat = true;
            continue outer;//goto label1422
         case 1421:
            var r6 = new WyJS.Integer(1);
            var r7 = r0.length();//lengthof %7 = %0 : [int]
            var r8 = r0.sublist(r6, r7);
            var r5 = r8.clone(new WyJS.Type.Int());//assign %5 = %8  : [int]
            var r1 = r5.clone(new WyJS.Type.Int());//assign %1 = %5  : [int]
            var r9 = new WyJS.Integer(0);
            var r10 = r0.getValue(r9);
            var r11 = sum$Z9bFaA$WL1f$$I$Z5$n0$S$B4$p0VN$k5$d0kR$F6$U0VK$35$g0FP$F5$U0FBP$$R$w5$n0FP$s5$o0$Q$Z5$n0$SE(r1);//invoke %11 = (%1) ListSublist_Valid_1:sum : function(ListSublist_Valid_1:posintlist) -> int
            var r12 = r10.add(r11);//add %12 = %10, %11 : int
            return r12;//return %12 : int
         case 1422:
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
            var r3 = new WyJS.Integer(1);
            var r4 = new WyJS.Integer(2);
            var r5 = new WyJS.Integer(3);
            var r6 = new WyJS.Integer(4);
            var r7 = new WyJS.Integer(5);
            var r8 = new WyJS.Integer(6);
            var r9 = new WyJS.Integer(7);
            var r10 = new WyJS.List([r3, r4, r5, r6, r7, r8, r9], new WyJS.Type.List(new WyJS.Type.Int()));
            var r2 = sum$Z9bFaA$WL1f$$I$Z5$n0$S$B4$p0VN$k5$d0kR$F6$U0VK$35$g0FP$F5$U0FBP$$R$w5$n0FP$s5$o0$Q$Z5$n0$SE(r10);//invoke %2 = (%10) ListSublist_Valid_1:sum : function(ListSublist_Valid_1:posintlist) -> int
            var r1 = r2;//assign %1 = %2  : int
            var r0 = r1;//assign %0 = %1  : int
            var r11 = new WyJS.Integer(28);
            if(WyJS.equals(r0, r11, true)){
               control_flow_pc = 1423;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1423:
            return;
      }
   }
}

