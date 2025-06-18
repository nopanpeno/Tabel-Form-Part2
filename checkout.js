// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");
  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('checkoutForm');
            const emailInput = document.getElementById('email');
            
            // Show email as valid if it has valid format or is empty (optional)
            emailInput.addEventListener('input', function() {
                const emailValue = this.value.trim();
                if (emailValue === '' || this.checkValidity()) {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                } else {
                    this.classList.remove('is-valid');
                    this.classList.add('is-invalid');
                }
            });
            
            // Format card number input
            document.getElementById('cardNumber').addEventListener('input', function(e) {
                let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
                let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
                e.target.value = formattedValue;
            });
            
            // Format expiry date
            document.getElementById('expiry').addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length >= 2) {
                    value = value.substring(0, 2) + '/' + value.substring(2, 4);
                }
                e.target.value = value;
            });
            
            // CVV only numbers
            document.getElementById('cvv').addEventListener('input', function(e) {
                e.target.value = e.target.value.replace(/\D/g, '');
            });
            
            // Form validation on submit
            form.addEventListener('submit', function(event) {
                event.preventDefault();
                event.stopPropagation();
                
                // Custom validation for email (optional field)
                const email = document.getElementById('email');
                if (email.value && !email.checkValidity()) {
                    email.classList.add('is-invalid');
                } else if (email.value) {
                    email.classList.add('is-valid');
                    email.classList.remove('is-invalid');
                }
                
                // Check all required fields
                const requiredFields = form.querySelectorAll('[required]');
                let allValid = true;
                
                requiredFields.forEach(field => {
                    if (!field.value.trim()) {
                        field.classList.add('is-invalid');
                        field.classList.remove('is-valid');
                        allValid = false;
                    } else {
                        field.classList.add('is-valid');
                        field.classList.remove('is-invalid');
                    }
                });
                
                if (allValid && form.checkValidity()) {
                    alert('Form berhasil disubmit!');
                    // Here you would normally submit the form data
                } else {
                    // Show validation errors
                    form.classList.add('was-validated');
                }
            });
            
            // Real-time validation for required fields
            const requiredInputs = form.querySelectorAll('input[required], select[required]');
            requiredInputs.forEach(input => {
                input.addEventListener('blur', function() {
                    if (this.value.trim()) {
                        this.classList.add('is-valid');
                        this.classList.remove('is-invalid');
                    } else {
                        this.classList.add('is-invalid');
                        this.classList.remove('is-valid');
                    }
                });
                
                input.addEventListener('input', function() {
                    if (this.classList.contains('is-invalid') && this.value.trim()) {
                        this.classList.remove('is-invalid');
                        this.classList.add('is-valid');
                    }
                });
            });
        });
