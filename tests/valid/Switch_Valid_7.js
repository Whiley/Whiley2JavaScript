function f$Y9bFXA$W(r0){//function(int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.equals(r0, new WyJS.Integer(1), true)){
               control_flow_pc = 1234;
               control_flow_repeat = true;
               continue outer;
            }
            else{
               control_flow_pc = 1233;
               control_flow_repeat = true;
               continue outer;
            }
         case 1234:
            var r1 = new WyJS.Integer(1);
            return r1;//return %1 : int
            control_flow_pc = 1235;
            control_flow_repeat = true;
            continue outer;//goto label1235
         case 1233:
            var r2 = new WyJS.Integer(0);
            return r2;//return %2 : int
            control_flow_pc = 1235;
            control_flow_repeat = true;
            continue outer;//goto label1235
         case 1235:
            return;
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
            var r1 = new WyJS.Integer(2);
            var r0 = f$Y9bFXA$W(r1);//invoke %0 = (%1) Switch_Valid_7:f : function(int) -> int
            var r2 = new WyJS.Integer(0);
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 1236;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1236:
            var r4 = new WyJS.Integer(1);
            var r3 = f$Y9bFXA$W(r4);//invoke %3 = (%4) Switch_Valid_7:f : function(int) -> int
            var r5 = new WyJS.Integer(1);
            if(WyJS.equals(r3, r5, true)){
               control_flow_pc = 1237;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1237:
            var r7 = new WyJS.Integer(0);
            var r6 = f$Y9bFXA$W(r7);//invoke %6 = (%7) Switch_Valid_7:f : function(int) -> int
            var r8 = new WyJS.Integer(0);
            if(WyJS.equals(r6, r8, true)){
               control_flow_pc = 1238;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1238:
            return;
      }
   }
}

