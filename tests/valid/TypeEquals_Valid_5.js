function f$a9bF59$0J7JCWAB(r0){//function(null|int) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.Null())){
               control_flow_pc = 621;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 622;
            control_flow_repeat = true;
            continue outer;//goto label622
         case 621:
            var r1 = true;
            return r1;//return %1 : bool
            control_flow_pc = 623;
            control_flow_repeat = true;
            continue outer;//goto label623
         case 622:
            var r2 = false;
            return r2;//return %2 : bool
         case 623:
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
            var r2 = null;
            var r1 = r2;//assign %1 = %2  : null
            var r0 = r1;//assign %0 = %1  : null|int
            var r3 = f$a9bF59$0J7JCWAB(r0);//invoke %3 = (%0) TypeEquals_Valid_5:f : function(null|int) -> bool
            var r4 = true;
            if(r3 === r4){
               control_flow_pc = 624;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 624:
            var r6 = new WyJS.Integer(1);
            var r5 = f$a9bF59$0J7JCWAB(r6);//invoke %5 = (%6) TypeEquals_Valid_5:f : function(null|int) -> bool
            var r7 = false;
            if(r5 === r7){
               control_flow_pc = 625;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 625:
            return;
      }
   }
}

