function divide$Z9dFX0Y$3i$(r0, r1){//function(real,int) -> real
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = WyJS.cast(new WyJS.Type.Real(), r1);
            var r3 = r4;//assign %3 = %4  : real
            var r2 = r3;//assign %2 = %3  : real
            var r5 = r0.div(r2);//div %5 = %0, %2 : real
            return r5;//return %5 : real
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
            var r1 = new WyJS.Real(10.0);
            var r2 = new WyJS.Integer(2);
            var r0 = divide$Z9dFX0Y$3i$(r1, r2);//invoke %0 = (%1, %2) Cast_Valid_6:divide : function(real,int) -> real
            var r3 = new WyJS.Real(5.0);
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 1131;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1131:
            var r5 = new WyJS.Real(10.0);
            var r6 = new WyJS.Integer(3);
            var r4 = divide$Z9dFX0Y$3i$(r5, r6);//invoke %4 = (%5, %6) Cast_Valid_6:divide : function(real,int) -> real
            var r7 = new WyJS.Real(5.0);
            var r8 = new WyJS.Real(1.5);
            var r9 = r7.div(r8);//div %9 = %7, %8 : real
            if(WyJS.equals(r4, r9, true)){
               control_flow_pc = 1132;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1132:
            return;
      }
   }
}

