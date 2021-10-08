export default function GoodsCart(props) {
    return(
        <>
        <tr>
            <td>
                <img className="cart_fruits" src={props.img} alt="fruit"/> 
                <br/>
                <h4 className="cart_h4">{props.title}</h4>
            </td>
            <td>{props.cost}</td>
            <td>{props.count}</td>
            <td>{props.cost * props.count}</td>
            <td>
                <button className="cart_min" data-key={props.articul}>Min</button>
                <button className="cart_delete" data-key={props.articul}>Delete</button>
            </td>
        </tr>
        </>
    )
}