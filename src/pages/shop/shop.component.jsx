import React from 'react';
import SHOP_DATA from './shop.data';
import CollectonPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component{
    constructor(){
        super();

        this.state={
          collections: SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state
        return(
            <div>
                {
                    collections.map(({id, ...otherCollectionPreview}) =>(
                        <CollectonPreview key={id} {...otherCollectionPreview}/>
                     ))
                }
            </div>
        )
    }
}

export default ShopPage;