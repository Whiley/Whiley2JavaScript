function abs$a9bF5D537klcoHs4$51Vr$kC$a2$u$FD$12Vo$kC$92$m$V8$H2Vt$VD$y1$f$7B$N2Vo$VB$y1$O5$R2Vk$ViAw(r0){//function(int[]) -> ConstrainedList_Valid_2:nat[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(0);
            var r1 = abs$a9dF5XY001RB9h3T0VW$sC$R2Vt$VD$Z2Vk$7C$R2Vm$VB$N1Vo$ND$c2Vj$k9$12$q$7C$72Vj$Fa0$r$7B$cv1(r0, r2);//invoke %1 = (%0, %2) ConstrainedList_Valid_2:abs : function(int[],ConstrainedList_Valid_2:nat) -> ConstrainedList_Valid_2:nat[]
            return r1;//return %1 : int[]
            return;
      }
   }
}

function abs$a9dF5XY001RB9h3T0VW$sC$R2Vt$VD$Z2Vk$7C$R2Vm$VB$N1Vo$ND$c2Vj$k9$12$q$7C$72Vj$Fa0$r$7B$cv1(r0, r1){//function(int[],ConstrainedList_Valid_2:nat) -> ConstrainedList_Valid_2:nat[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = r0.length();//lengthof %2 = %0 : int[]
            if(WyJS.equals(r1, r2, false)){
               control_flow_pc = 935;
               control_flow_repeat = true;
               continue outer;
            }
            return r0;//return %0 : int[]
            control_flow_pc = 936;
            control_flow_repeat = true;
            continue outer;//goto label936
         case 935:
            var r4 = r0.getValue(r1);
            var r3 = abs$Z9bFaL1j$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$B0FP$B6$o0kM$N4$W0$Q$Z5$Z0kM$7n$VQ$35$o0WA$(r4);//invoke %3 = (%4) ConstrainedList_Valid_2:abs : function(int) -> ConstrainedList_Valid_2:nat
            var r6 = r0.getValue(r1);
            var r5 = abs$Z9bFaL1j$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$B0FP$B6$o0kM$N4$W0$Q$Z5$Z0kM$7n$VQ$35$o0WA$(r6);//invoke %5 = (%6) ConstrainedList_Valid_2:abs : function(int) -> ConstrainedList_Valid_2:nat
            r0.setValue(r1, r5);
            var r8 = new WyJS.Integer(1);
            var r9 = r1.add(r8);//add %9 = %1, %8 : int
            var r7 = abs$a9dF5XY001RB9h3T0VW$sC$R2Vt$VD$Z2Vk$7C$R2Vm$VB$N1Vo$ND$c2Vj$k9$12$q$7C$72Vj$Fa0$r$7B$cv1(r0, r9);//invoke %7 = (%0, %9) ConstrainedList_Valid_2:abs : function(int[],ConstrainedList_Valid_2:nat) -> ConstrainedList_Valid_2:nat[]
            return r7;//return %7 : int[]
         case 936:
            return;
      }
   }
}

function abs$Z9bFaL1j$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$B0FP$B6$o0kM$N4$W0$Q$Z5$Z0kM$7n$VQ$35$o0WA$(r0){//function(int) -> ConstrainedList_Valid_2:nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(0);
            if(WyJS.lt(r0, r1, false)){
               control_flow_pc = 937;
               control_flow_repeat = true;
               continue outer;
            }
            return r0;//return %0 : int
            control_flow_pc = 938;
            control_flow_repeat = true;
            continue outer;//goto label938
         case 937:
            var r2 = r0.neg();//neg %2 = %0 : int
            return r2;//return %2 : int
         case 938:
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
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(3);
            var r4 = r3.neg();//neg %4 = %3 : int
            var r5 = new WyJS.Integer(5);
            var r6 = r5.neg();//neg %6 = %5 : int
            var r7 = new WyJS.Integer(7);
            var r8 = new WyJS.Integer(9);
            var r9 = r8.neg();//neg %9 = %8 : int
            var r10 = new WyJS.Integer(11);
            var r11 = new WyJS.Array([r2, r4, r6, r7, r9, r10], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r1 = r11.clone(new WyJS.Type.Int());//assign %1 = %11  : int[]
            var r0 = r1.clone(new WyJS.Type.Int());//assign %0 = %1  : int[]
            var r12 = abs$a9bF5D537klcoHs4$51Vr$kC$a2$u$FD$12Vo$kC$92$m$V8$H2Vt$VD$y1$f$7B$N2Vo$VB$y1$O5$R2Vk$ViAw(r0);//invoke %12 = (%0) ConstrainedList_Valid_2:abs : function(int[]) -> ConstrainedList_Valid_2:nat[]
            var r0 = r12.clone(new WyJS.Type.Int());//assign %0 = %12  : int[]
            var r13 = new WyJS.Integer(1);
            var r14 = new WyJS.Integer(3);
            var r15 = new WyJS.Integer(5);
            var r16 = new WyJS.Integer(7);
            var r17 = new WyJS.Integer(9);
            var r18 = new WyJS.Integer(11);
            var r19 = new WyJS.Array([r13, r14, r15, r16, r17, r18], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r19, true)){
               control_flow_pc = 939;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 939:
            return;
      }
   }
}

