import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import MyInput from '../../UI/input/MyInput'
import MySelect from '../../UI/select/MySelect'
import cl from './Conversion.module.css'

const Conversion = () => {
    const currency = useSelector((state) => state.currency)
    let Valutes = Object.entries(currency).map(valute => {
        return(valute[1])
    })
  
    const [inputValue1, setInputValue1] = useState (1)
    const [inputValue2, setInputValue2] = useState (1)
    const [selectValue1, setSelectValue1] = useState (1)
    const [selectValue2, setSelectValue2] = useState (1)
 
  return (
    <div className={cl.conversion}>
        <h2 className={cl.title}>Конвертация валют</h2>
        <span className={cl.string}>
            <MyInput 
            onKeyPress={(event) => {
                if (!/[0-9\.]/.test(event.key)) {
                  event.preventDefault()
                }
              }}
            placeholder={inputValue1}
            value={inputValue1}
            onChange={e => setInputValue1(e.target.value)}
            />
            <MySelect
            defaultValue="Валюта"
            options={Valutes
            }
            value={Valutes.Value}
            onChange={cerrentValue => setSelectValue1(cerrentValue)}
            />
        </span>
        <span className={cl.string}>
            <MyInput
            onKeyPress={(event) => {
                if (!/[0-9\.]/.test(event.key)) {
                  event.preventDefault()
                }
              }} 
            placeholder='1'
            value={(inputValue1 * selectValue1 /  selectValue2).toFixed(4)}
            onChange={e => setInputValue2(e.target.value)}
            />
            <MySelect
            defaultValue="Валюта"
            options={Valutes
            }
            value={Valutes.Value}
            onChange={cerrentValue => setSelectValue2(cerrentValue)}
            />
        </span>
    </div>
  )
}

export default Conversion