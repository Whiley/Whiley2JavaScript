function f(r0){//function(RecordDefine_Valid_1:Point) -> RecordDefine_Valid_1:Point
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : {int x,int y}
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
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.Record(["x", "y"], [r3, r4], new WyJS.Type.Record(["x", "y"], '{int x,int y}'));
            var r2 = f(r5);//invoke %2 = (%5) RecordDefine_Valid_1:f : function(RecordDefine_Valid_1:Point) -> RecordDefine_Valid_1:Point
            r1 = r2;//assign %1 = %2  : {int x,int y}
            r0 = r1;//assign %0 = %1  : {int x,int y}
            var r6 = new WyJS.Integer(1);
            var r7 = new WyJS.Integer(1);
            var r8 = new WyJS.Record(["x", "y"], [r6, r7], new WyJS.Type.Record(["x", "y"], '{int x,int y}'));
            if(WyJS.equals(r0, r8, true)){
               control_flow_pc = 254;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 254:
      }
   }
}

