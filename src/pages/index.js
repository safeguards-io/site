import React from "react"

import Layout from "../components/layout"

import {
  Header,
  Segment,
  Container,
  Icon,
  Grid
} from 'semantic-ui-react'

import "semantic-ui-less/semantic.less";
import "./index.css.less"

const IndexPage = () => (
  <Layout active='/' contained={false}>

    <div className='hero'>
      <Container>
        <Header as="h1">Safeguards</Header>
        <div className='subHeader'>Policy-as-code framework for Terraform</div>
      </Container>
    </div>
    <Container className='what'>
      <Header as='h2'>What is it</Header>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Container>

    <div className='how'>
      <Container>
        <Header as='h2'>How does it work</Header>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
      </Container>
    </div>
    
    <Container className='features'>
      <Grid columns={4} textAlign='center' relaxed='very'>
        <Grid.Row>
          <Grid.Column>
            <div style={{margin:'auto', width: '50%', paddingLeft: '10px'}}>
              <Segment circular style={{width: 90, height: 90}} raised>
                <Icon name='code' size='large' />
              </Segment>
            </div>
            <Header as='h2'>Policy-as-code</Header>
            <div style={{textAlign: 'left'}}>deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</div>
          </Grid.Column>
          <Grid.Column>
            <div style={{margin:'auto', width: '50%', paddingLeft: '10px'}}>
              <Segment circular style={{width: 90, height: 90}} raised>
                <Icon name='lock' size='large' />
              </Segment>
            </div>
            <Header as='h2'>Secure by default</Header>
            <div style={{textAlign: 'left'}}>magni dolores eos qui ratione voluptatem sequi nesciunt</div>
          </Grid.Column>
          <Grid.Column>
            <div style={{margin:'auto', width: '50%', paddingLeft: '10px'}}>
              <Segment circular style={{width: 90, height: 90}} raised>
                <Icon name='certificate' size='large' />
              </Segment>
            </div>
            <Header as='h2'>Certified policies</Header>
            <div style={{textAlign: 'left'}}>ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</div>
          </Grid.Column>
          <Grid.Column>
            <div style={{margin:'auto', width: '50%', paddingLeft: '10px'}}>
              <Segment circular style={{width: 90, height: 90}} raised>
                <Icon name='plug' size='large' />
              </Segment>
            </div>
            <Header as='h2'>Extensible</Header>
            <div style={{textAlign: 'left'}}> molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga</div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <div style={{margin:'auto', width: '50%', paddingLeft: '10px'}}>
              <Segment circular style={{width: 90, height: 90}} raised>
                <Icon name='cogs' size='large' />
              </Segment>
            </div>
            <Header as='h2'>Zero-config</Header>
            <div style={{textAlign: 'left'}}>voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</div>
          </Grid.Column>
          <Grid.Column>
            <div style={{margin:'auto', width: '50%', paddingLeft: '10px'}}>
              <Segment circular style={{width: 90, height: 90}} raised>
                <Icon name='shipping fast' size='large'/>
              </Segment>
            </div>
            <Header as='h2'>CI/CD Ready!</Header>
            <div style={{textAlign: 'left'}}>necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis</div>
          </Grid.Column>
          <Grid.Column>
            <div style={{margin:'auto', width: '50%', paddingLeft: '10px'}}>
              <Segment circular style={{width: 90, height: 90}} raised>
                <Icon name='globe' size='large' />
              </Segment>
            </div>
            <Header as='h2'>Centrally managed</Header>
            <div style={{textAlign: 'left'}}>dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia</div>
          </Grid.Column>
          <Grid.Column>
            <div style={{margin:'auto', width: '50%', paddingLeft: '10px'}}>
              <Segment circular style={{width: 90, height: 90}} raised>
                <Icon name='question circle' size='large' />
              </Segment>
            </div>
            <Header as='h2'>Support & Services</Header>
            <div style={{textAlign: 'left'}}> quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>

    <div className='how'>
      <Container>
        <Header as='h2'>More stuff here...</Header>
      </Container>
    </div>

  </Layout>
)

export default IndexPage
