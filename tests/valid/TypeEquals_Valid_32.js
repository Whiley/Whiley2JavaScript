function cons$Z9dFaVYl$1Ms(r0, r1){//function(int,int[]) -> int[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = new WyJS.Integer(0);
            var r6 = r1.length();//lengthof %6 = %1 : int[]
            var r7 = new WyJS.Integer(1);
            var r8 = r6.add(r7);//add %8 = %6, %7 : int
            var r9 = WyJS.ListGen(r5, r8, new WyJS.Type.List(new WyJS.Type.Int()));
            var r4 = r9.clone(new WyJS.Type.Int());//assign %4 = %9  : int[]
            var r2 = r4.clone(new WyJS.Type.Int());//assign %2 = %4  : int[]
            var r11 = new WyJS.Integer(0);
            var r10 = r11;//assign %10 = %11  : int
            var r3 = r10;//assign %3 = %10  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r17 = r1.length();//lengthof %17 = %1 : int[]
            if(WyJS.gt(r3, r17, true)){
               control_flow_pc = 111;
               control_flow_repeat = true;
               continue outer;
            }
            var r18 = r1.getValue(r3);
            var r19 = new WyJS.Integer(1);
            var r20 = r3.add(r19);//add %20 = %3, %19 : int
            var r21 = r1.getValue(r3);
            r2.setValue(r20, r21);
            var r22 = new WyJS.Integer(1);
            var r23 = r3.add(r22);//add %23 = %3, %22 : int
            var r3 = r23;//assign %3 = %23  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 111:
            var r24 = new WyJS.Integer(0);
            r2.setValue(r24, r0);
            return r2;//return %2 : int[]
            return;
      }
   }
}

function f$_9bF5D537oHN4$c1Vw$$D$92VX$7D$e2Vk$VC$a2Vj$k9$12$q$7C$72Vj$N5$ZW$cB$k2$s$FiAw2(r0){//function(TypeEquals_Valid_32:expr) -> int[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.List(new WyJS.Type.Int()))){
               control_flow_pc = 112;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 113;
            control_flow_repeat = true;
            continue outer;//goto label113
         case 112:
            var r4 = new WyJS.Integer(0);
            var r3 = cons$Z9dFaVYl$1Ms(r4, r0);//invoke %3 = (%4, %0) TypeEquals_Valid_32:cons : function(int,int[]) -> int[]
            var r2 = r3.clone(new WyJS.Type.Int());//assign %2 = %3  : int[]
            var r1 = r2.clone(new WyJS.Type.Int());//assign %1 = %2  : int[]
            return r1;//return %1 : int[]
            control_flow_pc = 114;
            control_flow_repeat = true;
            continue outer;//goto label114
         case 113:
            var r5 = new WyJS.Integer(0);
            var r6 = new WyJS.Integer(0);
            var r7 = WyJS.ListGen(r5, r6, new WyJS.Type.List(new WyJS.Type.Int()));
            return r7;//return %7 : int[]
         case 114:
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
            var r6 = new WyJS.List([r2, r3, r4, r5], new WyJS.Type.List(new WyJS.Type.Int()));
            var r1 = r6.clone(new WyJS.Type.Int());//assign %1 = %6  : int[]
            var r0 = r1.clone(new WyJS.Type.Int());//assign %0 = %1  : int[]
            var r7 = f$_9bF5D537oHN4$c1Vw$$D$92VX$7D$e2Vk$VC$a2Vj$k9$12$q$7C$72Vj$N5$ZW$cB$k2$s$FiAw2(r0);//invoke %7 = (%0) TypeEquals_Valid_32:f : function(TypeEquals_Valid_32:expr) -> int[]
            var r8 = new WyJS.Integer(0);
            var r9 = new WyJS.Integer(1);
            var r10 = new WyJS.Integer(2);
            var r11 = new WyJS.Integer(3);
            var r12 = new WyJS.Integer(4);
            var r13 = new WyJS.List([r8, r9, r10, r11, r12], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r7, r13, true)){
               control_flow_pc = 115;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 115:
            var r15 = false;
            var r14 = f$_9bF5D537oHN4$c1Vw$$D$92VX$7D$e2Vk$VC$a2Vj$k9$12$q$7C$72Vj$N5$ZW$cB$k2$s$FiAw2(r15);//invoke %14 = (%15) TypeEquals_Valid_32:f : function(TypeEquals_Valid_32:expr) -> int[]
            var r16 = new WyJS.Integer(0);
            var r17 = new WyJS.Integer(0);
            var r18 = WyJS.ListGen(r16, r17, new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r14, r18, true)){
               control_flow_pc = 116;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 116:
            return;
      }
   }
}

