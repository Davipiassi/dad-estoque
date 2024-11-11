import styles from './ItemEstoque.module.css'

export default function ItemEstoque({product, onIncrease, onDecrease}) {

    const handlePurchase = () => {
        onIncrease(product)
    }

    const handleSale = () => {
        if(product.amount > 0) {
            onDecrease(product)
        }
    }

    return (
        <li className={styles.produtoItem}>
            <p className={styles.nomeProduto}>{product.name}</p>
            <p className={styles.quantidadeProduto}>{product.amount}</p>
            <p className={styles.valorProduto}>R${product.price}</p>
            <button 
                className={styles.botaoComprar}
                onClick={handlePurchase}
            >+</button>
            <button 
                className={styles.botaoVender}
                onClick={handleSale}
            >-</button>
        </li>
    )
}
