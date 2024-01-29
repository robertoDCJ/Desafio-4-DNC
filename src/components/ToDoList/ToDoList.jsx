import React, { useState } from 'react'
import "./index.scss"
import plus from "../../assets/plus.png"
import check from "../../assets/check.png"
import checked from "../../assets/checked.png"
import dump from "../../assets/dump.png"
import pen from "../../assets/pen.png"

const ToDoList = () => {
    const [items, setItems] = useState([])
    const [newInput, setNewInput] = useState('')
    const [itemToDelete, setItemToDelete] = useState(null)
    const [itemToEdit, setItemToEdit] = useState(null)
    const [editedText, setEditedText] = useState('');
    const updatedItems = [...items]

    const toggleEdit = (index) => {
        setItemToEdit(itemToEdit === index ? null : index)
        setEditedText(itemToEdit !== index ? items[itemToEdit].text : '')
    }

    const editing = (index) => {
        updatedItems[index].text = editedText
        setItems(updatedItems)
        setItemToEdit(null)
        setEditedText('')
    }

    const toggleDelet = (index) => {
        setItemToDelete(itemToDelete === index ? null : index)
    }

    const deleting = (index) => {
        updatedItems.splice(index, 1)
        setItems(updatedItems)
        setItemToDelete(null)
    }

    const Add = () => {
        if (newInput.trim() !== '') {
            setItems([...items, { text: newInput, checked: false }])
        }
        setNewInput('')
    }

    const toggleCheck = (index) => {
        updatedItems[index].checked = !updatedItems[index].checked;
        setItems(updatedItems);
    }

    return (
        <div className='to-do-list'>
            <ul>
                <li>Tarefas</li>
                <li>Status</li>
                <li>Opções</li>
            </ul>
            <div id='container'>
                <div id='list-itens'>
                    {items.map((item, index) => (
                        <div key={index} className='to-do-list__new'>
                            <div>
                                <p>{item.text}</p>
                            </div>
                            <div>
                                <img id='check' onClick={() => toggleCheck(index)} src={item.checked ? checked : check} alt='check' />
                            </div>
                            <div>
                                <img onClick={() => toggleEdit(index)} src={pen} alt='editar' />
                                <img onClick={() => toggleDelet(index)} src={dump} alt='deletar' />
                            </div>
                        </div>
                    ))}
                </div>
                <div className='to-do-list__new-to-do'>
                    <input type="text" id='newInput' placeholder='Nova tarefa...' value={newInput} onChange={(e) => setNewInput(e.target.value)} />
                    <img onClick={Add} src={plus} alt="adicionar" />
                </div>

                {itemToDelete !== null && (
                    <div key={itemToDelete} className='to-do-list__delet'>
                        <h1>Deseja excluir esse item?</h1>
                        <p>{items[itemToDelete].text}</p>
                        <div>
                            <button onClick={() => toggleDelet(null)}>Não</button>
                            <button onClick={() => deleting(itemToDelete)}>Sim</button>
                        </div>
                    </div>
                )}
                
                {itemToEdit !== null && (
                    <div key={itemToEdit} className='to-do-list__delet'>
                        <h1>Deseja editar esse item?</h1>
                        <input
                            type="text"
                            value={editedText}
                            placeholder={editedText}
                            onChange={(e) => setEditedText(e.target.value)}
                        />
                        <div>
                            <button onClick={() => toggleEdit(null)}>Não</button>
                            <button onClick={() => editing(itemToEdit)}>Sim</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ToDoList