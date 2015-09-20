function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = true;
            var r2 = r3;//assign %2 = %3  : bool
            var r0 = r2;//assign %0 = %2  : bool
            var r5 = false;
            var r4 = r5;//assign %4 = %5  : bool
            var r1 = r4;//assign %1 = %4  : bool
            var r6 = true;
            if(r0 === r6){
               control_flow_pc = 1890;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1891;
            control_flow_repeat = true;
            continue outer;//goto label1891
         case 1890:
            var r7 = true;
            if(r0 === r7){
               control_flow_pc = 1892;
               control_flow_repeat = true;
               continue outer;
            }
         case 1891:
            var r8 = false;
            control_flow_pc = 1893;
            control_flow_repeat = true;
            continue outer;//goto label1893
         case 1892:
            var r8 = true;
         case 1893:
            var r9 = true;
            if(r8 === r9){
               control_flow_pc = 1894;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1894:
            var r10 = true;
            if(r0 === r10){
               control_flow_pc = 1895;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1896;
            control_flow_repeat = true;
            continue outer;//goto label1896
         case 1895:
            var r11 = true;
            if(r1 === r11){
               control_flow_pc = 1897;
               control_flow_repeat = true;
               continue outer;
            }
         case 1896:
            var r12 = false;
            control_flow_pc = 1898;
            control_flow_repeat = true;
            continue outer;//goto label1898
         case 1897:
            var r12 = true;
         case 1898:
            var r13 = false;
            if(r12 === r13){
               control_flow_pc = 1899;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1899:
            var r14 = true;
            if(r1 === r14){
               control_flow_pc = 1900;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1901;
            control_flow_repeat = true;
            continue outer;//goto label1901
         case 1900:
            var r15 = true;
            if(r0 === r15){
               control_flow_pc = 1902;
               control_flow_repeat = true;
               continue outer;
            }
         case 1901:
            var r16 = false;
            control_flow_pc = 1903;
            control_flow_repeat = true;
            continue outer;//goto label1903
         case 1902:
            var r16 = true;
         case 1903:
            var r17 = false;
            if(r16 === r17){
               control_flow_pc = 1904;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1904:
            var r18 = true;
            if(r1 === r18){
               control_flow_pc = 1905;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1906;
            control_flow_repeat = true;
            continue outer;//goto label1906
         case 1905:
            var r19 = true;
            if(r1 === r19){
               control_flow_pc = 1907;
               control_flow_repeat = true;
               continue outer;
            }
         case 1906:
            var r20 = false;
            control_flow_pc = 1908;
            control_flow_repeat = true;
            continue outer;//goto label1908
         case 1907:
            var r20 = true;
         case 1908:
            var r21 = false;
            if(r20 === r21){
               control_flow_pc = 1909;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1909:
            var r22 = true;
            if(r1 === r22){
               control_flow_pc = 1910;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1911;
            control_flow_repeat = true;
            continue outer;//goto label1911
         case 1910:
            throw {name: 'Assert Failed', message: 'fail'}
         case 1911:
            var r23 = true;
            if(r0 === r23){
               control_flow_pc = 1912;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1913;
            control_flow_repeat = true;
            continue outer;//goto label1913
         case 1912:
            control_flow_pc = 1914;
            control_flow_repeat = true;
            continue outer;//goto label1914
         case 1913:
            throw {name: 'Assert Failed', message: 'fail'}
         case 1914:
            return;
      }
   }
}

