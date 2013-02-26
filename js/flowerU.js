$.ajaxSetup({cache: false});

$(function() {

	var getResult = function(){
		/*$.ajax({
			method:'GET',
			url:'result.json',
			success:function(r){
				console.log(JSON.parse(r).msg);
			}
		});*/
		/*$.getJson('result.json', function(data){
			console.log(data.msg);
		})*/
		var data = "{'code':200,'msg':[{'name':'dodowoo','content':'test1'},{'name':'aa','content':'123'}]}";
		console.log(data);
		var jdata = JSON.parse(data);
		console.log(jdata);
		$.each(jdata.msg, function(key, value){
			console.log(key+':'+value+';');
		});

	}

	var loadData = function(){
		//var list = [{'name':'dodowoo','content':'test1'},{'name':'aa','content':'123'}];
		var wb = localStorage.wb;
		if(wb && JSON.parse(wb)){
			var list = JSON.parse(wb).list;
			console.log(list);
			$.each(list, function(r){
				//console.log(list[r]);
				fillpage(list[r].name,list[r].content);
			});
		}
	}

	$('#btnSubmit').live('click', function(){
		//alert($('#tbContent').val());
		//$('#templateCTtext').val().replaceWith($('#tbContent').val());
		if(!localStorage.uname){
			setName();
		}
		else
		{
			fillpage(localStorage.uname,$('#tbContent').val());
			fillData(localStorage.uname,$('#tbContent').val());
		}
		return false;
	});

	$('#btnName').live('click',function(){
		localStorage.uname = $('#uname').val();
		$('#nameModal').modal('hide');
	})

	var fillpage = function(avater,data){
		$('.templateCT a.templateAvater').replaceWith('<a class="templateAvater">'+ avater +'</a>');
		$('.templateCT label.templateCTtext').replaceWith('<label class="templateCTtext">'+ data +'</label>');
		//console.log($('.templateCT div.CT_text').html());
		var Tct = $('.templateCT').clone();
		//console.log(Tct);
		$('.contentlist').prepend(Tct.html());
	}

	var fillData = function(avater,data){
		var d = localStorage.wb;
		if(!d){
			d = '{"list":[]}';
		}
		var v = JSON.parse(d);
		v.list.push({name:avater,content:data});
		localStorage.wb = JSON.stringify(v);
	}

	var setName = function(){
		var name = localStorage.uname;
		if(!name){
			$('#nameModal').modal('show');
		}
	}

	setName();
	loadData();
	//getResult();
})