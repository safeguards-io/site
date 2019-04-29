// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import { navigate } from "gatsby"

import {
  Menu,
  Icon,
  Container
} from 'semantic-ui-react'

const MainMenu = ({active}) => (
    <Menu inverted fixed='top' borderless pointing secondary size='large'>
      <Container>
      {
        [
          {title: 'Home', link: '/'},
          {title: 'Get started', link: '#'},
          {title: 'Use cases', link: '#'},
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
        <Menu.Menu position='right'>
        <Menu.Item>
            <Icon name='book'/>
            Docs
          </Menu.Item>
          <Menu.Item>
            <Icon name='github'/>
            Github
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
)

// Menu.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Menu.defaultProps = {
//   siteTitle: ``,
// }

export default MainMenu
