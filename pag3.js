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
    productImagee.src = "https://images-ext-2.discordapp.net/external/4B7wU-_qKxdKfy2StY1DUCi5vG0oHqHpSfsrjo4uc-w/https/www.bestseller.md/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/c/aceste-juraminte-goale_lexi-ryan-leda-edge-01.jpg";
    productImagee.alt = "Книга";
    
    var productDetails = document.createElement("div");
    productDetails.classList.add("product-details");
    
    var bookTitle = document.createElement("p");
    bookTitle.classList.add("booktitle");
    bookTitle.textContent = "Aceste jurăminte goale";
    
    var productText = document.createElement("p");
    productText.classList.add("product-text");
    productText.textContent = "... sunt la zece minute distanta de mers pe jos de casa si aproape ca schiopatez sub greutatea bunurilor furate. Ar fi atat de usor sa-i inmanez lui Madame Vivias ceea ce i se cuvine, sa ma arunc in pat si sa dorm douasprezece ore la rand! Dar nu pot";
    
    var productHR = document.createElement("hr");
    productHR.classList.add("product-hr");
    
    var boldText = document.createElement("p");
    boldText.classList.add("bold-text");
    boldText.textContent = "195.00 lei";
    
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