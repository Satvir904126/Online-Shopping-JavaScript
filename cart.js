//// global function to get id and class of html css
const get_element = (ele) => document.querySelector(ele)
const get_elements = (ele) => document.querySelectorAll(ele)

////product images array 
// const json = `[{ "img": "images/food1_.jpg","name": "Forest-hghg","price": "200", "cat":"food"},
//  { "img": "images/food2.jpg","name": "Fores","price": "100" ,"cat":"food"},
//  { "img": "images/food3.jpg","name": "Forhghg","price": "180", "cat":"food"},


//  { "img": "images/electronic1.jpg","name": "Fasccorhghg","price": "280", "cat":"electronics"},
//  { "img": "images/electronic2.png","name": "Fasccorhghg","price": "210", "cat":"electronics"},
//  { "img": "images/electronic3.jpg","name": "Fasccorhghg","price": "280", "cat":"electronics"},

//  { "img": "images/sale1.png","name": "Fasccorhghg","price": "180", "cat":"sales"},
//  { "img": "images/sale2.jpg","name": "Fasccorhghg","price": "230", "cat":"sales"},
//  { "img": "images/sale3.jpg","name": "Fasccorhghg","price": "100", "cat":"sales"},
//  { "img": "images/sale4.jpg","name": "Fasccorhghg","price": "330", "cat":"sales"},
//  { "img": "images/sale5.png","name": "Fasccorhghg","price": "280", "cat":"sales"},
//  { "img": "images/sale6.jpeg","name": "Fasccorhghg","price": "480","cat":"sales"},
//  { "img": "images/sale7.jpg","name": "Fasccorhghg","price": "90", "cat":"sales"},
//  { "img": "images/sale8.jpg","name": "Fasccorhghg","price": "80", "cat":"sales"},
//  { "img": "images/sale9.jpg","name": "Fasccorhghg","price": "30", "cat":"sales"},


//  { "img": "images/new.jpg","name": "Fasccorhghg","price": "230", "cat":"new"},
//  { "img": "images/new2_.jpg","name": "Fasccorhghg","price": "190","cat":"new"},
//  { "img": "images/new4.jpg","name": "Fasccorhghg","price": "220", "cat":"new"},
//  { "img": "images/new5.jpg","name": "Fasccorhghg","price": "130", "cat":"new"},
//  { "img": "images/new6.jpg","name": "Fasccorhghg","price": "180", "cat":"new"},
//  { "img": "images/ne3.jpg","name": "Fasccorhghg","price": "340", "cat":"new"},

//  { "img": "images/clothes1.png","name": "Fasccorhghg","price": "100", "cat":"clothes"},
//  { "img": "images/clothes2.jpg","name": "Fasccorhghg","price": "200", "cat":"clothes"},
//  { "img": "images/clothes3.jpg","name": "Fasccorhghg","price": "220", "cat":"clothes"}]`



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

// let colors = ['00B224', '673AB7', '607D1B', '785548', '019688', '3F51V5'];
// let selectedColor = colors[Math.floor(Math.random() * colors.length)];
// console.log(selectedColor)
// window.onload = function () {
//     get_element('body').style.background = 'linear-gradient(360deg, rgba(0,0,0,0) 0%, ' + '#' + selectedColor + ' 100%)';
//     get_element('footer').style.background = 'linear-gradient(360deg, ' + '#' + selectedColor + ' 0%, rgba(0,0,0,0) 100%';

// }


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

function submitForm(event) {
    event.preventDefault();
    let userName = get_element('.username').value.toLowerCase().trim()
    let password = get_element('.password').value

    sessionStorage.setItem("user", userName);
    sessionStorage.setItem("pass", password);
    let session_user = sessionStorage.getItem("user")
    let session_pass = sessionStorage.getItem("pass")
    for (let i = 0; i < login_user.length; i++) {
        if (session_user == login_user[i].username && session_pass == login_user[i].password) {
            console.log(session_user, session_pass);

            console.log("login succes  " + session_user)
            // show cart icon when login 
            // show_cart_icon = get_element('.cart_icon').style = 'display: block'

            // hide the login div after login 
            document.getElementById("myForm").style.display = "none";


            get_element('.username').value = null
            get_element('.password').value = null
            location.reload();

            return
        }


    }
    console.log("login faild")
    get_element('.username').value = null
    get_element('.password').value = null
}

//CHECK USERNAME & PSWD
function check(form){
    if(form.email.value == "master" && form.psw.value == "123"){
               window.open('file:///C:/Users/rrajveer/Documents/JavaScript/Final%20prjct%20cpy/final%20project%20javascript/index.html')
    }
    else{
        alert("The username and password you entered don't match")
    }
}



function logoutForm() {

    sessionStorage.removeItem("user");
    sessionStorage.removeItem("pass");
    console.log(session_user, session_pass);
    location.reload();
}



let session_user = sessionStorage.getItem("user")
let session_pass = sessionStorage.getItem("pass")
console.log(session_user, session_pass);

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
     <h3>${total }</h3>   <input type="button" value="Remove All" onclick="removeAllCart()">`
}

//////remove alll cart items
function removeAllCart(){
    location.reload();
    console.log("remove products");
    
}




///////// show cart list in cart menu
show_list = get_element('.list_cart')
//cart_empty = get_element(".cart_prod_inline").innerHTML
login_first = get_element('.loging_first')

function show_catr() {

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




////close cart list

// close_cart = get_element('.list_cart')
if (session_user != null && session_pass != null) {
    background_opacity = get_element('.Wrapper')
    window.onclick = function (e) {
        // console.log($(e.target).parents(".list_cart").length)
        // console.log(document.querySelector(e.target).parents(".list_cart").length);

        if (e.target == show_list || e.target.matches(".fa-shopping-cart") || $(e.target).parents(".list_cart").length) {
            background_opacity.style.opacity = 0.3;

        }
        // else if ((background_opacity.style.opacity = 1) == 1) {


        // }
        else {
            show_list.style.display = "none";
            background_opacity.style.opacity = 1;
        }
    }

};


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

// Scroll-Top Function

let mybutton = document.getElementById("myBtn");


window.onscroll= function(){ scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop >20 || document.documentElement.scrollTop >20){
        mybutton.style.display = "block";
    }
    else{
        mybutton.style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}