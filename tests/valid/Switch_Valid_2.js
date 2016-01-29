function f$Y9bFXA$W(r0){//function(int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.equals(r0, new WyJS.Integer(1), true)){
               control_flow_pc = 1193;
               control_flow_repeat = true;
               continue outer;
            }
             else if(WyJS.equals(r0, new WyJS.Integer(2), true)){
               control_flow_pc = 1194;
               control_flow_repeat = true;
               continue outer;
            }
            else{
               control_flow_pc = 1192;
               control_flow_repeat = true;
               continue outer;
            }
         case 1193:
            var r3 = new WyJS.Integer(1);
            var r4 = r3.neg();//neg %4 = %3 : int
            var r1 = r4;//assign %1 = %4  : int
            control_flow_pc = 1195;
            control_flow_repeat = true;
            continue outer;//goto label1195
         case 1194:
            var r5 = new WyJS.Integer(2);
            var r6 = r5.neg();//neg %6 = %5 : int
            var r1 = r6;//assign %1 = %6  : int
            control_flow_pc = 1195;
            control_flow_repeat = true;
            continue outer;//goto label1195
         case 1192:
            var r7 = new WyJS.Integer(0);
            var r1 = r7;//assign %1 = %7  : int
            control_flow_pc = 1195;
            control_flow_repeat = true;
            continue outer;//goto label1195
         case 1195:
            return r1;//return %1 : int
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
            var r0 = f$Y9bFXA$W(r1);//invoke %0 = (%1) Switch_Valid_2:f : function(int) -> int
            var r2 = new WyJS.Integer(1);
            var r3 = r2.neg();//neg %3 = %2 : int
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 1196;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1196:
            var r5 = new WyJS.Integer(2);
            var r4 = f$Y9bFXA$W(r5);//invoke %4 = (%5) Switch_Valid_2:f : function(int) -> int
            var r6 = new WyJS.Integer(2);
            var r7 = r6.neg();//neg %7 = %6 : int
            if(WyJS.equals(r4, r7, true)){
               control_flow_pc = 1197;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1197:
            var r9 = new WyJS.Integer(3);
            var r8 = f$Y9bFXA$W(r9);//invoke %8 = (%9) Switch_Valid_2:f : function(int) -> int
            var r10 = new WyJS.Integer(0);
            if(WyJS.equals(r8, r10, true)){
               control_flow_pc = 1198;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1198:
            var r12 = new WyJS.Integer(1);
            var r13 = r12.neg();//neg %13 = %12 : int
            var r11 = f$Y9bFXA$W(r13);//invoke %11 = (%13) Switch_Valid_2:f : function(int) -> int
            var r14 = new WyJS.Integer(0);
            if(WyJS.equals(r11, r14, true)){
               control_flow_pc = 1199;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1199:
            return;
      }
   }
}

