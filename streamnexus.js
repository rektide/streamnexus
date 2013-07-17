function inboundQueue(q){
	var inbound= q.inbound= Queue(),
	  listeners= []
	q.inbound= function(el){
		this.inbound.put(el)
	}
}
