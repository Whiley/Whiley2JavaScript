function f(r0){//function(RecordAssign_Valid_2:rec2) -> RecordAssign_Valid_2:rec2
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(1);
            var r2 = new WyJS.Integer(1);
            r0.setValue("current.x", r2);//update %0.current.x = %2 : {{int x} current} -> {{int x} current}
            return r0;//return %0 : {{int x} current}
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
            var r3 = new WyJS.Record(["x"], [r2], new WyJS.Type.Record(["x"], '{int x}'));
            var r4 = new WyJS.Record(["current"], [r3], new WyJS.Type.Record(["current"], '{{int x} current}'));
            r1 = r4;//assign %1 = %4  : {{int x} current}
            r0 = r1;//assign %0 = %1  : {{int x} current}
            var r5 = f(r0);//invoke %5 = (%0) RecordAssign_Valid_2:f : function(RecordAssign_Valid_2:rec2) -> RecordAssign_Valid_2:rec2
            var r6 = new WyJS.Integer(1);
            var r7 = new WyJS.Record(["x"], [r6], new WyJS.Type.Record(["x"], '{int x}'));
            var r8 = new WyJS.Record(["current"], [r7], new WyJS.Type.Record(["current"], '{{int x} current}'));
            if(WyJS.equals(r5, r8, true)){
               control_flow_pc = 1200;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1200:
      }
   }
}

