import { useState } from 'react'
import styles from './FormularioProduto.module.css'

export default function FormularioProduto({onSubmit}) {

    const [name, setName] = useState()
    const [amount, setAmount] = useState()
    const [costValue, setCostValue] = useState()
    const [salesValue, setSalesValue] = useState()

    const clearForm = () => {
        setName(null)
        setAmount(null)
        setCostValue(null)
        setSalesValue(null)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit({
            name: name,
            amount: parseInt(amount),
            cost: parseFloat(costValue),
            price: parseFloat(salesValue)
        })
        clearForm()
    }

    return (
        <form className={styles.formulario}>
            <div>
                <label className={styles.label}>Nome do Produto:</label>
                <input 
                    type='text'
                    className={styles.input}
                    onChange={(e) => {setName(e.target.value)}}
                />
            </div>

            <div>
                <label className={styles.label}>Quantidade em Estoque:</label>
                <input 
                    type='number'
                    className={styles.input}
                    onChange={(e) => setAmount(e.target.value)}    
                />
            </div>

            <div>
                <label className={styles.label}>Valor de Compra:</label>
                <input 
                    type='number'
                    className={styles.input}
                    onChange={(e) => setCostValue(e.target.value)}
                />
            </div>

            <div>
                <label className={styles.label}>Valor de Venda:</label>
                <input 
                    type='number'
                    className={styles.input}
                    onChange={(e) => setSalesValue(e.target.value)}
                /> 
            </div>

            <button 
                className={styles.botao}
                onClick={handleSubmit}
            >Adicionar Produto</button>
        </form>
    )
}
