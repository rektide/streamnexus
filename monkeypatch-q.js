var assert= require("assert"),
  Q= require("q")

module.exports.makeAssert= function(){
	module.exports.assert= assert
}
module.exports.makeWarn= function(){
	module.exports.assert= function(test,msg){if(!test)console.warn("No inbound on promise")}
}
module.exports.makeError= function(){
	module.exports.assert= function(test,msg){if(!test)throw msg}
}
module.exports.makeAssert()


(function(){
	var haveQThen= Q.makePromise.prototype.then
	Q.makePromise.protoype.then= function(val){
		module.exports.assert(this.inbound,"No inbound on promise")
		this.inbound.put(val)
		return haveQThen.call(this,val)
	}
}())
