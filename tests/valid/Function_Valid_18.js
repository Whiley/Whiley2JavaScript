function abs$Z9bFaL1d$VG$J6$i0kN$F6$d0kQ$s5$U0VK$35$g0FP$F5$U0FB$Vn$VQ$35$o0WA$(r0){//function(int) -> Function_Valid_18:nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(0);
            if(WyJS.lt(r0, r1, false)){
               control_flow_pc = 313;
               control_flow_repeat = true;
               continue outer;
            }
            return r0;//return %0 : int
            control_flow_pc = 314;
            control_flow_repeat = true;
            continue outer;//goto label314
         case 313:
            var r2 = r0.neg();//neg %2 = %0 : int
            return r2;//return %2 : int
         case 314:
            return;
      }
   }
}

function nop$Y9bFXL1d$VG$J6$i0kN$F6$d0kQ$s5$U0VK$35$g0FP$F5$U0FB$Vn$VQ$35$o0W(r0){//function(Function_Valid_18:nat) -> Function_Valid_18:nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = abs$Z9bFaL1d$VG$J6$i0kN$F6$d0kQ$s5$U0VK$35$g0FP$F5$U0FB$Vn$VQ$35$o0WA$(r0);//invoke %1 = (%0) Function_Valid_18:abs : function(int) -> Function_Valid_18:nat
            return r1;//return %1 : int
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
            var r3 = new WyJS.Integer(123);
            var r4 = r3.neg();//neg %4 = %3 : int
            var r2 = abs$Z9bFaL1d$VG$J6$i0kN$F6$d0kQ$s5$U0VK$35$g0FP$F5$U0FB$Vn$VQ$35$o0WA$(r4);//invoke %2 = (%4) Function_Valid_18:abs : function(int) -> Function_Valid_18:nat
            var r1 = r2;//assign %1 = %2  : int
            var r0 = r1;//assign %0 = %1  : int
            var r5 = new WyJS.Integer(123);
            if(WyJS.equals(r0, r5, true)){
               control_flow_pc = 316;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 316:
            var r7 = new WyJS.Integer(1);
            var r6 = nop$Y9bFXL1d$VG$J6$i0kN$F6$d0kQ$s5$U0VK$35$g0FP$F5$U0FB$Vn$VQ$35$o0W(r7);//invoke %6 = (%7) Function_Valid_18:nop : function(Function_Valid_18:nat) -> Function_Valid_18:nat
            var r0 = r6;//assign %0 = %6  : int
            var r8 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r8, true)){
               control_flow_pc = 317;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 317:
            return;
      }
   }
}

