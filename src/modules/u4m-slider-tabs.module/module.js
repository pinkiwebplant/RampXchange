// Tab Click and Activation Handler
$(".tab-item .tab-inner h3").click(function () {
  var $tabItem = $(this).closest(".tab-item");
  var tabId = $tabItem.attr("data-id");
  console.log("Clicked Tab ID:", tabId);

  // Toggle active class for the clicked tab
  $tabItem
    .toggleClass("acc-open")
    .siblings()
    .removeClass("acc-open animate-media");

  setTimeout(function () {
    $tabItem.toggleClass("animate-media");
  }, 300);

  // Display content for the active tab and hide for siblings
  if ($tabItem.hasClass("acc-open")) {
    $tabItem.find(".toggle_content").css("display", "block"); // Show immediately
  } else {
    $tabItem.find(".toggle_content").css("display", "none"); // Hide immediately
  }
  $tabItem.siblings().find(".toggle_content").css("display", "none");

  // Handle corresponding image/video section
  $(".tab-image-section .img-item").each(function () {
    var dataSrc = $(this).attr("data-src");
    if (tabId === dataSrc) {
      let getThis = $(this);
      $(getThis)
        .addClass("acc-open")
        .siblings()
        .removeClass("acc-open animate-media");

      setTimeout(function () {
        $(getThis).addClass("animate-media");
      }, 300);
    }
  });

  // Reset all iframe videos
  $(".tab-image-section .img-item iframe").each(function () {
    var iframe = $(this);
    var originalSrc = iframe.attr("data-src");
    if (originalSrc) {
      iframe.attr("src", "").attr("src", originalSrc); // Clear and restore src
    }
  });

  // Pause and reset all normal videos
  $(".tab-image-section .img-item video").each(function () {
    if (!this.paused) {
      this.pause();
      this.currentTime = 0;
    }
  });

  // Remove play state class from all video elements
  $(".video_wrap, .external_video").removeClass("video_play");
});

// Play iframe video and set src from data-src when poster image is clicked
$(".poster_img").click(function () {
  var externalVideoWrapper = $(this).closest(".external_video");
  var iframe = externalVideoWrapper.find("iframe");

  // Add the video_play class to the external_video
  externalVideoWrapper.addClass("video_play");

  // Set the src from data-src to autoplay the iframe video
  if (iframe.length) {
    var videoSrc = iframe.attr("data-src"); // Get the video path from data-src
    if (videoSrc) {
      iframe.attr("src", videoSrc); // Set the src directly
    }
  }
});

// Play normal video when poster image is clicked
$(".poster_img").click(function () {
  var videoWrapper = $(this).closest(".video_wrap");
  var video = videoWrapper.find("video")[0];

  // Add the video_play class to the current video_wrap
  videoWrapper.addClass("video_play");

  // Play the video with sound
  if (video) {
    video.removeAttribute("controls"); // Ensure controls are not visible
    video.muted = false; // Enable sound
    video.play();
  }
});
