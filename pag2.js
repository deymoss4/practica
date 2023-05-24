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
    productImagee.src = "https://media.discordapp.net/attachments/1107922998054371341/1110662712092004543/image.png?width=409&height=625";
    productImagee.alt = "Книга";
    
    var productDetails = document.createElement("div");
    productDetails.classList.add("product-details");
    
    var bookTitle = document.createElement("p");
    bookTitle.classList.add("booktitle");
    bookTitle.textContent = "Creierul fericit";
    
    var productText = document.createElement("p");
    productText.classList.add("product-text");
    productText.textContent = "Dacă te simți trist fără motiv și nu știi ce să faci ca să-ți schimbi obiceiurile dăunătoare, fii atent aici: Loretta Breuning îți propune o modalitate originală și revoluționară de a-ți crește nivelul fericirii. Iar asta în numai patruzeci și cinci de zile! Da, ai citit bine: viața ta se poate schimba semnificativ într-un timp relativ scurt.";
    
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