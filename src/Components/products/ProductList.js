import React, { Component } from 'react'
import { connect } from "react-redux"
import { Badge, Table,Button } from "reactstrap"
import { bindActionCreators } from "redux"
import * as productActions from "../../Redux/actions/productActions"
import * as cartActions from "../../Redux/actions/cartActions"
import alertify from "alertifyjs"
import {Link} from 'react-router-dom'


class ProductList extends Component {
    componentDidMount() {
        this.props.actions.getProduct();
       
    }
    addToCart = (product)=>{
        this.props.actions.addToCart({quantity:1,product});
        alertify.success(product.productName+" Sepete Eklendi!");
    }
    render() {
        return (
            <div>
                <h3><Badge color="warning">Products</Badge> 
                <Badge color="success">
                {this.props.currentCategory.categoryName}
                </Badge></h3>
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Ürün Adı</th>
                            <th>Paket Fiyat</th>
                            <th>Paket adedi</th>
                            <th>Paket Stoğu</th>
                            <th>İşlemler</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map(product=>(
                            <tr key={product.id}>
                            <th scope="row">{product.id}</th>
                            <td><Link to={"/saveproduct/"+product.id} >{product.productName}</Link></td>
                            <td>{product.unitPrice}</td>
                            <td>{product.quantityPerUnit}</td>
                            <td>{product.unitsInStock}</td>
                            <td><Button 
                            onClick={()=>this.addToCart(product)}
                            color="primary">add</Button></td>
                          </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        products: state.productListReducer
    };
}
function mapDispatchtoProps(dispatch) {
    return {
        actions: {
            getProduct: bindActionCreators(productActions.getProducts, dispatch),
            addToCart:bindActionCreators(cartActions.addToCart,dispatch)
        }
    }
}
export default connect(mapStateToProps, mapDispatchtoProps)(ProductList);