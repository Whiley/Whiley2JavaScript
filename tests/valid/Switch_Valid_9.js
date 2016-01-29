function f$Y9bFXA$W(r0){//function(int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.equals(r0, new WyJS.Integer(1), true)){
               control_flow_pc = 1257;
               control_flow_repeat = true;
               continue outer;
            }
             else if(WyJS.equals(r0, new WyJS.Integer(2), true)){
               control_flow_pc = 1258;
               control_flow_repeat = true;
               continue outer;
            }
            else{
               control_flow_pc = 1256;
               control_flow_repeat = true;
               continue outer;
            }
         case 1257:
            var r1 = new WyJS.Integer(2);
            return r1;//return %1 : int
            control_flow_pc = 1256;
            control_flow_repeat = true;
            continue outer;//goto label1256
         case 1258:
            var r2 = new WyJS.Integer(2);
            return r2;//return %2 : int
            control_flow_pc = 1256;
            control_flow_repeat = true;
            continue outer;//goto label1256
         case 1256:
            return r0;//return %0 : int
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
            var r0 = f$Y9bFXA$W(r1);//invoke %0 = (%1) Switch_Valid_9:f : function(int) -> int
            var r2 = new WyJS.Integer(2);
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 1259;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1259:
            var r4 = new WyJS.Integer(1);
            var r3 = f$Y9bFXA$W(r4);//invoke %3 = (%4) Switch_Valid_9:f : function(int) -> int
            var r5 = new WyJS.Integer(2);
            if(WyJS.equals(r3, r5, true)){
               control_flow_pc = 1260;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1260:
            var r7 = new WyJS.Integer(0);
            var r6 = f$Y9bFXA$W(r7);//invoke %6 = (%7) Switch_Valid_9:f : function(int) -> int
            var r8 = new WyJS.Integer(0);
            if(WyJS.equals(r6, r8, true)){
               control_flow_pc = 1261;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1261:
            return;
      }
   }
}

