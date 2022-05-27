let banned = atob("YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWjAxMjM0NTY3ODkhIiMkJSZcJygpKissLS4vOjs8PT4/QFtcXF1eX2B7fH1+");

function fin(str,len) {
    let sbf=[]
    let patterns=[]
    let chunks = str.match(new RegExp(`.{1,${len}}`, "gm"))
    chunks.forEach((c)=>{
        if (sbf.includes(c)) {
            patterns.push(c)
        }
        sbf.push(c)
    })
    return [...new Set(patterns)]
}

function gap(str) {
    let cn = 0;
    
}



function* gpc() {
    let c = 0;
    while(true){
        c+=1
        while(banned.includes(String.fromCharCode(c))) {
            c+=1
        }
        yield c
    }
}


function _cpx(str) {
    let r = gpc()
    let pat = fin(str);
    let ss = str;
    pat.forEach((pt)=>{
         ss = ss.replaceAll(pt, String.fromCharCode(r.next().value))
    })
    return ss
}
let comprex = {
    compress: _cpx
}
        
