var React = require('react');
var ListItemDescription = require('./ListItemDescription');

var ListItem = React.createClass({

  handleSubmit: function (event) {
    event.preventDefault();

    var listItemId = this.props.item.id;

    this.props.removeListItem(listItemId);
  },

  editItem: function (event) {
    event.preventDefault();

    var listItemId = this.props.item.id;

    this.props.editListItem(listItemId);
  },

  

  render: function () {
    var item = this.props.item;
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          {item.quantity} x {item.name}
        </div>

        {item.description.length > 0 ? <ListItemDescription description={item.description} /> : ''}

        <div className="panel-footer">
          <form className="form-inline" >
          <button type="button" onClick={this.handleSubmit} className="btn btn-default btn-xs">Remove</button>
          <button type="button" onClick={this.editItem} className="btn btn-default btn-xs">Edit</button>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = ListItem;
