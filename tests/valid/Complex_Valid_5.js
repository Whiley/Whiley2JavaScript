function EmptyBoard$Y9_FP8w0$20kQ$o5$k0$Q$J5$s0kM$N4$W0$Q$Z5$Z0kM$JY5$J3$h0$R$F6$t0VF$w5$W0VR$F531(){//function() -> Complex_Valid_5:EmptyBoard
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
            var r10 = new WyJS.List([r1, r2, r3, r4, r5, r6, r7, r8, r9], new WyJS.Type.List(new WyJS.Type.Int()));
            var r11 = new WyJS.Record(["move", "pieces"], [r0, r10], new WyJS.Type.Record(["move", "pieces"], [new WyJS.Type.Int(), new WyJS.Type.List(new WyJS.Type.Int())]));
            return r11;//return %11 : {int move,int[] pieces}
            return;
      }
   }
}

function play$_9fFXWP8w0$20kQ$o5$k0$Q$J5$s0kM$N4$W0$Q$Z5$Z0kM$JI0VF$w5$W0VR$F53P8w0$20kQ$o5$k0$Q$J5$s0kM$N4$W0$Q$Z5$Z0kM$JI0$J$Z5$_0kN$JLAWE$N7$T2Vq$$D$N2Vm$$E$y1$f$7B$N2Vo$VB$y1VP5$R2Vk$Viz(r0, r1, r2){//function(Complex_Valid_5:Board,Complex_Valid_5:Piece,Complex_Valid_5:nat) -> Complex_Valid_5:Board
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            r0.fieldLoad("pieces").setValue(r2, r1);
            return r0;//return %0 : {int move,int[] pieces}
            return;
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
            var r2 = EmptyBoard$Y9_FP8w0$20kQ$o5$k0$Q$J5$s0kM$N4$W0$Q$Z5$Z0kM$JY5$J3$h0$R$F6$t0VF$w5$W0VR$F531();//invoke %2 = () Complex_Valid_5:EmptyBoard : function() -> Complex_Valid_5:EmptyBoard
            var r1 = r2.clone();//assign %1 = %2  : {int move,int[] pieces}
            var r0 = r1.clone();//assign %0 = %1  : {int move,int[] pieces}
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.Integer(0);
            var r3 = play$_9fFXWP8w0$20kQ$o5$k0$Q$J5$s0kM$N4$W0$Q$Z5$Z0kM$JI0VF$w5$W0VR$F53P8w0$20kQ$o5$k0$Q$J5$s0kM$N4$W0$Q$Z5$Z0kM$JI0$J$Z5$_0kN$JLAWE$N7$T2Vq$$D$N2Vm$$E$y1$f$7B$N2Vo$VB$y1VP5$R2Vk$Viz(r0, r4, r5);//invoke %3 = (%0, %4, %5) Complex_Valid_5:play : function(Complex_Valid_5:Board,Complex_Valid_5:Piece,Complex_Valid_5:nat) -> Complex_Valid_5:Board
            var r0 = r3.clone();//assign %0 = %3  : {int move,int[] pieces}
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
            var r16 = new WyJS.List([r7, r8, r9, r10, r11, r12, r13, r14, r15], new WyJS.Type.List(new WyJS.Type.Int()));
            var r17 = new WyJS.Record(["move", "pieces"], [r6, r16], new WyJS.Type.Record(["move", "pieces"], [new WyJS.Type.Int(), new WyJS.Type.List(new WyJS.Type.Int())]));
            if(WyJS.equals(r0, r17, true)){
               control_flow_pc = 758;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 758:
            return;
      }
   }
}

