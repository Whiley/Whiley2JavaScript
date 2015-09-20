function f$_9dF5u1FVY0d_F9$J4$i0FP$w5$i0$K$Z6$k0FO$w4$L0FN$k5$d0$O$w4$nF$F4$O0$J$Jo(r0, r1){//function(UnionType_Valid_3:TYPE[],UnionType_Valid_3:TYPE) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(0);
            var r3 = r4;//assign %3 = %4  : int
            var r2 = r3;//assign %2 = %3  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r6 = r0.length();//lengthof %6 = %0 : null|int[]
            if(WyJS.gt(r2, r6, true)){
               control_flow_pc = 1774;
               control_flow_repeat = true;
               continue outer;
            }
            var r7 = r0.getValue(r2);
            if(WyJS.equals(r7, r1, false)){
               control_flow_pc = 1775;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -3;
               control_flow_repeat = true;
               break;
            }
         case -3:
            return r2;//return %2 : int
            control_flow_pc = 1775;
            control_flow_repeat = true;
            break;
         case 1775:
            var r8 = new WyJS.Integer(1);
            var r9 = r2.add(r8);//add %9 = %2, %8 : int
            var r2 = r9;//assign %2 = %9  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 1774:
            var r10 = new WyJS.Integer(1);
            var r11 = r10.neg();//neg %11 = %10 : int
            return r11;//return %11 : int
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
            var r1 = null;
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.List([r1, r2, r3], new WyJS.Type.List(new WyJS.Type.Union([new WyJS.Type.Null(), new WyJS.Type.Int()])));
            var r5 = null;
            var r0 = f$_9dF5u1FVY0d_F9$J4$i0FP$w5$i0$K$Z6$k0FO$w4$L0FN$k5$d0$O$w4$nF$F4$O0$J$Jo(r4, r5);//invoke %0 = (%4, %5) UnionType_Valid_3:f : function(UnionType_Valid_3:TYPE[],UnionType_Valid_3:TYPE) -> int
            var r6 = new WyJS.Integer(0);
            if(WyJS.equals(r0, r6, true)){
               control_flow_pc = 1776;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1776:
            var r8 = new WyJS.Integer(1);
            var r9 = new WyJS.Integer(2);
            var r10 = null;
            var r11 = new WyJS.Integer(10);
            var r12 = new WyJS.List([r8, r9, r10, r11], new WyJS.Type.List(new WyJS.Type.Union([new WyJS.Type.Null(), new WyJS.Type.Int()])));
            var r13 = new WyJS.Integer(10);
            var r7 = f$_9dF5u1FVY0d_F9$J4$i0FP$w5$i0$K$Z6$k0FO$w4$L0FN$k5$d0$O$w4$nF$F4$O0$J$Jo(r12, r13);//invoke %7 = (%12, %13) UnionType_Valid_3:f : function(UnionType_Valid_3:TYPE[],UnionType_Valid_3:TYPE) -> int
            var r14 = new WyJS.Integer(3);
            if(WyJS.equals(r7, r14, true)){
               control_flow_pc = 1777;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1777:
            return;
      }
   }
}

