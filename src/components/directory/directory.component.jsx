import React  from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {selectDirectorySections} from  '../../redux/directory/directory.selector.js'
import Menuitem from '../menu-item/menu-item.component';
import './directory.style.scss'

const Directory = ({ sections }) => (
  <div className="directory-menu">
      {
          sections.map(({id, ...otherSectionProps}) =>(
              <Menuitem  key={id} {...otherSectionProps} />
          ))
      }
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);