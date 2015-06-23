function EmptyBoard(){//function() -> ConstrainedRecord_Valid_8:EmptyBoard
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = new WyJS.Integer(0);
            var r1 = new WyJS.Integer(0);
            var r2 = new WyJS.Integer(0);
            var r3 = new WyJS.Integer(0);
            var r4 = new WyJS.Integer(0);
            var r5 = new WyJS.Integer(0);
            var r6 = new WyJS.Integer(0);
            var r7 = new WyJS.Integer(0);
            var r8 = new WyJS.Integer(0);
            var r9 = new WyJS.Integer(0);
            var r10 = [r1, r2, r3, r4, r5, r6, r7, r8, r9];
            var r11 = {pieces: r0, move: r10};//newrecord %11 = (%0, %10) : {int move,[int] pieces}
            return r11;//return %11 : {int move,[int] pieces}
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
            var r2 = EmptyBoard();//invoke %2 = () ConstrainedRecord_Valid_8:EmptyBoard : function() -> ConstrainedRecord_Valid_8:EmptyBoard
            var r1 = r2;//assign %1 = %2  : {int move,[int] pieces}
            var r0 = r1;//assign %0 = %1  : {int move,[int] pieces}
            var r3 = r0.pieces;//fieldload %3 = %0 pieces : {int move,[int] pieces}
            var r4 = new WyJS.Integer(0);
            var r5 = r3[r4];
            var r6 = new WyJS.Integer(0);
            if(WyJS.equals(r5, r6, true)){
               control_flow_pc = 1397;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1397:
            var r7 = r0.pieces;//fieldload %7 = %0 pieces : {int move,[int] pieces}
            var r8 = new WyJS.Integer(1);
            var r9 = r7[r8];
            var r10 = new WyJS.Integer(0);
            if(WyJS.equals(r9, r10, true)){
               control_flow_pc = 1398;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1398:
            var r11 = r0.pieces;//fieldload %11 = %0 pieces : {int move,[int] pieces}
            var r12 = new WyJS.Integer(8);
            var r13 = r11[r12];
            var r14 = new WyJS.Integer(0);
            if(WyJS.equals(r13, r14, true)){
               control_flow_pc = 1399;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1399:
      }
   }
}

