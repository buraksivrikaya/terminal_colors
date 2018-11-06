var TC = 
{
	defaults: {
		tc: '',
		bg: '',
		props: [],
		funct: console.log
	},
	textColorsMapList: [{key:'black',value:'\x1b[30m'},
		{key:'red', value:'\x1b[31m'},
		{key:'green', value:'\x1b[32m'},
		{key:'yellow', value:'\x1b[33m'},
		{key:'blue', value:'\x1b[34m'},
		{key:'magenta', value:'\x1b[35m'},
		{key:'cyan', value:'\x1b[36m'},
		{key:'white', value:'\x1b[37m'}],
	backgroundMapList: [{key:'black',value:'\x1b[40m'},
		{key:'red',value:'\x1b[41m'},
		{key:'green',value:'\x1b[42m'},
		{key:'yellow',value:'\x1b[43m'},
		{key:'blue',value:'\x1b[44m'},
		{key:'magenta',value:'\x1b[45m'},
		{key:'cyan',value:'\x1b[46m'},
		{key:'white',value:'\x1b[47m'}],
	textPropsMapList: [{key:'reset', value:'\x1b[0m'},
		{key:'bright', value:'\x1b[1m'},
		{key:'dim', value:'\x1b[2m'},
		{key:'italic', value:'\x1b[3m'},
		{key:'underscore', value:'\x1b[4m'},
		{key:'blink', value:'\x1b[5m'},
		{key:'reverse', value:'\x1b[7m'},
		{key:'hidden', value:'\x1b[8m'},
		{key:'dashed', value:'\x1b[9m'}],

	getRandomTextColor: function()
	{
		return this.textColorsMapList[Math.floor(Math.random()*this.textColorsMapList.length)].value;
	},

	getRandomBackgroundColor: function()
	{
		return this.backgroundMapList[Math.floor(Math.random()*this.backgroundMapList.length)].value;
	},

	getTextColor: function(color)
	{
		if(!color){return '';}
		for(var i = 0; i < this.textColorsMapList.length; i++)
		{
			if(this.textColorsMapList[i].key === color){
				return this.textColorsMapList[i].value;
			}
		}
		return '[NO_COLOR:' + color + ']';
	},

	getBackgroundColor: function(color)
	{
		if(!color){return '';}
		for(var i = 0; i < this.backgroundMapList.length; i++)
		{
			if(this.backgroundMapList[i].key === color){
				return this.backgroundMapList[i].value;
			}
		}
		return '[NO_COLOR:' + color + ']';
	},

	getTextProp: function(prop)
	{
		if(!prop){return '';}
		for(var i = 0; i < this.textPropsMapList.length; i++)
		{
			if(this.textPropsMapList[i].key === prop){
				return this.textPropsMapList[i].value;
			}
		}
		return '[NO_PROP:' + prop + ']';
	},

	printWith: function(func, str, tColor, bgColor, props)
	{
		var mergedSettings = this.getTextColor(tColor) + this.getBackgroundColor(bgColor);
		if(props)
		{
			for(var i=0; i<props.length; i++)
			{
				mergedSettings += this.getTextProp(props[i]);
			}
		}

		func(mergedSettings + str + this.getTextProp('reset'));
	},

	setProperties: function(func, tColor, bgColor, props)
	{
		this.defaults.set = true;
		func && (this.defaults.funct = func);
		this.defaults.tc = this.getTextColor(tColor);
		this.defaults.bg = this.getBackgroundColor(bgColor);
		if(props)
		{
			for(var i=0; i<props.length; i++)
			{
				this.defaults.props += this.getTextProp(props[i]);
			}
		}
	},

	print(text)
	{
		this.defaults.funct(this.defaults.tc + this.defaults.bg + this.defaults.props + text + this.getTextProp('reset'));
	},

	printRandom(text)
	{
		this.defaults.funct(this.getRandomTextColor() + this.getRandomBackgroundColor() + text + this.getTextProp('reset'));
	}
}

module.exports = TC;