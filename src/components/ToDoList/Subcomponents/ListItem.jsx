import './index.scss'
import check from "../../../assets/check-black.png"
import checked from "../../../assets/checked-black.png"
import dump from "../../../assets/dump-black.png"
import pen from "../../../assets/pen-black.png"

const ListItem = ({ items, toggleCheck, toggleEdit, toggleDelet }) => {
    return (
        <div>
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
    )
}

export default ListItem