function solve(s){
    let arr=[...s.slice()];
    for (let i=0;i<s.length;i++){
    let temp=arr.pop();
    arr.unshift(temp)
    let rev=arr.slice()
    if (rev.reverse().join``===arr.join``){return true}
    }
    return true
}
