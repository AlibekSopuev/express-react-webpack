import React, {useState, useRef} from 'react';
import {useHistory, useRouteMatch, Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {productsActions} from "../reducer";

let ProductRow = (props) => {
    const dispatch = useDispatch()
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
        dispatch(productsActions.update.request({
            id: props.id,
            title: titleRef.current.value,
            price: priceRef.current.value
        }))
        setEdit(false)
    };

    let handleDelete = () => {
        dispatch(productsActions.delete.request({id: props.id}))
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