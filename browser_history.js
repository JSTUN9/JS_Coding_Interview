function BrowserHistory (){
	// mimic functions of a history trakcer
	// 
	this.size =0
	this.index = 0
    this.data = {}
}

BrowserHistory.prototype.search = function(item){
	// we can think of the object as an object => so we can put items inside without initialising an object
	if (!this.data[item]){
		this.data[item] = {order:[this.size]}
		// the value is an object 
		// object has only one property (order)
		// values are [invocation of this]
		this.size+=1
		console.log(Object.values(this.data[item])==1)
	}
	else{
		// if item exists => means we accessed it another time at this time (index)
		this.data[item].order.push(this.size)
		this.size+=1
	}
	this.index+=1 // increase the time/index
}

BrowserHistory.prototype.goBack = function(){
	// point towards one backwards
	result = null
	if (this.index!=0){
		this.index-=1
		Object.keys(this.data).forEach((elements)=>{
		    //console.log(this.data[elements])
		    // {order: [x...]}
			Object.values(this.data[elements]).forEach((element)=>{
			    //console.log(element)
			    // [x....]
			    element.forEach((elemental)=>{
			      if (elemental==this.index){
    			        // found elements
    			        result = elements
    			        //console.log(elements)
    			        return 
    		        }  
			    })
    			    
			})
		})
	}
	if (result!=null){
	    return result
	}
	else{
	    return ""   
	}
	// return empty string when not found
}

BrowserHistory.prototype.goFront = function(){
	// point towards one backwards
	result = null
	if (this.index!=0){
		this.index+=1
		Object.keys(this.data).forEach((elements)=>{
		    //console.log(this.data[elements])
		    // {order: [x...]}
			Object.values(this.data[elements]).forEach((element)=>{
			    //console.log(element)
			    // [x....]
			    element.forEach((elemental)=>{
			      if (elemental==this.index){
    			        // found elements
    			        result = elements
    			        //console.log(elements)
    			        return 
    		        }  
			    })
    			    
			})
		})
	}
	if (result!=null){
	    return result
	}
	else{
	    return ""   
	}
	// return empty string when not found
}

BrowserHistory.prototype.clear = function(K){
    // how to remove all
	Object.keys(this.data).forEach((elements)=>{
		    //console.log(this.data[elements])
		    // {order: [x...]}
			Object.values(this.data[elements]).forEach((element)=>{
			    //console.log(element)
			    // [x....]
			    element.forEach((elemental,index)=>{
			    	console.log(elemental)
			      if (elemental>=K && elemental<=this.size){
    			        // found elements older than K
    			        // delete
			      		//console.log(this.data[elements].order[index])
			      		// delete leaves < empty items>
			      		//[ { order: [ 0, <1 empty item> ] }, { order: [ <4 empty items> ] } ]
			      		delete this.data[elements].order[index]
			      		// use splice instead
			      		//console.log(this.size)
			      		//console.log(this.data[elements].order)
			      		//this.data[elements].order.splice(index,1)
			      		// splicing affects forEach
    			        
    		        }  
			    })
    			    
			})
		})
	// remove empty items
	Object.keys(this.data).forEach((elements)=>{
		count = 0
		let N = this.data[elements].order.length
		//console.log(N)

		for (let i = 0 ; i< N ; i++){
		    //console.log(this.data[elements].order[i-count])
			if(this.data[elements].order[i-count]===undefined ){
				this.data[elements].order.splice(i-count,1)
				//console.log(this.data[elements].order)
				count +=1
			}

		}

	})

	this.size = K
	//console.log(K)
	this.index =K-1

	return

}

const browser = new BrowserHistory;
browser.search("177013")
browser.search("Hi")
browser.search("Hi")
browser.search("177013")
browser.search("Hi")
browser.search("Hi")
browser.search("Hi")
browser.search("Hi")
//console.log(browser)
console.log(Object.values(Object.values(browser.data)))
console.log(browser.goBack())
console.log(browser.goBack())
console.log(browser.goBack())
browser.clear(1)
console.log(Object.values(Object.values(browser.data)))
console.log(browser.goFront())