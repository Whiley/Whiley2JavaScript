function count$Y9dFXs1Fs2(r0, r1){//function(int,int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = new WyJS.Integer(0);
            var r4 = r5;//assign %4 = %5  : int
            var r2 = r4;//assign %2 = %4  : int
            var r7 = r0.mul(r1);//mul %7 = %0, %1 : int
            var r6 = r7;//assign %6 = %7  : int
            var r3 = r6;//assign %3 = %6  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            if(WyJS.gt(r2, r3, true)){
               control_flow_pc = 348;
               control_flow_repeat = true;
               continue outer;
            }
            var r8 = new WyJS.Integer(1);
            var r9 = r2.add(r8);//add %9 = %2, %8 : int
            var r2 = r9;//assign %2 = %9  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 348:
            return r2;//return %2 : int
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
            var r1 = new WyJS.Integer(0);
            var r2 = new WyJS.Integer(0);
            var r0 = count$Y9dFXs1Fs2(r1, r2);//invoke %0 = (%1, %2) While_Valid_27:count : function(int,int) -> int
            var r3 = new WyJS.Integer(0);
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 349;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 349:
            var r5 = new WyJS.Integer(1);
            var r6 = new WyJS.Integer(1);
            var r4 = count$Y9dFXs1Fs2(r5, r6);//invoke %4 = (%5, %6) While_Valid_27:count : function(int,int) -> int
            var r7 = new WyJS.Integer(1);
            if(WyJS.equals(r4, r7, true)){
               control_flow_pc = 350;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 350:
            var r9 = new WyJS.Integer(5);
            var r10 = new WyJS.Integer(5);
            var r8 = count$Y9dFXs1Fs2(r9, r10);//invoke %8 = (%9, %10) While_Valid_27:count : function(int,int) -> int
            var r11 = new WyJS.Integer(25);
            if(WyJS.equals(r8, r11, true)){
               control_flow_pc = 351;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 351:
            return;
      }
   }
}

