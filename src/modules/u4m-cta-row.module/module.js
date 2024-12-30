$(document).ready(function () {
	$(this)
		.find("video")
		.each(function () {
		this.pause();
		this.currentTime = 0; // Reset to the beginning
	});

	// Stop iframe videos by clearing their src
	$(this)
		.find("iframe")
		.each(function () {
		$(this).attr("src", ""); // Clear iframe src
	});

	// Remove the video-enable class
	$(this).find(".vid_section").removeClass("video-enable");
	// Autoplay functionality for videos
	$(document).on("click", ".poster_img", function () {
		var parentSection = $(this).closest(".vid_section");

		if (parentSection.length) {
			// Add video-enable class
			parentSection.addClass("video-enable");

			// Play HubSpot video
			var hubspotVideo = parentSection.find(".hubspot_video video").get(0);
			if (hubspotVideo) {
				hubspotVideo.play();
			}

			// Autoplay external iframe video
			var externalIframe = parentSection.find(".external_video iframe");
			if (externalIframe.length) {
				var src = externalIframe.attr("data-src");
				if (src) {
					externalIframe.attr("src", src);
				}
			}
		}
	});
});