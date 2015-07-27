function f(r0){//function(ListAssign_Valid_4:Board) -> ListAssign_Valid_4:Board
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
new WyJS.Record({colour:=false,kind:=0})            var r2 = new WyJS.Integer(0);
new WyJS.Record({colour:=false,kind:=0})            r0.setValue("rows", r2);//update %0.rows[%2] = %3 : {bool flag,[{bool colour,int kind}] rows} -> {bool flag,[{bool colour,int kind}] rows}
            return r0;//return %0 : {bool flag,[{bool colour,int kind}] rows}
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
            var r2 = false;
new WyJS.Record({colour:=true,kind:=0})            var r4 = new WyJS.List([r3]);
            var r5 = new WyJS.Record(["flag", "rows"], [r2, r4]);
            var r1 = r5;//assign %1 = %5  : {bool flag,[{bool colour,int kind}] rows}
            var r0 = r1;//assign %0 = %1  : {bool flag,[{bool colour,int kind}] rows}
            var r6 = f(r0);//invoke %6 = (%0) ListAssign_Valid_4:f : function(ListAssign_Valid_4:Board) -> ListAssign_Valid_4:Board
            var r7 = false;
            var r8 = false;
            var r9 = new WyJS.Integer(0);
            var r10 = new WyJS.Record(["colour", "kind"], [r8, r9]);
            var r11 = new WyJS.List([r10]);
            var r12 = new WyJS.Record(["flag", "rows"], [r7, r11]);
            if(WyJS.equals(r6, r12, true)){
               control_flow_pc = 2424;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2424:
      }
   }
}

