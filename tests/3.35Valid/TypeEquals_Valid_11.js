function f(r0){//function(TypeEquals_Valid_11:Rtypes) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.Record(["x", "z"], [new WyJS.Type.Int(), new WyJS.Type.Int()]))){
               control_flow_pc = 54;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 55;
            control_flow_repeat = true;
            continue outer;//goto label55
         case 54:
            var r1 = true;
            return r1;//return %1 : bool
            control_flow_pc = 56;
            control_flow_repeat = true;
            continue outer;//goto label56
         case 55:
            var r2 = false;
            return r2;//return %2 : bool
         case 56:
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
            var r1 = new WyJS.Real(1.2);
            var r2 = new WyJS.Real(1.2);
            var r3 = new WyJS.Record(["x", "y"], [r1, r2], new WyJS.Type.Record(["x", "y"], [new WyJS.Type.Real(), new WyJS.Type.Real()]));
            var r0 = f(r3);//invoke %0 = (%3) TypeEquals_Valid_11:f : function(TypeEquals_Valid_11:Rtypes) -> bool
            var r4 = false;
            if(r0 === r4){
               control_flow_pc = 57;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 57:
            var r6 = new WyJS.Real(1.0);
            var r7 = new WyJS.Real(1.0);
            var r8 = new WyJS.Record(["x", "y"], [r6, r7], new WyJS.Type.Record(["x", "y"], [new WyJS.Type.Real(), new WyJS.Type.Real()]));
            var r5 = f(r8);//invoke %5 = (%8) TypeEquals_Valid_11:f : function(TypeEquals_Valid_11:Rtypes) -> bool
            var r9 = false;
            if(r5 === r9){
               control_flow_pc = 58;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 58:
            var r11 = new WyJS.Integer(1);
            var r12 = new WyJS.Integer(1);
            var r13 = new WyJS.Record(["x", "z"], [r11, r12], new WyJS.Type.Record(["x", "z"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r10 = f(r13);//invoke %10 = (%13) TypeEquals_Valid_11:f : function(TypeEquals_Valid_11:Rtypes) -> bool
            var r14 = true;
            if(r10 === r14){
               control_flow_pc = 59;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 59:
      }
   }
}

