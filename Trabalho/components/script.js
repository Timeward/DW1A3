const Modal={
    open(){
        //Adiciona Classe Active ao Modal
        document.querySelector('.modal-overlay')
        .classList.add('active')
    },
    close(){
        //Remove Classe Active do Modal
        document.querySelector('.modal-overlay')
        .classList.remove('active')
    }
}


const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2023'
    },
    {
        id: 2,
        description: 'Website',
        amount: 500000,
        date: '23/01/2023'
    },
    {
        id: 3,
        description: 'Aluguel',
        amount: -150000,
        date: '23/01/2023'
    },
]


const Transaction ={
    incomes(){
        //somar as entradas
    },
    expenses(){
        //somar as saidas
    },
    total(){

    }
    
}

const DOM ={
    transactionsContainer: document.querySelector('#data_table tbody'),

    addTransaction(transaction, index){
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionsContainer.appendChild(tr)
    },
    innerHTMLTransaction(transaction){
        const CSSclass = transaction.amount > 0 ? "income" : "expense"

        const amount = Utils.formatCurrency(transaction.amount)

        const html = `
        <td class="description">${transaction.description}</td>
        <td class="${CSSclass}">${transaction.amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
            <img src="./assets/minus.svg" alt="minus_symbol">
        </td>
        `
        return html
    }
}


const Utils ={
    formatCurrency(value){
        const signal = Number(value) < 0 ? "-" : ""
    }
}


transactions.forEach(function(transaction){
    DOM.addTransaction(transaction)
})