function init$_9dF5XY001h3T0VW$sC$R2Vt$VD$Z2Vk$7C$R2Vm$VB$N1Vo$ND$c2Vj$k9$12$q$7C$72Vj$Na0$r$7B$cv12(r0, r1){//function(ConstrainedList_Valid_3:nat,int) -> int[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = new WyJS.Integer(0);
            var r4 = r5;//assign %4 = %5  : int
            var r2 = r4;//assign %2 = %4  : int
            var r7 = new WyJS.Integer(0);
            var r8 = WyJS.ListGen(r7, r0, new WyJS.Type.List(new WyJS.Type.Int()));
            var r6 = r8.clone(new WyJS.Type.Int());//assign %6 = %8  : int[]
            var r3 = r6.clone(new WyJS.Type.Int());//assign %3 = %6  : int[]
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            if(WyJS.gt(r2, r0, true)){
               control_flow_pc = 1777;
               control_flow_repeat = true;
               continue outer;
            }
            r3.setValue(r2, r1);
            var r15 = new WyJS.Integer(1);
            var r16 = r2.add(r15);//add %16 = %2, %15 : int
            var r2 = r16;//assign %2 = %16  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 1777:
            return r3;//return %3 : int[]
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
            var r0 = init$_9dF5XY001h3T0VW$sC$R2Vt$VD$Z2Vk$7C$R2Vm$VB$N1Vo$ND$c2Vj$k9$12$q$7C$72Vj$Na0$r$7B$cv12(r1, r2);//invoke %0 = (%1, %2) ConstrainedList_Valid_3:init : function(ConstrainedList_Valid_3:nat,int) -> int[]
            var r3 = new WyJS.Integer(0);
            var r4 = new WyJS.Integer(0);
            var r5 = WyJS.ListGen(r3, r4, new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r5, true)){
               control_flow_pc = 1778;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1778:
            var r7 = new WyJS.Integer(1);
            var r8 = new WyJS.Integer(1);
            var r6 = init$_9dF5XY001h3T0VW$sC$R2Vt$VD$Z2Vk$7C$R2Vm$VB$N1Vo$ND$c2Vj$k9$12$q$7C$72Vj$Na0$r$7B$cv12(r7, r8);//invoke %6 = (%7, %8) ConstrainedList_Valid_3:init : function(ConstrainedList_Valid_3:nat,int) -> int[]
            var r9 = new WyJS.Integer(1);
            var r10 = new WyJS.List([r9], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r6, r10, true)){
               control_flow_pc = 1779;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1779:
            var r12 = new WyJS.Integer(2);
            var r13 = new WyJS.Integer(2);
            var r11 = init$_9dF5XY001h3T0VW$sC$R2Vt$VD$Z2Vk$7C$R2Vm$VB$N1Vo$ND$c2Vj$k9$12$q$7C$72Vj$Na0$r$7B$cv12(r12, r13);//invoke %11 = (%12, %13) ConstrainedList_Valid_3:init : function(ConstrainedList_Valid_3:nat,int) -> int[]
            var r14 = new WyJS.Integer(2);
            var r15 = new WyJS.Integer(2);
            var r16 = new WyJS.List([r14, r15], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r11, r16, true)){
               control_flow_pc = 1780;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1780:
            var r18 = new WyJS.Integer(3);
            var r19 = new WyJS.Integer(3);
            var r17 = init$_9dF5XY001h3T0VW$sC$R2Vt$VD$Z2Vk$7C$R2Vm$VB$N1Vo$ND$c2Vj$k9$12$q$7C$72Vj$Na0$r$7B$cv12(r18, r19);//invoke %17 = (%18, %19) ConstrainedList_Valid_3:init : function(ConstrainedList_Valid_3:nat,int) -> int[]
            var r20 = new WyJS.Integer(3);
            var r21 = new WyJS.Integer(3);
            var r22 = new WyJS.Integer(3);
            var r23 = new WyJS.List([r20, r21, r22], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r17, r23, true)){
               control_flow_pc = 1781;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1781:
            var r25 = new WyJS.Integer(4);
            var r26 = new WyJS.Integer(4);
            var r24 = init$_9dF5XY001h3T0VW$sC$R2Vt$VD$Z2Vk$7C$R2Vm$VB$N1Vo$ND$c2Vj$k9$12$q$7C$72Vj$Na0$r$7B$cv12(r25, r26);//invoke %24 = (%25, %26) ConstrainedList_Valid_3:init : function(ConstrainedList_Valid_3:nat,int) -> int[]
            var r27 = new WyJS.Integer(4);
            var r28 = new WyJS.Integer(4);
            var r29 = new WyJS.Integer(4);
            var r30 = new WyJS.Integer(4);
            var r31 = new WyJS.List([r27, r28, r29, r30], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r24, r31, true)){
               control_flow_pc = 1782;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1782:
            var r33 = new WyJS.Integer(5);
            var r34 = new WyJS.Integer(5);
            var r32 = init$_9dF5XY001h3T0VW$sC$R2Vt$VD$Z2Vk$7C$R2Vm$VB$N1Vo$ND$c2Vj$k9$12$q$7C$72Vj$Na0$r$7B$cv12(r33, r34);//invoke %32 = (%33, %34) ConstrainedList_Valid_3:init : function(ConstrainedList_Valid_3:nat,int) -> int[]
            var r35 = new WyJS.Integer(5);
            var r36 = new WyJS.Integer(5);
            var r37 = new WyJS.Integer(5);
            var r38 = new WyJS.Integer(5);
            var r39 = new WyJS.Integer(5);
            var r40 = new WyJS.List([r35, r36, r37, r38, r39], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r32, r40, true)){
               control_flow_pc = 1783;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1783:
            var r42 = new WyJS.Integer(6);
            var r43 = new WyJS.Integer(6);
            var r41 = init$_9dF5XY001h3T0VW$sC$R2Vt$VD$Z2Vk$7C$R2Vm$VB$N1Vo$ND$c2Vj$k9$12$q$7C$72Vj$Na0$r$7B$cv12(r42, r43);//invoke %41 = (%42, %43) ConstrainedList_Valid_3:init : function(ConstrainedList_Valid_3:nat,int) -> int[]
            var r44 = new WyJS.Integer(6);
            var r45 = new WyJS.Integer(6);
            var r46 = new WyJS.Integer(6);
            var r47 = new WyJS.Integer(6);
            var r48 = new WyJS.Integer(6);
            var r49 = new WyJS.Integer(6);
            var r50 = new WyJS.List([r44, r45, r46, r47, r48, r49], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r41, r50, true)){
               control_flow_pc = 1784;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1784:
            return;
      }
   }
}

