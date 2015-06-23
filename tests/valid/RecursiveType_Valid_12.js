function Tree(r0, r1, r2){//function(int,RecursiveType_Valid_12:Tree,RecursiveType_Valid_12:Tree) -> RecursiveType_Valid_12:Tree
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = {data: r0, lhs: r1, rhs: r2};//newrecord %3 = (%0, %1, %2) : X<{int data,X|null lhs,X|null rhs}>
            return r3;//return %3 : X<null|{int data,X lhs,X rhs}>
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
            var r7 = new WyJS.Integer(1);
            var r8 = null;/n            var r9 = null;/n            var r6 = Tree(r7, r8, r9);//invoke %6 = (%7, %8, %9) RecursiveType_Valid_12:Tree : function(int,RecursiveType_Valid_12:Tree,RecursiveType_Valid_12:Tree) -> RecursiveType_Valid_12:Tree
            var r5 = r6;//assign %5 = %6  : X<null|{int data,X lhs,X rhs}>
            var r0 = r5;//assign %0 = %5  : X<null|{int data,X lhs,X rhs}>
            var r12 = new WyJS.Integer(3);
            var r13 = null;/n            var r14 = null;/n            var r11 = Tree(r12, r13, r14);//invoke %11 = (%12, %13, %14) RecursiveType_Valid_12:Tree : function(int,RecursiveType_Valid_12:Tree,RecursiveType_Valid_12:Tree) -> RecursiveType_Valid_12:Tree
            var r10 = r11;//assign %10 = %11  : X<null|{int data,X lhs,X rhs}>
            var r1 = r10;//assign %1 = %10  : X<null|{int data,X lhs,X rhs}>
            var r17 = new WyJS.Integer(5);
            var r18 = null;/n            var r19 = null;/n            var r16 = Tree(r17, r18, r19);//invoke %16 = (%17, %18, %19) RecursiveType_Valid_12:Tree : function(int,RecursiveType_Valid_12:Tree,RecursiveType_Valid_12:Tree) -> RecursiveType_Valid_12:Tree
            var r15 = r16;//assign %15 = %16  : X<null|{int data,X lhs,X rhs}>
            var r2 = r15;//assign %2 = %15  : X<null|{int data,X lhs,X rhs}>
            var r22 = new WyJS.Integer(2);
            var r21 = Tree(r22, r0, r1);//invoke %21 = (%22, %0, %1) RecursiveType_Valid_12:Tree : function(int,RecursiveType_Valid_12:Tree,RecursiveType_Valid_12:Tree) -> RecursiveType_Valid_12:Tree
            var r20 = r21;//assign %20 = %21  : X<null|{int data,X lhs,X rhs}>
            var r3 = r20;//assign %3 = %20  : X<null|{int data,X lhs,X rhs}>
            var r23 = new WyJS.Integer(2);
            var r24 = new WyJS.Integer(1);
            var r25 = null;/n            var r26 = null;/n            var r27 = {data: r24, lhs: r25, rhs: r26};//newrecord %27 = (%24, %25, %26) : {int data,null lhs,null rhs}
            var r28 = new WyJS.Integer(3);
            var r29 = null;/n            var r30 = null;/n            var r31 = {data: r28, lhs: r29, rhs: r30};//newrecord %31 = (%28, %29, %30) : {int data,null lhs,null rhs}
            var r32 = {data: r23, lhs: r27, rhs: r31};//newrecord %32 = (%23, %27, %31) : {int data,{int data,null lhs,null rhs} lhs,{int data,null lhs,null rhs} rhs}
            if(WyJS.equals(r3, r32, true)){
               control_flow_pc = 309;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 309:
            var r35 = new WyJS.Integer(4);
            var r34 = Tree(r35, r3, r2);//invoke %34 = (%35, %3, %2) RecursiveType_Valid_12:Tree : function(int,RecursiveType_Valid_12:Tree,RecursiveType_Valid_12:Tree) -> RecursiveType_Valid_12:Tree
            var r33 = r34;//assign %33 = %34  : X<null|{int data,X lhs,X rhs}>
            var r4 = r33;//assign %4 = %33  : X<null|{int data,X lhs,X rhs}>
            var r36 = new WyJS.Integer(4);
            var r37 = new WyJS.Integer(2);
            var r38 = new WyJS.Integer(1);
            var r39 = null;/n            var r40 = null;/n            var r41 = {data: r38, lhs: r39, rhs: r40};//newrecord %41 = (%38, %39, %40) : {int data,null lhs,null rhs}
            var r42 = new WyJS.Integer(3);
            var r43 = null;/n            var r44 = null;/n            var r45 = {data: r42, lhs: r43, rhs: r44};//newrecord %45 = (%42, %43, %44) : {int data,null lhs,null rhs}
            var r46 = {data: r37, lhs: r41, rhs: r45};//newrecord %46 = (%37, %41, %45) : {int data,{int data,null lhs,null rhs} lhs,{int data,null lhs,null rhs} rhs}
            var r47 = new WyJS.Integer(5);
            var r48 = null;/n            var r49 = null;/n            var r50 = {data: r47, lhs: r48, rhs: r49};//newrecord %50 = (%47, %48, %49) : {int data,null lhs,null rhs}
            var r51 = {data: r36, lhs: r46, rhs: r50};//newrecord %51 = (%36, %46, %50) : {int data,{int data,{int data,null lhs,null rhs} lhs,{int data,null lhs,null rhs} rhs} lhs,{int data,null lhs,null rhs} rhs}
            if(WyJS.equals(r4, r51, true)){
               control_flow_pc = 310;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 310:
      }
   }
}

