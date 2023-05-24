function showMessage() {
    var messageBox = document.getElementById("messageBox");
    if (messageBox.classList.contains("show")) {
      messageBox.classList.remove("show");
    } else {
      messageBox.classList.add("show");
    }
  }

  function addNewProduct() {
  
    var newProduct = document.createElement("div");
    newProduct.classList.add("product");
    
    var productContainer = document.createElement("div");
    productContainer.classList.add("product-container");
    
    var productImage = document.createElement("div");
    productImage.classList.add("product-image");
    
    var productImagee = document.createElement("img");
    productImagee.classList.add("product-imagee");
    productImagee.src = "https://images-ext-1.discordapp.net/external/50wQLjJLU4lbHTMtpFxnXjrJd5t3oi-hI_Cbc76MTvs/https/bookstore.md/image/cache/wp/gj/import/9789975546799_99%2520de%2520atractii%2520turistice%2520din%2520Republica%2520Moldova-600x770.webp?width=487&height=625";
    productImagee.alt = "Книга";
    
    var productDetails = document.createElement("div");
    productDetails.classList.add("product-details");
    
    var bookTitle = document.createElement("p");
    bookTitle.classList.add("booktitle");
    bookTitle.textContent = "99 de atractii turistice din RM";
    
    var productText = document.createElement("p");
    productText.classList.add("product-text");
    productText.textContent = "Un ghid turistic realizat cu mare dragoste si profesionalism de Vadim Sterbate, jurnalist si fotograf. Intre Prut si Nistru exista sute de atractii turistice care asteapta sa fie descoperite de cei indragostiti de istorie si frumos. Sunt prezentate 99 de locuri care pot fi vizitate in cateva zile, stabilind un itinerariu cu ajutorul hartii incluse si a codurilor QR ale fiecarei locatii.";
    
    var productHR = document.createElement("hr");
    productHR.classList.add("product-hr");
    
    var boldText = document.createElement("p");
    boldText.classList.add("bold-text");
    boldText.textContent = "120.00 lei";
    
    var addButton = document.createElement("button");
    addButton.classList.add("button");
    addButton.textContent = "Adăugați în coș";
    
    
    productDetails.appendChild(bookTitle);
    productDetails.appendChild(productText);
    productDetails.appendChild(productHR);
    productDetails.appendChild(boldText);
    productDetails.appendChild(addButton);
    
    productImage.appendChild(productImagee);
    
    productContainer.appendChild(productImage);
    productContainer.appendChild(productDetails);
    
    newProduct.appendChild(productContainer);
    
    var container = document.getElementsByClassName("show-more")[0];
    container.appendChild(newProduct);
    
   


    var button2 = document.getElementsByClassName("button2")[0];
    button2.style.display = "none";
  }