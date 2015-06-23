function f(r0, r1){//function([UnionType_Valid_3:TYPE],UnionType_Valid_3:TYPE) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(0);
            var r3 = r4;//assign %3 = %4  : int
            var r2 = r3;//assign %2 = %3  : int
            while(true){//loop (%2, %5, %6, %7, %8)
               var r5 = r0.length;//lengthof %5 = %0 : [null|int]
               if(WyJS.gt(r2, r5, true)){
                  control_flow_pc = 1943;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r6 = r0[r2];
               if(r6  !=  r1){
                  var r7 = new WyJS.Integer(1);
                  var r8 = r2.add(r7);//add %8 = %2, %7 : int
                  var r2 = r8;//assign %2 = %8  : int
                  continue;
               }
               return r2;//return %2 : int
               var r7 = new WyJS.Integer(1);
               var r8 = r2.add(r7);//add %8 = %2, %7 : int
               var r2 = r8;//assign %2 = %8  : int
            }
         case 1943:
            var r9 = new WyJS.Integer(1);
            var r10 = r9.neg();//neg %10 = %9 : int
            return r10;//return %10 : int
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
            var r1 = null;/n            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(2);
            var r4 = [r1, r2, r3];
            var r5 = null;/n            var r0 = f(r4, r5);//invoke %0 = (%4, %5) UnionType_Valid_3:f : function([UnionType_Valid_3:TYPE],UnionType_Valid_3:TYPE) -> int
            var r6 = new WyJS.Integer(0);
            if(WyJS.equals(r0, r6, true)){
               control_flow_pc = 1945;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1945:
            var r8 = new WyJS.Integer(1);
            var r9 = new WyJS.Integer(2);
            var r10 = null;/n            var r11 = new WyJS.Integer(10);
            var r12 = [r8, r9, r10, r11];
            var r13 = new WyJS.Integer(10);
            var r7 = f(r12, r13);//invoke %7 = (%12, %13) UnionType_Valid_3:f : function([UnionType_Valid_3:TYPE],UnionType_Valid_3:TYPE) -> int
            var r14 = new WyJS.Integer(3);
            if(WyJS.equals(r7, r14, true)){
               control_flow_pc = 1946;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1946:
      }
   }
}

