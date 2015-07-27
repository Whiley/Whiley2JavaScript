function f(r0){//function(RecordDefine_Valid_2:Point) -> RecordDefine_Valid_2:Point
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
            var r5 = new WyJS.Record(["x", "y"], [r3, r4]);
            var r2 = f(r5);//invoke %2 = (%5) RecordDefine_Valid_2:f : function(RecordDefine_Valid_2:Point) -> RecordDefine_Valid_2:Point
            var r1 = r2;//assign %1 = %2  : {int x,int y}
            var r0 = r1;//assign %0 = %1  : {int x,int y}
            var r6 = new WyJS.Integer(1);
            var r7 = new WyJS.Integer(1);
            var r8 = new WyJS.Record(["x", "y"], [r6, r7]);
            if(WyJS.equals(r0, r8, true)){
               control_flow_pc = 264;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 264:
      }
   }
}

