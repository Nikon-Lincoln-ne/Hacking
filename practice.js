hack.addEventListener('click',
function(){
async function hack()
{   
   let hacked=new Promise((resolve, reject) => {
    setTimeout(()=>
    {
        resolve("Initializing hack...")
    },1000);
   })
   let wait= await hacked;
   start.innerHTML=wait;

    let fb=new Promise((resolve, reject) => {
        setTimeout(()=>
        {
            resolve("Facebook account has been hacked...")
        },3000);
    });
    let wait1=await fb;
    one.innerHTML=wait1;

    let google=new Promise((resolve, reject) => {
        setTimeout(()=>
        {
            resolve("Google account has been hacked...")
        },3000);
    });
    let wait2=await google;
    two.innerHTML=wait2;

    let bankaccount=new Promise((resolve, reject) => {
        setTimeout(()=>
        {
            resolve("Bank account has been hacked...")
        },3000);
    });
    let wait3=await bankaccount;
    three.innerHTML=wait3;

    let twitter=new Promise((resolve, reject) => {
        setTimeout(()=>
        {
            resolve("Twitter account has been hacked...")
        },3000);
    });
    let wait4=await twitter;
    four.innerHTML=wait4;

    let insta=new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            resolve(" Instagram account has been hacked...");
        },3000);
    })
    let wait5=await insta;
    five.innerHTML=wait5;

    let money=new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            resolve("$8 billion has been transfered to your account...");
        },700);
    })
    let dollar=await money;
    bank.innerHTML=dollar;
}
hack()
})