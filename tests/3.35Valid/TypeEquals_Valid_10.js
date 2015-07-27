function f(r0){//function(TypeEquals_Valid_10:Rtypes) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.Record(["x", "y"], [new WyJS.Type.Int(), new WyJS.Type.Int()]))){
               control_flow_pc = 49;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 50;
            control_flow_repeat = true;
            continue outer;//goto label50
         case 49:
            var r1 = true;
            return r1;//return %1 : bool
            control_flow_pc = 51;
            control_flow_repeat = true;
            continue outer;//goto label51
         case 50:
            var r2 = false;
            return r2;//return %2 : bool
         case 51:
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
            var r1 = new WyJS.Integer(3);
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Record(["x", "y"], [r1, r2], new WyJS.Type.Record(["x", "y"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r0 = f(r3);//invoke %0 = (%3) TypeEquals_Valid_10:f : function(TypeEquals_Valid_10:Rtypes) -> bool
            var r4 = true;
            if(r0 === r4){
               control_flow_pc = 52;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 52:
            var r6 = new WyJS.Integer(3);
            var r7 = new WyJS.Integer(1);
            var r8 = new WyJS.Record(["x", "z"], [r6, r7], new WyJS.Type.Record(["x", "z"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r5 = f(r8);//invoke %5 = (%8) TypeEquals_Valid_10:f : function(TypeEquals_Valid_10:Rtypes) -> bool
            var r9 = false;
            if(r5 === r9){
               control_flow_pc = 53;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 53:
      }
   }
}

