function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(0);
            var r3 = true;
            var r4 = new WyJS.Record(["code", "flag"], [r2, r3], new WyJS.Type.Record(["code", "flag"], [new WyJS.Type.Int(), new WyJS.Type.Bool()]));
            var r1 = r4.clone();//assign %1 = %4  : {int code,bool flag}
            var r0 = r1.clone();//assign %0 = %1  : {int code,bool flag}
            var r5 = r0.fieldLoad("flag");//fieldload %5 = %0 flag : {int code,bool flag}
            var r6 = true;
            if(r5 === r6){
               control_flow_pc = 793;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 794;
            control_flow_repeat = true;
            continue outer;//goto label794
         case 793:
            control_flow_pc = 795;
            control_flow_repeat = true;
            continue outer;//goto label795
            throw {name: 'Assert Failed', message: 'fail'}
         case 795:
            control_flow_pc = 796;
            control_flow_repeat = true;
            continue outer;//goto label796
         case 794:
            throw {name: 'Assert Failed', message: 'fail'}
         case 796:
            return;
      }
   }
}

