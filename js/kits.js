var KITS = function () {

	var _initializeMenu = function () {

		var toggleMenu = function (e, alwaysHide) {
			var menu = document.getElementById("js-menu");
			var menuBackground = document.getElementById("js-menu-background");
			var menuButton = document.getElementById("js-menu-button");

			if (menu.classList.contains("is-open") || alwaysHide) {
				menu.classList.remove("is-open");
				menuBackground.classList.remove("is-active");
				menuButton.classList.remove("is-open");
			} else {
				menu.classList.add("is-open");
				menuBackground.classList.add("is-active");
				menuButton.classList.add("is-open");
			}
			e.preventDefault();
			return false;
		};

		var hideMenu = function (e) {
			return toggleMenu(e, true);
		};

		var toggleMenuButton = function () {
			if (window.scrollY > 60) {
				document.getElementById("js-menu-button").classList.add('c-menu-button--floating');
			} else {
				document.getElementById("js-menu-button").classList.remove('c-menu-button--floating');
			}
		};

		document.getElementById("js-menu-background").addEventListener("click", hideMenu);
		document.getElementById("js-menu-button").addEventListener("click", toggleMenu);
		window.addEventListener("scroll", toggleMenuButton);
	};

	var _initializeJobb = function () {

		var changeJobb = function (e) {

			var link = e.currentTarget;
			var index = parseInt(link.dataset.index, 10);

			var jobbList = document.getElementById('js-jobb-list');
			for (var i = 0; i < 10; i++) {
				jobbList.classList.remove('c-jobb-list--active-' + i);
			}
			jobbList.classList.add('c-jobb-list--active-' + index);

			var jobb = document.getElementsByClassName('c-jobb');
			for (var i = 0; i < jobb.length; i++) {
				if (jobb[i].dataset.index === link.dataset.index) {
					jobb[i].classList.add('c-jobb--active');
				} else {
					jobb[i].classList.remove('c-jobb--active');
				}

			}

			var avatar = document.getElementsByClassName('c-jobb-avatar');
			for (var i = 0; i < avatar.length; i++) {
				if (avatar[i].dataset.index === link.dataset.index) {
					avatar[i].classList.add('c-jobb-avatar--active');
				} else {
					avatar[i].classList.remove('c-jobb-avatar--active');
				}
			}

			e.preventDefault();
			return false;
		};

		var avatars = document.getElementsByClassName('c-jobb-avatar');
		for (var i = 0; i < avatars.length; i++) {
			avatars[i].addEventListener('touchend', changeJobb, false);
			avatars[i].addEventListener('click', changeJobb, false);
		}
	};

	var _translate = function () {
		var activeRE = new RegExp('\\?kokitotsos');
		if (activeRE.test(location.href)) {
			var hostRE = new RegExp('^' + location.protocol + '//' + location.hostname);

			// Create a walker to find all text nodes with some exceptions.
			var textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
				acceptNode: function (node) {
					var parentElement = node.parentElement;
					var classList = parentElement.classList;
					if (classList.contains('c-menu__link')
						|| classList.contains('c-button')
						|| classList.contains('c-jobb-avatar__name')) {
						return NodeFilter.FILTER_SKIP;
					} else if (parentElement.tagName === 'CODE'
						|| parentElement.parentElement.tagName == 'CODE') {
						return NodeFilter.FILTER_SKIP;
					} else if (parentElement.tagName === 'A'
						&& !hostRE.test(parentElement.href)) {
						return NodeFilter.FILTER_SKIP;
					}
					return NodeFilter.FILTER_ACCEPT;
				}
			}, true);

			// Add activator to all internal links.
			var links = document.getElementsByTagName('a');
			var link, i;
			for (i = 0; i < links.length; i++) {
				link = links[i].href;
				if (hostRE.test(link) && !activeRE.test(link)) {
					links[i].href = link + '?kokitotsos';
				}
			}

			// Replace all matching text nodes with rövarspråket.
			var node;
			while (node = textWalker.nextNode()) {
				node.textContent = node.textContent
					.replace(/([bcdfghjklmnpqrstvwxz])/g, '$1o$1')
					.replace(/([BCDFGHJKLMNPQRSTVWXZ])/g, "$1O$1");
			}
		}
	};

	return {

		translate: _translate,

		initializeJobb: _initializeJobb,

		initializeMaps: function () {
			mapboxgl.accessToken = 'pk.eyJ1Ijoia29raXRvdHNvcyIsImEiOiJjaXk0d3R5bjEwMDJsMnlscWhtOGlydDl3In0.Xfr-Sr_D4JJVK2kVNsm4vA';
			var map = new mapboxgl.Map({
				center: [11.9567863, 57.7001813],
				container: 'js-map',
				interactive: false,
				style: 'mapbox://styles/mapbox/streets-v10',
				zoom: 13
			});

			var el = document.createElement('img');
			el.height = 50;
			el.src = '/images/icons/marker.png';
			el.srcset = '/images/icons/marker@2x.png 2x';
			el.style.cursor = 'pointer';

			el.addEventListener('click', function () {
				window.location.href = 'http://maps.apple.com/?q=Norra+All%C3%A9gatan+8+G%C3%B6teborg'
			});
			// add marker to map
			new mapboxgl.Marker(el, { offset: [-18, -50] })
				.setLngLat([11.9567863, 57.7001813])
				.addTo(map);
		},

		initializeMenu: _initializeMenu
	};
}();
