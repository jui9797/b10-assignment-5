// console.log('index.js file connected');





const mainBalance =document.getElementById('nav-coin');
const donationDivs =document.getElementsByClassName('card-div');
for(let singleDonationDiv of donationDivs){
    const donateBtn =singleDonationDiv.querySelector('button');
    
    const donationAmount =singleDonationDiv.querySelector('span');
   
    const donationInput =singleDonationDiv.querySelector('input');
    
    donateBtn.addEventListener('click', function(){
        
        
        const input =Number(donationInput.value);
        // console.log(input);

        //  input field value validation
        if (donationInput.value === '' || isNaN(input) || input > Number(mainBalance.innerText)) {
            // Clear  input field after check
            donationInput.value = '';  
            return alert('Invalid input');  
        }
        

        const amount =Number(donationAmount.innerText);
        // increase donation amount
        const addAmount =amount + input;
        console.log('BDT:', addAmount);
        // clear input field after click
        donationInput.value = '';
        
        singleDonationDiv.querySelector('span').innerText =addAmount;

        // decrese of main balance
        const mainBalanceValue =Number(mainBalance.innerText);

        const decreseBalance =mainBalanceValue - input;
        console.log('nav-coin balance:', decreseBalance);
        document.getElementById('nav-coin').innerText =decreseBalance;



    })
    
}