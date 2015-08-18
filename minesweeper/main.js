function main(r0){//method(whiley/lang/System:Console) -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r10 = new WyJS.Integer(10);
            var r11 = new WyJS.Integer(5);
            var r9 = Board(r10, r11);//invoke %9 = (%10, %11) Minesweeper:Board : function(int,int) -> Minesweeper:Board
            r8 = r9;//assign %8 = %9  : {int height,[{bool flagged,bool holdsBomb}|{bool holdsBomb,int rank}] squares,int width}
            r1 = r8;//assign %1 = %8  : {int height,[{bool flagged,bool holdsBomb}|{bool holdsBomb,int rank}] squares,int width}
            var r13 = new WyJS.Integer(0);
            r12 = r13;//assign %12 = %13  : int
            r2 = r12;//assign %2 = %12  : int
            while(true){//loop (%1, %2, %3, %4, %14, %15, %16, %17, %18, %19, %20, %21, %22, %23, %24, %25, %26)
               var r14 = new WyJS.List([(0,1),(2,3),(3,3),(4,4),(4,2),(6,4)]);
               var r15 = r14.length();//lengthof %15 = %14 : [(int,int)+]
               if(WyJS.gt(r2, r15, true)){
                  control_flow_pc = 0;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r17 = new WyJS.List([(0,1),(2,3),(3,3),(4,4),(4,2),(6,4)]);
               var r18 = r17.getValue(r2);
               r16 = r18;//assign %16 = %18  : (int,int)
               var r19 = r16.tupleLoad(0);
               r3 = r19;//assign %3 = %19  : int
               var r20 = r16.tupleLoad(1);
               r4 = r20;//assign %4 = %20  : int
               var r23 = true;
               var r24 = false;
               var r22 = HiddenSquare(r23, r24);//invoke %22 = (%23, %24) Minesweeper:HiddenSquare : function(bool,bool) -> Minesweeper:HiddenSquare
               var r21 = setSquare(r1, r3, r4, r22);//invoke %21 = (%1, %3, %4, %22) Minesweeper:setSquare : function(Minesweeper:Board,int,int,Minesweeper:Square) -> Minesweeper:Board
               r1 = r21;//assign %1 = %21  : {int height,[{bool flagged,bool holdsBomb}|{bool holdsBomb,int rank}] squares,int width}
               var r25 = new WyJS.Integer(1);
               var r26 = r2.add(r25);//add %26 = %2, %25 : int
               r2 = r26;//assign %2 = %26  : int
            }
         case 0:
            printBoard(r1, r0);//invoke %(%1, %0) Main:printBoard : method(Minesweeper:Board,whiley/lang/System:Console) -> void
            var r27 = new WyJS.Integer(0);
            r2 = r27;//assign %2 = %27  : int
            while(true){//loop (%1, %2, %5, %6, %7, %28, %29, %30, %31, %32, %33, %34, %35, %36, %37, %38, %39, %40, %41, %42, %43, %44, %45, %46, %47, %48, %49, %50, %51, %52, %53, %54, %55, %56, %57, %58, %59, %60, %61, %62, %63, %64, %65, %66, %67, %68, %69, %70, %71, %72, %73, %74, %75, %76)
               var r28 = new WyJS.List([{col: 0,expose: true,row: 0},{col: 0,expose: false,row: 1},{col: 2,expose: true,row: 0}]);
               var r29 = r28.length();//lengthof %29 = %28 : [{int col,bool expose,int row}+]
               if(WyJS.gt(r2, r29, true)){
                  control_flow_pc = 1;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r31 = new WyJS.List([{col: 0,expose: true,row: 0},{col: 0,expose: false,row: 1},{col: 2,expose: true,row: 0}]);
               var r32 = r31.getValue(r2);
               r30 = r32;//assign %30 = %32  : {int col,bool expose,int row}
               r5 = r30;//assign %5 = %30  : {int col,bool expose,int row}
               var r33 = r5.fieldLoad("expose");//fieldload %33 = %5 expose : {int col,bool expose,int row}
               var r34 = true;
               if(r33 === r34){
                  // var r35 = r0.fieldLoad("out");//fieldload %35 = %0 out : {[[int]] args,{method(any) -> void print,method([int]) -> void print_s,method(any) -> void println,method([int]) -> void println_s} out}
                  // var r36 = r35.fieldLoad("println_s");//fieldload %36 = %35 println_s : {method(any) -> void print,method([int]) -> void print_s,method(any) -> void println,method([int]) -> void println_s}
                  // var r37 = new WyJS.List([80,108,97,121,101,114,32,101,120,112,111,115,101,115,32,115,113,117,97,114,101,32,97,116,32]);
                  // var r39 = r5.fieldLoad("col");//fieldload %39 = %5 col : {int col,bool expose,int row}
                  // var r38 = toString(r39);//invoke %38 = (%39) whiley/lang/Int:toString : function(int) -> whiley/lang/ASCII:string
                  // var r40 = r37.append(r38);
                  // var r41 = new WyJS.List([44,32]);
                  // var r42 = r40.append(r41);
                  // var r44 = r5.fieldLoad("row");//fieldload %44 = %5 row : {int col,bool expose,int row}
                  // var r43 = toString(r44);//invoke %43 = (%44) whiley/lang/Int:toString : function(int) -> whiley/lang/ASCII:string
                  // var r45 = r42.append(r43);
                  // Indirect Invoke Here indirectinvoke %36 (%45) : method([int]) -> void
                  var r47 = r5.fieldLoad("col");//fieldload %47 = %5 col : {int col,bool expose,int row}
                  var r48 = r5.fieldLoad("row");//fieldload %48 = %5 row : {int col,bool expose,int row}
                  var r46 = exposeSquare(r1, r47, r48);//invoke %46 = (%1, %47, %48) Minesweeper:exposeSquare : function(Minesweeper:Board,int,int) -> Minesweeper:Board
                  r1 = r46;//assign %1 = %46  : {int height,[{bool flagged,bool holdsBomb}|{bool holdsBomb,int rank}] squares,int width}
                  control_flow_pc = 4;
                  control_flow_repeat = true;
                  continue outer;//goto label4
               case 3:
                  continue;
               }
            }
         case 1:
            // var r77 = r0.fieldLoad("out");//fieldload %77 = %0 out : {[[int]] args,{method(any) -> void print,method([int]) -> void print_s,method(any) -> void println,method([int]) -> void println_s} out}
            // var r78 = r77.fieldLoad("println_s");//fieldload %78 = %77 println_s : {method(any) -> void print,method([int]) -> void print_s,method(any) -> void println,method([int]) -> void println_s}
            // var r79 = new WyJS.List([65,108,108,32,109,111,118,101,115,32,99,111,109,112,108,101,116,101,100]);
            // Indirect Invoke Here indirectinvoke %78 (%79) : method([int]) -> void
      }
   }
}

function printBoard(r0, r1){//method(Minesweeper:Board,whiley/lang/System:Console) -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r6 = new WyJS.Integer(0);
            r5 = r6;//assign %5 = %6  : int
            r2 = r5;//assign %2 = %5  : int
            while(true){//loop (%2, %3, %4, %7, %8, %9, %10, %11, %12, %13, %14, %15, %16, %17, %18, %19, %20, %21, %22, %23, %24, %25, %26, %27, %28, %29, %30, %31, %32, %33, %34, %35, %36, %37, %38, %39, %40, %41, %42, %43)
               var r7 = r0.fieldLoad("height");//fieldload %7 = %0 height : {int height,[{bool flagged,bool holdsBomb}|{bool holdsBomb,int rank}] squares,int width}
               if(WyJS.gt(r2, r7, true)){
                  control_flow_pc = 9;
                  control_flow_repeat = true;
                  continue outer;
               }
               // var r8 = r1.fieldLoad("out");//fieldload %8 = %1 out : {[[int]] args,{method(any) -> void print,method([int]) -> void print_s,method(any) -> void println,method([int]) -> void println_s} out}
               // var r9 = r8.fieldLoad("print_s");//fieldload %9 = %8 print_s : {method(any) -> void print,method([int]) -> void print_s,method(any) -> void println,method([int]) -> void println_s}
               // var r10 = new WyJS.List([124]);
               // Indirect Invoke Here indirectinvoke %9 (%10) : method([int]) -> void
               var r12 = new WyJS.Integer(0);
               r11 = r12;//assign %11 = %12  : int
               r3 = r11;//assign %3 = %11  : int
               while(true){//loop (%3, %4, %13, %14, %15, %16, %17, %18, %19, %20, %21, %22, %23, %24, %25, %26, %27, %28, %29, %30, %31, %32, %33, %34, %35, %36, %37, %38)
                  var r13 = r0.fieldLoad("width");//fieldload %13 = %0 width : {int height,[{bool flagged,bool holdsBomb}|{bool holdsBomb,int rank}] squares,int width}
                  if(WyJS.gt(r3, r13, true)){
                     control_flow_pc = 10;
                     control_flow_repeat = true;
                     continue outer;
                  }
                  var r15 = getSquare(r0, r3, r2);//invoke %15 = (%0, %3, %2) Minesweeper:getSquare : function(Minesweeper:Board,int,int) -> Minesweeper:Square
                  r14 = r15;//assign %14 = %15  : {bool flagged,bool holdsBomb}|{bool holdsBomb,int rank}
                  r4 = r14;//assign %4 = %14  : {bool flagged,bool holdsBomb}|{bool holdsBomb,int rank}
                  if(WyJS.is(r4, )){
                     control_flow_pc = 11;
                     control_flow_repeat = true;
                     continue outer;
                  }
               }
            }
         case 9:
      }
   }
}