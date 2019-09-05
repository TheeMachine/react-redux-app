import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux"
import * as cartActions from "../../Redux/actions/cartActions"
import { Table, Button,Alert } from 'reactstrap'
import alertify from 'alertifyjs'



class CartDetail extends Component {
    removeFromCart = product => {
        this.props.actions.removeFromCart(product)
        alertify.error(product.productName + " sepetten silindi!")
    }
    renderEmpty() {
        return (
            <div>
                <Alert color="danger">
                    Sepetiniz Boş!
                </Alert>
            </div>
        )
    }
    renderCart() {
        return (
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Ürün Adı</th>
                        <th>Paket Fiyat</th>
                        <th>Adedi</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.cart.map(cartItem => (
                        <tr key={cartItem.id}>
                            <th scope="row">{cartItem.product.id}</th>
                            <td>{cartItem.product.productName}</td>
                            <td>{cartItem.product.unitPrice}</td>
                            <td>{cartItem.quantity}</td>

                            <td><Button
                                onClick={() => this.removeFromCart(cartItem.product)}
                                color="danger">Sil</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        )
    }
    render() {
        return (
            <div>
                {
                    this.props.cart.length > 0 ? this.renderCart() : this.renderEmpty()
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartDetail)