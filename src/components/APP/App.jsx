import { useState } from 'react'
import styles from './App.module.css'
import FormularioProduto from '../FormularioProduto/FormularioProduto'
import ListaEstoque from '../ListaEstoque/ListaEstoque'

export default function App() {

    const [storage, setStorage] = useState([])

    const [budget, setBudget] = useState(1000)

    const onCreateProduct = (product) => {
        const updatedStorage = storage
        updatedStorage.push(product)
        setStorage(updatedStorage)

        const newBudget = budget - (product.amount * product.cost)
        setBudget(newBudget)
    }

    const onPurchase = (product) => {
        const updatedStorage = storage
        const productIndex = updatedStorage.indexOf(product)
        updatedStorage[productIndex].amount += 1
        setStorage(updatedStorage)

        const newBudget = budget - product.cost
        setBudget(newBudget)
    }

    const onSale = (product) => {
        const updatedStorage = storage
        const productIndex = updatedStorage.indexOf(product)
        updatedStorage[productIndex].amount -= 1
        setStorage(updatedStorage)

        const newBudget = budget + product.price
        setBudget(newBudget)
    }

    return (
        <main className={styles.aplicativo}>
            <h1 className={styles.titulo}>Gerenciador de Estoque</h1>
            <p className={styles.caixa}>Caixa: R${budget}</p>
            <FormularioProduto
                onSubmit={onCreateProduct}
            />
            <ListaEstoque
                storage={storage}
                onItemDecrease={onPurchase}
                onItemIncrease={onSale}
            />
        </main>
    )
}
