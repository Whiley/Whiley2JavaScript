function f(r0){//function(UnionType_Valid_15:msgType) -> UnionType_Valid_15:msgType
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : {[int] data,int op}|{[{int dum}] data,int op}
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
            var r3 = new WyJS.Integer(1);
            var r4 = new WyJS.Integer(2);
            var r5 = new WyJS.Integer(3);
            var r6 = [r3, r4, r5];
            var r7 = new WyJS.Integer(1);
            var r8 = {op: r6, data: r7};//newrecord %8 = (%6, %7) : {[int] data,int op}
            var r2 = r8;//assign %2 = %8  : {[int] data,int op}
            var r0 = r2;//assign %0 = %2  : {[int] data,int op}
            var r9 = f(r0);//invoke %9 = (%0) UnionType_Valid_15:f : function(UnionType_Valid_15:msgType) -> UnionType_Valid_15:msgType
            var r10 = new WyJS.Integer(1);
            var r11 = new WyJS.Integer(2);
            var r12 = new WyJS.Integer(3);
            var r13 = [r10, r11, r12];
            var r14 = new WyJS.Integer(1);
            var r15 = {op: r13, data: r14};//newrecord %15 = (%13, %14) : {[int] data,int op}
            if(WyJS.equals(r9, r15, true)){
               control_flow_pc = 416;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 416:
            var r17 = r0.data;//fieldload %17 = %0 data : {[int] data,int op}
            var r16 = r17;//assign %16 = %17  : [int]
            var r1 = r16;//assign %1 = %16  : [int]
            var r18 = new WyJS.Integer(1);
            var r19 = new WyJS.Integer(2);
            var r20 = new WyJS.Integer(3);
            var r21 = [r18, r19, r20];
            if(WyJS.equals(r1, r21, true)){
               control_flow_pc = 417;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 417:
      }
   }
}

