function testbool(r0){//function(bool) -> bool
   var r2 = true;//const %2 = true : bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(r0  !=  r2){
               var r1 = true;//const %1 = true : bool
               control_flow_pc = 15;
               control_flow_repeat = true;
               continue outer;
            }
         case 14:
            var r1 = false;//const %1 = false : bool
         case 15:
            return r1;//return %1 : bool
      }
   }
}

function test(){//method() -> void
   var r1 = true;//const %1 = true : bool
   var r0 = testbool(r1);
   var r2 = false;//const %2 = false : bool
   if(r0 != r2){//assume 
      throw {name: 'Assert Failed', message: 'r0 !eq r2'}
   }
   var r4 = false;//const %4 = false : bool
   var r3 = testbool(r4);
   var r5 = true;//const %5 = true : bool
   if(r3 != r5){//assume 
      throw {name: 'Assert Failed', message: 'r3 !eq r5'}
   }
}

test();
