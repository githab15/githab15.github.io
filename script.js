var progress = 0;
function progressCheck() {
	if (progress >= 100) {
		progress = 0
		let progressStyle = String(progress) + "%"
		$(".progress-bar").width(progressStyle);
		progressStyle = "NOTHING"
	$(".progress-bar").html(progressStyle);
	}
}
$(document).ready(function() {
	$(".progress-bar").text("NOTHING");
	$(".progress-bar").width("0%");
	$(".btn-primary").click(function() {
		progress += 3
		let progressStyle = String(progress) + "%"
	$(".progress-bar").width(progressStyle);
	$(".progress-bar").html(progressStyle);
	progressCheck()
		
	})
		$(".btn-secondary").click(function() {
		progress += 1
		let progressStyle = String(progress) + "%"
	$(".progress-bar").width(progressStyle)
	$(".progress-bar").html(progressStyle);
	progressCheck()
		
	})
				$(".btn-success").click(function() {
		progress += 7
		let progressStyle = String(progress) + "%"
	$(".progress-bar").width(progressStyle)
	$(".progress-bar").html(progressStyle);
	progressCheck()
		
	})
})