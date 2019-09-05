import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import * as categoryActions from "../../Redux/actions/categoryActions"
import { ListGroup, ListGroupItem, Badge } from "reactstrap"
import * as productActions from "../../Redux/actions/productActions"


class CategoryList extends Component {
    componentDidMount() {
        this.props.actions.getCategories()
    }
    selectCategory = category => {
        this.props.actions.changeCategory(category);
        this.props.actions.getProduct(category.id)

    };
    render() {
        return (
            <div>
                <h3><Badge color="warning">Categories</Badge></h3>
                <ListGroup>
                    <ListGroupItem
                        active={this.props.currentCategory.id === 0 ? true : false}
                        onClick={() =>  this.selectCategory({id:0})}
                        key={0}
                        >
                        All Categories
                </ListGroupItem>
                    {
                        this.props.categories.map(category => (
                            <ListGroupItem
                                active={category.id === this.props.currentCategory.id ? true : false}
                                onClick={() => this.selectCategory(category)}
                                key={category.id}>
                                {category.categoryName}
                            </ListGroupItem>
                        ))
                    }
                </ListGroup>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        categories: state.categoryListReducer
    }
}

function mapDispatchtoProps(dispatch) {
    return {
        actions: {
            getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
            changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch),
            getProduct: bindActionCreators(productActions.getProducts, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(CategoryList)