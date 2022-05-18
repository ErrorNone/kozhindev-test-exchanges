import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import MyInput from '../../UI/input/MyInput'
import MySelect from '../../UI/select/MySelect'
import './Conversion.scss'

const Conversion = () => {
    const currency = useSelector((state) => state.currency)
    let Valutes = Object.entries(currency).map(valute => {
        return(valute[1])
    })
  
    const [inputValue1, setInputValue1] = useState (1)
    const [inputValue2, setInputValue2] = useState (1)
    const [selectValue1, setSelectValue1] = useState (1)
    const [selectValue2, setSelectValue2] = useState (1)
    function convertValutes(e) {
     return setInputValue2(inputValue1 * selectValue1 / e.target.value)
    }
 
  return (
    <div className='conversion'>
        <h2 className='conversion__title'>Конвертация валют</h2>
        <span className='conversion__string'>
            <MyInput 
            onKeyPress={(event) => {
                if (!/[0-9\.]/.test(event.key)) {
                  event.preventDefault()
                }
              }}
            placeholder='Введите количество...'
            value={inputValue1}
            onChange={e => setInputValue1(e.target.value)}
            />
            <MySelect
            defaultValue="Валюта"
            options={Valutes
            }
            value={Valutes.Value}
            onChange={currentValue => setSelectValue1(currentValue)}
            />
        </span>
        <span className='conversion__string'>
            <MyInput
            onKeyPress={(event) => {
                if (!/[0-9\.]/.test(event.key)) {
                  event.preventDefault()
                }
              }} 
            placeholder='Введите количество...'
            // value={inputValue2}
            value={(inputValue1 * selectValue1 /  selectValue2).toFixed(4)}
            onChange={e => setInputValue2(e.target.value)}
            />
            <MySelect
            defaultValue="Валюта"
            options={Valutes
            }
            value={Valutes.Value}
            onChange={currentValue => setSelectValue2(currentValue)}
            />
        </span>
    </div>
  )
}

export default Conversion