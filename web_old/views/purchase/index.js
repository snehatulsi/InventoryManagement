/* global $ */
$(function() {
  purchase.init();
});

var purchase = {
  init: function() {
    $.ajaxSetup({
      beforeSend: function() {
        $('#ajaxLoader').show();
      },
      complete: function() {
        $('#ajaxLoader').hide();
      }
    });
    this.bindListeners();
    this.getList();
  },
  bindListeners: function() {
  },
  getList: function() {
    $.get('/purchase', function(data) {
      $('#purchaseList tr:nth-child(n+2)').remove();
      data.forEach(function(item) {
        var row = '';
        row += '<td>' + item.p_id + '</td>';
        row += '<td>' + item.dealer_name + '</td>';
        row += '<td>' + item.item_name + '</td>';
        row += '<td>' + item.quantity + '</td>';
        row += '<td>' + item.rate + '</td>';
        row += '<td>' + item.total + '</td>';
        row += '<td>' + item.description + '</td>';
        $('#purchaseList').append('<tr>' + row + '</tr>');
      });
    });
  }
};
