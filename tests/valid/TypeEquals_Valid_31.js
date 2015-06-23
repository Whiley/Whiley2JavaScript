function f(r0){//function(TypeEquals_Valid_31:rec12) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(1);
            return r1;//return %1 : int
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
            var r3 = new WyJS.List([104,101,108,108,111]);
            var r4 = new WyJS.Integer(2);
            var r5 = {f1: r3, f2: r4};//newrecord %5 = (%3, %4) : {[int+] f1,int f2}
            var r2 = r5;//assign %2 = %5  : {[int+] f1,int f2}
            var r0 = r2;//assign %0 = %2  : {any f1,int f2}
            var r7 = new WyJS.Integer(1);
            var r8 = new WyJS.Integer(0);
            var r9 = {f1: r7, f2: r8};//newrecord %9 = (%7, %8) : {int f1,int f2}
            var r6 = r9;//assign %6 = %9  : {int f1,int f2}
            var r1 = r6;//assign %1 = %6  : {int f1,int f2}
            var r10 = f(r0);//invoke %10 = (%0) TypeEquals_Valid_31:f : function(TypeEquals_Valid_31:rec12) -> int
            var r11 = new WyJS.Integer(1);
            if(WyJS.equals(r10, r11, true)){
               control_flow_pc = 1029;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1029:
            var r12 = f(r1);//invoke %12 = (%1) TypeEquals_Valid_31:f : function(TypeEquals_Valid_31:rec12) -> int
            var r13 = new WyJS.Integer(1);
            if(WyJS.equals(r12, r13, true)){
               control_flow_pc = 1030;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1030:
      }
   }
}

