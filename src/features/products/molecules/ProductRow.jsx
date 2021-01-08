import React, {useState, useRef} from 'react';
import {useHistory, useRouteMatch, Link} from "react-router-dom";

let ProductRow = (props) => {
    let history = useHistory();
    let {url} = useRouteMatch();
    let [edit, setEdit] = useState(false)
    let titleRef = useRef();
    let priceRef = useRef();

    let handleEdit = () => {
        setEdit(!edit)
    };
    let handleEditSubmit = (event) => {
        event.preventDefault();
        props.editProduct(props.id, titleRef.current.value, priceRef.current.value);
        setEdit(false)
    };

    let handleDelete = () => {
        props.deleteProduct(props.id)
    };

    let goToProductPage = () => {
        history.push(`${url}/${props.id}`)
    }

    return (
        <tr>
            {
                edit ?
                    <td>
                        <form onSubmit={handleEditSubmit}>

                            <input
                                type="text"
                                placeholder="Product Name"
                                ref={titleRef}
                                defaultValue={props.name}
                            />

                            <input
                                type="text"
                                placeholder="Product price"
                                ref={priceRef}
                                defaultValue={props.price}
                            />

                            <button type="submit">
                                Сохранить изменения
                            </button>
                        </form>
                    </td>
                    :
                    <React.Fragment>
                        <td onClick={goToProductPage}>
                            {props.name}
                        </td>
                        <td>
                            {props.price}
                        </td>
                        <td>
                            <button onClick={handleEdit}>
                                Редактировать
                            </button>
                        </td>
                        <td>
                            <button onClick={handleDelete}>
                                Удалить товар
                            </button>
                        </td>
                    </React.Fragment>
            }
        </tr>
    )
}


export default ProductRow;