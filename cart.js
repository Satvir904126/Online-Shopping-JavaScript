//// global function to get id and class of html css
const get_element = (ele) => document.querySelector(ele)
const get_elements = (ele) => document.querySelectorAll(ele)

////product images array 
// const json = `[{ "img": "images/food1_.jpg","name": "Forest-hghg","price": "200", "cat":"food"},


const json = `[{ "img": "images/food1_.jpg","name": "Strawberry Jam","price": "200", "cat":"food"},
 { "img": "images/food2.jpg","name": "Cadbury","price": "100" ,"cat":"food"},
 { "img": "images/food3.jpg","name": "Spicy Noodle","price": "180", "cat":"food"},
 

 { "img": "images/electronic1.jpg","name": "Laptop","price": "280", "cat":"electronics"},
 { "img": "images/electronic2.png","name": "Smart Watch|Headphone","price": "210", "cat":"electronics"},
 { "img": "images/electronic3.jpg","name": "New Headphone","price": "280", "cat":"electronics"},
 
 { "img": "images/sale1.png","name": "Winter Jacket","price": "180", "cat":"sales"},
 { "img": "images/sale2.jpg","name": "Classic Blazer","price": "230", "cat":"sales"},
 { "img": "images/sale3.jpg","name": "Formal Shirt","price": "100", "cat":"sales"},
 { "img": "images/sale4.jpg","name": "Gift Hamper","price": "330", "cat":"sales"},
 { "img": "images/sale5.png","name": "Choco Bars","price": "280", "cat":"sales"},
 { "img": "images/sale6.jpeg","name": "Sweet Sauce","price": "480","cat":"sales"},
 { "img": "images/sale7.jpg","name": "Digital Camera","price": "90", "cat":"sales"},
 { "img": "images/sale8.jpg","name": "High Tech Camera","price": "80", "cat":"sales"},
 { "img": "images/sale9.jpg","name": "Smart Watch","price": "30", "cat":"sales"},


 { "img": "images/new.jpg","name": "Cute Headphone","price": "230", "cat":"new"},
 { "img": "images/new2_.jpg","name": "Headphone","price": "190","cat":"new"},
 { "img": "images/new4.jpg","name": "Girly Dress","price": "220", "cat":"new"},
 { "img": "images/new5.jpg","name": "Floral Dress","price": "130", "cat":"new"},
 { "img": "images/new6.jpg","name": "Winter Sweater","price": "180", "cat":"new"},
 { "img": "images/ne3.jpg","name": "Stylish Headphone","price": "340", "cat":"new"},

 { "img": "images/clothes1.png","name": "Stylish Blazer","price": "100", "cat":"clothes"},
 { "img": "images/clothes2.jpg","name": "Party Dress","price": "200", "cat":"clothes"},
 { "img": "images/clothes3.jpg","name": "Casual Wear","price": "220", "cat":"clothes"}]`


const login_data = `[{ "username": "satvir@gmail.com","password": "1234", "name":"satvir "},
 { "username": "rajveer@gmail.com","password": "1234", "name":"Rajveer "},
 { "username": "karanveer@gmail.com","password": "1234", "name":"Karanveer "},
 { "username": "amanpreet@gmail.com","password": "1234", "name":"Amanpreet "}]`


let products = JSON.parse(json)

let login_user = JSON.parse(login_data)

var product = products;
print_product(product);


// Login form show hide
function openForm() {

    if (session_user != null && session_pass != null) {

        alert("You are already loged in")
        // hide the login div after login 
        document.getElementById("myForm").style.display = "none";

    } else {
        console.log(document.getElementById("myForm").style = "display: block ");
        document.getElementById("myForm").style = "transform: translate(-50%, -50%) scale(1)";

    }
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//// Login FUnctionality
var session_user;
     var session_pass; 
function submitForm(event) {
    event.preventDefault();
    let userName = get_element('.username').value.toLowerCase().trim()
    let password = get_element('.password').value

    
     
    for (let i = 0; i < login_user.length; i++) {
        if (userName == login_user[i].username && password == login_user[i].password) {
            user_name= sessionStorage.getItem(" userName",login_user[i].name)
        
      //  user_name = sessionStorage.getItem("userName")
        console.log(user_name)
            sessionStorage.setItem("user", userName);
    sessionStorage.setItem("pass", password);
     session_user = sessionStorage.getItem("user")
      session_pass = sessionStorage.getItem("pass")
     console.log(session_user, session_pass);
            console.log("login succes  " + session_user)
            get_element(".login").style.display = "none"

            // show cart icon when login 
            // show_cart_icon = get_element('.cart_icon').style = 'display: block'

            // hide the login div after login 
            document.getElementById("myForm").style.display = "none";


            get_element('.username').value = null
            get_element('.password').value = null
            //location.reload();

            return
        }


    }
    console.log("login faild")
    get_element('.username').value = null
    get_element('.password').value = null
}




function logoutForm() {

    sessionStorage.removeItem("user");
    sessionStorage.removeItem("pass");
   // sessionStorage.clear();
    console.log(session_user, session_pass);
    location.reload();
}


///// print the images
function print_product(product) {
    let img = get_element(".product_img")

    for (key in product) {

        let img_src = src = product[key].img;
        let img_name = src = product[key].name;
        let img_price = src = product[key].price;
        let category = src = product[key].cat;
        // console.log( category );
        img.innerHTML += (`<div class="img_grid ${category} all" id="cat${key}" >
     <img  src = "${img_src}"> 
     <h2>${img_name}  </h2>
     <h3>$${img_price}  </h3> 
     <button class="add_cart" onclick="addCart('cat${key}')" >Add to Cart</button></div>`);
    }
}

let all_cart_elements = get_element('.img_grid').innerText
console.log(all_cart_elements);

//////add cart function
item_counter = get_element(".item_counter");
let counter = 0
let total = 0

function addCart(event) {
    let product_cart = get_elements('.img_grid')
     
     let add_product_cart = get_element('.cart_prod_inline')
    for (let i = 0; i < product_cart.length; i++) {
        let all_cart_elements = get_elements(`#cat${i}`)
        let product = product_cart[i];

        let name = product.querySelector('h2').innerText;
        let price = product.querySelector('h3').innerText;
        //console.log(name,price)

        let cart_button = get_element(`#cat${i}`).id
        if (event == cart_button) {


            item_counter = get_element(".item_counter").innerHTML = ++counter;
            //console.log(++counter)
            let add_product_cart = get_element('.cart_prod_inline')
            add_product_cart.innerHTML += `<table><tr> <td>Name</td>
         <td> ${name}</td>
     </tr><tr>
         <td>Price</td><td>${price} </td>
     </tr><tr><td>
             
         </td><td></td></tr></tbody></table>`
               console.log(price = price.substr(1))
            //     add_product_cart.innerHTML += `<h3>
                total += +price

        }
    }
    let total_price = get_element(".total_price")
 total_price.innerHTML += `<h3> Total Price </h3> `
    console.log(total_price)
    total_price.innerHTML = `<h3>Total Price</h3>
     <h3>${total }`
}

// //////remove alll cart items
// function removeAllCart(){
//     location.reload();
//     console.log("remove products");
    
// }




///////// show cart list in cart menu
show_list = get_element('.list_cart')
//cart_empty = get_element(".cart_prod_inline").innerHTML
login_first = get_element('.loging_first')

function show_catr() {
   // let session_user = sessionStorage.getItem("user")
    //let session_pass = sessionStorage.getItem("pass")
    console.log(session_user,session_pass)
    if (session_user == null && session_pass == null) {
        console.log(login_first.style = 'display:block')
        //console.log(login_first.style = "animation: .1s linear 1s 4.9 alternate slidein");

        setTimeout(() => {
            login_first.style.display = 'none'
        }, 800);
    } else {
        console.log(show_list.style = 'visibility: visible;')
    }
}

console.log(session_user, session_pass);



////close cart list

// close_cart = get_element('.list_cart')
background_opacity = get_element('.Wrapper')
if (session_user != null && session_pass != null) {
    background_opacity = get_element('.Wrapper')
}
    window.onclick = function (e) {
   
console.log(e.target);
        if (e.target == show_list || e.target.matches(".fa-shopping-cart") || $(e.target).parents(".list_cart").length) {
           // background_opacity.style.opacity = 0.3;
           // show_list.style.display = "block";
        }
        
        else {
            show_list.style.display = "none";
//background_opacity.style.opacity = 1;
        }
    }



// Search products 
function search(input) {
    let userInput = input.value.trim().toLowerCase();
    let products = document.querySelectorAll('.img_grid')
    console.log(products)
    products.forEach(product => {
        let name = product.querySelector('h2').innerText.toLocaleLowerCase();
        let price = product.querySelector('h3').innerText;
        if ((price + " " + name).includes(userInput)) {
            product.style.display = 'block'
        } else {
            product.style.display = 'none'
        }
    })
}


//FILTER FUNCTION

function filterSelection(input) {

    let products = document.getElementsByClassName('img_grid');


    for (let i = 0; i < products.length; i++) {
        let pro = products[i];

        if (pro.classList.contains(input)) {
            pro.style.display = 'block'
        } else {
            pro.style.display = 'none'
        }
    }
}