// const numberShop = prompt('Podaj numer sklepu');
 
   const logo = document.querySelector('.logoTempleContiner');
   let image =document.createElement('img');
   image.src = './image/bus-logo.png';
   logo.append(image);

    const arrCustomersForm = [
      { value: 'Imię', id: 'first-name' },
      { value: 'Nazwisko', id: 'last-name' },
      { value: "Miejscowość", id: 'city' },
      { value: 'Kod poczt.', id: 'post-code' },
      { value: 'Ulica', id: 'street' },
      { value: 'Numer dom', id: 'house-number' },
      { value: "Telefon", id: 'phone' },
    ];

    const form1 = document.querySelector('.firstTempleContiner');
    for(let i = 0; i<arrCustomersForm.length; i++){
      const customerLabel = document.createElement('label');
    const customerInput = document.createElement('input');
      customerLabel.textContent = arrCustomersForm[i].value;
      customerLabel.setAttribute('for', arrCustomersForm[i].id);
      customerInput.setAttribute('id', arrCustomersForm[i].id);
      customerInput.setAttribute('placeholder', arrCustomersForm[i].value);
      
      const wrapperElement = document.createElement('div');
      wrapperElement.append(customerLabel, customerInput);
      wrapperElement.classList.add('field-wrapper');
      form1.append(wrapperElement);
    };

    const arrDataRecept = [
    {value:'Data', id: 'data'},
    {value:'Numer sklepu ', id: 'numberShop'},
    {value:'Numer kasy', id: 'numberCashRegister'},
    {value:'Numer paragonu', id: 'ReceiptNumber'},
  ];

  const form2 = document.querySelector('.receiptTempleContiner');
  for(let i = 0; i<arrDataRecept.length; i++){
    const customerLabel1 = document.createElement('label');
    const customerInput1 = document.createElement('input');
    customerLabel1.textContent = arrDataRecept[i].value;
    customerLabel1.setAttribute('for', arrDataRecept[i].id);
    customerInput1.setAttribute('id', arrDataRecept[i].id);
    customerInput1.setAttribute('placeholder', arrDataRecept[i].value);
    const wrapperElement = document.createElement('div');
    wrapperElement.append(customerLabel1, customerInput1);
    wrapperElement.classList.add('field-wrapper');
    form2.append(wrapperElement);
  };
  //add number shop
  let getnumber = `P${numberShop}`; 
  document.querySelector('#numberShop').innerText=(`${getnumber}`);
  document.querySelector('#numberShop').value = getnumber;

    //  create btn
    const btnDiv1 = document.querySelector('#buttonContiner');
    const createButton =  () => {
        const btn = document.createElement('button');
        btn.innerHTML= 'Wniesienie';
        btn.id = 'btnBringDiv';
        document.querySelector('#buttonContiner').appendChild(btn);
        return btn;
    };
    createButton();

    const btnAdd = document.querySelector('#btnBringDiv');
    const functionDiv = () =>{
      const newDivBring = document.createElement('div');
      newDivBring.id = 'bringDiv';
      btnDiv1.appendChild(newDivBring);
      };
     functionDiv();

     const getDiv = document.querySelector('#bringDiv');

     btnAdd.addEventListener('click', ()=>{
       if(getDiv.style.display === 'block'){
        getDiv.style.display = 'none';
       }else{
        getDiv.style.display = 'block';
       }
     });

       const arrFeeRecept = [

        { value:'Piętro ', id: 'labelfloor'},
         {value:'Kwota ', id: 'labelFee'
      }
      ];
    
      const form3 = document.querySelector('#bringDiv');
      for(let i = 0; i<arrFeeRecept.length; i++){
        const feeLabel1 = document.createElement('label');
        const feeInput1 = document.createElement('input');
        feeLabel1.textContent = arrFeeRecept[i].value;
        feeLabel1.setAttribute('for',arrFeeRecept[i].id);
        feeInput1.setAttribute('id', arrFeeRecept[i].id);
        feeInput1.setAttribute('placeholder', arrFeeRecept[i].value);
        const wrapperElement = document.createElement('div');
        wrapperElement.append(feeLabel1, feeInput1);
        wrapperElement.classList.add('fee-wrapper');
        form3.append(wrapperElement);
      };
      
      const arrItemRecept = [
        { value:'Nr. Art:', id: 'NumberArt', type:'number'},
         {value:'Nazwa: ', id: 'NameArt', type:'text'},
         {value:'Waga ', id: 'scalesArt', type:'number'},
         {value:'Szt: ', id: 'pieceArt', type:'number'}
      ];

      const form4 = document.querySelector('.itemsContiner');

      for(let i = 0; i<arrItemRecept.length; i++){
        const itemLabel1 = document.createElement('label');
        const itemInput1 = document.createElement('input');
        itemLabel1.textContent = arrItemRecept[i].value;
        itemLabel1.setAttribute('for',arrItemRecept[i].id);
        itemInput1.setAttribute('id', arrItemRecept[i].id);
        itemInput1.setAttribute('placeholder', arrItemRecept[i].value);
        const wrapperItem = document.createElement('div');
        wrapperItem.append(itemLabel1, itemInput1);
        wrapperItem.classList.add('items-wrapper');
        form4.append(wrapperItem);
      };

     let addbutton = document.querySelector('.itemsContiner')

      let btn = document.createElement("button");   //
      btn.innerHTML = "Dodaj";  
      btn.id="addButton";                
     addbutton.appendChild(btn);  

 let addRow = document.querySelector('#addButton');
 let tbadyEl = document.querySelector('tbody');
  let ttableEl = document.querySelector('table');
  function AddRecord(e){
  e.preventDefault();
      const numberArtV = document.getElementById('NumberArt').value;
      const nameArtV = document.getElementById('NameArt').value;
      const scalesArtV = document.getElementById('pieceArt').value;
      const pieceArtV = document.getElementById('pieceArt').value

      tbadyEl.innerHTML +=
      `
     <tr>
       <td>${numberArtV }</td>
      <td>${nameArtV}</td>
      <td>${scalesArtV}</td>
      <td>${pieceArtV}</td>
      <td><button class ="btnDel">Usuń</button></td>
     </tr> 
     `;
}

   function onDelate(e){
  if(!e.target.classList.contains('btnDel')){
    return;
  }
const btn =e.target;
btn.closest('tr').remove();
  };

 addRow.addEventListener("click", AddRecord);
 ttableEl.addEventListener("click",onDelate );   
