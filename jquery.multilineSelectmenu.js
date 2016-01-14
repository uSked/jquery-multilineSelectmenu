
/* this is the custom selectmenu widget extension add multiline and css theming support */
var multilineSelectmenu = $.widget("ui.multilineSelectmenu", $.ui.selectmenu, {
	_setText: function (element, value) {
		if (value) {
			if (value.indexOf('|') !== -1) {
				var lines = value.split('|');
				value = '<span class="ui-selectmenu-menu-item-header">' + lines[0].trim() + '</span>';
				for (var i = 1; i < lines.length; i++) {
					value = value + '<span class="ui-selectmenu-menu-item-content">' + lines[i].trim() + '</span>';
				}
			}
			element.html(value);
		} else {
			element.html("&#160;");
		}
	}
});
