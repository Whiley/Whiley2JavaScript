function f$a9bF5D537klcoH$6$51Vr$kC$a2$u$FD$12Vo$kC$92$m$V8$H2Vt$VD$y1$f$7B$N2Vo$VB$y1VN$ka0$r$7B$cv1E(r0){//function([int]) -> [ConstrainedList_Valid_16:nat]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : [int]
            return;
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
            var r3 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r2 = f$a9bF5D537klcoH$6$51Vr$kC$a2$u$FD$12Vo$kC$92$m$V8$H2Vt$VD$y1$f$7B$N2Vo$VB$y1VN$ka0$r$7B$cv1E(r3);//invoke %2 = (%3) ConstrainedList_Valid_16:f : function([int]) -> [ConstrainedList_Valid_16:nat]
            var r1 = r2.clone(new WyJS.Type.Int());//assign %1 = %2  : [int]
            var r0 = r1.clone(new WyJS.Type.Int());//assign %0 = %1  : [int]
            var r4 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            if(WyJS.equals(r0, r4, true)){
               control_flow_pc = 160;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 160:
            return;
      }
   }
}

