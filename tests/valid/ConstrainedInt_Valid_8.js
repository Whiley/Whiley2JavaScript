function f$Z9bFaA$WL1i$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$80VQ$F6$U0VK$35$g0FP$F5$U0$D2$i0FS$o5(r0){//function(ConstrainedInt_Valid_8:num) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = r0;//assign %2 = %0  : int
            var r1 = r2;//assign %1 = %2  : int
            return r1;//return %1 : int
            return;
      }
   }
}

function contains$_9dF5X1FVY0t12(r0, r1){//function(int[],int) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(0);
            var r3 = r4;//assign %3 = %4  : int
            var r2 = r3;//assign %2 = %3  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r6 = r0.length();//lengthof %6 = %0 : int[]
            if(WyJS.gt(r2, r6, true)){
               control_flow_pc = 462;
               control_flow_repeat = true;
               continue outer;
            }
            var r7 = r0.getValue(r2);
            if(WyJS.equals(r7, r1, false)){
               control_flow_pc = 463;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -3;
               control_flow_repeat = true;
               break;
            }
         case -3:
            var r8 = true;
            return r8;//return %8 : bool
            control_flow_pc = 463;
            control_flow_repeat = true;
            break;
         case 463:
            var r9 = new WyJS.Integer(1);
            var r10 = r2.add(r9);//add %10 = %2, %9 : int
            var r2 = r10;//assign %2 = %10  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 462:
            var r11 = false;
            return r11;//return %11 : bool
            return;
      }
   }
}

function g$_9dFas1FVY0d_VA$B3$j0VQ$B6$o0VR$35$d0VQ$J5$Z0FH$s5$o0kM$N4$W0$Q$Z5$Z0kM$VY0VN$Z5$b0VQ$J6$hC(r0, r1){//function(ConstrainedInt_Valid_8:bignum[],int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = contains$_9dF5X1FVY0t12(r0, r1);//invoke %2 = (%0, %1) ConstrainedInt_Valid_8:contains : function(int[],int) -> bool
            var r3 = true;
            if(r2 === r3){
               control_flow_pc = 464;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 465;
            control_flow_repeat = true;
            continue outer;//goto label465
         case 464:
            var r5 = new WyJS.Integer(1);
            var r6 = new WyJS.Integer(2);
            var r7 = new WyJS.Integer(3);
            var r8 = new WyJS.Integer(4);
            var r9 = new WyJS.List([r5, r6, r7, r8], new WyJS.Type.List(new WyJS.Type.Int()));
            var r4 = contains$_9dF5X1FVY0t12(r9, r1);//invoke %4 = (%9, %1) ConstrainedInt_Valid_8:contains : function(int[],int) -> bool
            var r10 = true;
            if(r4 === r10){
               control_flow_pc = 466;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 465;
            control_flow_repeat = true;
            continue outer;//goto label465
         case 466:
            var r11 = f$Z9bFaA$WL1i$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$80VQ$F6$U0VK$35$g0FP$F5$U0$D2$i0FS$o5(r1);//invoke %11 = (%1) ConstrainedInt_Valid_8:f : function(ConstrainedInt_Valid_8:num) -> int
            return r11;//return %11 : int
            control_flow_pc = 467;
            control_flow_repeat = true;
            continue outer;//goto label467
         case 465:
            var r12 = new WyJS.Integer(1);
            var r13 = r12.neg();//neg %13 = %12 : int
            return r13;//return %13 : int
         case 467:
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
            var r1 = new WyJS.Integer(1);
            var r2 = new WyJS.Integer(2);
            var r3 = new WyJS.Integer(3);
            var r4 = new WyJS.Integer(5);
            var r5 = new WyJS.List([r1, r2, r3, r4], new WyJS.Type.List(new WyJS.Type.Int()));
            var r6 = new WyJS.Integer(3);
            var r0 = g$_9dFas1FVY0d_VA$B3$j0VQ$B6$o0VR$35$d0VQ$J5$Z0FH$s5$o0kM$N4$W0$Q$Z5$Z0kM$VY0VN$Z5$b0VQ$J6$hC(r5, r6);//invoke %0 = (%5, %6) ConstrainedInt_Valid_8:g : function(ConstrainedInt_Valid_8:bignum[],int) -> int
            var r7 = new WyJS.Integer(3);
            if(WyJS.equals(r0, r7, true)){
               control_flow_pc = 468;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 468:
            return;
      }
   }
}

