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
		$.getJson('result.json', function(data){
			console.log(data.msg);
		})
	}

	$('#btnSubmit').live('click', function(){
		//alert($('#tbContent').val());
		//$('#templateCTtext').val().replaceWith($('#tbContent').val());
		$('.templateCT label.templateCTtext').replaceWith('<label class="templateCTtext">'+ $('#tbContent').val()+'</label>');
		console.log($('.templateCT div.CT_text').html());
		var Tct = $('.templateCT').clone();
		console.log(Tct);
		$('.contentlist').prepend(Tct.html());
		return false;
	});


	getResult();
})