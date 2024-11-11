import ItemEstoque from '../ItemEstoque/ItemEstoque'
import styles from './ListaEstoque.module.css'

export default function ListaEstoque({storage, onItemIncrease, onItemDecrease}) {
  return (
    <section className={styles.listaEstoque}>
        <h2>Estoque Atual</h2>
        <ul>
            {
                storage.length > 0? storage.map(item => <ItemEstoque
                    key={item.name}
                    product={item}
                    onDecrease={item => onItemIncrease(item)}
                    onIncrease={item => onItemDecrease(item)}
                />) : <p>Não há produtos em estoque</p>
            }
        </ul>
    </section>
  )
}
