function create(r0, r1){//function(TypeEquals_Valid_3:nat,TypeEquals_Valid_3:nat) -> [TypeEquals_Valid_3:nat]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = new WyJS.List([];
, new WyJS.Type.List(new WyJS.Type.Void()));
            r4 = r5.clone();//assign %4 = %5  : [void]
            r2 = r4.clone();//assign %2 = %4  : [int]
            var r7 = new WyJS.Integer(0);
            r6 = r7;//assign %6 = %7  : int
            r3 = r6;//assign %3 = %6  : int
            while(true){//loop (%2, %3, %8, %9, %10, %11)
               if(WyJS.gt(r3, r0, true)){
                  control_flow_pc = 2;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r8 = new WyJS.List([r1], new WyJS.Type.List(new WyJS.Type.Int()));
               r2 = r9.clone();//assign %2 = %9  : [int]
               var r10 = new WyJS.Integer(1);
               var r11 = r3.add(r10);//add %11 = %3, %10 : int
               r3 = r11;//assign %3 = %11  : int
            }
         case 2:
            return r2;//return %2 : [int]
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
            var r1 = new WyJS.Integer(10);
            var r2 = new WyJS.Integer(10);
            var r0 = create(r1, r2);//invoke %0 = (%1, %2) TypeEquals_Valid_3:create : function(TypeEquals_Valid_3:nat,TypeEquals_Valid_3:nat) -> [TypeEquals_Valid_3:nat]
            var r3 = new WyJS.Integer(10);
            var r4 = new WyJS.Integer(10);
            var r5 = new WyJS.Integer(10);
            var r6 = new WyJS.Integer(10);
            var r7 = new WyJS.Integer(10);
            var r8 = new WyJS.Integer(10);
            var r9 = new WyJS.Integer(10);
            var r10 = new WyJS.Integer(10);
            var r11 = new WyJS.Integer(10);
            var r12 = new WyJS.Integer(10);
            var r13 = new WyJS.List([r3, r4, r5, r6, r7, r8, r9, r10, r11, r12], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r13, true)){
               control_flow_pc = 3;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 3:
            var r15 = new WyJS.Integer(5);
            var r16 = new WyJS.Integer(0);
            var r14 = create(r15, r16);//invoke %14 = (%15, %16) TypeEquals_Valid_3:create : function(TypeEquals_Valid_3:nat,TypeEquals_Valid_3:nat) -> [TypeEquals_Valid_3:nat]
            var r17 = new WyJS.Integer(0);
            var r18 = new WyJS.Integer(0);
            var r19 = new WyJS.Integer(0);
            var r20 = new WyJS.Integer(0);
            var r21 = new WyJS.Integer(0);
            var r22 = new WyJS.List([r17, r18, r19, r20, r21], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r14, r22, true)){
               control_flow_pc = 4;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 4:
            var r24 = new WyJS.Integer(0);
            var r25 = new WyJS.Integer(0);
            var r23 = create(r24, r25);//invoke %23 = (%24, %25) TypeEquals_Valid_3:create : function(TypeEquals_Valid_3:nat,TypeEquals_Valid_3:nat) -> [TypeEquals_Valid_3:nat]
            var r26 = new WyJS.List([];
, new WyJS.Type.List(new WyJS.Type.Void()));
            if(WyJS.equals(r23, r26, true)){
               control_flow_pc = 5;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 5:
      }
   }
}

