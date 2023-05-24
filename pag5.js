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
    productImagee.src = "https://bookstore.md/image/cache/wp/gj/import/9786063323065_50%20de%20idei%20pe%20care%20trebuie%20sa%20le%20cunosti%20Filosofie-600x770.webp";
    productImagee.alt = "Книга";
    
    var productDetails = document.createElement("div");
    productDetails.classList.add("product-details");
    
    var bookTitle = document.createElement("p");
    bookTitle.classList.add("booktitle");
    bookTitle.textContent = "50 de idei pe care trebuie sa le cunosti.";
    
    var productText = document.createElement("p");
    productText.classList.add("product-text");
    productText.textContent = "In cea mai mare parte a istoriei sale, filosofia a fost plina de oameni periculosi, inarmati cu idei periculoase. Din pricina ideilor lor subversive, Descartes, Spinoza, Hume sau Rousseau, ca sa numesc doar cativa, au fost arnenintati cu excomunicarea, obligati sa amane Publicarea operelor lor, li s-au refuzat cariere academice sau au fost fortati sa plece in exil.";
    
    var productHR = document.createElement("hr");
    productHR.classList.add("product-hr");
    
    var boldText = document.createElement("p");
    boldText.classList.add("bold-text");
    boldText.textContent = "167.00 lei";
    
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