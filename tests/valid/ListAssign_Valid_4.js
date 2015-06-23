function f(r0){//function(ListAssign_Valid_4:Board) -> ListAssign_Valid_4:Board
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = {colour:=false,kind:=0};//const %1 = {colour:=false,kind:=0} : {bool colour,int kind}
            var r2 = 0;//const %2 = 0 : int
            var r3 = {colour:=false,kind:=0};//const %3 = {colour:=false,kind:=0} : {bool colour,int kind}
            r0.rows = r2;//update %0.rows[%2] = %3 : {bool flag,[{bool colour,int kind}] rows} -> {bool flag,[{bool colour,int kind}] rows}
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
            var r2 = false;//const %2 = false : bool
            var r3 = {colour:=true,kind:=0};//const %3 = {colour:=true,kind:=0} : {bool colour,int kind}
            var r4 = [r3];
            var r5 = {flag: r2, rows: r4};//newrecord %5 = (%2, %4) : {bool flag,[{bool colour,int kind}] rows}
            var r1 = r5;//assign %1 = %5  : {bool flag,[{bool colour,int kind}] rows}
            var r0 = r1;//assign %0 = %1  : {bool flag,[{bool colour,int kind}] rows}
            var r6 = f(r0);//invoke %6 = (%0) ListAssign_Valid_4:f : function(ListAssign_Valid_4:Board) -> ListAssign_Valid_4:Board
            var r7 = false;//const %7 = false : bool
            var r8 = false;//const %8 = false : bool
            var r9 = 0;//const %9 = 0 : int
            var r10 = {colour: r8, kind: r9};//newrecord %10 = (%8, %9) : {bool colour,int kind}
            var r11 = [r10];
            var r12 = {flag: r7, rows: r11};//newrecord %12 = (%7, %11) : {bool flag,[{bool colour,int kind}] rows}
            if(r6.flag ==  r12.flag && JSON.stringify(r6) ==  JSON.stringify(r12)){//ifeq %6, %12 goto label2430 : {bool flag,[{bool colour,int kind}] rows}
               control_flow_pc = 2430;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2430:
      }
   }
}

test();
