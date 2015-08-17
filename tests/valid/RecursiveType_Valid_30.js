function append$Y9dFXc_VA$74$_0kN$J6$m0kR$Z5$q0FO$F4$t0$R$J5$U0VK$35$g0FP$F5$U0kB$$I5$74$_0kN$J6$m0kR$Z5$q0FOF7(r0, r1){//function(RecursiveType_Valid_30:Recursive,RecursiveType_Valid_30:Recursive) -> RecursiveType_Valid_30:Recursive
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            if(WyJS.equals(r0, r2, false)){
               control_flow_pc = 388;
               control_flow_repeat = true;
               continue outer;
            }
            return r1;//return %1 : X<[X]>
            control_flow_pc = 389;
            control_flow_repeat = true;
            continue outer;//goto label389
         case 388:
            var r4 = new WyJS.Integer(0);
            var r5 = r0.getValue(r4);
            var r3 = append$Y9dFXc_VA$74$_0kN$J6$m0kR$Z5$q0FO$F4$t0$R$J5$U0VK$35$g0FP$F5$U0kB$$I5$74$_0kN$J6$m0kR$Z5$q0FOF7(r5, r1);//invoke %3 = (%5, %1) RecursiveType_Valid_30:append : function(RecursiveType_Valid_30:Recursive,RecursiveType_Valid_30:Recursive) -> RecursiveType_Valid_30:Recursive
            var r6 = new WyJS.Integer(0);
            var r8 = new WyJS.Integer(0);
            var r9 = r0.getValue(r8);
            var r7 = append$Y9dFXc_VA$74$_0kN$J6$m0kR$Z5$q0FO$F4$t0$R$J5$U0VK$35$g0FP$F5$U0kB$$I5$74$_0kN$J6$m0kR$Z5$q0FOF7(r9, r1);//invoke %7 = (%9, %1) RecursiveType_Valid_30:append : function(RecursiveType_Valid_30:Recursive,RecursiveType_Valid_30:Recursive) -> RecursiveType_Valid_30:Recursive
            r0.setValue(r6, r7);
            return r0;//return %0 : X<[X]>
         case 389:
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
            var r4 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            r3 = r4.clone();//assign %3 = %4  : [void]
            r0 = r3.clone();//assign %0 = %3  : X<[X]>
            var r7 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r8 = new WyJS.List([r7], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Void())));
            var r6 = append$Y9dFXc_VA$74$_0kN$J6$m0kR$Z5$q0FO$F4$t0$R$J5$U0VK$35$g0FP$F5$U0kB$$I5$74$_0kN$J6$m0kR$Z5$q0FOF7(r0, r8);//invoke %6 = (%0, %8) RecursiveType_Valid_30:append : function(RecursiveType_Valid_30:Recursive,RecursiveType_Valid_30:Recursive) -> RecursiveType_Valid_30:Recursive
            r5 = r6.clone();//assign %5 = %6  : X<[X]>
            r1 = r5.clone();//assign %1 = %5  : X<[X]>
            var r11 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r12 = new WyJS.List([r11], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Void())));
            var r10 = append$Y9dFXc_VA$74$_0kN$J6$m0kR$Z5$q0FO$F4$t0$R$J5$U0VK$35$g0FP$F5$U0kB$$I5$74$_0kN$J6$m0kR$Z5$q0FOF7(r1, r12);//invoke %10 = (%1, %12) RecursiveType_Valid_30:append : function(RecursiveType_Valid_30:Recursive,RecursiveType_Valid_30:Recursive) -> RecursiveType_Valid_30:Recursive
            r9 = r10.clone();//assign %9 = %10  : X<[X]>
            r2 = r9.clone();//assign %2 = %9  : X<[X]>
            var r13 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            if(WyJS.equals(r0, r13, true)){
               control_flow_pc = 390;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 390:
            var r14 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r15 = new WyJS.List([r14], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Void())));
            if(WyJS.equals(r1, r15, true)){
               control_flow_pc = 391;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 391:
            var r16 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r17 = new WyJS.List([r16], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Void())));
            var r18 = new WyJS.List([r17], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Void()))));
            if(WyJS.equals(r2, r18, true)){
               control_flow_pc = 392;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 392:
      }
   }
}

