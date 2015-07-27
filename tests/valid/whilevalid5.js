function f(r0){//function(int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            while(true){//loop (%0, %1, %2, %3, %4)
               var r1 = new WyJS.Integer(10);
               if(WyJS.gt(r0, r1, true)){
                  control_flow_pc = 0;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r2 = new WyJS.Integer(1);
               if(WyJS.equals(r0, r2, false)){
                  var r3 = new WyJS.Integer(1);
                  var r4 = r0.add(r3);//add %4 = %0, %3 : int
                  r0 = r4;//assign %0 = %4  : int
                  continue;
               }
               control_flow_pc = 0;
               control_flow_repeat = true;
               continue outer;//goto label0
            }
         case 0:
            sysout.println(r0.val);
            return r0;//return %0 : int
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
            var r1 = new WyJS.Integer(0);
            var r0 = f(r1);//invoke %0 = (%1) whilevalid5:f : function(int) -> int
            var r2 = new WyJS.Integer(16);
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 2;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2:
            var r4 = new WyJS.Integer(5);
            var r3 = f(r4);//invoke %3 = (%4) whilevalid5:f : function(int) -> int
            var r5 = new WyJS.Integer(10);
            if(WyJS.equals(r3, r5, true)){
               control_flow_pc = 3;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 3:
      }
   }
}

