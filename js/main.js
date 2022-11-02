


/*  
===============================================
===============================================
*/

/* start user 1 */
let u1navigations = document.querySelectorAll(".user-1 .navigation");
let u1navigationsArry = Array.from(u1navigations);
let u1hearts = document.querySelectorAll(".user-1 .navigation .heart");
let u1trashs = document.querySelectorAll(".user-1 .navigation .trash");

for(let i = 0; i < u1navigations.length; i++) {
    u1navigations[i].addEventListener("click", () => {
        u1navigations[i].classList.toggle("active");
    });
}

for(let h = 0; h < u1hearts.length; h++) {
    u1hearts[h].addEventListener("click", () => {
        u1hearts[h].classList.toggle("active");
    });
}

// u1navigations.addEventListener("click", () => {
//     u1navigations.classList.toggle("active");
// });




/* end user 1 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/

/* start user 2 */



/* end user 2 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/

/* start user 3 */



/* end user 3 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/

/* start user 4 */

let u4cont = [...document.querySelectorAll(".user-4 .cont")];
let u4img = [...document.querySelectorAll(".user-4 .model-img")];
let u4content = [...document.querySelectorAll(".user-4 .content")];
let u4toggleBtn = document.querySelector(".user-4 .toggle-btn");
let u4activeIndex;


u4cont.forEach((item, i) => {
    item.addEventListener("click", () => {
        if(item.className.includes("circle")) {
            u4cont.forEach(ele => ele.style.zIndex = 1);
            item.style.zIndex = 2;
            item.classList.remove("circle");
            u4img[i].classList.remove("scale-down");
            u4img[i].classList.add("scale-up");

            setTimeout(() => {
                u4content[i].classList.remove("circle");
                u4toggleBtn.classList.toggle("display");
            }, 1000);

            u4activeIndex = i;
        }
    });
});

let u4close = () => {
    u4content[u4activeIndex].classList.add("circle");

    setTimeout(() => {
        u4img[u4activeIndex].classList.remove("scale-up");
        u4img[u4activeIndex].classList.add("scale-down");

        setTimeout(() => {
            u4cont.forEach(ele => ele.style.zIndex = 1);
            u4cont[u4activeIndex].style.zIndex = 2;
            u4cont[u4activeIndex].classList.add("circle");
        }, 500);
    }, 700);
}

u4toggleBtn.addEventListener("click", () => {
    u4close();
    u4toggleBtn.classList.toggle("display");
})



/* end user 4 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/

/* start user 5 */



/* end user 5 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/

/* start user 6 */



/* end user 6 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/

/* start user 7 */



/* end user 7 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/

/* start user 8 */



/* end user 8 */

/*  
===============================================
===============================================
*/

