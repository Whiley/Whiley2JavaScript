function abs$Y9bFXA$W(r0){//function(int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(0);
            if(WyJS.gt(r0, r1, true)){
               control_flow_pc = 1706;
               control_flow_repeat = true;
               continue outer;
            }
            var r2 = r0.neg();//neg %2 = %0 : int
            var r0 = r2;//assign %0 = %2  : int
         case 1706:
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
            var r1 = new WyJS.Integer(1);
            var r0 = abs$Y9bFXA$W(r1);//invoke %0 = (%1) Ensures_Valid_8:abs : function(int) -> int
            var r2 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 1707;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1707:
            var r4 = new WyJS.Integer(1);
            var r5 = r4.neg();//neg %5 = %4 : int
            var r3 = abs$Y9bFXA$W(r5);//invoke %3 = (%5) Ensures_Valid_8:abs : function(int) -> int
            var r6 = new WyJS.Integer(1);
            if(WyJS.equals(r3, r6, true)){
               control_flow_pc = 1708;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1708:
            return;
      }
   }
}

