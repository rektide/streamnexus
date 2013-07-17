function inboundQueue(q){
	var inbound= q.inbound= Queue(),
	  listeners= []
	q.inbound= function(el){
		this.inbound.put(el)
	}
}


//onePromise.then(function(state){})

var Q= require("q")

(function(){
	var haveQThen= Q.then
	Q.then= function(val){
		this.inbound.put(val)
		return haveQThen.call(this,val)
	}
}())
var then

/*
q._enhance(_"inboundQueue",function(q){
	q._chains.get.chains.unshift(function(ctx){
		if(ctx.val=="then"){
			then= this
		}
	})
	q._ch
}

*/
