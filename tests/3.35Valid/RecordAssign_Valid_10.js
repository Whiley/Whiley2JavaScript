function f(r0){//function(int) -> RecordAssign_Valid_10:bytes
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = new WyJS.Integer(1);
            var r4 = r0.add(r3);//add %4 = %0, %3 : int
            var r5 = new WyJS.Record(["b2", "b1"], [r0, r4], new WyJS.Type.Record(["b2", "b1"], '{int b1,int b2}'));
            r2 = r5;//assign %2 = %5  : {int b1,int b2}
            r1 = r2;//assign %1 = %2  : {int b1,int b2}
            return r1;//return %1 : {int b1,int b2}
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
            var r1 = new WyJS.Integer(1);
            var r0 = f(r1);//invoke %0 = (%1) RecordAssign_Valid_10:f : function(int) -> RecordAssign_Valid_10:bytes
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.Record(["b2", "b1"], [r2, r3], new WyJS.Type.Record(["b2", "b1"], '{int b1,int b2}'));
            if(WyJS.equals(r0, r4, true)){
               control_flow_pc = 2119;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2119:
            var r6 = new WyJS.Integer(2);
            var r5 = f(r6);//invoke %5 = (%6) RecordAssign_Valid_10:f : function(int) -> RecordAssign_Valid_10:bytes
            var r7 = new WyJS.Integer(2);
            var r8 = new WyJS.Integer(3);
            var r9 = new WyJS.Record(["b2", "b1"], [r7, r8], new WyJS.Type.Record(["b2", "b1"], '{int b1,int b2}'));
            if(WyJS.equals(r5, r9, true)){
               control_flow_pc = 2120;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2120:
            var r11 = new WyJS.Integer(9);
            var r10 = f(r11);//invoke %10 = (%11) RecordAssign_Valid_10:f : function(int) -> RecordAssign_Valid_10:bytes
            var r12 = new WyJS.Integer(9);
            var r13 = new WyJS.Integer(10);
            var r14 = new WyJS.Record(["b2", "b1"], [r12, r13], new WyJS.Type.Record(["b2", "b1"], '{int b1,int b2}'));
            if(WyJS.equals(r10, r14, true)){
               control_flow_pc = 2121;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2121:
      }
   }
}

