import React from 'react'
import {connect } from 'react-redux'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';
import CollectonPreview from '../collection-preview/collection-preview.component';
import {createStructuredSelector} from 'reselect'

import './collections-overview.styles.scss'

const CollectionsOverview = ({ collections }) =>(
    <div className='collections-overview'>
        {
            collections.map(({id, ...otherCollectionPreview}) =>(
                <CollectonPreview key={id} {...otherCollectionPreview}/>
            ))
        }
    </div>
)

const mapStateToProp = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProp)(CollectionsOverview)