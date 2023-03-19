
	var dhtmlgoodies_marqueeSteps = .8;	// Higher = Faster, Lower = slower and more smoothly
	var dhtmlgoodies_marqueeSpeed = 8;	// Lower value = Faster
	var dhtmlgoodies_marqueeStopOnMouseOver = false;	// Make the marquee stop moving when user moves his mouse over it
	var dhtmlgoodies_marqueePosition = 'bottom';	// "top" or "bottom"

	/* Don't change anything below here */
	var dhtmlgoodies_marqueeObj;
	var dhtmlgoodies_marqueeTextObj;
	var dhtmlgoodies_marqueeTmpStep;
	var dhtmlgoodies_marqueeTextObjects = new Array();
	var dhtmlgoodies_marqueeHiddenSpans = new Array();

	var dhtmlgoodies_marqueeIndex = 0;
	function repositionMarquee(e,timeout)
	{
		if(document.all)e=event;
		if(dhtmlgoodies_marqueePosition.toLowerCase()=='top'){
			dhtmlgoodies_marqueeObj.style.top = '50px';
		}else{
			dhtmlgoodies_marqueeObj.style.bottom = '50px';
		}
		if(document.all && !timeout)setTimeout('repositionMarquee(false,true)',500)
	}
	function marqueeMove()
	{
		var leftPos = dhtmlgoodies_marqueeTextObj.offsetLeft;
		leftPos = leftPos - dhtmlgoodies_marqueeTmpStep;
		var rightEdge = leftPos + dhtmlgoodies_marqueeHiddenSpans[dhtmlgoodies_marqueeIndex].offsetLeft;
		if(rightEdge<0){
			leftPos = document.documentElement.offsetWidth;
			dhtmlgoodies_marqueeTextObj.style.display='none';
			dhtmlgoodies_marqueeIndex++;
			if(dhtmlgoodies_marqueeIndex>=dhtmlgoodies_marqueeTextObjects.length)dhtmlgoodies_marqueeIndex = 0;
			dhtmlgoodies_marqueeTextObj = dhtmlgoodies_marqueeTextObjects[dhtmlgoodies_marqueeIndex];
			dhtmlgoodies_marqueeTextObj.style.display='block';

		}
		dhtmlgoodies_marqueeTextObj.style.left = leftPos + 'px';

	}

	function stopMarqueeMove()
	{
		if(dhtmlgoodies_marqueeStopOnMouseOver)dhtmlgoodies_marqueeTmpStep = 0;
	}
	function resumeMarqueeMove()
	{
		dhtmlgoodies_marqueeTmpStep = dhtmlgoodies_marqueeSteps;
	}
	function initMarquee()
	{
		dhtmlgoodies_marqueeObj = document.getElementById('dhtmlgoodies_marquee');

		var spans = dhtmlgoodies_marqueeObj.getElementsByTagName('DIV');
		for(var no=0;no<spans.length;no++){
			if(spans[no].className=='textObj'){
				if(!dhtmlgoodies_marqueeTextObj){
					dhtmlgoodies_marqueeTextObj = spans[no];
					spans[no].style.display='block';
				}else spans[no].style.display='none';
				dhtmlgoodies_marqueeTextObjects.push(spans[no]);
				var hiddenSpan = document.createElement('SPAN');
				hiddenSpan.innerHTML = ' '
				spans[no].appendChild(hiddenSpan);
				dhtmlgoodies_marqueeHiddenSpans.push(hiddenSpan);

			}
		}

		var oldIE = isOldIe();

		if(dhtmlgoodies_marqueePosition.toLowerCase()=='top'){
			dhtmlgoodies_marqueeObj.style.top = '0px';
		}else{
			if(oldIE){
				dhtmlgoodies_marqueeObj.style.bottom = '0px';
			}else{
				dhtmlgoodies_marqueeObj.style.bottom = '-1px';
			}
		}




		dhtmlgoodies_marqueeObj.style.display='block';
		dhtmlgoodies_marqueeTextObj.style.left = document.documentElement.offsetWidth + 'px';
		dhtmlgoodies_marqueeObj.onmouseover = stopMarqueeMove;
		dhtmlgoodies_marqueeObj.onmouseout = resumeMarqueeMove;
		if(oldIE)window.onscroll = repositionMarquee; else dhtmlgoodies_marqueeObj.style.position = 'fixed';

		dhtmlgoodies_marqueeObj.style.display='block';
		dhtmlgoodies_marqueeTmpStep = dhtmlgoodies_marqueeSteps;

		setInterval('marqueeMove()',dhtmlgoodies_marqueeSpeed);
	}

	function isOldIe() {
		var isMsie = navigator.userAgent.indexOf('MSIE') >=0;
		if(isMsie) {
			string = '';
			for(var prop in navigator) {
				string = string + prop + ':' + navigator[prop] + '\n';

			}
			var version = navigator.userAgent;
			for(var i=4;i<=7;i++) {
				if(version.indexOf('MSIE ' + i) >=0){
					return true;
				}
			}
			return false;
		}else{
			return false;
		}

	}

