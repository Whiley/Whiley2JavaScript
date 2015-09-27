function f$a9bF5D537klcoHc4$91$n$kB$92Vl$VD$H2$v$cB$N1Vo$ND$c2Vj$k9$12$q$7C$72Vj$7a1$r$FB$T2Vr$VhAw(r0){//function(int[]) -> EffectiveList_Valid_1:nbool[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = false;
            var r5 = r0.length();//lengthof %5 = %0 : int[]
            var r6 = WyJS.ListGen(r4, r5, new WyJS.Type.List(new WyJS.Type.Bool()));
            var r3 = r6.clone(new WyJS.Type.Bool());//assign %3 = %6  : bool[]
            var r1 = r3.clone(new WyJS.Type.Union([new WyJS.Type.Null(), new WyJS.Type.Bool()]));//assign %1 = %3  : null|bool[]
            var r8 = new WyJS.Integer(0);
            var r7 = r8;//assign %7 = %8  : int
            var r2 = r7;//assign %2 = %7  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r12 = r0.length();//lengthof %12 = %0 : int[]
            if(WyJS.gt(r2, r12, true)){
               control_flow_pc = 1333;
               control_flow_repeat = true;
               continue outer;
            }
            var r13 = r0.getValue(r2);
            var r14 = new WyJS.Integer(0);
            if(WyJS.gt(r13, r14, true)){
               control_flow_pc = 1334;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -3;
               control_flow_repeat = true;
               break;
            }
         case -3:
            var r15 = true;
            var r16 = true;
            r1.setValue(r2, r16);
            control_flow_pc = 1335;
            control_flow_repeat = true;
            continue outer;//goto label1335
            control_flow_pc = 1335;
            control_flow_repeat = true;
            break;
         case 1334:
            var r17 = null;
            var r18 = null;
            r1.setValue(r2, r18);
            control_flow_pc = 1335;
            control_flow_repeat = true;
            break;
         case 1335:
            var r19 = new WyJS.Integer(1);
            var r20 = r2.add(r19);//add %20 = %2, %19 : int
            var r2 = r20;//assign %2 = %20  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 1333:
            return r1;//return %1 : null|bool[]
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
            var r2 = new WyJS.Integer(0);
            var r3 = new WyJS.Integer(0);
            var r4 = WyJS.ListGen(r2, r3, new WyJS.Type.List(new WyJS.Type.Int()));
            var r1 = r4.clone(new WyJS.Type.Int());//assign %1 = %4  : int[]
            var r0 = r1.clone(new WyJS.Type.Int());//assign %0 = %1  : int[]
            var r5 = f$a9bF5D537klcoHc4$91$n$kB$92Vl$VD$H2$v$cB$N1Vo$ND$c2Vj$k9$12$q$7C$72Vj$7a1$r$FB$T2Vr$VhAw(r0);//invoke %5 = (%0) EffectiveList_Valid_1:f : function(int[]) -> EffectiveList_Valid_1:nbool[]
            var r6 = false;
            var r7 = new WyJS.Integer(0);
            var r8 = WyJS.ListGen(r6, r7, new WyJS.Type.List(new WyJS.Type.Bool()));
            if(WyJS.equals(r5, r8, true)){
               control_flow_pc = 1336;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1336:
            var r9 = new WyJS.Integer(1);
            var r10 = new WyJS.Integer(2);
            var r11 = new WyJS.Integer(3);
            var r12 = new WyJS.Integer(4);
            var r13 = new WyJS.List([r9, r10, r11, r12], new WyJS.Type.List(new WyJS.Type.Int()));
            var r0 = r13.clone(new WyJS.Type.Int());//assign %0 = %13  : int[]
            var r14 = f$a9bF5D537klcoHc4$91$n$kB$92Vl$VD$H2$v$cB$N1Vo$ND$c2Vj$k9$12$q$7C$72Vj$7a1$r$FB$T2Vr$VhAw(r0);//invoke %14 = (%0) EffectiveList_Valid_1:f : function(int[]) -> EffectiveList_Valid_1:nbool[]
            var r15 = null;
            var r16 = null;
            var r17 = null;
            var r18 = null;
            var r19 = new WyJS.List([r15, r16, r17, r18], new WyJS.Type.List(new WyJS.Type.Null()));
            if(WyJS.equals(r14, r19, true)){
               control_flow_pc = 1337;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1337:
            return;
      }
   }
}

