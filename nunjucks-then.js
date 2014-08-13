module.export= function(var, done){
	if(var.then)
		var.then(done)
	else
		done(var)
}

module.export.addFilter= function(env){
	env.addFilter('then', module.exports, true)
	return env
}
