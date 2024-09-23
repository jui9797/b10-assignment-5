// console.log('index.js file connected');

// common function
function getValueById(id){
    const text =document.getElementById(id);
    return text;
}




const mainBalance =document.getElementById('nav-coin');
const donationDivs =document.getElementsByClassName('card-div');
for(let singleDonationDiv of donationDivs){
    const donateBtn =singleDonationDiv.querySelector('button');
    
    const donationAmount =singleDonationDiv.querySelector('span');
   
    const donationInput =singleDonationDiv.querySelector('input');
    const textH2 =singleDonationDiv.querySelector('h2')
    donateBtn.addEventListener('click', function(){
        
        
        const input =Number(donationInput.value);
        // console.log(input);

        //  input field value validation
        if (donationInput.value === '' || isNaN(input) || input > Number(mainBalance.innerText) || input < 0) {
            // Clear input field after check
            donationInput.value = '';
        
            return alert('Invalid input');
        }
        
        
        

        const amount =Number(donationAmount.innerText);
        // increase donation amount
        const addAmount =amount + input;
        // console.log('BDT:', addAmount);
        // clear input field after click
        donationInput.value = '';
        
        singleDonationDiv.querySelector('span').innerText =addAmount;

        // decrese of main balance
        const mainBalanceValue =Number(mainBalance.innerText);

        const decreseBalance =mainBalanceValue - input;
        // console.log('nav-coin balance:', decreseBalance);
        document.getElementById('nav-coin').innerText =decreseBalance;
       

        // set history
        const history =document.getElementById('dynamic-section').innerText;
        // console.log(history)
         const div =document.createElement('div');
         div.innerHTML =`
           <h2 class="border-2 border-gray-200 p-4 font-bold my-4 rounded-lg ">${donationAmount.innerText} ${textH2.innerText} <br> <span class="text-gray-400  mt-4">Date:
           ${new Date()}</span></h2>
           
          `
        //   console.log(div.innerText)
        //  set date and time
          
          
         document.getElementById('dynamic-section').appendChild(div)

        


    })
    
}

// toggling
const historyTab =getValueById('history-btn');
const donationTab =getValueById('donation-btn');
const cardContainer =getValueById('card-container');
const dynamicHistory =getValueById('dynamic-section');
// console.log(historyTab)
historyTab.addEventListener('click', function(){
    // console.log('history button clicked')
    historyTab.classList.add('bg-[#B4F461]', 'text-black', 'p-5', 'rounded-lg', 'border-none');
    historyTab.classList.remove('text-gray-400')
    donationTab.classList.remove('bg-[#B4F461]', 'text-black','p-5', 'rounded-lg','border-none');
    donationTab.classList.add('text-gray-400', 'rounded-lg')

    // hide card container
    cardContainer.classList.add('hidden');
    dynamicHistory.classList.remove('hidden');
    
})

donationTab.addEventListener('click', function(){
    donationTab.classList.add('bg-[#B4F461]', 'text-black','p-5', 'rounded-lg','border-none');
    donationTab.classList.remove('text-gray-400')
    historyTab.classList.remove('bg-[#B4F461]', 'text-black','p-5', 'rounded-lg','border-none');
    historyTab.classList.add('text-gray-400', 'rounded-lg')

    // hide dynamic history
    dynamicHistory.classList.add('hidden');
    cardContainer.classList.remove('hidden');
})




