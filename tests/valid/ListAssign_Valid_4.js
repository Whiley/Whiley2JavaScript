function f$Y9bFXL1e$$I$Z5$n0$S$33$n0kR$Z5$b0VQ$w4$L0FN$k5$d0$O$w4$oJ$73$j0FN$76$Z0W(r0){//function(ListAssign_Valid_4:Board) -> ListAssign_Valid_4:Board
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Record([colour, kind] ,[false, new WyJS.Integer(0)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()]));
            var r2 = new WyJS.Integer(0);
            var r3 = new WyJS.Record([colour, kind] ,[false, new WyJS.Integer(0)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()]));
            r0.fieldLoad("rows").setValue(r2, r3);
            return r0;//return %0 : {bool flag,[{bool colour,int kind}] rows}
            return;
      }
   }
}

function test$1A_7VkE(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = false;
            var r3 = new WyJS.Record([colour, kind] ,[true, new WyJS.Integer(0)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()]));
            var r4 = new WyJS.List([r3], new WyJS.Type.List(new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])));
            var r5 = new WyJS.Record(["flag", "rows"], [r2, r4], new WyJS.Type.Record(["flag", "rows"], [new WyJS.Type.Bool(), new WyJS.Type.List(new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()]))]));
            var r1 = r5;//assign %1 = %5  : {bool flag,[{bool colour,int kind}] rows}
            var r0 = r1;//assign %0 = %1  : {bool flag,[{bool colour,int kind}] rows}
            var r6 = f$Y9bFXL1e$$I$Z5$n0$S$33$n0kR$Z5$b0VQ$w4$L0FN$k5$d0$O$w4$oJ$73$j0FN$76$Z0W(r0);//invoke %6 = (%0) ListAssign_Valid_4:f : function(ListAssign_Valid_4:Board) -> ListAssign_Valid_4:Board
            var r7 = false;
            var r8 = false;
            var r9 = new WyJS.Integer(0);
            var r10 = new WyJS.Record(["colour", "kind"], [r8, r9], new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()]));
            var r11 = new WyJS.List([r10], new WyJS.Type.List(new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])));
            var r12 = new WyJS.Record(["flag", "rows"], [r7, r11], new WyJS.Type.Record(["flag", "rows"], [new WyJS.Type.Bool(), new WyJS.Type.List(new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()]))]));
            if(WyJS.equals(r6, r12, true)){
               control_flow_pc = 2412;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2412:
            return;
      }
   }
}

