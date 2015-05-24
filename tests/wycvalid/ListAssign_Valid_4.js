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
            r0.rows = r2;
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
            var r5 = {flag: r2, rows: r4};
            var r1 = r5;//assign %1 = %5  : {bool flag,[{bool colour,int kind}] rows}
            var r0 = r1;//assign %0 = %1  : {bool flag,[{bool colour,int kind}] rows}
            var r6 = f(r0);
            var r7 = false;//const %7 = false : bool
            var r8 = false;//const %8 = false : bool
            var r9 = 0;//const %9 = 0 : int
            var r10 = {colour: r8, kind: r9};
            var r11 = [r10];
            var r12 = {flag: r7, rows: r11};
            if(r6  ==  r12){
               control_flow_pc = 243;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 243:
      }
   }
}

test();
