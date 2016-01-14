function f$a9bFaA$0D53C9G4W(r0){//function((int,any)[]) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.List(new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.List(new WyJS.Type.Int())])))){
               control_flow_pc = 938;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 939;
            control_flow_repeat = true;
            continue outer;//goto label939
         case 938:
            var r1 = new WyJS.Integer(1);
            return r1;//return %1 : int
            control_flow_pc = 940;
            control_flow_repeat = true;
            continue outer;//goto label940
         case 939:
            var r2 = new WyJS.Integer(1);
            var r3 = r2.neg();//neg %3 = %2 : int
            return r3;//return %3 : int
         case 940:
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
            var r6 = new WyJS.Integer(1);
            var r7 = new WyJS.List([new WyJS.Integer(72), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r8 = new WyJS.Tuple([r6, r7], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.List(new WyJS.Type.Int())]));
            var r9 = new WyJS.List([r8], new WyJS.Type.List(new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.List(new WyJS.Type.Int())])));
            var r5 = r9.clone(new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.List(new WyJS.Type.Int())]));//assign %5 = %9  : (int,int[])[]
            var r0 = r5.clone(new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Any();]));//assign %0 = %5  : (int,any)[]
            var r11 = new WyJS.Integer(1);
            var r12 = new WyJS.List([new WyJS.Integer(72), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r13 = new WyJS.Tuple([r11, r12], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.List(new WyJS.Type.Int())]));
            var r14 = new WyJS.Integer(1);
            var r15 = new WyJS.List([new WyJS.Integer(87), new WyJS.Integer(111), new WyJS.Integer(114), new WyJS.Integer(108), new WyJS.Integer(100)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r16 = new WyJS.Tuple([r14, r15], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.List(new WyJS.Type.Int())]));
            var r17 = new WyJS.List([r13, r16], new WyJS.Type.List(new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.List(new WyJS.Type.Int())])));
            var r10 = r17.clone(new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.List(new WyJS.Type.Int())]));//assign %10 = %17  : (int,int[])[]
            var r1 = r10.clone(new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Any();]));//assign %1 = %10  : (int,any)[]
            var r19 = new WyJS.Integer(1);
            var r20 = new WyJS.List([new WyJS.Integer(72), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r21 = new WyJS.Tuple([r19, r20], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.List(new WyJS.Type.Int())]));
            var r22 = new WyJS.Integer(2);
            var r23 = new WyJS.List([new WyJS.Integer(72), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r24 = new WyJS.Tuple([r22, r23], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.List(new WyJS.Type.Int())]));
            var r25 = new WyJS.List([r21, r24], new WyJS.Type.List(new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.List(new WyJS.Type.Int())])));
            var r18 = r25.clone(new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.List(new WyJS.Type.Int())]));//assign %18 = %25  : (int,int[])[]
            var r2 = r18.clone(new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Any();]));//assign %2 = %18  : (int,any)[]
            var r27 = new WyJS.Integer(1);
            var r28 = new WyJS.Integer(1);
            var r29 = new WyJS.Tuple([r27, r28], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r30 = new WyJS.Integer(2);
            var r31 = new WyJS.Integer(2);
            var r32 = new WyJS.Tuple([r30, r31], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r33 = new WyJS.List([r29, r32], new WyJS.Type.List(new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])));
            var r26 = r33.clone(new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()]));//assign %26 = %33  : (int,int)[]
            var r3 = r26.clone(new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Any();]));//assign %3 = %26  : (int,any)[]
            var r35 = new WyJS.Integer(1);
            var r36 = new WyJS.Integer(1);
            var r37 = new WyJS.Tuple([r35, r36], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r38 = new WyJS.Integer(2);
            var r39 = new WyJS.List([new WyJS.Integer(72), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r40 = new WyJS.Tuple([r38, r39], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.List(new WyJS.Type.Int())]));
            var r41 = new WyJS.List([r37, r40], new WyJS.Type.List(new WyJS.Type.Union([new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()]), new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.List(new WyJS.Type.Int())])])));
            var r34 = r41.clone(new WyJS.Type.Union([new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()]), new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.List(new WyJS.Type.Int())])]));//assign %34 = %41  : (int,int)|(int,int[])[]
            var r4 = r34.clone(new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Any();]));//assign %4 = %34  : (int,any)[]
            var r42 = f$a9bFaA$0D53C9G4W(r0);//invoke %42 = (%0) TypeEquals_Valid_20:f : function((int,any)[]) -> int
            var r43 = new WyJS.Integer(1);
            if(WyJS.equals(r42, r43, true)){
               control_flow_pc = 941;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 941:
            var r44 = f$a9bFaA$0D53C9G4W(r1);//invoke %44 = (%1) TypeEquals_Valid_20:f : function((int,any)[]) -> int
            var r45 = new WyJS.Integer(1);
            if(WyJS.equals(r44, r45, true)){
               control_flow_pc = 942;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 942:
            var r46 = f$a9bFaA$0D53C9G4W(r2);//invoke %46 = (%2) TypeEquals_Valid_20:f : function((int,any)[]) -> int
            var r47 = new WyJS.Integer(1);
            if(WyJS.equals(r46, r47, true)){
               control_flow_pc = 943;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 943:
            var r48 = f$a9bFaA$0D53C9G4W(r3);//invoke %48 = (%3) TypeEquals_Valid_20:f : function((int,any)[]) -> int
            var r49 = new WyJS.Integer(1);
            var r50 = r49.neg();//neg %50 = %49 : int
            if(WyJS.equals(r48, r50, true)){
               control_flow_pc = 944;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 944:
            var r51 = f$a9bFaA$0D53C9G4W(r4);//invoke %51 = (%4) TypeEquals_Valid_20:f : function((int,any)[]) -> int
            var r52 = new WyJS.Integer(1);
            var r53 = r52.neg();//neg %53 = %52 : int
            if(WyJS.equals(r51, r53, true)){
               control_flow_pc = 945;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 945:
            return;
      }
   }
}

