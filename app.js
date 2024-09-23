let productList=[
    {
        id:1,
        Brand:"Oneplus",
        model:"nord CE 32",
        camera:"50 MP OIS",
        price:"49,990",
        ROM:"128GB",
        AddimageUrl:"https://www.bhphotovideo.com/images/images2500x2500/oneplus_5011101665_9_pro_128gb_5g_1629057.jpg"

    },

    {
        id:2,
        Brand:"Iphone",
        model:"15 pro max",
        camera:"50 MP OIS",
        price:"99,990",
        ROM:"128GB",
        AddimageUrl:"https://s.yimg.com/uu/api/res/1.2/6tptIDiKpIIxEsSAHTrwJw--~B/aD0xMTAyO3c9MTk2MDtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/techcrunch_350/da422d6fcb5de1bb7721c4bd56e8367d"

    },

    {
        id:3,
        Brand:"Samsung",
        model:"S22 ultra ",
        camera:"50 MP OIS",
        price:"1,29,990",
        ROM:"256GB",
        AddimageUrl:"https://files.refurbed.com/ii/samsung-galaxy-s22-ultra-5g-1659093029.jpg"

    },
    {
        id:4,
        Brand:"Vivo",
        model:"V27  pro",
        camera:"50 MP OIS",
        price:"39,990",
         ROM:"128GB",
         AddimageUrl:"https://tse4.mm.bing.net/th?id=OIP.0Rbqy2_yCQ22iuHWInUIRgHaHa&pid=Api&P=0&h=180"

    },
    {
        id:5,
        Brand:"Redmi",
        model:" 13 pro max 5G",
        camera:"50 MP OIS",
        price:"35,990",
         ROM:"128GB",
         AddimageUrl:"https://cdn1.smartprix.com/rx-iXnwv3xgY-w1200-h1200/Xnwv3xgY.jpg"

    },
    {
        id:6,
        Brand:"Google pixel",
        model:"8a",
        camera:"50 MP OIS",
        price:"89,990",
         ROM:"128GB",
        AddimageUrl:"https://i5.walmartimages.com/asr/b7fd3135-e813-49f5-aeeb-27ad1a5a2d20_1.f83cb4cec7f361741c3713ae58663754.jpeg"

    },
    
]




document.addEventListener("DOMContentLoaded", () => {

    
    productList.forEach((product) => {
        
        const element = `
            <div class="para">
                <img src="${product.AddimageUrl}" alt="${product.Brand}">
                <a href="#" class="anchor">${product.Brand}</a>
                <a href="#" class="anchor">${product.price}</a>
                <a href="#" > ${product.model}</a>

            </div>`;

    
        const parentElement = document.getElementById('parent-container');
        parentElement.innerHTML += element;
    });
    

})

// document.addEventListener("DOMContentLoaded", ()=>{


//     productList.forEach((product)=>{
//         const element=`
//         <div class="para">
//         <img src="${product.AddimageUrl}" alt="${product.Brand}">
//         <a href="#"> ${product.price}</a>
// </div>`;

//   const parentElement= document.getElementById('parent-container')
//   parentElement.innerHTML += element;

//     });



// }
// );