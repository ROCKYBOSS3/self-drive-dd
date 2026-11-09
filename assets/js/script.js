/*======================================================================
  Self Drive Car Goa – Clone
  Interactivity: car collection cards + booking form
======================================================================*/

(function () {
	"use strict";

	// ------------------------------------------------------------------
	// Car collection data (mirrors the reference website fleet)
	// Each card uses the same product images as the reference site.
	// ------------------------------------------------------------------
	const cars = [
		{
			name: "Mini Cooper Convertible",
			img: "https://hire.selfdrivecargoa.in/wp-content/uploads/2026/04/l2vni4a_1521539.avif",
			wa: "https://wa.me/9096626233?text=Hello%2C%0AI%20Would%20Like%20to%20*Book%20Mini%20Cooper%20Convertible%20in%20GOA.*%20Please%20Share%20Details"
		},
		{
			name: "Innova Hycross",
			img: "https://hire.selfdrivecargoa.in/wp-content/uploads/2026/04/innovahycrossinnovahycrossrightfrontthreequarter-1024x576.webp",
			wa: "https://wa.me/9096626233?text=Hello%2C%0AI%20Would%20Like%20to%20*Book%20Innova%20Hycross%20in%20GOA.*%20Please%20Share%20Details"
		},
		{
			name: "Fortuner New Automatic",
			img: "https://hire.selfdrivecargoa.in/wp-content/uploads/2026/04/fortuner-exterior-right-front-three-quarter-11-1024x576.avif",
			wa: "https://wa.me/9096626233?text=Hello%2C%0AI%20Would%20Like%20to%20*Book%20Fortuner%20New%20Automatic%20in%20GOA.*%20Please%20Share%20Details"
		},
		{
			name: "Innova Crysta Manual",
			img: "https://hire.selfdrivecargoa.in/wp-content/uploads/2026/04/innovacrystainnovacrystaleftfrontthreequarter-1024x576.webp",
			wa: "https://wa.me/9096626233?text=Hello%2C%0AI%20Would%20Like%20to%20*Book%20Innova%20Crysta%20Manual%20in%20GOA.*%20Please%20Share%20Details"
		},
		{
			name: "Ertiga Automatic",
			img: "https://hire.selfdrivecargoa.in/wp-content/uploads/2026/04/ertigaertigarightfrontthreequarter-1024x576.webp",
			wa: "https://wa.me/9096626233?text=Hello%2C%0AI%20Would%20Like%20to%20*Book%20Ertiga%20Automatic%20in%20GOA.*%20Please%20Share%20Details"
		},
		{
			name: "Ertiga Manual",
			img: "https://hire.selfdrivecargoa.in/wp-content/uploads/2026/04/ertigaertigarightfrontthreequarter-1024x576.webp",
			wa: "https://wa.me/9096626233?text=Hello%2C%0AI%20Would%20Like%20to%20*Book%20Ertiga%20Manual%20in%20GOA.*%20Please%20Share%20Details"
		},
		{
			name: "Kia Carens",
			img: "https://hire.selfdrivecargoa.in/wp-content/uploads/2026/04/carenscarensrightfrontthreequarter-1024x576.webp",
			wa: "https://wa.me/9096626233?text=Hello%2C%0AI%20Would%20Like%20to%20*Book%20Kia%20Carens%20in%20GOA.*%20Please%20Share%20Details"
		},
		{
			name: "Creta Automatic",
			img: "https://hire.selfdrivecargoa.in/wp-content/uploads/2026/04/cretacretarightfrontthreequarter-1024x576.webp",
			wa: "https://wa.me/9096626233?text=Hello%2C%0AI%20Would%20Like%20to%20*Book%20Creta%20Automatic%20in%20GOA.*%20Please%20Share%20Details"
		},
		{
			name: "Thar Automatic Convertible",
			img: "https://hire.selfdrivecargoa.in/wp-content/uploads/2026/04/thar-2025-exterior-right-front-three-quarter-5-1024x576.avif",
			wa: "https://wa.me/9096626233?text=Hello%2C%0AI%20Would%20Like%20to%20*Book%20Thar%20Automatic%20Convertible%20in%20GOA.*%20Please%20Share%20Details"
		},
		{
			name: "Thar Rox Automatic",
			img: "https://hire.selfdrivecargoa.in/wp-content/uploads/2026/04/tharroxxtharroxxrightfrontthreequarter-1024x576.webp",
			wa: "https://wa.me/9096626233?text=Hello%2C%0AI%20Would%20Like%20to%20*Book%20Thar%20Rox%20Automatic%20in%20GOA.*%20Please%20Share%20Details"
		},
		{
			name: "Thar Manual Convertible",
			img: "https://hire.selfdrivecargoa.in/wp-content/uploads/2026/04/s3abmhb_1877461.avif",
			wa: "https://wa.me/9096626233?text=Hello%2C%0AI%20Would%20Like%20to%20*Book%20Thar%20Manual%20Convertible%20in%20GOA.*%20Please%20Share%20Details"
		},
		{
			name: "Creta New Model Manual",
			img: "https://hire.selfdrivecargoa.in/wp-content/uploads/2026/04/creta-exterior-right-front-three-quarter-16.avif",
			wa: "https://wa.me/9096626233?text=Hello%2C%0AI%20Would%20Like%20to%20*Book%20Creta%20New%20Model%20Manual%20in%20GOA.*%20Please%20Share%20Details"
		},
		{
			name: "i20 Automatic",
			img: "https://hire.selfdrivecargoa.in/wp-content/uploads/2026/04/i20-exterior-right-front-three-quarter-13.avif",
			wa: "https://wa.me/9096626233?text=Hello%2C%0AI%20Would%20Like%20to%20*Book%20i20%20Automatic%20in%20GOA.*%20Please%20Share%20Details"
		},
		{
			name: "i20 Manual",
			img: "https://hire.selfdrivecargoa.in/wp-content/uploads/2026/04/i20-exterior-right-front-three-quarter-13.avif",
			wa: "https://wa.me/9096626233?text=Hello%2C%0AI%20Would%20Like%20to%20*Book%20i20%20Manual%20in%20GOA.*%20Please%20Share%20Details"
		},
		{
			name: "Baleno Automatic",
			img: "https://hire.selfdrivecargoa.in/wp-content/uploads/2026/04/Maruti-Suzuki-Baleno-Right-Front-Three-Quarter-147420-1024x576.avif",
			wa: "https://wa.me/9096626233?text=Hello%2C%0AI%20Would%20Like%20to%20*Book%20Baleno%20Automatic%20in%20GOA.*%20Please%20Share%20Details"
		},
		{
			name: "Baleno Manual",
			img: "https://hire.selfdrivecargoa.in/wp-content/uploads/2026/04/Maruti-Suzuki-Baleno-Right-Front-Three-Quarter-147420-1024x576.avif",
			wa: "https://wa.me/9096626233?text=Hello%2C%0AI%20Would%20Like%20to%20*Book%20Baleno%20Manual%20in%20GOA.*%20Please%20Share%20Details"
		},
		{
			name: "Swift Automatic",
			img: "https://hire.selfdrivecargoa.in/wp-content/uploads/2026/04/swift-exterior-right-front-three-quarter-2-1024x576.avif",
			wa: "https://wa.me/9096626233?text=Hello%2C%0AI%20Would%20Like%20to%20*Book%20Swift%20Automatic%20in%20GOA.*%20Please%20Share%20Details"
		},
		{
			name: "Swift Manual",
			img: "https://hire.selfdrivecargoa.in/wp-content/uploads/2026/04/swift-exterior-right-front-three-quarter-2.avif",
			wa: "https://wa.me/9096626233?text=Hello%2C%0AI%20Would%20Like%20to%20*Book%20Swift%20Manual%20in%20GOA.*%20Please%20Share%20Details"
		},
		{
			name: "Audi A6",
			img: "https://hire.selfdrivecargoa.in/wp-content/uploads/2026/04/a6a6rightfrontthreequarter.webp",
			wa: "https://wa.me/8864077340?text=Hello%2C%0AI%20Would%20Like%20to%20*Book%20Audi%20A6%20in%20GOA.*%20Please%20Share%20Details"
		},
		{
			name: "Audi Q3",
			img: "https://hire.selfdrivecargoa.in/wp-content/uploads/2026/04/q3q3rightfrontthreequarter.webp",
			wa: "https://wa.me/9096626233?text=Hello%2C%0AI%20Would%20Like%20to%20*Book%20Audi%20Q3%20in%20GOA.*%20Please%20Share%20Details"
		},
		{
			name: "Mercedes CC20",
			img: "https://hire.selfdrivecargoa.in/wp-content/uploads/2026/04/MercedesBenz-CClass-Exterior-130762.avif",
			wa: "https://wa.me/9096626233?text=Hello%2C%0AI%20Would%20Like%20to%20*Book%20Mercedes%20CC20%20in%20GOA.*%20Please%20Share%20Details"
		}
	];

	const grid = document.getElementById("carsGrid");
	if (grid) {
		cars.forEach(function (car) {
			const card = document.createElement("article");
			card.className = "car-card";
			card.innerHTML =
				'<div class="car-image">' +
				'<img src="' + car.img + '" alt="' + car.name + '" loading="lazy">' +
				'</div>' +
				'<div class="car-body">' +
				'<div class="car-rating">&#9733;&#9733;&#9733;&#9733;&#9733; (89 Reviews)</div>' +
				'<h3 class="car-name">' + car.name + '</h3>' +
				'<div class="car-min">Minimum 2 Days Booking Required</div>' +
				'<button class="btn-contact" onclick="location.href=\'' + car.wa + '\'">Contact Us Now For Best Price &amp; Deals</button>' +
				'</div>';
			grid.appendChild(card);
		});
	}

	// ------------------------------------------------------------------
	// Booking form: submit to WhatsApp
	// ------------------------------------------------------------------
	const form = document.getElementById("goaBookingForm");
	const msg = document.getElementById("bookingMessage");

	if (form) {
		form.addEventListener("submit", function (e) {
			e.preventDefault();

			const name = form.name.value.trim();
			const mobile = form.mobile.value.trim();
			const pickupDate = form.pickup_date.value;
			const pickupTime = form.pickup_time.value;
			const pickupLocation = form.pickup_location.value.trim();
			const dropoffDate = form.dropoff_date.value;
			const dropoffTime = form.dropoff_time.value;
			const dropoffLocation = form.dropoff_location.value.trim();
			const car = form.car.value;

			const body =
				"Hello%2C%0AI%20would%20like%20to%20book%20a%20self%20drive%20car%20in%20GOA.%0A%0A" +
				"*Name:* " + encodeURIComponent(name) + "%0A" +
				"*Mobile:* " + encodeURIComponent(mobile) + "%0A" +
				"*Pick-up:* " + encodeURIComponent(pickupDate + " " + pickupTime) + "%0A" +
				"*Pick-up Location:* " + encodeURIComponent(pickupLocation) + "%0A" +
				"*Drop-off:* " + encodeURIComponent(dropoffDate + " " + dropoffTime) + "%0A" +
				"*Drop-off Location:* " + encodeURIComponent(dropoffLocation) + "%0A" +
				"*Car:* " + encodeURIComponent(car) + "%0A%0A" +
				"Please%20share%20availability%20and%20details.";

			const waLink = "https://wa.me/9096626233?text=" + body;

			msg.style.display = "block";
			msg.textContent = "Opening WhatsApp with your booking details…";
			msg.style.background = "#d1ecf1";
			msg.style.color = "#0c5460";
			msg.style.borderColor = "#bee5eb";

			setTimeout(function () {
				window.open(waLink, "_blank");
				msg.textContent = "Your request has been sent to WhatsApp.";
				msg.style.background = "#d4edda";
				msg.style.color = "#155724";
				msg.style.borderColor = "#c3e6cb";
				form.reset();
			}, 600);
		});
	}

	// ------------------------------------------------------------------
	// Reveal booking message when valid (visual polish)
	// ------------------------------------------------------------------
	if (form) {
		[form.name, form.mobile, form.car].forEach(function (el) {
			if (!el) return;
			el.addEventListener("input", function () {
				msg.style.display = "none";
			});
		});
	}

})();
