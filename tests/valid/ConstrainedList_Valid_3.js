function init$_9dF5XY001h3T0VW$sC$R2Vt$VD$Z2Vk$7C$R2Vm$VB$N1Vo$ND$c2Vj$k9$12$q$7C$72Vj$Na0$r$7B$cv12(r0, r1){//function(ConstrainedList_Valid_3:nat,int) -> [int]
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
            var r7 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            r6 = r7.clone();//assign %6 = %7  : [void]
            r3 = r6.clone();//assign %3 = %6  : [int]
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r8 = r3.length();//lengthof %8 = %3 : [int]
            if(WyJS.equals(r2, r8, false)){
               control_flow_pc = 1729;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case -3:
            if(WyJS.equals(r9, r1, false)){
               control_flow_pc = 1729;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1730;
            control_flow_repeat = true;
            continue outer;//goto label1730
         case 1729:
            throw {name: 'Assert Failed', message: 'fail'}
         case 1730:
            if(WyJS.equals(r2, r0, true)){
               control_flow_pc = 1731;
               control_flow_repeat = true;
               continue outer;
            }
            var r10 = new WyJS.List([r1], new WyJS.Type.List(new WyJS.Type.Int()));
            var r11 = r3.append(r10);
            r3 = r11.clone();//assign %3 = %11  : [int]
            var r12 = new WyJS.Integer(1);
            var r13 = r2.add(r12);//add %13 = %2, %12 : int
            var r2 = r13;//assign %2 = %13  : int
         case 1731:
            return r3;//return %3 : [int]
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
            var r1 = new WyJS.Integer(0);
            var r2 = new WyJS.Integer(0);
            var r0 = init$_9dF5XY001h3T0VW$sC$R2Vt$VD$Z2Vk$7C$R2Vm$VB$N1Vo$ND$c2Vj$k9$12$q$7C$72Vj$Na0$r$7B$cv12(r1, r2);//invoke %0 = (%1, %2) ConstrainedList_Valid_3:init : function(ConstrainedList_Valid_3:nat,int) -> [int]
            var r3 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 1732;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1732:
            var r5 = new WyJS.Integer(1);
            var r6 = new WyJS.Integer(1);
            var r4 = init$_9dF5XY001h3T0VW$sC$R2Vt$VD$Z2Vk$7C$R2Vm$VB$N1Vo$ND$c2Vj$k9$12$q$7C$72Vj$Na0$r$7B$cv12(r5, r6);//invoke %4 = (%5, %6) ConstrainedList_Valid_3:init : function(ConstrainedList_Valid_3:nat,int) -> [int]
            var r7 = new WyJS.Integer(1);
            var r8 = new WyJS.List([r7], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r4, r8, true)){
               control_flow_pc = 1733;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1733:
            var r10 = new WyJS.Integer(2);
            var r11 = new WyJS.Integer(2);
            var r9 = init$_9dF5XY001h3T0VW$sC$R2Vt$VD$Z2Vk$7C$R2Vm$VB$N1Vo$ND$c2Vj$k9$12$q$7C$72Vj$Na0$r$7B$cv12(r10, r11);//invoke %9 = (%10, %11) ConstrainedList_Valid_3:init : function(ConstrainedList_Valid_3:nat,int) -> [int]
            var r12 = new WyJS.Integer(2);
            var r13 = new WyJS.Integer(2);
            var r14 = new WyJS.List([r12, r13], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r9, r14, true)){
               control_flow_pc = 1734;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1734:
            var r16 = new WyJS.Integer(3);
            var r17 = new WyJS.Integer(3);
            var r15 = init$_9dF5XY001h3T0VW$sC$R2Vt$VD$Z2Vk$7C$R2Vm$VB$N1Vo$ND$c2Vj$k9$12$q$7C$72Vj$Na0$r$7B$cv12(r16, r17);//invoke %15 = (%16, %17) ConstrainedList_Valid_3:init : function(ConstrainedList_Valid_3:nat,int) -> [int]
            var r18 = new WyJS.Integer(3);
            var r19 = new WyJS.Integer(3);
            var r20 = new WyJS.Integer(3);
            var r21 = new WyJS.List([r18, r19, r20], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r15, r21, true)){
               control_flow_pc = 1735;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1735:
            var r23 = new WyJS.Integer(4);
            var r24 = new WyJS.Integer(4);
            var r22 = init$_9dF5XY001h3T0VW$sC$R2Vt$VD$Z2Vk$7C$R2Vm$VB$N1Vo$ND$c2Vj$k9$12$q$7C$72Vj$Na0$r$7B$cv12(r23, r24);//invoke %22 = (%23, %24) ConstrainedList_Valid_3:init : function(ConstrainedList_Valid_3:nat,int) -> [int]
            var r25 = new WyJS.Integer(4);
            var r26 = new WyJS.Integer(4);
            var r27 = new WyJS.Integer(4);
            var r28 = new WyJS.Integer(4);
            var r29 = new WyJS.List([r25, r26, r27, r28], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r22, r29, true)){
               control_flow_pc = 1736;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1736:
            var r31 = new WyJS.Integer(5);
            var r32 = new WyJS.Integer(5);
            var r30 = init$_9dF5XY001h3T0VW$sC$R2Vt$VD$Z2Vk$7C$R2Vm$VB$N1Vo$ND$c2Vj$k9$12$q$7C$72Vj$Na0$r$7B$cv12(r31, r32);//invoke %30 = (%31, %32) ConstrainedList_Valid_3:init : function(ConstrainedList_Valid_3:nat,int) -> [int]
            var r33 = new WyJS.Integer(5);
            var r34 = new WyJS.Integer(5);
            var r35 = new WyJS.Integer(5);
            var r36 = new WyJS.Integer(5);
            var r37 = new WyJS.Integer(5);
            var r38 = new WyJS.List([r33, r34, r35, r36, r37], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r30, r38, true)){
               control_flow_pc = 1737;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1737:
            var r40 = new WyJS.Integer(6);
            var r41 = new WyJS.Integer(6);
            var r39 = init$_9dF5XY001h3T0VW$sC$R2Vt$VD$Z2Vk$7C$R2Vm$VB$N1Vo$ND$c2Vj$k9$12$q$7C$72Vj$Na0$r$7B$cv12(r40, r41);//invoke %39 = (%40, %41) ConstrainedList_Valid_3:init : function(ConstrainedList_Valid_3:nat,int) -> [int]
            var r42 = new WyJS.Integer(6);
            var r43 = new WyJS.Integer(6);
            var r44 = new WyJS.Integer(6);
            var r45 = new WyJS.Integer(6);
            var r46 = new WyJS.Integer(6);
            var r47 = new WyJS.Integer(6);
            var r48 = new WyJS.List([r42, r43, r44, r45, r46, r47], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r39, r48, true)){
               control_flow_pc = 1738;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1738:
      }
   }
}

