function getMessage(r0){//function(TypeEquals_Valid_43:imsg) -> any
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.Record(["msg"], [new WyJS.Type.List(new WyJS.Type.Int())]))){
               control_flow_pc = 226;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 227;
            control_flow_repeat = true;
            continue outer;//goto label227
         case 226:
            var r1 = r0.fieldLoad("msg");//fieldload %1 = %0 msg : {[int] msg}
            return r1;//return %1 : any
            control_flow_pc = 228;
            control_flow_repeat = true;
            continue outer;//goto label228
         case 227:
            return r0;//return %0 : any
         case 228:
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
            var r1 = new WyJS.List([72,69,76,76,79,32,87,79,82,76,68]);
            var r2 = new WyJS.Record(["msg"], [r1], new WyJS.Type.Record(["msg"], [new WyJS.Type.List(new WyJS.Type.Int())]));
            var r0 = getMessage(r2);//invoke %0 = (%2) TypeEquals_Valid_43:getMessage : function(TypeEquals_Valid_43:imsg) -> any
            var r3 = new WyJS.List([72,69,76,76,79,32,87,79,82,76,68]);
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 229;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 229:
            var r5 = new WyJS.Integer(1);
            var r4 = getMessage(r5);//invoke %4 = (%5) TypeEquals_Valid_43:getMessage : function(TypeEquals_Valid_43:imsg) -> any
            var r6 = new WyJS.Integer(1);
            if(WyJS.equals(r4, r6, true)){
               control_flow_pc = 230;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 230:
      }
   }
}

