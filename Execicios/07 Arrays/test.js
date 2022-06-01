const bolsaVanessa = [
    'cartão de crédito',
    'chaves',
    'dinheiro',
    'escova de dentes',
    'lenço de papel',
    'perfume',
    'alcool gel'
]

for (let index = 0; index < bolsaVanessa.length; index++) {
    console.table(`${index+1} ${bolsaVanessa[index]}`)
}

console.table(bolsaVanessa)