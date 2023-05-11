const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
];

export const List = () => {
    
    return (
        <>
            <h2>Listas</h2>
            <ul>
                {
                    products.map(product => (
                        <li key={product.id}>{product.title}</li>
                    ))
                }
            </ul>

        </>
    )
}