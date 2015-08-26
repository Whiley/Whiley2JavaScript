function sum$Z9bF5B1Fc_V9$w3$k0FO$s5$H0FO$B5$j0VR$F5$U0VK$35$g0FP$F5$U0$D4$F0kQ$Z5$i0$SE(r0){//function(OpenRecord_Valid_8:Point) -> real
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = WyJS.cast(new WyJS.Type.Record(["x", "y"], [new WyJS.Type.Real(), new WyJS.Type.Real()]), r0);
            var r2 = r3;//assign %2 = %3  : {real x,real y,...}
            var r1 = r2;//assign %1 = %2  : {real x,real y,...}
            var r4 = r1.fieldLoad("x");//fieldload %4 = %1 x : {real x,real y,...}
            var r5 = r1.fieldLoad("y");//fieldload %5 = %1 y : {real x,real y,...}
            var r6 = r4.add(r5);//add %6 = %4, %5 : real
            return r6;//return %6 : real
            return;
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
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.Record(["x", "y"], [r2, r3], new WyJS.Type.Record(["x", "y"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r1 = r4;//assign %1 = %4  : {int x,int y}
            var r0 = r1;//assign %0 = %1  : {int x,int y,...}|{real x,real y,...}
            var r5 = sum$Z9bF5B1Fc_V9$w3$k0FO$s5$H0FO$B5$j0VR$F5$U0VK$35$g0FP$F5$U0$D4$F0kQ$Z5$i0$SE(r0);//invoke %5 = (%0) OpenRecord_Valid_8:sum : function(OpenRecord_Valid_8:Point) -> real
            var r6 = new WyJS.Real(3.0);
            if(WyJS.equals(r5, r6, true)){
               control_flow_pc = 1912;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1912:
            var r7 = new WyJS.Real(1.23);
            var r8 = new WyJS.Real(2.34);
            var r9 = new WyJS.Record(["x", "y"], [r7, r8], new WyJS.Type.Record(["x", "y"], [new WyJS.Type.Real(), new WyJS.Type.Real()]));
            var r0 = r9;//assign %0 = %9  : {real x,real y}
            var r10 = sum$Z9bF5B1Fc_V9$w3$k0FO$s5$H0FO$B5$j0VR$F5$U0VK$35$g0FP$F5$U0$D4$F0kQ$Z5$i0$SE(r0);//invoke %10 = (%0) OpenRecord_Valid_8:sum : function(OpenRecord_Valid_8:Point) -> real
            var r11 = new WyJS.Real(3.57);
            if(WyJS.equals(r10, r11, true)){
               control_flow_pc = 1913;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1913:
            return;
      }
   }
}

