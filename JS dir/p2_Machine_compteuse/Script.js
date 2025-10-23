// Produits disponibles à la vente
const itemsForSale = {
  "Phone": 300,
  "Smart TV": 220,
  "Gaming Console": 150
};

// La caisse enregistreuse
const cashRegister = {
  shoppingCart: [],

  // Méthode pour ajouter un produit dans le panier
  addItem: function(itemName) {
    if (itemsForSale[itemName]) {
      this.shoppingCart.push(itemName);
      showMessage(itemName + " a été ajouté au panier ✅");
      updateCartUI();
    } else {
      showMessage("❌ Nous ne vendons pas cet article: " + itemName);
    }
  },

  // Méthode pour calculer le prix total
  calculateTotalPrice: function() {
    let total = 0;
    for (let item of this.shoppingCart) {
      total += itemsForSale[item];
    }
    return total;
  },

  // Méthode pour payer
  pay: function(paymentAmount) {
    let totalPrice = this.calculateTotalPrice();

    // Réduction de 10% si le total est supérieur à 400
    if (totalPrice > 400) {
      totalPrice *= 0.9;
      showMessage("🎉 Réduction de 10% appliquée !");
    }

    showMessage("💰 Le montant à payer est: " + totalPrice);

    // Vérification du paiement
    if (paymentAmount >= totalPrice) {
      showMessage("✅ Merci pour votre achat !");
      if (paymentAmount > totalPrice) {
        showMessage("💵 Votre monnaie est: " + (paymentAmount - totalPrice));
      }
      // Vider le panier après paiement réussi
      this.shoppingCart = [];
      updateCartUI();
    } else {
      showMessage("❌ Désolé, vous n'avez pas assez d'argent !");
    }
  }
};

// 🔹 Fonctions pour interagir avec l'interface HTML
function addItemToCart() {
  const itemName = document.getElementById("itemInput").value;
  cashRegister.addItem(itemName);
  document.getElementById("itemInput").value = "";
}

function payNow() {
  const paymentAmount = Number(document.getElementById("paymentInput").value);
  cashRegister.pay(paymentAmount);
  document.getElementById("paymentInput").value = "";
}

function updateCartUI() {
  const cartList = document.getElementById("cartList");
  cartList.innerHTML = "";
  for (let item of cashRegister.shoppingCart) {
    const li = document.createElement("li");
    li.textContent = item + " - $" + itemsForSale[item];
    cartList.appendChild(li);
  }
}

function showMessage(msg) {
  const messages = document.getElementById("messages");
  const p = document.createElement("p");
  p.textContent = msg;
  messages.appendChild(p);
}
