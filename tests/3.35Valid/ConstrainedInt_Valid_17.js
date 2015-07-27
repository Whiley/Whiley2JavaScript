function atob(r0){//function(ConstrainedInt_Valid_17:anat) -> ConstrainedInt_Valid_17:bnat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : int
      }
   }
}

function btoa(r0){//function(ConstrainedInt_Valid_17:bnat) -> ConstrainedInt_Valid_17:anat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
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
            var r2 = new WyJS.Integer(1);
            r1 = r2;//assign %1 = %2  : int
            r0 = r1;//assign %0 = %1  : int
            var r3 = atob(r0);//invoke %3 = (%0) ConstrainedInt_Valid_17:atob : function(ConstrainedInt_Valid_17:anat) -> ConstrainedInt_Valid_17:bnat
            var r4 = new WyJS.Integer(1);
            if(WyJS.equals(r3, r4, true)){
               control_flow_pc = 2308;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2308:
            var r5 = btoa(r0);//invoke %5 = (%0) ConstrainedInt_Valid_17:btoa : function(ConstrainedInt_Valid_17:bnat) -> ConstrainedInt_Valid_17:anat
            var r6 = new WyJS.Integer(1);
            if(WyJS.equals(r5, r6, true)){
               control_flow_pc = 2309;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2309:
      }
   }
}

