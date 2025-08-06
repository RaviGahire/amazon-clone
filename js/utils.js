// pincode validation
const applyBtn = document.querySelector('.apply-btn');
const pincodeInput = document.querySelector('.pincode-input')

async function validatePincodeFromJSON(userPincode) {
    try {
        const response = await fetch('/data/pincode.json');
        const data = await response.json();
        // console.log(data)
        const match = data.find(pin => pin.pincode === userPincode);
        if (match) {
            alert(`✅ Valid Pincode! City: ${match.city}`)
            return true;
        } else {
            alert("❌ Invalid Pincode. Plase Enter valid pincode");
            return false;
        }

    } catch (error) {
        console.error("Error loading JSON file:", error);
        return false;
    }
}
let pin = "";
pincodeInput.addEventListener('input', (e) => {
    pin = e.target.value;
    //   console.log("Current Pincode:", pin);
});
applyBtn.addEventListener('click', () => {
    validatePincodeFromJSON(pin);
    pin = e.target.value = ''
});



