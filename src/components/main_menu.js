// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import { navigate } from "gatsby"

import {
  Menu,
  Container
} from 'semantic-ui-react'

const MainMenu = ({active}) => (
    <Menu inverted fixed='top' borderless pointing secondary size='large'>
      {
        [
          {title: 'Home', link: '/'},
          {title: 'Registry', link: '/safeguards'},
        ].map((page)=>
          <Menu.Item
            key={page.title}
            onClick={()=>{navigate(page.link)}}
            active={active === page.link}
          >
            {page.title}
          </Menu.Item>
        )
      }
    </Menu>
)

// Menu.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Menu.defaultProps = {
//   siteTitle: ``,
// }

export default MainMenu
