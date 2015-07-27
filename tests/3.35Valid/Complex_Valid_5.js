function EmptyBoard(){//function() -> Complex_Valid_5:EmptyBoard
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
            var r10 = new WyJS.List([r1, r2, r3, r4, r5, r6, r7, r8, r9], new WyJS.List('int'));
            var r11 = new WyJS.Record(["pieces", "move"], [r0, r10], new WyJS.Type.Record(["pieces", "move"], '{int move,[int] pieces}'));
            return r11;//return %11 : {int move,[int] pieces}
      }
   }
}

function play(r0, r1, r2){//function(Complex_Valid_5:Board,Complex_Valid_5:Piece,Complex_Valid_5:nat) -> Complex_Valid_5:Board
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            r0.setValue("pieces", r2);//update %0.pieces[%2] = %1 : {int move,[int] pieces} -> {int move,[int] pieces}
            return r0;//return %0 : {int move,[int] pieces}
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
            var r2 = EmptyBoard();//invoke %2 = () Complex_Valid_5:EmptyBoard : function() -> Complex_Valid_5:EmptyBoard
            r1 = r2;//assign %1 = %2  : {int move,[int] pieces}
            r0 = r1;//assign %0 = %1  : {int move,[int] pieces}
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.Integer(0);
            var r3 = play(r0, r4, r5);//invoke %3 = (%0, %4, %5) Complex_Valid_5:play : function(Complex_Valid_5:Board,Complex_Valid_5:Piece,Complex_Valid_5:nat) -> Complex_Valid_5:Board
            r0 = r3;//assign %0 = %3  : {int move,[int] pieces}
            var r6 = new WyJS.Integer(0);
            var r7 = new WyJS.Integer(1);
            var r8 = new WyJS.Integer(0);
            var r9 = new WyJS.Integer(0);
            var r10 = new WyJS.Integer(0);
            var r11 = new WyJS.Integer(0);
            var r12 = new WyJS.Integer(0);
            var r13 = new WyJS.Integer(0);
            var r14 = new WyJS.Integer(0);
            var r15 = new WyJS.Integer(0);
            var r16 = new WyJS.List([r7, r8, r9, r10, r11, r12, r13, r14, r15], new WyJS.List('int'));
            var r17 = new WyJS.Record(["pieces", "move"], [r6, r16], new WyJS.Type.Record(["pieces", "move"], '{int move,[int] pieces}'));
            if(WyJS.equals(r0, r17, true)){
               control_flow_pc = 1519;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1519:
      }
   }
}

