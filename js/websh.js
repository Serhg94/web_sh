
	var stat = [
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0]
	];
	var temper=0;
    var online = [0,0,0,0,0,0,0,0,0,0];
    var sets = ["000000000000000", "000000000000000", "000000000000000", "000000000000000","000000000000000","000000000000000","000000000000000","000000000000000","000000000000000","000000000000000"];
    var butt = ["0000", "0000", "0000", "0000","0000","0000","0000","0000","0000","0000"];
    var rebs = ["0000", "0000", "0000", "0000","0000","0000","0000","0000","0000","0000"];
    
	function refreshView() {
		if (sets[2].charAt(0)=='0') $('#2_big').removeClass("ui-btn-active");
		else $('#2_big').addClass("ui-btn-active");
		if (sets[2].charAt(1)=='0') $('#2_lite').removeClass("ui-btn-active");
		else $('#2_lite').addClass("ui-btn-active");
		if (sets[2].charAt(2)=='1') $('#2_open').removeClass("ui-btn-active");
		else $('#2_open').addClass("ui-btn-active");
		if (sets[2].charAt(3)=='1') $('#2_close').removeClass("ui-btn-active");
		else $('#2_close').addClass("ui-btn-active");
		if (sets[2].charAt(12)=='0') $('#2_manual').removeClass("ui-btn-active");
		else $('#2_manual').addClass("ui-btn-active");
		if (sets[1].charAt(0)=='0') $('#1_big').removeClass("ui-btn-active");
		else $('#1_big').addClass("ui-btn-active");
		if (sets[1].charAt(1)=='0') $('#1_lite').removeClass("ui-btn-active");
		else $('#1_lite').addClass("ui-btn-active");
		if (sets[1].charAt(2)=='0') $('#1_bra').removeClass("ui-btn-active");
		else $('#1_bra').addClass("ui-btn-active");
		if (sets[3].charAt(3)=='0') $('#3_big').removeClass("ui-btn-active");
		else $('#3_big').addClass("ui-btn-active");
		if (sets[3].charAt(3)=='0') $('#3_svt').removeClass("ui-btn-active");
		else $('#3_svt').addClass("ui-btn-active");
		if (butt[3].charAt(0)=='1') $('#3_door').removeClass("ui-btn-active");
		else $('#3_door').addClass("ui-btn-active");
		if (butt[3].charAt(3)=='1') $('#3_lock').removeClass("ui-btn-active");
		else $('#3_lock').addClass("ui-btn-active");
		if (sets[3].charAt(9)=='0') $('#3_DD').removeClass("ui-btn-active");
		else $('#3_DD').addClass("ui-btn-active");
		if (butt[6].charAt(2)=='1') $('#5_leak').removeClass("ui-btn-active");
		else $('#5_leak').addClass("ui-btn-active");
		if (sets[6].charAt(2)=='0') $('#5_sliv').removeClass("ui-btn-active");
		else $('#5_sliv').addClass("ui-btn-active");
		if (sets[6].charAt(3)=='0') $('#5_svet1').removeClass("ui-btn-active");
		else $('#5_svet1').addClass("ui-btn-active");
		if (sets[6].charAt(10)=='0') $('#5_vent').removeClass("ui-btn-active");
		else $('#5_vent').addClass("ui-btn-active");
		if (sets[6].charAt(1)=='0') $('#5_svet2').removeClass("ui-btn-active");
		else $('#5_svet2').addClass("ui-btn-active");
		if (sets[6].charAt(0)=='0') $('#4_svet').removeClass("ui-btn-active");
		else $('#4_svet').addClass("ui-btn-active");
		
		$("#1_tem").html("<br><b>"+stat[1][1]+"</b>");
		$("#2_tem").html("<br><b>"+stat[2][1]+"</b>");
		$("#3_tem").html("<br><b>"+stat[3][1]+"</b>");
		$("#4_tem").html("<br><b>"+stat[4][1]+"</b>");
		$("#5_tem").html("<br><b>"+stat[5][1]+"</b>");
		$("#6_tem").html("<br><b>"+stat[6][1]+"</b>");
		$("#1_hum").html("<br><b>"+stat[1][2]+"</b>");
		$("#2_hum").html("<br><b>"+stat[2][2]+"</b>");
		$("#3_hum").html("<br><b>"+stat[3][2]+"</b>");
		$("#4_hum").html("<br><b>"+stat[4][2]+"</b>");
		$("#5_hum").html("<br><b>"+stat[5][2]+"</b>");
		$("#6_hum").html("<br><b>"+stat[6][2]+"</b>");
		
		$("#temp").html("<b>Температура: "+temper+"&deg;</b>");
	}
		
	function checkString(string, from) {
        if (string == null || string.length == 0) return -1;

        var i = from;

        var c;
        var result="";
        for (; i < string.length; i++) {
            c = string.charAt(i);
            if (!(c >= '0' && c <= '9')) {
                return -1;
            }
            else
            	result= result+c;;
        }
        return Number(result);
    }	
	
	function parseStat(str)
	{
		var change=false;
		//Log.i(TAG, ""+str.length());
		if (str.substring(0,4)=='temp') 
		{
			//alert(str);
			temper = Number(str.substring(4,str.length-1));
			return -3;
		}
    	if (str.length<31) return 0;
		  var sn=checkString(str.substring(0,1), 0);
		  if (sn<=0) return 0; 
		  //парсим массив настроек
		  //Log.i(TAG, str.substring(2,12));
		  if (sets[sn]!=str.substring(2,17))
		  {  
		    sets[sn]=str.substring(2,17); //Serial.print(sets[sn]);
		   
		    change=true;
		  }
		  //парсим датчик дыма
		  str=str.substring(18,str.length); //Serial.print(str);
		  var pos=str.indexOf('/');
		  //Log.i(TAG, str);
		  if (pos==-1) return 0;
		  //if (abs(stat[sn][0]-str.substring(0,pos).toInt())>ACCURACY ) 
		  {
		    stat[sn][0]=checkString(str.substring(0,pos), 0); //Serial.print(stat[sn][0]);
		  //  change=true;
		  }
		  //парсим массив релейных кнопо
		  str=str.substring(pos+1,str.length); //Serial.print(str);
		  //Log.i(TAG, str);
		  pos=str.indexOf('/');
		  if (pos==-1) return 0;
		  if (rebs[sn]!=str.substring(0,4))
		  {  
		    rebs[sn]=str.substring(0,4); //Serial.print(rebs[sn]);
		    change=true;
		  }
		  //парсим температуру
		  str=str.substring(5,str.length); //Serial.print(str);
		  //Log.i(TAG, str);
		  pos=str.indexOf('/');
		  if (pos==-1) return 0;
		  if (stat[sn][1]!=checkString(str.substring(0,pos),0)) 
		  {
			if (checkString(str.substring(0,pos), 0)!=212)
				stat[sn][1]=checkString(str.substring(0,pos), 0); //Serial.print(stat[sn][1]);
		    change=true;
		  }
		  //парсим влажность
		  str=str.substring(pos+1,str.length); //Serial.print(str);
		  //Log.i(TAG, str);
		  pos=str.indexOf('/');
		  if (pos==-1) return 0;
		  if (stat[sn][2]!=checkString(str.substring(0,pos), 0)) 
		  {
			if (checkString(str.substring(0,pos), 0)!=212)
				stat[sn][2]=checkString(str.substring(0,pos), 0); //Serial.print(stat[sn][2]);
		    change=true;
		  }
		  //парсим массив кнопок
		  str=str.substring(pos+1,str.length); //Serial.print(str);
		  //Log.i(TAG, str);
		  pos=str.indexOf('/');
		  if (pos==-1) return 0;
		  if (butt[sn]!=str.substring(0,4))
		  {  
		    butt[sn]=str.substring(0,4); //Serial.print(butt[sn]);
		    change=true;
		  }
		  str = str.substring(7,str.length);
		  if (str.length>10) {parseStat(str);}
		  //System.out.println(":JGF");
		  return sn;
		  //if (change) return sn; else return -1;
	}    
    
	function sendOptions()
	{
		socket.emit('messagefromCl', 'options'
		//alert('options'
			+ Number(document.getElementById('sayinfobox').checked)
			+ Number(document.getElementById('ddnightbox').checked)
			+ Number(document.getElementById('dooralertbox').checked)
			+ Number(document.getElementById('lockalertbox').checked)
			+ Number(document.getElementById('doorlightbox').checked)
			);
	}
	
	function changeOptions() {
		sendOptions();
	}
	
	function setOptionsView(s) {
		if(s.charAt(10)=='1') $('#sayinfobox').prop('checked', true).checkboxradio('refresh')
		else if(s.charAt(10)=='0') $('#sayinfobox').prop('checked', false).checkboxradio('refresh');
		if(s.charAt(11)=='1') $('#ddnightbox').prop('checked', true).checkboxradio('refresh')
		else if(s.charAt(11)=='0') $('#ddnightbox').prop('checked', false).checkboxradio('refresh');
		if(s.charAt(12)=='1') $('#dooralertbox').prop('checked', true).checkboxradio('refresh')
		else if(s.charAt(12)=='0') $('#dooralertbox').prop('checked', false).checkboxradio('refresh');
		if(s.charAt(13)=='1') $('#lockalertbox').prop('checked', true).checkboxradio('refresh')
		else if(s.charAt(13)=='0') $('#lockalertbox').prop('checked', false).checkboxradio('refresh');
		if(s.charAt(14)=='1') $('#doorlightbox').prop('checked', true).checkboxradio('refresh')
		else if(s.charAt(14)=='0') $('#doorlightbox').prop('checked', false).checkboxradio('refresh');
	}

strings = {
	'connected': '[sys][time]%time%[/time]: Вы успешно соединились к сервером как [user]%name%[/user].[/sys]',
	'userJoined': '[sys][time]%time%[/time]: Пользователь [user]%name%[/user] присоединился к чату.[/sys]',
	'messageSent': '[out][time]%time%[/time]: [user]%name%[/user]: %text%[/out]',
	'messageReceived': '[in][time]%time%[/time]: [user]%name%[/user]: %text%[/in]',
	'userSplit': '[sys][time]%time%[/time]: Пользователь [user]%name%[/user] покинул чат.[/sys]'
};
window.onload = function() {
	// Создаем соединение с сервером; websockets почему-то в Хроме не работают, используем xhr
	//if (navigator.userAgent.toLowerCase().indexOf('chrome') != -1) {
	//	socket = io.connect('http://192.168.0.20:666', {'transports': ['xhr-polling']});
	//} else {
		socket = io.connect('http://cyber-labs.ru:666');
	//}
	socket.on('connect', function () {
		socket.on('message', function (msg) {

		});
		socket.on('messagefromSH', function (msg) {
			if (msg.indexOf('Getoptions')>=0) {setOptionsView(msg); return; }
			parseStat(msg);
			refreshView();
		});
		
		document.getElementById('options').onclick = function() {
			socket.emit('messagefromCl', 'getoptions');
		}
		
		document.getElementById('2_big').onclick = function() {
			if (sets[2].charAt(0)=='0') socket.emit('messagefromCl', '02set1222222222');
			else socket.emit('messagefromCl', '02set0222222222');
		}
		document.getElementById('2_lite').onclick = function() {
			if (sets[2].charAt(1)=='0') socket.emit('messagefromCl', '02set2122222222');
			else socket.emit('messagefromCl', '02set2022222222');
		}
		document.getElementById('1_big').onclick = function() {
			if (sets[1].charAt(0)=='0') socket.emit('messagefromCl', '01set1222222222');
			else socket.emit('messagefromCl', '01set0222222222');
		}
		document.getElementById('1_lite').onclick = function() {
			if (sets[1].charAt(1)=='0') socket.emit('messagefromCl', '01set2122222222');
			else socket.emit('messagefromCl', '01set2022222222');
		}
		document.getElementById('3_big').onclick = function() {
			if (sets[3].charAt(3)=='0') socket.emit('messagefromCl', '03set2221222222');
			else socket.emit('messagefromCl', '03set2220222222');
		}
		document.getElementById('3_svt').onclick = function() {
			if (sets[3].charAt(3)=='0') socket.emit('messagefromCl', '03set2221222222');
			else socket.emit('messagefromCl', '03set2220222222');
		}
		document.getElementById('3_DD').onclick = function() {
			if (sets[3].charAt(9)=='0') socket.emit('messagefromCl', '03set2222222221');
			else socket.emit('messagefromCl', '03set2222222220');
		}
		document.getElementById('1_bra').onclick = function() {
			if (sets[1].charAt(2)=='0') socket.emit('messagefromCl', '01set2212222222');
			else socket.emit('messagefromCl', '01set2202222222');
		}
		document.getElementById('5_svet1').onclick = function() {
			if (sets[6].charAt(3)=='0') socket.emit('messagefromCl', '06set2221');
			else socket.emit('messagefromCl', '06set2220');
		}
		document.getElementById('5_sliv').onclick = function() {
			if (sets[6].charAt(2)=='0') socket.emit('messagefromCl', '06set2212');
			else socket.emit('messagefromCl', '06set2202');
		}
		document.getElementById('5_vent').onclick = function() {
			if (sets[6].charAt(10)=='0') socket.emit('messagefromCl', '06set22222222221');
			else socket.emit('messagefromCl', '06set22222222220');
		}
		document.getElementById('time').onclick = function() {
			socket.emit('messagefromCl', 'time');
		}
		document.getElementById('temp').onclick = function() {
			socket.emit('messagefromCl', 'temp');
		}
		document.getElementById('2_open').onclick = function() {
			socket.emit('messagefromCl', '02set2232');
		}
		document.getElementById('2_close').onclick = function() {
			socket.emit('messagefromCl', '02set2223');
		}
		document.getElementById('2_manual').onclick = function() {
			socket.emit('messagefromCl', '02set2222222222223');
		}
		document.getElementById('3_lock').onclick = function() {
			socket.emit('messagefromCl', '03set222222222221');
		}
		document.getElementById('4_svet').onclick = function() {
			if (sets[6].charAt(0)=='0') socket.emit('messagefromCl', '06set1222');
			else socket.emit('messagefromCl', '06set0222');
		}
		document.getElementById('5_svet2').onclick = function() {
			if (sets[6].charAt(1)=='0') socket.emit('messagefromCl', '06set21222');
			else socket.emit('messagefromCl', '06set20222');
		}
		document.getElementById('sayinfobox').onclick = function() {changeOptions();}
		document.getElementById('ddnightbox').onclick = function() {changeOptions();}
		document.getElementById('dooralertbox').onclick = function() {changeOptions();}
		document.getElementById('lockalertbox').onclick = function() {changeOptions();}
		document.getElementById('doorlightbox').onclick = function() {changeOptions();}
	});
};

setTimeout("digitalWatch()", 1000);
 function digitalWatch() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
	$("#time").html("<b>"+hours + ":" + minutes + ":" + seconds+"</b>");
    //document.getElementById("digital_watch").innerHTML = hours + ":" + minutes + ":" + seconds;
    setTimeout("digitalWatch()", 1000);
  }