var React = require('react');
var List = require('./List');
var AddListItem = require('./AddListItem');
var EditListItem = require('./EditListItem');

var ShoppingList = React.createClass({
  
  getInitialState: function () {
    return {
      list: {},
      edit_id:null
    };
  },

  updateList: function (newList) {
    this.setState({
      list: newList
    });
  },

  addListItem: function (item) {
    var list = this.state.list;

    list[item.id] = item;

    this.updateList(list);
  },

  editListItem: function (item) {
    var list = this.state.list;

    list[item.id] = item;

    this.updateList(list);
    this.edit_id = null;
  },

  editListItemStart: function (item_id) {
    this.setState({
      edit_id: item_id
    });
  },


  removeListItem: function (itemId) {
    var list = this.state.list;

    delete list[itemId];

    this.updateList(list);
  },

  removeAllListItems: function () {
    this.updateList({});
  },

  render: function () {
    var items = this.state.list;
    var edit_id = this.state.edit_id;

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">

            <List 
              items={items}
              removeListItem={this.removeListItem} 
              editListItemStart={this.editListItemStart} 
              removeAllListItems={this.removeAllListItems} />
              
          </div>
          <div className="col-sm-6">

            { edit_id!=null ? (
              <EditListItem EditListItem={this.EditListItem} edit_id={edit_id} />
            ) : (
              <AddListItem addListItem={this.addListItem} />
            )}
          
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ShoppingList;
