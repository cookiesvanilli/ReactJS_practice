import { useDispatch } from "react-redux";
import { addNewUser } from "../action";

export default function AddUser() {

    const dispatch = useDispatch();

    const formHandler = (event) => {
        event.preventDefault(); // чтобы не происходила перезагрузка страницы
        console.log(event.target.elements);
        let data = event.target.elements;
        dispatch(addNewUser(data.passport.value, data.name.value, data.age.value,));
    }

    return(
        <div>
            <form onSubmit={formHandler}>
                <div>
                    <input type="text" name="passport" defaultValue="123abc"/>
                </div>
                <div>
                    <input type="text" name="name" defaultValue="Anna"/>
                </div>
                <div>
                    <input type="text" name="age" defaultValue="18"/>
                </div>
                <div>
                    <button type="submit">Add new user</button>
                </div>
            </form>
        </div>
    )
}
