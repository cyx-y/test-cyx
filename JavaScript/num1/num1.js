var div = document.querySelector('.box')
var p  = document.querySelector('p')
var target = {
	1:'捕获',
	2:'点击',
	3:'冒泡',
}
div.addEventListener('click',doSomething,true)
div.addEventListener('click',doSomething,false)
p.addEventListener('click',doSomething,true)
p.addEventListener('click',doSomething,false)
function doSomething(event) {
	// console.log(event.currentTarget.tagName)
	var tag = event.currentTarget.tagName
	var tar = target[event.eventPhase]
	console.log(tag + tar)
	if(tag.toLowerCase() == 'p') {
		event.stopImmediatePropagation()
	}
}

