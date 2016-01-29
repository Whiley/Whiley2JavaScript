function create$Z9dFaWYl$1h3J0$e$7E$V2Vm$c7$X2Vu$7B$N2Vt$sA$g1Vk$VC$H2$m$sA$aO$kC$12$uD(r0, r1){//function(TypeEquals_Valid_3:nat,TypeEquals_Valid_3:nat) -> TypeEquals_Valid_3:nat[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = new WyJS.Integer(0);
            var r6 = WyJS.ArrayGen(r5, r0, new WyJS.Type.Array(new WyJS.Type.Int()));
            var r4 = r6.clone(new WyJS.Type.Int());//assign %4 = %6  : int[]
            var r2 = r4.clone(new WyJS.Type.Int());//assign %2 = %4  : int[]
            var r8 = new WyJS.Integer(0);
            var r7 = r8;//assign %7 = %8  : int
            var r3 = r7;//assign %3 = %7  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case -3:
            if(WyJS.gt(r3, r0, true)){
               control_flow_pc = 8;
               control_flow_repeat = true;
               continue outer;
            }
            r2.setValue(r3, r1);
            var r9 = new WyJS.Integer(1);
            var r10 = r3.add(r9);//add %10 = %3, %9 : int
            var r3 = r10;//assign %3 = %10  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case 8:
            return r2;//return %2 : int[]
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
            var r1 = new WyJS.Integer(10);
            var r2 = new WyJS.Integer(10);
            var r0 = create$Z9dFaWYl$1h3J0$e$7E$V2Vm$c7$X2Vu$7B$N2Vt$sA$g1Vk$VC$H2$m$sA$aO$kC$12$uD(r1, r2);//invoke %0 = (%1, %2) TypeEquals_Valid_3:create : function(TypeEquals_Valid_3:nat,TypeEquals_Valid_3:nat) -> TypeEquals_Valid_3:nat[]
            var r3 = new WyJS.Integer(10);
            var r4 = new WyJS.Integer(10);
            var r5 = new WyJS.Integer(10);
            var r6 = new WyJS.Integer(10);
            var r7 = new WyJS.Integer(10);
            var r8 = new WyJS.Integer(10);
            var r9 = new WyJS.Integer(10);
            var r10 = new WyJS.Integer(10);
            var r11 = new WyJS.Integer(10);
            var r12 = new WyJS.Integer(10);
            var r13 = new WyJS.Array([r3, r4, r5, r6, r7, r8, r9, r10, r11, r12], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r13, true)){
               control_flow_pc = 9;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 9:
            var r15 = new WyJS.Integer(5);
            var r16 = new WyJS.Integer(0);
            var r14 = create$Z9dFaWYl$1h3J0$e$7E$V2Vm$c7$X2Vu$7B$N2Vt$sA$g1Vk$VC$H2$m$sA$aO$kC$12$uD(r15, r16);//invoke %14 = (%15, %16) TypeEquals_Valid_3:create : function(TypeEquals_Valid_3:nat,TypeEquals_Valid_3:nat) -> TypeEquals_Valid_3:nat[]
            var r17 = new WyJS.Integer(0);
            var r18 = new WyJS.Integer(0);
            var r19 = new WyJS.Integer(0);
            var r20 = new WyJS.Integer(0);
            var r21 = new WyJS.Integer(0);
            var r22 = new WyJS.Array([r17, r18, r19, r20, r21], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r14, r22, true)){
               control_flow_pc = 10;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 10:
            var r24 = new WyJS.Integer(0);
            var r25 = new WyJS.Integer(0);
            var r23 = create$Z9dFaWYl$1h3J0$e$7E$V2Vm$c7$X2Vu$7B$N2Vt$sA$g1Vk$VC$H2$m$sA$aO$kC$12$uD(r24, r25);//invoke %23 = (%24, %25) TypeEquals_Valid_3:create : function(TypeEquals_Valid_3:nat,TypeEquals_Valid_3:nat) -> TypeEquals_Valid_3:nat[]
            var r26 = new WyJS.Integer(0);
            var r27 = new WyJS.Integer(0);
            var r28 = WyJS.ArrayGen(r26, r27, new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r23, r28, true)){
               control_flow_pc = 11;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 11:
            return;
      }
   }
}

