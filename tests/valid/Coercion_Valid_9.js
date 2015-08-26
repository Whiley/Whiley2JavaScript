function sum$Z9bFaA$WL1c$kF$w5$_0VR$B5$d0kQ$s5$U0VK$35$g0FP$F5$U0FD3$B0FP$s5$f0(r0){//function(Coercion_Valid_9:Link) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.fieldLoad("data");//fieldload %1 = %0 data : {int data}
            return r1;//return %1 : int
            return;
      }
   }
}

function sum2$Z9bFaA$WL1c$kF$w5$_0VR$B5$d0kQ$s5$U0VK$35$g0FP$F5$U0FD6$10FP$R5$B0FP$s5$f0(r0){//function(Coercion_Valid_9:BigLink) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = WyJS.cast(new WyJS.Type.Record(["data"], [new WyJS.Type.Int()]), r0);
            var r1 = sum$Z9bFaA$WL1c$kF$w5$_0VR$B5$d0kQ$s5$U0VK$35$g0FP$F5$U0FD3$B0FP$s5$f0(r2);//invoke %1 = (%2) Coercion_Valid_9:sum : function(Coercion_Valid_9:Link) -> int
            return r1;//return %1 : int
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
            var r2 = new WyJS.Integer(99);
            var r3 = new WyJS.Integer(1);
            var r4 = new WyJS.Record(["code", "data"], [r2, r3], new WyJS.Type.Record(["code", "data"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r1 = r4;//assign %1 = %4  : {int code,int data}
            var r0 = r1;//assign %0 = %1  : {int code,int data}
            var r5 = sum2$Z9bFaA$WL1c$kF$w5$_0VR$B5$d0kQ$s5$U0VK$35$g0FP$F5$U0FD6$10FP$R5$B0FP$s5$f0(r0);//invoke %5 = (%0) Coercion_Valid_9:sum2 : function(Coercion_Valid_9:BigLink) -> int
            var r6 = new WyJS.Integer(1);
            if(WyJS.equals(r5, r6, true)){
               control_flow_pc = 1371;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1371:
            return;
      }
   }
}

