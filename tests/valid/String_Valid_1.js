function f$NcH9ZWFWJ53P8s0$I0$S$76$d0VQ$R5$U0VK$35$g0FP$F5$U0FB2$i0FN$F66Yn3ck4y2(r0, r1){//function(String_Valid_1:nat,int[]) -> null|bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = r1.length();//lengthof %3 = %1 : int[]
            if(WyJS.lt(r0, r3, false)){
               control_flow_pc = 34;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = null;
            return r4;//return %4 : null|bool
            control_flow_pc = 35;
            control_flow_repeat = true;
            continue outer;//goto label35
         case 34:
            var r6 = r1.getValue(r0);
            var r7 = new WyJS.Integer(79);
            if(WyJS.equals(r6, r7, true)){
               control_flow_pc = 36;
               control_flow_repeat = true;
               continue outer;
            }
            var r8 = false;
            control_flow_pc = 37;
            control_flow_repeat = true;
            continue outer;//goto label37
         case 36:
            var r8 = true;
         case 37:
            var r5 = r8;//assign %5 = %8  : bool
            var r2 = r5;//assign %2 = %5  : bool
            return r2;//return %2 : null|bool
         case 35:
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
            var r2 = new WyJS.List([new WyJS.Integer(79), new WyJS.Integer(120)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r0 = f$NcH9ZWFWJ53P8s0$I0$S$76$d0VQ$R5$U0VK$35$g0FP$F5$U0FB2$i0FN$F66Yn3ck4y2(r1, r2);//invoke %0 = (%1, %2) String_Valid_1:f : function(String_Valid_1:nat,int[]) -> null|bool
            var r3 = true;
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 38;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 38:
            var r5 = new WyJS.Integer(0);
            var r6 = new WyJS.List([new WyJS.Integer(49), new WyJS.Integer(120)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r4 = f$NcH9ZWFWJ53P8s0$I0$S$76$d0VQ$R5$U0VK$35$g0FP$F5$U0FB2$i0FN$F66Yn3ck4y2(r5, r6);//invoke %4 = (%5, %6) String_Valid_1:f : function(String_Valid_1:nat,int[]) -> null|bool
            var r7 = false;
            if(WyJS.equals(r4, r7, true)){
               control_flow_pc = 39;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 39:
            var r9 = new WyJS.Integer(1);
            var r10 = new WyJS.List([new WyJS.Integer(79)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r8 = f$NcH9ZWFWJ53P8s0$I0$S$76$d0VQ$R5$U0VK$35$g0FP$F5$U0FB2$i0FN$F66Yn3ck4y2(r9, r10);//invoke %8 = (%9, %10) String_Valid_1:f : function(String_Valid_1:nat,int[]) -> null|bool
            var r11 = null;
            if(WyJS.equals(r8, r11, true)){
               control_flow_pc = 40;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 40:
            return;
      }
   }
}

