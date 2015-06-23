function len(r0){//function(LengthOf_Valid_4:listibr) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.length;//lengthof %1 = %0 : [bool]|[int]|[real]
            return r1;//return %1 : int
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
            var r4 = true;
            var r5 = false;
            var r6 = true;
            var r7 = [r4, r5, r6];
            var r3 = r7;//assign %3 = %7  : [bool]
            var r0 = r3;//assign %0 = %3  : [bool]
            var r8 = len(r0);//invoke %8 = (%0) LengthOf_Valid_4:len : function(LengthOf_Valid_4:listibr) -> int
            var r9 = new WyJS.Integer(3);
            if(WyJS.equals(r8, r9, true)){
               control_flow_pc = 1213;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1213:
            var r11 = new WyJS.Integer(1);
            var r12 = new WyJS.Integer(2);
            var r13 = [r11, r12];
            var r10 = r13;//assign %10 = %13  : [int]
            var r1 = r10;//assign %1 = %10  : [int]
            var r14 = len(r1);//invoke %14 = (%1) LengthOf_Valid_4:len : function(LengthOf_Valid_4:listibr) -> int
            var r15 = new WyJS.Integer(2);
            if(WyJS.equals(r14, r15, true)){
               control_flow_pc = 1214;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1214:
            var r17 = new WyJS.Real(1.0);
            var r18 = new WyJS.Real(2.0);
            var r19 = new WyJS.Real(3.0);
            var r20 = new WyJS.Real(4.0);
            var r21 = [r17, r18, r19, r20];
            var r16 = r21;//assign %16 = %21  : [real]
            var r2 = r16;//assign %2 = %16  : [real]
            var r22 = len(r2);//invoke %22 = (%2) LengthOf_Valid_4:len : function(LengthOf_Valid_4:listibr) -> int
            var r23 = new WyJS.Integer(4);
            if(WyJS.equals(r22, r23, true)){
               control_flow_pc = 1215;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1215:
      }
   }
}

