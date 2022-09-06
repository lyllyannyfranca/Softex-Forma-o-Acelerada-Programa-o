//função para listar as propriedades do objeto
function listObjectProprieties(obj) {
    console.log('\nObject proprieties: ')
    for (const proprieties in obj ) {
        console.log(`-> ${proprieties}: ${obj[proprieties]}`);
    }
    console.log('\n==================\n')
}

//função para listar os elementos de um array
function listArrayElements(arr) {
    console.log('Array elements: ')
    for (const elements in arr) {
        console.log(`-> ${elements}: ${arr[elements]}`)
    }
    console.log('\n==================\n')
}

// função principal
function main() {
    // criado um objeto.
    let movie = {
    name: 'The Lord of the Rings: The Fellowship of the Ring',
    release_year: '2001',
    category: 'Fantasy' 
    }

    // criado um array
    let fruits = ['banana', 'orange', 'pineapple']

    /* chamada as funções de listar 
    propriedades do objeto e listar elementos do array */
    listObjectProprieties(movie)
    listArrayElements(fruits)
}

//chamada a função principal
main()


