let Lead = document.querySelector('.pop-outmain')
console.log(Lead)
let btn = document.querySelector('.btn-2')

window.setTimeout(function (){
 Lead.style.display = 'grid'
}, 2000)

btn.addEventListener('click', Close)

function Close(){
  Lead.style.display = 'none'
}

const paymentForm = document.getElementById('paymentForm');
    paymentForm.addEventListener("submit",function payWithPaystack(e) {
      e.preventDefault()
    })
   
    function payWithPaystack() {
        //   event.preventDefault()
          let handler = PaystackPop.setup({
            key: 'pk_live_7fc4b60c540e82f9a97291ac6fb9ddc947b0e13f', // Replace with your public key
            name: document.getElementById("first-name").value,
            name: document.getElementById("last-name").value,
            email: document.getElementById("email-address").value,
            number: document.getElementById("phone-number").value,
            // amount: document.getElementById("amount").value * 100,
            amount:7499999,
            reference: "Thanks, instructions will be sent to your mailbox.",
            onClose: function () {
                alert('Window closed.');
            },
            callback: function (response) {
                let message = 'Payment complete! Your transaction reference is: ' + response.reference;
                alert(message);
            }
        });
        handler.openIframe();
    }

    
