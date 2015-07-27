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
            var r4 = new WyJS.Record(["code", "flag"], [r2, r3], new WyJS.Type.Record(["code", "flag"], '{int code,bool flag}'));
            r1 = r4;//assign %1 = %4  : {int code,bool flag}
            r0 = r1;//assign %0 = %1  : {int code,bool flag}
            var r5 = r0.fieldLoad("flag");//fieldload %5 = %0 flag : {int code,bool flag}
            var r6 = true;
            if(r5 === r6){
               control_flow_pc = 1443;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1444;
            control_flow_repeat = true;
            continue outer;//goto label1444
         case 1443:
            control_flow_pc = 1445;
            control_flow_repeat = true;
            continue outer;//goto label1445
            throw {name: 'Assert Failed', message: 'fail'}
         case 1445:
            control_flow_pc = 1446;
            control_flow_repeat = true;
            continue outer;//goto label1446
         case 1444:
            throw {name: 'Assert Failed', message: 'fail'}
         case 1446:
      }
   }
}

