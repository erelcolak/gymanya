	/*icheck bölümü*/
	$('input').iCheck({
		checkboxClass: 'icheckbox_square-blue',
		radioClass: 'iradio_square-blue',
	})

	//Modal Video Play Sorunu Çözümü
	jQuery('.modal-video').on('hidden.bs.modal', function (e) {
	  // do something...
	  jQuery('.modal-video video').attr("src", jQuery(".modal-video  video").attr("src"));
	});	
	

	/*ÜYE KAYIT SAYFASINA GİRER GİRMEZ MODAL GELMESİ*/

	$(window).load(function(){
		$('#modal-uye-kayit-bilgilendirme').modal('show');
	});

	
	/*SELECTER ŞEHİR SEÇİMİ*/
	$("select").selecter({
		label: "Select An Item"
	});	
	
	
	/*SMOOTH SCROLL*//*Burayı ben yaptım mesut yardım etmedi hem de hiç :)*/
	
	 $(function() {
	 $('a[href=#beslenme],a[href=#programlar],a[href=#programim],a[href=#egitmenler],a[href=#diyet01],a[href=#diyet02],a[href=#diyet03],a[href=#diyet04],a[href=#diyet05],a[href=#diyet06],a[href=#diyet07],a[href=#diyet08],a[href=#diyet09],a[href=#diyet10],a[href=#hafta01],a[href=#hafta02],a[href=#hafta03],a[href=#hafta04],a[href=#hafta05],a[href=#hafta06],a[href=#hafta07],a[href=#hafta08],a[href=#hafta09],a[href=#hafta10]:not([href=#])').click(function() {
	 if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	 var target = $(this.hash);
	 target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	 if (target.length) {
	 $('html,body').animate({
	 scrollTop: target.offset().top
	 }, 1250);
	 return false;
	}
	}
	});
	});

	/*İNDEX SAYAÇ BÖLÜMÜ BURADA BAŞLAR*/
	sayac=192654820;//SAYAÇ NUMARASI BAŞLANGIÇ

	function tick(){
	document.getElementById('ticker').innerHTML=ayirac(sayac);
	sayac=sayac+3.2;//SAYAÇ NUMARA ARTIŞI
	sayac=Math.ceil(sayac);

	if(sayac>=0)setTimeout('tick()',750);//HIZ
	}

	function ayirac(number) {

	number = '' + number;
	if (number.length > 3) {
	var mod = number.length % 3;
	var output = (mod > 0 ? (number.substring(0,mod)) : '');
	for (i=0 ; i < Math.floor(number.length / 3); i++) {
	if ((mod == 0) && (i == 0))
	output += number.substring(mod+ 3 * i, mod + 3 * i + 3);
	else
	output+= '.' + number.substring(mod + 3 * i, mod + 3 * i + 3);
	}
	return (output);
	}
	else return number;
	}
	
	
	/*HABER BANDI*/

	$(function () {
	$('#newsList').newsTicker();
	});
	
	$(function () {
	$('#newsList').newsTicker({
	interval: "6000", // iki haber arası süre
	newsData: "#newsData", // haberlerin görüneceği div
	prevBtnDiv: "#prevDiv", // Prev button/div id 
	nextBtnDiv: "#nextDiv", // Next button/div id 
	playPauseID: "#play-pause", // Play/Pause toggle button/div id
	effect: "fadeIn", // Transition effect
	});
	});
	/*HABER BANDI BİTİŞ*/
	
	/*VİDEO PLAYER BAŞLANGIÇ (elle yazdım no kopi peyst)*/
	/*değişkenler buraya toptan yazak*/
	var vid, playbtn, seekslider,curtimetext,durtimetext, volumeslider, fullscreenbtn;
	
	function intializePlayer(){
		//nesne referanslarını ayarlıyoruz
		vid = document.getElementById("video_id");
		playbtn = document.getElementById("playpausebtn");
		seekslider = document.getElementById("seekslider");
		curtimetext = document.getElementById("curtimetext");
		durtimetext = document.getElementById("durtimetext");
		volumeslider = document.getElementById("volumeslider");
		fullscreenbtn = document.getElementById("fullscreenbtn");
		//event listener ekliyoruz
		playbtn.addEventListener("click",playPause,false);
		seekslider.addEventListener("change",vidSeek,false);
		vid.addEventListener("timeupdate",seektimeupdate,false);
		volumeslider.addEventListener("change",setvolume,false);
		fullscreenbtn.addEventListener("click",toggleFullScreen,false);
		
	}
	
	window.onload = intializePlayer;
	
	function playPause(){

		if(vid.paused){
			vid.play();
			playbtn.style.backgroundImage = "url(img/videoplayer/duraklat.png)";
		}
		
		else{
			vid.pause();
			playbtn.style.backgroundImage = "url(img/videoplayer/oynat.png)";
		}
	}
	
	function vidSeek(){
		var seekto = vid.duration * (seekslider.value / 100); // videonun süresini vid.duration ile alıp seekslider'a bölüyoruz
		vid.currentTime = seekto;
	}
	function seektimeupdate(){
		var nt = vid.currentTime * (100 / vid.duration); //burada nt new time demek ona göre
		seekslider.value = nt;
		//video süresi ile ilgili bölüm burası
		var curmins = Math.floor(vid.currentTime / 60);
		var cursecs = Math.floor(vid.currentTime - curmins * 60);
		var durmins = Math.floor(vid.duration / 60);
		var dursecs = Math.floor(vid.duration - durmins * 60);
		if(cursecs < 10){ cursecs = "0"+cursecs; }
		if(dursecs < 10){ dursecs = "0"+dursecs; }
		if(curmins < 10){ curmins = "0"+curmins; }
		if(durmins < 10){ durmins = "0"+durmins; }
		curtimetext.innerHTML = curmins+":"+cursecs;
		durtimetext.innerHTML = durmins+":"+dursecs;		
	}

	function setvolume(){//ses yüksekliği
		vid.volume = volumeslider.value / 100;
	}
	function toggleFullScreen(){//fullscreen
		if(vid.requestFullScreen){
			vid.requestFullScreen();
		}
		else if (vid.webkitRequestFullScreen){
			vid.webkitRequestFullScreen();
		}
		else if (vid.mozRequestFullScreen){
			vid.mozRequestFullScreen();
		}
	}

	/*VİDEO PLAYER BİTİŞ*/	

	/*VİDEO GİZLEME*/

	/*stepper*/
