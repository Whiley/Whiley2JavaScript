function f$_9dF5u1FVY0d_F9$J4$i0FP$w5$i0$K$Z6$k0FO$w4$L0FN$k5$d0$O$w4$nF$F4$O0$J$Jo(r0, r1){//function([UnionType_Valid_3:TYPE],UnionType_Valid_3:TYPE) -> int
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
            while(true){//loop (%2, %5, %6, %7, %8)
               var r5 = r0.length();//lengthof %5 = %0 : [null|int]
               var r6 = r0.getValue(r2);
               return r2;//return %2 : int
               var r7 = new WyJS.Integer(1);
               var r8 = r2.add(r7);//add %8 = %2, %7 : int
               var r2 = r8;//assign %2 = %8  : int
            }
         case 1934:
            var r9 = new WyJS.Integer(1);
            var r10 = r9.neg();//neg %10 = %9 : int
            return r10;//return %10 : int
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
            var r1 = null;/n            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.List([r1, r2, r3], new WyJS.Type.List(new WyJS.Type.Union([new WyJS.Type.Null(), new WyJS.Type.Int()])));
            var r5 = null;/n            var r0 = f$_9dF5u1FVY0d_F9$J4$i0FP$w5$i0$K$Z6$k0FO$w4$L0FN$k5$d0$O$w4$nF$F4$O0$J$Jo(r4, r5);//invoke %0 = (%4, %5) UnionType_Valid_3:f : function([UnionType_Valid_3:TYPE],UnionType_Valid_3:TYPE) -> int
            var r6 = new WyJS.Integer(0);
            if(WyJS.equals(r0, r6, true)){
               control_flow_pc = 1936;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1936:
            var r8 = new WyJS.Integer(1);
            var r9 = new WyJS.Integer(2);
            var r10 = null;/n            var r11 = new WyJS.Integer(10);
            var r12 = new WyJS.List([r8, r9, r10, r11], new WyJS.Type.List(new WyJS.Type.Union([new WyJS.Type.Null(), new WyJS.Type.Int()])));
            var r13 = new WyJS.Integer(10);
            var r7 = f$_9dF5u1FVY0d_F9$J4$i0FP$w5$i0$K$Z6$k0FO$w4$L0FN$k5$d0$O$w4$nF$F4$O0$J$Jo(r12, r13);//invoke %7 = (%12, %13) UnionType_Valid_3:f : function([UnionType_Valid_3:TYPE],UnionType_Valid_3:TYPE) -> int
            var r14 = new WyJS.Integer(3);
            if(WyJS.equals(r7, r14, true)){
               control_flow_pc = 1937;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1937:
      }
   }
}

