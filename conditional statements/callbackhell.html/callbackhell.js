function getreadyBiryani(callback)
{
    setTimeout(()=>{
        console.log("all ingridians are ready");
        callback();
    },1000);
}
function mixMasala(callback)
{
    setTimeout(()=>{
        console.log("all masalas mixed well");
        callback();
    },3000);
}
function cookingBiryani(callback)
{
    setTimeout(()=>{
        console.log("cooking biryani in time");
        callback();
    },2000)
}
function serveBiryani(callback)
{
    setTimeout(()=>{
        console.log("serve to all");
        callback();
    },5000);
}
getreadyBiryani(()=>{
    mixMasala(()=>{
        cookingBiryani(()=>{
            serveBiryani(()=>{
                console.log("this biryani is nice or excellent");
            })
        })
    })
})
