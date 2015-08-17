function buildNatList$Z9bF5D527RWz(r0){//function(int) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(0);
            var r3 = r4;//assign %3 = %4  : int
            var r1 = r3;//assign %1 = %3  : int
            var r6 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            r5 = r6.clone();//assign %5 = %6  : [void]
            r2 = r5.clone();//assign %2 = %5  : [int]
            while(true){//loop (%1, %2, %7, %9, %10, %11, %12, %13)
               var r7 = new WyJS.Integer(0);
               if(WyJS.gt(r1, r7, true)){
                  control_flow_pc = 859;
                  control_flow_repeat = true;
                  continue outer;
               }
               throw {name: 'Assert Failed', message: 'fail'}
            case 859:
               while(true){//quantify %8 in %2 (%9) : [int]
                  var r9 = new WyJS.Integer(0);
               }
               control_flow_pc = 861;
               control_flow_repeat = true;
               continue outer;//goto label861
            case 860:
               throw {name: 'Assert Failed', message: 'fail'}
            case 861:
               var r10 = new WyJS.List([r1], new WyJS.Type.List(new WyJS.Type.Int()));
               var r11 = r2.append(r10);
               r2 = r11.clone();//assign %2 = %11  : [int]
               var r12 = new WyJS.Integer(1);
               var r13 = r1.add(r12);//add %13 = %1, %12 : int
               var r1 = r13;//assign %1 = %13  : int
            }
         case 862:
            return r2;//return %2 : [int]
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
            var r1 = new WyJS.Integer(1);
            var r2 = r1.neg();//neg %2 = %1 : int
            var r0 = buildNatList$Z9bF5D527RWz(r2);//invoke %0 = (%2) While_Valid_45:buildNatList : function(int) -> [int]
            var r3 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 863;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 863:
            var r5 = new WyJS.Integer(0);
            var r4 = buildNatList$Z9bF5D527RWz(r5);//invoke %4 = (%5) While_Valid_45:buildNatList : function(int) -> [int]
            var r6 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            if(WyJS.equals(r4, r6, true)){
               control_flow_pc = 864;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 864:
            var r8 = new WyJS.Integer(1);
            var r7 = buildNatList$Z9bF5D527RWz(r8);//invoke %7 = (%8) While_Valid_45:buildNatList : function(int) -> [int]
            var r9 = new WyJS.Integer(0);
            var r10 = new WyJS.List([r9], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r7, r10, true)){
               control_flow_pc = 865;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 865:
            var r12 = new WyJS.Integer(2);
            var r11 = buildNatList$Z9bF5D527RWz(r12);//invoke %11 = (%12) While_Valid_45:buildNatList : function(int) -> [int]
            var r13 = new WyJS.Integer(0);
            var r14 = new WyJS.Integer(1);
            var r15 = new WyJS.List([r13, r14], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r11, r15, true)){
               control_flow_pc = 866;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 866:
            var r17 = new WyJS.Integer(3);
            var r16 = buildNatList$Z9bF5D527RWz(r17);//invoke %16 = (%17) While_Valid_45:buildNatList : function(int) -> [int]
            var r18 = new WyJS.Integer(0);
            var r19 = new WyJS.Integer(1);
            var r20 = new WyJS.Integer(2);
            var r21 = new WyJS.List([r18, r19, r20], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r16, r21, true)){
               control_flow_pc = 867;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 867:
            var r23 = new WyJS.Integer(4);
            var r22 = buildNatList$Z9bF5D527RWz(r23);//invoke %22 = (%23) While_Valid_45:buildNatList : function(int) -> [int]
            var r24 = new WyJS.Integer(0);
            var r25 = new WyJS.Integer(1);
            var r26 = new WyJS.Integer(2);
            var r27 = new WyJS.Integer(3);
            var r28 = new WyJS.List([r24, r25, r26, r27], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r22, r28, true)){
               control_flow_pc = 868;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 868:
            var r30 = new WyJS.Integer(10);
            var r29 = buildNatList$Z9bF5D527RWz(r30);//invoke %29 = (%30) While_Valid_45:buildNatList : function(int) -> [int]
            var r31 = new WyJS.Integer(0);
            var r32 = new WyJS.Integer(1);
            var r33 = new WyJS.Integer(2);
            var r34 = new WyJS.Integer(3);
            var r35 = new WyJS.Integer(4);
            var r36 = new WyJS.Integer(5);
            var r37 = new WyJS.Integer(6);
            var r38 = new WyJS.Integer(7);
            var r39 = new WyJS.Integer(8);
            var r40 = new WyJS.Integer(9);
            var r41 = new WyJS.List([r31, r32, r33, r34, r35, r36, r37, r38, r39, r40], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r29, r41, true)){
               control_flow_pc = 869;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 869:
      }
   }
}

