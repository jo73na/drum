function add(n1, n2){
    return n1+n2;
}
function sub(n1,n2){
    return n1-n2;
}

function mul(n1,n2){
    return n1+n2;
}

function calculator(n1,n2,opt){
    return opt(n1,n2);
}

console.log(calculator(1,2,add));