$(document).ready(function(){
	//hide read less buttons

	$(".hide").hide();
	$(".read-less").hide();

	$("p.read-more").click(showAnswer);

	function showAnswer(evt){
		evt.preventDefault();
		// alert("t")
		$(this).hide();
		// console.log($(this).next("p").next("p"))
			$(this).next("p").next("p").show();

		$(this).next("p").slideToggle();
	}

	$("p.read-less").click(hideAnswer);

	function hideAnswer(evt){
		evt.preventDefault();
		// alert("t")
		$(this).hide();
	    $(this).prev().prev().show();

		$(this).prev().slideToggle();
	}
})
/*
page loads:

- hide the paragraphs

when a user clicks any "read more":
 find next paragraph closest to oe clicked and show it 
 hide read more button clicked
 show next closest read less button


when a use clicka ny "read less" button:
read less hides
text hide
read more button shows 

*/
