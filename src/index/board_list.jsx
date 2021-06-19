'use strict'
const React = require('react')
const createClass = require('create-react-class')

const SearchInput = require('react-search-input').default

const BoardCard = require('./board_card')

var BoardList = createClass({
  render() {
    if (this.props.data.length === 0) {
      return (
        <div>
          <div style={{height: '30vh'}} />
          <div style={{width: '100%', textAlign: 'center'}}>
            Sorry, no result. <a href="/submit">Add your project!</a>
          </div>
        </div>
      )
    }
    const cardNodes = this.props.data.map(function(data, index) {
      return <BoardCard data={data} key={data.id + index} lazyLoad={true} />
    })
    return (
      <div>
        <div className="boardListContainer">
          <div className="boardList">{cardNodes}</div>
        </div>
      </div>
    )
  }
})

module.exports = BoardList
