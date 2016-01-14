/* Coded up by Marvin Herbold
 *
 * This jQuery UI multiline selectmenu code just re-uses the current built-in jquery selectmenu
 * widget and tweaks it a little bit to add multiline support - the tweaks done are as follows:
 *
 * 1) Use html instead of text to render selectmenu items
 * 2) Break out options using '|' into spans of headers and content css stles
 * 
 */

var multilineSelectmenu = $.widget( "ui.multilineSelectmenu", $.ui.selectmenu, {
  _setText: function( element, value ) {
    if ( value ) {
      if ( value.indexOf( '|' ) !== -1 ) {
        var lines = value.split( '|' );
        value = '<span class="ui-selectmenu-menu-item-header">' + lines[ 0 ].trim() + '</span>';
        for ( var i = 1; i < lines.length; i++ ) {
          value = value + '<span class="ui-selectmenu-menu-item-content">' + lines[ i ].trim() + '</span>';
        }
      }
      element.html( value );
    } else {
      element.html( "&#160;" );
    }
  }
});
