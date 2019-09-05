import React from 'react'
import TextInput from "../toolbox/TextInput"
import SelectInput from "../toolbox/SelectInput"

const ProductDetail = (  {  
    categories,
    product,
    onSave,
    onChange}
) => {
    return (
       
        <form onSubmit={onSave}>
           
            <h2>{product.id ? "Güncelle" : "Ekle"}</h2>
            <TextInput 
            name="productName" 
            label="Product Name" 
            value={product.productName}
            onChange={onChange}
            error=""
            />
            <SelectInput 
            name="categoryId" 
            label="Category Name" 
            value={product.categoryId||""}
            onChange={onChange}
            defaultOption="Seçiniz"
            options={categories.map(category=>({
                value:category.id,
                text:category.categoryName
            }))}

            error=""
            />
            <TextInput 
            name="unitPrice" 
            label="unit Price" 
            value={product.unitPrice}
            onChange={onChange}
            error=""
            />
            <TextInput 
            name="quantityPerUnit" 
            label="Quantity Per Unit" 
            value={product.quantityPerUnit}
            onChange={onChange}
            error=""
            />
            <TextInput 
            name="unitsInStock" 
            label="Unit In Stock" 
            value={product.unitsInStock}
            onChange={onChange}
            error=""
            />
            <input type="hidden" value={product.id} name="id" />
            <button type="submit" className="btn btn-success">Save</button>
        </form>
    )
    
}

export default ProductDetail;