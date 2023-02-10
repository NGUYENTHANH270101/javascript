fetch('https://fakestoreapi.com/products')    // lấy API Public
    .then(res => {
        return res.json()
    })
    .then(data => {
        // console.log(data);
        var products = document.querySelector('.products')
        //init
        products.innerHTML = ''
        data.forEach(item => {
            var newProduct = document.createElement('div')  // tạo  
            newProduct.classList.add('product')             // add vào product
            // cú pháp để thêm data vào
            newProduct.innerHTML = `                        
            <img src="${item.image}">
            <div class="insfo">
            <div class="name">${item.title}</div>
            <div class="price">${item.price}</div>
        </div>`

            products.appendChild(newProduct)
        })
    })

var searchInput = document.querySelector('.search input')

searchInput.addEventListener('input', function (e) {
    let inputSearch = e.target.value.trim().toLowerCase()
    let listProductDom = document.querySelectorAll('.product') // tạo 1 biến để lấy tất cả các sản phẩm
    listProductDom.forEach(item => {                           // duyệt for để kiểm tra từng phần tử
        if (item.innerText.toLowerCase().includes(inputSearch)) {   // điều kiện kiểm tra khi nhập vào ô input
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
})


