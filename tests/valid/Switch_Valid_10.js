function f$Z9bFaA$0B1E(r0){//function(real) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.equals(r0, new WyJS.Real(1.23), true)){
               control_flow_pc = 1395;
               control_flow_repeat = true;
               continue outer;
            }
             else if(WyJS.equals(r0, new WyJS.Real(2.01), true)){
               control_flow_pc = 1396;
               control_flow_repeat = true;
               continue outer;
            }
            else{
               control_flow_pc = 1394;
               control_flow_repeat = true;
               continue outer;
            }
         case 1395:
            var r1 = new WyJS.Integer(0);
            return r1;//return %1 : int
            control_flow_pc = 1394;
            control_flow_repeat = true;
            continue outer;//goto label1394
         case 1396:
            var r2 = new WyJS.Integer(1);
            var r3 = r2.neg();//neg %3 = %2 : int
            return r3;//return %3 : int
            control_flow_pc = 1394;
            control_flow_repeat = true;
            continue outer;//goto label1394
         case 1394:
            var r4 = new WyJS.Integer(10);
            return r4;//return %4 : int
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
            var r1 = new WyJS.Real(1.23);
            var r0 = f$Z9bFaA$0B1E(r1);//invoke %0 = (%1) Switch_Valid_10:f : function(real) -> int
            var r2 = new WyJS.Integer(0);
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 1397;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1397:
            var r4 = new WyJS.Real(2.01);
            var r3 = f$Z9bFaA$0B1E(r4);//invoke %3 = (%4) Switch_Valid_10:f : function(real) -> int
            var r5 = new WyJS.Integer(1);
            var r6 = r5.neg();//neg %6 = %5 : int
            if(WyJS.equals(r3, r6, true)){
               control_flow_pc = 1398;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1398:
            var r8 = new WyJS.Real(3.0);
            var r7 = f$Z9bFaA$0B1E(r8);//invoke %7 = (%8) Switch_Valid_10:f : function(real) -> int
            var r9 = new WyJS.Integer(10);
            if(WyJS.equals(r7, r9, true)){
               control_flow_pc = 1399;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1399:
            var r11 = new WyJS.Real(-1.0);
            var r10 = f$Z9bFaA$0B1E(r11);//invoke %10 = (%11) Switch_Valid_10:f : function(real) -> int
            var r12 = new WyJS.Integer(10);
            if(WyJS.equals(r10, r12, true)){
               control_flow_pc = 1400;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1400:
            return;
      }
   }
}

