function f$Z9bFaL1T$kJ$R6$d0$S$B5$c0kM$N4$W0$Q$Z5$Z0kM$3n$VQ$35$o0WA$(r0){//function(int) -> Switch_Valid_1:nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.equals(r0, new WyJS.Integer(1), true)){
               control_flow_pc = 1173;
               control_flow_repeat = true;
               continue outer;
            }
             else if(WyJS.equals(r0, new WyJS.Integer(-1), true)){
               control_flow_pc = 1174;
               control_flow_repeat = true;
               continue outer;
            }
            else{
               control_flow_pc = 1172;
               control_flow_repeat = true;
               continue outer;
            }
         case 1173:
            var r1 = new WyJS.Integer(1);
            var r2 = r0.sub(r1);//sub %2 = %0, %1 : int
            return r2;//return %2 : int
            control_flow_pc = 1172;
            control_flow_repeat = true;
            continue outer;//goto label1172
         case 1174:
            var r3 = new WyJS.Integer(1);
            var r4 = r0.add(r3);//add %4 = %0, %3 : int
            return r4;//return %4 : int
            control_flow_pc = 1172;
            control_flow_repeat = true;
            continue outer;//goto label1172
         case 1172:
            var r5 = new WyJS.Integer(1);
            return r5;//return %5 : int
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
            var r1 = new WyJS.Integer(2);
            var r0 = f$Z9bFaL1T$kJ$R6$d0$S$B5$c0kM$N4$W0$Q$Z5$Z0kM$3n$VQ$35$o0WA$(r1);//invoke %0 = (%1) Switch_Valid_1:f : function(int) -> Switch_Valid_1:nat
            var r2 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 1175;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1175:
            var r4 = new WyJS.Integer(1);
            var r3 = f$Z9bFaL1T$kJ$R6$d0$S$B5$c0kM$N4$W0$Q$Z5$Z0kM$3n$VQ$35$o0WA$(r4);//invoke %3 = (%4) Switch_Valid_1:f : function(int) -> Switch_Valid_1:nat
            var r5 = new WyJS.Integer(0);
            if(WyJS.equals(r3, r5, true)){
               control_flow_pc = 1176;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1176:
            var r7 = new WyJS.Integer(0);
            var r6 = f$Z9bFaL1T$kJ$R6$d0$S$B5$c0kM$N4$W0$Q$Z5$Z0kM$3n$VQ$35$o0WA$(r7);//invoke %6 = (%7) Switch_Valid_1:f : function(int) -> Switch_Valid_1:nat
            var r8 = new WyJS.Integer(1);
            if(WyJS.equals(r6, r8, true)){
               control_flow_pc = 1177;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1177:
            var r10 = new WyJS.Integer(1);
            var r11 = r10.neg();//neg %11 = %10 : int
            var r9 = f$Z9bFaL1T$kJ$R6$d0$S$B5$c0kM$N4$W0$Q$Z5$Z0kM$3n$VQ$35$o0WA$(r11);//invoke %9 = (%11) Switch_Valid_1:f : function(int) -> Switch_Valid_1:nat
            var r12 = new WyJS.Integer(0);
            if(WyJS.equals(r9, r12, true)){
               control_flow_pc = 1178;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1178:
            var r14 = new WyJS.Integer(2);
            var r15 = r14.neg();//neg %15 = %14 : int
            var r13 = f$Z9bFaL1T$kJ$R6$d0$S$B5$c0kM$N4$W0$Q$Z5$Z0kM$3n$VQ$35$o0WA$(r15);//invoke %13 = (%15) Switch_Valid_1:f : function(int) -> Switch_Valid_1:nat
            var r16 = new WyJS.Integer(1);
            if(WyJS.equals(r13, r16, true)){
               control_flow_pc = 1179;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1179:
            return;
      }
   }
}

