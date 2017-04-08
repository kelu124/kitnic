const Redux      = require('redux')
const React      = require('react')
const {h}        = require('react-hyperscript-helpers')
const path       = require('path')
const immutable  = require('immutable')
const semantic   = require('semantic-ui-react')
const superagent = require('superagent')

const TitleBar = require('../title_bar')

window.superagent = superagent

superagent.get('/gitlab')
  .withCredentials()
  .then(r => {
    return (new DOMParser).parseFromString(r.text, 'text/html')
  }).then(doc => {
    const input = doc.querySelector('input[name=authenticity_token]')
    if (input == null) {
      return
    }
    const token = input.value
    console.log(token)
  })


const Login = React.createClass({
  getInitialState() {
    return {}
  },
  render() {
    return (
      <div className='Login'>
        <TitleBar submissionButton={true} >
          <div className='titleText'>
            {'Login'}
          </div>
        </TitleBar>
        <semantic.Sidebar.Pushable>
          <semantic.Sidebar
            as={semantic.Menu}
            animation='overlay'
            width='thin'
            direction='right'
            visible={true}
            icon='labeled'
            vertical
            inverted
          >
            <semantic.Menu.Item name='collapse'>
              <semantic.Icon name='content' />
            </semantic.Menu.Item>
            <semantic.Menu.Item name='gamepad'>
              <semantic.Icon name='gamepad' />
              Games
            </semantic.Menu.Item>
            <semantic.Menu.Item name='camera'>
              <semantic.Icon name='camera' />
              Channels
            </semantic.Menu.Item>
          </semantic.Sidebar>
          <semantic.Sidebar.Pusher>
            <div>hey</div>
          </semantic.Sidebar.Pusher>
        </semantic.Sidebar.Pushable>
      </div>
    )
  }
})

module.exports = Login
