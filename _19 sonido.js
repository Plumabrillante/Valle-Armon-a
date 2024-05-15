(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"_19 sonido_atlas_1", frames: [[0,911,482,185],[2031,0,2,225],[1682,0,347,1444],[1273,0,407,1487],[0,0,1271,909],[877,911,45,110],[717,911,55,130],[774,911,51,138],[1008,911,34,43],[924,911,40,61],[966,911,40,61],[484,911,231,227],[827,911,48,130]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_4 = function() {
	this.initialize(ss["_19 sonido_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["_19 sonido_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["_19 sonido_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["_19 sonido_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Escena19paraanimarpngcopia = function() {
	this.initialize(ss["_19 sonido_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Escena___19__F1removebgpreview = function() {
	this.initialize(ss["_19 sonido_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Escena___19__F2removebgpreview = function() {
	this.initialize(ss["_19 sonido_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Escena___19__signo_exclamaciónremovebgpreview = function() {
	this.initialize(ss["_19 sonido_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Escena___19__U1removebgpreview = function() {
	this.initialize(ss["_19 sonido_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Escena___19__U2removebgpreview = function() {
	this.initialize(ss["_19 sonido_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Escena___19__U3removebgpreview = function() {
	this.initialize(ss["_19 sonido_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Escena___19_Corazónremovebgpreview = function() {
	this.initialize(ss["_19 sonido_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Escena___19_F3removebgpreview = function() {
	this.initialize(ss["_19 sonido_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Símbolo1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Audio19");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.text = new cjs.Text("Leer", "italic 71px 'Brush Script MT'");
	this.text.textAlign = "center";
	this.text.lineHeight = 89;
	this.text.lineWidth = 172;
	this.text.parent = this;
	this.text.setTransform(87.95,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#CC9900"},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176,91.1);


(lib.Iniciobotón = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.text = new cjs.Text("Inico", "italic 36px 'Brush Script MT'");
	this.text.textAlign = "center";
	this.text.lineHeight = 46;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(52,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#999900"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104,51.9);


(lib.corazón = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Escena___19_Corazónremovebgpreview();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(69));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,231,227);


(lib.cloud = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#94B1AF").s().p("Au2FHQmKmJAAotQAAgxADgwQAgHuFnFmQGKGKIsAAQItAAGKmKQFnlmAgnuQADAwAAAxQAAItmKGJQmKGKotAAQosAAmKmKg");
	this.shape.setTransform(134.5,196.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Au2O3QmKmKAAotQAAosGKmKQGKmKIsAAQItAAGKGKQGKGKAAIsQAAItmKGKQmKGKotAAQosAAmKmKg");
	this.shape_1.setTransform(134.5,134.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,269,269);


(lib.botónmenú = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.text = new cjs.Text("Menú ", "italic 36px 'Brush Script MT'");
	this.text.textAlign = "center";
	this.text.lineHeight = 46;
	this.text.lineWidth = 112;
	this.text.parent = this;
	this.text.setTransform(58,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#999900"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116,48.2);


(lib.botonnube = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AqWLgQgfgEgWgKQgdgOgcgfQgIgKglgyQgUgbhBhKIhBhIIgbgfQhKhWgkhCQhAgdgfgRQg0gcgkgfQgqgkgagsIgGgKQgXgsgCgtQgCgmANgtQAIgdAVgzIAFgLQgBgKAFgMQAJgTATgSQBnhgCNglQBZgXBWAEQA0ACAzAMQAgAIAPgFQALgDALgLIASgWQA1hDBPgmQBQgmBVABIA3ABQAfAAAVgJQAUgIAXgUIAmglQBJg/B7gTQA5gJClgEQBLgBAhAEQA7AHAmAbQAOAJAfAfQAaAaATAKQAgARA2ABIBbABQB0ALBpBxIArAuQAZAbAVAQQAUAPAmATQAvAYANAHQAmAYAoAnQAXAXAtA0QAhAlAPAUQAZAgAPAdQAkBEAKBeQAGA8gDBxQgBAQgCAOQgCALgEAJQgLAZgWACQgFABgEgBQgSAOgaAKIgaAKIgTAGQgZAKgQALQgVAPgWAfQgXAkgNAQQgXAdgjAcQgaAUgpAaQiSBbh3ARQhLALhFgQQhLgRg1guQiGBIicAPQicAPiQguQgjgLgMgCQgagGgUAFQgLACgNAGIgRAJQgfASgJAEQgUAJgcADQgQABghAAIjRABQgmAAgSgCgAm4GyQhZBFgYAUQgXATgIAPQgIARABAVQABAXAJAQQADAHAGAGIABAAICMgBIAYgBQAGgKAFgSQAIgbgCgUQgBgbgQgQQAOgMAVgQIAkgbIBAgxQAXgSAbgPQAYgMALgJQASgOACgSQACgRgMgPQgLgLgNgEIADgHQAGgOgGgRIgBgDQAKgIAGgMQAIgRgGgPQgIgTgagHQgMgDggACQhGAFgzgCQhCgCg3gNQgtgKg3gWQgegNhCgeQgagMgNgKQgVgPgIgSQANgCAaAAQAXgBANgJQAMgJANgZQAQghAEgVQAGgfgOghQgNgegagYQgYgWgegLQgfgMgeADQgbADgOANQgRAPgHAlQgHAlAABEQAAA6AHAXQAOAzAxAsQAXAXAiAUQAXANAnAPQBKAgAnANQBAAWA2AGQAhAEBQAAIALAAQgoAUgjAOIg5AYQgiAPgWALIgsAYQgZANgTAHQgwARgzgFQg0gFgrgZQAYADAPgCQAVgDALgMQAOgPACgkQACgegCgoQgCgcgLgMQgKgMgWgDIgmAAQgWAAgLABQgTABgMAIQgQALgGAXQgEAQgBAaIgCBqIAAAGIBEBWQAsATArAGQAYADAxAAQAjABAUgEQASgFAigRIBOgoQAsgXAVgHIAggKgAhOBaQgUABgLASQgJANAAAZQAAAQACAPQADAUAHAIQAHAJAQAEQANADAMgEQAQgGAHgSQAEgLACgXQACgogQgRQgNgNgSAAIgEAAgAlHlbQgYAOgIARQgGAMgBARIABAeIAAAkQACAUAKALQAKANATACQASABAMgMQARgPAAgdIAAgSQAAgKADgGQAEgIAIgEQAJgEAHAFQADAjAVAUQAMALAPAEQAQAEAOgFQAPgFAJgNQAJgOgDgPQgBgJgIgMIgMgUQgEgGgFgSQgGgPgFgIQgTgbgtgBIgCAAQguAAgnAWgAH7j7QgCANAGAMQAHAMALAGQALAGAOgCQAOgCAJgIQASgQAAgjQABgmgTgUQgNgOgXgEQgQgDgaABQguABgZAHQgoALgRAcQgKAQgBASQgBAUAKAOQAKAPATAEQAUAEANgLQAFgEAJgKQAIgKAFgEQALgIAXAAIAPABg");
	this.shape.setTransform(138.7511,73.8045);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33FFCC").s().p("AqWLgQgfgEgWgKQgdgOgcgfQgIgKglgyQgUgbhBhKIhBhIIgbgfQhKhWgkhCQhAgdgfgRQg0gcgkgfQgqgkgagsIgGgKQgXgsgCgtQgCgmANgtQAIgdAVgzIAFgLQgBgKAFgMQAJgTATgSQBnhgCNglQBZgXBWAEQA0ACAzAMQAgAIAPgFQALgDALgLIASgWQA1hDBPgmQBQgmBVABIA3ABQAfAAAVgJQAUgIAXgUIAmglQBJg/B7gTQA5gJClgEQBLgBAhAEQA7AHAmAbQAOAJAfAfQAaAaATAKQAgARA2ABIBbABQB0ALBpBxIArAuQAZAbAVAQQAUAPAmATQAvAYANAHQAmAYAoAnQAXAXAtA0QAhAlAPAUQAZAgAPAdQAkBEAKBeQAGA8gDBxQgBAQgCAOQgCALgEAJQgLAZgWACQgFABgEgBQgSAOgaAKIgaAKIgTAGQgZAKgQALQgVAPgWAfQgXAkgNAQQgXAdgjAcQgaAUgpAaQiSBbh3ARQhLALhFgQQhLgRg1guQiGBIicAPQicAPiQguQgjgLgMgCQgagGgUAFQgLACgNAGIgRAJQgfASgJAEQgUAJgcADQgQABghAAIjRABQgmAAgSgCgAm4GyQhZBFgYAUQgXATgIAPQgIARABAVQABAXAJAQQADAHAGAGIABAAICMgBIAYgBQAGgKAFgSQAIgbgCgUQgBgbgQgQQAOgMAVgQIAkgbIBAgxQAXgSAbgPQAYgMALgJQASgOACgSQACgRgMgPQgLgLgNgEIADgHQAGgOgGgRIgBgDQAKgIAGgMQAIgRgGgPQgIgTgagHQgMgDggACQhGAFgzgCQhCgCg3gNQgtgKg3gWQgegNhCgeQgagMgNgKQgVgPgIgSQANgCAaAAQAXgBANgJQAMgJANgZQAQghAEgVQAGgfgOghQgNgegagYQgYgWgegLQgfgMgeADQgbADgOANQgRAPgHAlQgHAlAABEQAAA6AHAXQAOAzAxAsQAXAXAiAUQAXANAnAPQBKAgAnANQBAAWA2AGQAhAEBQAAIALAAQgoAUgjAOIg5AYQgiAPgWALIgsAYQgZANgTAHQgwARgzgFQg0gFgrgZQAYADAPgCQAVgDALgMQAOgPACgkQACgegCgoQgCgcgLgMQgKgMgWgDIgmAAQgWAAgLABQgTABgMAIQgQALgGAXQgEAQgBAaIgCBqIAAAGIBEBWQAsATArAGQAYADAxAAQAjABAUgEQASgFAigRIBOgoQAsgXAVgHIAggKgAhOBaQgUABgLASQgJANAAAZQAAAQACAPQADAUAHAIQAHAJAQAEQANADAMgEQAQgGAHgSQAEgLACgXQACgogQgRQgNgNgSAAIgEAAgAlHlbQgYAOgIARQgGAMgBARIABAeIAAAkQACAUAKALQAKANATACQASABAMgMQARgPAAgdIAAgSQAAgKADgGQAEgIAIgEQAJgEAHAFQADAjAVAUQAMALAPAEQAQAEAOgFQAPgFAJgNQAJgOgDgPQgBgJgIgMIgMgUQgEgGgFgSQgGgPgFgIQgTgbgtgBIgCAAQguAAgnAWgAH7j7QgCANAGAMQAHAMALAGQALAGAOgCQAOgCAJgIQASgQAAgjQABgmgTgUQgNgOgXgEQgQgDgaABQguABgZAHQgoALgRAcQgKAQgBASQgBAUAKAOQAKAPATAEQAUAEANgLQAFgEAJgKQAIgKAFgEQALgIAXAAIAPABg");
	this.shape_1.setTransform(138.7511,73.8045);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,277.5,147.6);


(lib.cora2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.corazón("synched",0);
	this.instance.setTransform(115.5,113.5,1,1,0,0,0,115.5,113.5);

	this.instance_1 = new lib.Escena___19_Corazónremovebgpreview();
	this.instance_1.setTransform(-30.25,52.6,1,1,-21.9667);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(2).to({rotation:29.9992,x:76.05,y:-41.4},0).wait(2).to({scaleX:0.6537,scaleY:0.6537,rotation:0,x:44,y:40},0).wait(2).to({scaleX:1,scaleY:1,x:4,y:1},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.4,-41.4,313.5,312.09999999999997);


(lib.Cloud_Animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.cloud("synched",0);
	this.instance.setTransform(134.5,393.85,0.1,0.1,0,0,0,134.5,135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:134.5,scaleX:0.1599,scaleY:0.1599,x:134.45,y:352.35},0).wait(1).to({scaleX:0.2191,scaleY:0.2191,y:311.35},0).wait(1).to({scaleX:0.2769,scaleY:0.2769,x:134.5,y:271.4},0).wait(1).to({scaleX:0.3327,scaleY:0.3327,y:232.8},0).wait(1).to({scaleX:0.3858,scaleY:0.3858,y:196.1},0).wait(1).to({scaleX:0.4358,scaleY:0.4358,x:134.45,y:161.5},0).wait(1).to({scaleX:0.4824,scaleY:0.4824,x:134.5,y:129.3},0).wait(1).to({scaleX:0.5254,scaleY:0.5254,x:134.45,y:99.5},0).wait(1).to({scaleX:0.5649,scaleY:0.5649,y:72.25},0).wait(1).to({scaleX:0.6009,scaleY:0.6009,y:47.3},0).wait(1).to({scaleX:0.6337,scaleY:0.6337,x:134.5,y:24.7},0).wait(1).to({scaleX:0.6634,scaleY:0.6634,y:4.1},0).wait(1).to({scaleX:0.6903,scaleY:0.6903,y:-14.55},0).wait(1).to({scaleX:0.7147,scaleY:0.7147,y:-31.35},0).wait(1).to({scaleX:0.7367,scaleY:0.7367,y:-46.6},0).wait(1).to({scaleX:0.7567,scaleY:0.7567,x:134.45,y:-60.4},0).wait(1).to({scaleX:0.7746,scaleY:0.7746,x:134.5,y:-72.85},0).wait(1).to({scaleX:0.7909,scaleY:0.7909,x:134.45,y:-84.1},0).wait(1).to({scaleX:0.8055,scaleY:0.8055,x:134.5,y:-94.2},0).wait(1).to({scaleX:0.8187,scaleY:0.8187,x:134.45,y:-103.35},0).wait(1).to({scaleX:0.8306,scaleY:0.8306,x:134.5,y:-111.55},0).wait(1).to({scaleX:0.8413,scaleY:0.8413,y:-118.95},0).wait(1).to({scaleX:0.8509,scaleY:0.8509,y:-125.55},0).wait(1).to({scaleX:0.8594,scaleY:0.8594,y:-131.5},0).wait(1).to({regX:134.6,regY:135,scaleX:0.8671,scaleY:0.8671,x:134.55,y:-136.4},0).wait(1).to({regX:134.5,regY:134.5,scaleX:0.7162,scaleY:0.7162,x:134.45,y:-148.85},0).wait(1).to({scaleX:0.5844,scaleY:0.5844,y:-159.45},0).wait(1).to({scaleX:0.4703,scaleY:0.4703,y:-168.55},0).wait(1).to({scaleX:0.3723,scaleY:0.3723,y:-176.45},0).wait(1).to({scaleX:0.2893,scaleY:0.2893,y:-183.05},0).wait(1).to({scaleX:0.22,scaleY:0.22,y:-188.6},0).wait(1).to({scaleX:0.1636,scaleY:0.1636,y:-193.1},0).wait(1).to({scaleX:0.1192,scaleY:0.1192,x:134.5,y:-196.65},0).wait(1).to({scaleX:0.0858,scaleY:0.0858,y:-199.3},0).wait(1).to({scaleX:0.0627,scaleY:0.0627,y:-201.15},0).wait(1).to({scaleX:0.0493,scaleY:0.0493,y:-202.25},0).wait(1).to({scaleX:0.045,scaleY:0.045,y:-202.6},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-253.4,251.1,660.7);


(lib.Cloud_Animation_Complete = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3_copy_copy
	this.instance = new lib.Cloud_Animation("synched",0);
	this.instance.setTransform(38.4,313.4,0.782,0.782,4.1986,0,0,122.8,452.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(430));

	// Layer_2_copy_copy
	this.instance_1 = new lib.Cloud_Animation("synched",0);
	this.instance_1.setTransform(14.65,-4.9,0.95,0.95,-8.9709,0,0,134.5,134.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({_off:false},0).wait(432));

	// Layer_1_copy_copy
	this.instance_2 = new lib.Cloud_Animation("synched",0);
	this.instance_2.setTransform(50.3,16.7,1.3221,1.3221,0,0,0,134.6,134.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).wait(434));

	// Layer_3_copy
	this.instance_3 = new lib.Cloud_Animation("synched",0);
	this.instance_3.setTransform(38.35,313.35,1,1,4.1994,0,0,122.7,452.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).wait(435));

	// Layer_2_copy
	this.instance_4 = new lib.Cloud_Animation("synched",0);
	this.instance_4.setTransform(-28.25,-4.8,0.7968,0.7968,-17.1823,0,0,134.6,134.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).wait(437));

	// Layer_1_copy
	this.instance_5 = new lib.Cloud_Animation("synched",0);
	this.instance_5.setTransform(50.15,-4.95,1,1,0,0,0,134.5,134.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).wait(439));

	// Layer_3_copy
	this.instance_6 = new lib.Cloud_Animation("synched",0);
	this.instance_6.setTransform(38.35,313.35,1,1,12.4228,0,0,122.7,452.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).wait(440));

	// Layer_2_copy
	this.instance_7 = new lib.Cloud_Animation("synched",0);
	this.instance_7.setTransform(14.65,-4.9,0.95,0.95,-8.9709,0,0,134.5,134.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(7).to({_off:false},0).wait(442));

	// Layer_1_copy
	this.instance_8 = new lib.Cloud_Animation("synched",0);
	this.instance_8.setTransform(50.15,-4.95,1,1,0,0,0,134.5,134.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(5).to({_off:false},0).wait(444));

	// Layer_10
	this.instance_9 = new lib.Cloud_Animation("synched",0);
	this.instance_9.setTransform(38.35,313.35,1,1,4.1994,0,0,122.7,452.8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(4).to({_off:false},0).wait(156).to({y:273.7},0).wait(289));

	// Layer_11
	this.instance_10 = new lib.Cloud_Animation("synched",0);
	this.instance_10.setTransform(14.65,-4.9,0.95,0.95,-8.9709,0,0,134.5,134.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(2).to({_off:false},0).wait(447));

	// Layer_12
	this.instance_11 = new lib.Cloud_Animation("synched",0);
	this.instance_11.setTransform(50.15,-4.95,1,1,0,0,0,134.5,134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(449));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-185.4,-496.2,479,873.4);


(lib.Smoke_billows = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4_copy_copy
	this.instance = new lib.Cloud_Animation_Complete("synched",160);
	this.instance.setTransform(-31.65,160.6,0.8455,0.8867,-7.2356,0,0,54,213.7);
	this.instance._off = true;
	this.instance.filters = [new cjs.ColorFilter(1, 1, 1, 1, 92, 3, -40, 0)];
	this.instance.cache(-187,-498,483,877);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(66).to({_off:false},0).wait(3).to({startPosition:163},0).to({_off:true},1).wait(2135));

	// Layer_4_copy
	this.instance_1 = new lib.Cloud_Animation_Complete("synched",106);
	this.instance_1.setTransform(14.8,194.4,0.9001,0.894,12.9698,0,0,54,213.6);
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.ColorFilter(1, 1, 1, 1, 82, -6, -53, 0)];
	this.instance_1.cache(-187,-498,483,877);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(66).to({_off:false},0).wait(3).to({startPosition:109},0).to({_off:true},1).wait(2135));

	// Layer_3
	this.instance_2 = new lib.Cloud_Animation_Complete("synched",66);
	this.instance_2.setTransform(-13.6,-67.95,1,1,0,0,0,53.6,-59.6);
	this.instance_2._off = true;
	this.instance_2.filters = [new cjs.ColorFilter(1, 1, 1, 1, 73, -23, -79, 0)];
	this.instance_2.cache(-187,-498,483,877);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(66).to({_off:false},0).wait(3).to({startPosition:69},0).to({_off:true},1).wait(2135));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-236.3,-438.9,549,647.5999999999999);


// stage content:
(lib._19sonido = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_12
	this.instance = new lib.Símbolo1();
	this.instance.setTransform(1578.85,1021,1,1,0,0,0,88,45.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(249));

	// Capa_6
	this.instance_1 = new lib.botonnube();
	this.instance_1.setTransform(1805.15,1009.5,0.5869,0.5869,0,0,0,138.8,74);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdD7QgFgKgBgNQAAgMAFgKQAEgJANgLIBCg1IAhgYIgTAGQgMAEgaANIgtAYQgUAKgKADQgMACgVAAQgcAAgOgCQgagEgagLIgogyIAAgEIACg+QAAgQADgJQADgNAJgGQAHgEAMgBIATAAIAWAAQANABAGAHQAGAGACARQABAXgBASQgBAVgJAJQgGAHgNABQgIACgOgCQAZAPAeADQAfADAbgKQAMgEAPgIIAYgOIAhgPIAigPIAsgTIgHAAQgvAAgTgDQgggEgkgNQgXgHgsgSQgXgJgNgHQgUgMgOgNQgdgagIgeQgEgPAAgiQAAgnAEgWQAEgWAKgIQAJgIAQgCQARgCASAHQASAHAOANQAPAOAIASQAIATgDASQgDAMgJAUQgIAPgHAFQgHAFgOABIgXABQAFALAMAIQAIAGAPAHIA5AaQAgANAZAGQAgAHAnACQAeABApgDQATgBAHABQAPAEAFAMQAEAHgFAKQgEAHgGAFIABACQAEAKgEAIIgCAEQAIACAGAHQAHAIgBAKQgBALgLAJQgGAFgOAHQgQAJgOAKIglAdIgVAQIgVAQQAKAKAAAQQABALgEAQQgDAKgEAHIgOAAIhSAAIgFgHg");
	this.shape.setTransform(1773.9563,1021.5278);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhzCsQgKgCgEgFQgEgFgCgMIAAgSQAAgOAFgIQAGgLAMgBQAMAAAIAIQAKAKgBAYQgBANgDAHQgEAKgKAEIgIABIgGgBgAkBg7QgLgBgGgHQgFgHgBgMIgBgUIAAgSQABgKADgHQAFgKAOgIQAXgNAcAAQAaAAAMAQIAGAOIAFAOIAHALQAFAHABAGQABAIgFAJQgFAIgJACQgIADgKgCQgJgDgGgGQgNgLgCgVQgEgDgFACQgFACgCAFIgCAKIAAAKQAAARgKAJQgHAGgJAAIgCAAgAD0hOQgHgDgEgIQgDgHABgHQgVgCgIAGQgDACgFAGIgIAJQgIAGgLgDQgLgCgGgJQgGgIAAgLQABgLAGgJQAKgRAYgHQAOgEAbAAQAQgBAJACQANADAIAIQALALgBAXQAAAUgKAJQgGAFgHACIgEAAQgGAAgFgDg");
	this.shape_1.setTransform(1811.8261,1005.0071);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#99FFFF").s().p("AFTIQIgIgDQgvgTgTgmQhkAnhXAIQhoAIhQgmIgbgNQgPgHgNgBQgNgBgSAFIgfAKQgiAKgrAEQgbADg0AAQg0ACgZgJQgegKgfgcQhJhBgehbQg3gBgxgPQg1gQgogfQgsgggYgvQgRgegFggQgEgJgBgIIAAgSIAAgRIAAgSIABgRQABgFAEgKIAGgQIAEgWQADgJAHgMQAIgMAGgEIADgCIAFgPQARgyAkgnQAjglAxgYQAwgWA0gFIAagDQAPgDAJgFQAIgFAJgJIAOgSQA0hBBXgXQBWgWBNAfIANAEQAIACAFgBQAKgCAMgOQAfgjAbgWIAJgHQAdgXAegMQAbgMAjgGQAagFAlgCQBegFBJATQA8APAsAfQAQALANAMIAJAJIAOAOQAJAHAJABQAHABAJgEIAQgGQAWgGAaALQASAHAaATQAoAdAaAWQAjAdAZAcIAMANQAHAHAIACQAGACAKgBIAQgDQAxgHAxAdQAtAbAaAwQAYAqAIA4QAIAsgBA7QgBAigDAXQgFAfgLAXQgTAoguAiIgsAeQgaASgOARQgPASgOAgIgXA0QgUApghAgQgaAagiATQglAXgpALQgnALgpABIgIAAQgoAAgigMgAqLjjQhTAWg9A4QgLAKgFAMQgDAHAAAFIgDAHQgMAegFARQgHAbABAWQABAaAOAZIADAGQAPAaAZAWQAWARAeARQASAKAmARQAVAnArAyIAQASIAmArQAmArAMAQIAbAjQAQATARAHQANAHASACIAhABIB6AAIAegBQAQgCALgFQAGgCASgLIAKgFQAIgEAGgBQAMgDAPADQAHABAVAHQBVAbBagJQBcgIBPgrQAfAbAsAKQAoAKAsgHQBGgKBWg1QAYgPAPgMQAVgRANgRQAIgJANgVQANgSAMgJQAKgHAPgFIALgEIAPgGQAPgGALgIIAFAAQANgBAGgPQADgFABgGIACgSQAChCgEgkQgGg3gVgnQgJgRgPgTQgIgMgUgWQgagegNgOQgYgXgXgOIgjgSQgWgLgMgJQgMgJgPgQIgZgbQg+hDhDgGIg2AAQgggBgSgKQgLgGgQgPQgSgSgIgGQgWgQgjgEQgUgCgrABQhgACgiAFQgjAGgcALQgeANgWATIgXAVQgNAMgMAFQgNAFgSAAIgggBQgyAAgvAWQguAWgfAoIgLAMQgGAHgHACQgIADgTgFQgegHgfgBIgPAAQgrAAgsALg");
	this.shape_2.setTransform(1807.8059,1009.3042);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1}]}).wait(249));

	// Capa_5
	this.instance_2 = new lib.CachedBmp_2();
	this.instance_2.setTransform(83.9,141.4,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_1();
	this.instance_3.setTransform(67.85,132.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(249));

	// Capa_4
	this.instance_4 = new lib.Smoke_billows("synched",66);
	this.instance_4.setTransform(1387.15,342.35,0.0997,0.0917,0,0,0,30.1,-2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(2).to({regX:30.7,regY:-2.5,scaleX:0.044,scaleY:0.0405,y:345.95,startPosition:68},0).wait(2).to({regX:30.1,regY:-2.8,scaleX:0.0997,scaleY:0.0917,y:342.35,startPosition:66},0).wait(1));

	// Capa_3
	this.instance_5 = new lib.Escena___19__U1removebgpreview();
	this.instance_5.setTransform(1298,808,0.9317,0.8831);

	this.instance_6 = new lib.Escena___19__U2removebgpreview();
	this.instance_6.setTransform(1328,777);
	this.instance_6._off = true;

	this.instance_7 = new lib.Escena___19__U3removebgpreview();
	this.instance_7.setTransform(1362,754);
	this.instance_7._off = true;

	this.instance_8 = new lib.Escena___19__F1removebgpreview();
	this.instance_8.setTransform(1402,713);
	this.instance_8._off = true;

	this.instance_9 = new lib.Escena___19__F2removebgpreview();
	this.instance_9.setTransform(1447,677);
	this.instance_9._off = true;

	this.instance_10 = new lib.Escena___19_F3removebgpreview();
	this.instance_10.setTransform(1502,663);
	this.instance_10._off = true;

	this.instance_11 = new lib.Escena___19__signo_exclamaciónremovebgpreview();
	this.instance_11.setTransform(1557,631);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(11).to({_off:false},0).to({_off:true},2).wait(11).to({_off:false},0).to({_off:true},2).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(11).to({_off:false},0).to({_off:true},2).wait(11).to({_off:false},0).to({_off:true},2).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(11).to({_off:false},0).to({_off:true},2).wait(11).to({_off:false},0).to({_off:true},2).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(8).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(11).to({_off:false},0).to({_off:true},2).wait(11).to({_off:false},0).to({_off:true},2).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(11).to({_off:false},0).to({_off:true},2).wait(11).to({_off:false},0).to({_off:true},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(11).to({_off:false},0).to({_off:true},2).wait(11).to({_off:false},0).wait(1));

	// Capa_2
	this.instance_12 = new lib.cora2("synched",0);
	this.instance_12.setTransform(538.6,638.25,0.9317,0.8831,0,0,0,115.6,113.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(249));

	// Capa_1
	this.instance_13 = new lib.botónmenú();
	this.instance_13.setTransform(1032.45,1964.15,1.8259,1.8259,0,0,0,58.1,541.5);
	new cjs.ButtonHelper(this.instance_13, 0, 1, 1);

	this.instance_14 = new lib.Iniciobotón();
	this.instance_14.setTransform(401.75,1025.3,2.112,2.112,0,0,0,52,26);
	new cjs.ButtonHelper(this.instance_14, 0, 1, 1);

	this.instance_15 = new lib.CachedBmp_4();
	this.instance_15.setTransform(430.85,738.55,0.5,0.5);

	this.instance_16 = new lib.cora2("synched",0);
	this.instance_16.setTransform(538.6,638.25,0.9317,0.8831,0,0,0,115.6,113.4);

	this.instance_17 = new lib.Escena19paraanimarpngcopia();
	this.instance_17.setTransform(322,22,1.1073,1.0495);

	this.instance_18 = new lib.CachedBmp_3();
	this.instance_18.setTransform(1697.85,20.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(249));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1027.9,561,871.1999999999998,519);
// library properties:
lib.properties = {
	id: 'DB616A959E0BEA489FAD1CD352C60F14',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFCC",
	opacity: 1.00,
	manifest: [
		{src:"images/_19 sonido_atlas_1.png", id:"_19 sonido_atlas_1"},
		{src:"sounds/Audio19.mp3", id:"Audio19"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['DB616A959E0BEA489FAD1CD352C60F14'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;