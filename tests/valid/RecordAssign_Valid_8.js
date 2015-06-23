function f(r0){//function(int) -> RecordAssign_Valid_8:bytes
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(2);
            var r2 = {b2: r0, b1: r1};//newrecord %2 = (%0, %1) : {int b1,int b2}
            return r2;//return %2 : {int b1,int b2}
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
            var r3 = new WyJS.Integer(1);
            var r2 = r3;//assign %2 = %3  : int
            var r0 = r2;//assign %0 = %2  : int
            var r5 = f(r0);//invoke %5 = (%0) RecordAssign_Valid_8:f : function(int) -> RecordAssign_Valid_8:bytes
            var r4 = r5;//assign %4 = %5  : {int b1,int b2}
            var r1 = r4;//assign %1 = %4  : {int b1,int b2}
            var r6 = new WyJS.Integer(1);
            var r7 = new WyJS.Integer(2);
            var r8 = {b2: r6, b1: r7};//newrecord %8 = (%6, %7) : {int b1,int b2}
            if(WyJS.equals(r1, r8, true)){
               control_flow_pc = 1241;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1241:
            var r9 = {b2: r0, b1: r0};//newrecord %9 = (%0, %0) : {int b1,int b2}
            var r1 = r9;//assign %1 = %9  : {int b1,int b2}
            var r10 = new WyJS.Integer(1);
            var r11 = new WyJS.Integer(1);
            var r12 = {b2: r10, b1: r11};//newrecord %12 = (%10, %11) : {int b1,int b2}
            if(WyJS.equals(r1, r12, true)){
               control_flow_pc = 1242;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1242:
      }
   }
}

