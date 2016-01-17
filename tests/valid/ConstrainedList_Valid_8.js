function update$Z9fFXOsNBVFAWM$N7$T2$r$ND$c2$t$7B$H2$r$cB$72$a$7C$a2$u$sA$g1Vk$VC$H2$m$sA$kO$kC$12$uy2(r0, r1, r2){//function(ConstrainedList_Valid_8:nat[],ConstrainedList_Valid_8:nat,ConstrainedList_Valid_8:nat) -> ConstrainedList_Valid_8:nat[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            r0.setValue(r1, r2);
            return r0;//return %0 : int[]
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
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.Integer(3);
            var r5 = new WyJS.Integer(4);
            var r6 = new WyJS.Array([r2, r3, r4, r5], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r1 = r6.clone(new WyJS.Type.Int());//assign %1 = %6  : int[]
            var r0 = r1.clone(new WyJS.Type.Int());//assign %0 = %1  : int[]
            var r8 = new WyJS.Integer(0);
            var r9 = new WyJS.Integer(2);
            var r7 = update$Z9fFXOsNBVFAWM$N7$T2$r$ND$c2$t$7B$H2$r$cB$72$a$7C$a2$u$sA$g1Vk$VC$H2$m$sA$kO$kC$12$uy2(r0, r8, r9);//invoke %7 = (%0, %8, %9) ConstrainedList_Valid_8:update : function(ConstrainedList_Valid_8:nat[],ConstrainedList_Valid_8:nat,ConstrainedList_Valid_8:nat) -> ConstrainedList_Valid_8:nat[]
            var r0 = r7.clone(new WyJS.Type.Int());//assign %0 = %7  : int[]
            var r11 = new WyJS.Integer(1);
            var r12 = new WyJS.Integer(3);
            var r10 = update$Z9fFXOsNBVFAWM$N7$T2$r$ND$c2$t$7B$H2$r$cB$72$a$7C$a2$u$sA$g1Vk$VC$H2$m$sA$kO$kC$12$uy2(r0, r11, r12);//invoke %10 = (%0, %11, %12) ConstrainedList_Valid_8:update : function(ConstrainedList_Valid_8:nat[],ConstrainedList_Valid_8:nat,ConstrainedList_Valid_8:nat) -> ConstrainedList_Valid_8:nat[]
            var r0 = r10.clone(new WyJS.Type.Int());//assign %0 = %10  : int[]
            var r14 = new WyJS.Integer(2);
            var r15 = new WyJS.Integer(4);
            var r13 = update$Z9fFXOsNBVFAWM$N7$T2$r$ND$c2$t$7B$H2$r$cB$72$a$7C$a2$u$sA$g1Vk$VC$H2$m$sA$kO$kC$12$uy2(r0, r14, r15);//invoke %13 = (%0, %14, %15) ConstrainedList_Valid_8:update : function(ConstrainedList_Valid_8:nat[],ConstrainedList_Valid_8:nat,ConstrainedList_Valid_8:nat) -> ConstrainedList_Valid_8:nat[]
            var r0 = r13.clone(new WyJS.Type.Int());//assign %0 = %13  : int[]
            var r17 = new WyJS.Integer(3);
            var r18 = new WyJS.Integer(5);
            var r16 = update$Z9fFXOsNBVFAWM$N7$T2$r$ND$c2$t$7B$H2$r$cB$72$a$7C$a2$u$sA$g1Vk$VC$H2$m$sA$kO$kC$12$uy2(r0, r17, r18);//invoke %16 = (%0, %17, %18) ConstrainedList_Valid_8:update : function(ConstrainedList_Valid_8:nat[],ConstrainedList_Valid_8:nat,ConstrainedList_Valid_8:nat) -> ConstrainedList_Valid_8:nat[]
            var r0 = r16.clone(new WyJS.Type.Int());//assign %0 = %16  : int[]
            var r19 = new WyJS.Integer(2);
            var r20 = new WyJS.Integer(3);
            var r21 = new WyJS.Integer(4);
            var r22 = new WyJS.Integer(5);
            var r23 = new WyJS.Array([r19, r20, r21, r22], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r23, true)){
               control_flow_pc = 1003;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1003:
            return;
      }
   }
}

