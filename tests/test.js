var test = "function test(){
	var x = 10;
	[lbl] topif:
	if(x < 10){
		goto topfalse;
	}
	x--;
	[lbl] topfalse:
	x++;
	if(x>10){
		goto middlefalse
	}

}
test();"

/*
 * parseScripts
 * (c) James Padolsey
 * http://james.padolsey.com
 *
 * Makes it easier to extend JavaScript as you see fit.
 * (uses custom type attributes in SCRIPT elements)
 * Please read README.text
 */

function parseScripts(scriptType, parseFn) {
    
    var scripts = document.getElementsByTagName('script'),
        sLength = scripts.length,
        execute = function(parsed) {
            // Execute parsed script in global context.
            var dScript = document.createElement('script');
            try {
                dScript.appendChild( document.createTextNode(parsed) );
                document.body.appendChild(dScript);
            } catch(e) {
                dScript.text = parsed;
                document.getElementsByTagName('head')[0].appendChild(dScript);
            }
            dScript.parentNode.removeChild(dScript);
        };
    
    while (sLength--) {
        // All script elements matching scriptType are passed to parseFn.
        var script = scripts[sLength],
            type = script.type,
            code = script.innerHTML;
        if (scriptType.test ? scriptType.test(type) : type === scriptType) {
            
            if (script.src) {
                var xhr = window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
                xhr.open('GET', script.src, false);
                xhr.send(null);
                code = xhr.responseText;
                xhr = null;
            }
            
            execute(parseFn ? parseFn(test) : test);
        }
    }
    
}

/**
 * goto.js - Version 1.0.0
 * Last update: 07-05-09
 * @author Alex Sexton - AlexSexton@gmail.com
 * @license MIT License
 */
var gotojs=function gotojs(d){this.find_container=function e(m,k){var l=m,h=-1,n,j;while(l>=0&&h!=0){l--;if(k.charAt(l)=="{"){h++}else{if(k.charAt(l)=="}"){h--}}}n=l;l=m;h=1;while(l<k.length&&h!=0){l++;if(k.charAt(l)=="{"){h++}else{if(k.charAt(l)=="}"){h--}}}j=l;return{start:n,end:j}};this.filter_js=function f(i){var k=i,j=/\[lbl\]\s+(\w+)\s*:/im,m=/goto\s+(\w+)\s*\;/gim,n,o=0,h,l,p;k=k.replace(m,function(r,q){return"goto_function_"+q+" = false;\n continue "+q+";"});n=j.exec(k);while(n){o=0;h=this.find_container(n.index,k);k=k.replace(j,function(r,q){var s="var goto_function_"+q+" = false;\n";s+=q+": ";s+="while(!goto_function_"+q+"){\n goto_function_"+q+" = true;\n";o=s.length-r.length;return s});l=k.substring(0,h.end+o);p=k.substring(h.end+o);k=l+"}"+p;n=j.exec(k)}return k};var a=[],b="_"+(+new Date());var g=d.replace(/("|')((?:\\\1|.)+?)\1/g,function(h){a[a.length]=h;return b});var c=this.filter_js(g);c=c.replace(RegExp(b,"g"),function(){return a.shift()});return c};var oldLoad=window.onload;window.onload=function(){if(oldLoad){oldLoad()};parseScripts("text/jsplusgoto",gotojs)};jsplusgoto