
// const container = document.querySelector("#addressList")

// document.querySelector("#saveEntry").addEventListener("click", event => {
   
//     const personName = document.querySelector("#fullName").value
//     const personAddress = document.querySelector("#address").value


//     container.innerHTML += `
//         <section>
//             <h1>${personName}</h1>
//             <div>${personAddress}</div>
//         </section>
//     `

// })



const boxOfWishes = document.querySelector("#wishList");



document.querySelector("#saveItem").addEventListener("click", () => {
    const currentWish = document.querySelector("#lovedItem").value;
    const storeForWish = document.querySelector("#purchaseStore").value;

    boxOfWishes.innerHTML += `
        <section>
            <h1>I can purchase ${currentWish} at ${storeForWish}.</h1>
        </section>`;
    
  
})


