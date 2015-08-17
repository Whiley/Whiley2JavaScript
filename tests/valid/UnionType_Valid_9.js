function f$Z9bFa7$WL1d$FK$s5$d0kQ$s5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$Zn0FQ$B6$b0$K$Z6$k0FO(r0){//function(UnionType_Valid_9:msgType) -> any
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : any
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
            var r2 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r3 = new WyJS.Integer(11);
            var r4 = new WyJS.Record(["data", "op"], [r2, r3], new WyJS.Type.Record(["data", "op"], [new WyJS.Type.List(new WyJS.Type.Void()), new WyJS.Type.Int()]));
            var r1 = r4;//assign %1 = %4  : {[void] data,int op}
            var r0 = r1;//assign %0 = %1  : {[int] data,int op}
            var r5 = f$Z9bFa7$WL1d$FK$s5$d0kQ$s5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$Zn0FQ$B6$b0$K$Z6$k0FO(r0);//invoke %5 = (%0) UnionType_Valid_9:f : function(UnionType_Valid_9:msgType) -> any
            var r6 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r7 = new WyJS.Integer(11);
            var r8 = new WyJS.Record(["data", "op"], [r6, r7], new WyJS.Type.Record(["data", "op"], [new WyJS.Type.List(new WyJS.Type.Void()), new WyJS.Type.Int()]));
            if(WyJS.equals(r5, r8, true)){
               control_flow_pc = 1949;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1949:
      }
   }
}

