import React, { Component } from 'react'
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
  Badge
} from 'reactstrap';
import { connect } from "react-redux";
import { bindActionCreators } from "redux"
import * as cartActions from "../../Redux/actions/cartActions"
import { Link } from 'react-router-dom'
import alertify from 'alertifyjs'


class cartSummary extends Component {

  removeFromCart = product => {
    this.props.actions.removeFromCart(product)
    alertify.error(product.productName + " sepetten silindi!")
  }
  renderEmpty() {
    return (
      <NavItem>
        <NavLink>Sepetiniz Boş</NavLink>
      </NavItem>
    )
  }

  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Sepetim
        </DropdownToggle>
        <DropdownMenu right>
          {
            this.props.cart.map(item => (
              <DropdownItem key={item.product.id}>
                <Badge
                  color="danger"
                  onClick={() => this.removeFromCart(item.product)}>
                  X</Badge>
                {item.product.productName}
                <Badge color="success" >{item.quantity}</Badge>
              </DropdownItem>))
          }


          <DropdownItem divider />
          <DropdownItem>
            <Link to={"/cart"}>Sepete Git</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }


  render() {
    return (
      <div>
        {
          this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()
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
export default connect(mapStateToProps, mapDispatchToProps)(cartSummary)