(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var nav = {
	togglers: 'nav-item',
	sidebars: 'sidebar',
	lyricsSidebar: 'lyrics-sidebar',
	lyricsContainer: 'lyrics-container',
	videosContainer: 'videos-sidebar',
	mobileToggler: 'js-mobile-toggler',
	navContainer: 'js-nav-container',
	lyricsClose: 'js-lyrics-close'
};

var toggle = {
	isActive: 'is-active',
	isOpen: 'is-open',
	isMobile: 'is-mobile',
	isHidden: 'is-hidden'
};

var lyrics = {
	togglers: 'lyrics-item'
};

var sidebarTogglers = document.querySelectorAll('.' + nav.togglers);
var sidebars = document.querySelectorAll('.' + nav.sidebars);
var lyricTogglers = document.querySelectorAll('.' + lyrics.togglers);
var lyricsContainer = document.getElementById(nav.lyricsContainer);
var videosContainer = document.getElementById(nav.videosContainer);
var mobileNavToggler = document.getElementById(nav.mobileToggler);
var navContainer = document.getElementById(nav.navContainer);
var lyricsSidebar = document.getElementById(nav.lyricsSidebar);
var lyricsClose = document.getElementById(nav.lyricsClose);

mobileNavToggler.addEventListener('click', function () {
	if (navContainer.classList.contains(toggle.isOpen)) {
		navContainer.classList.remove(toggle.isOpen);
		mobileNavToggler.classList.remove(toggle.isActive);
	} else {
		navContainer.classList.add(toggle.isOpen);
		mobileNavToggler.classList.add(toggle.isActive);
	}
});

window.addEventListener('resize', function () {
	isMobile();
});

var isMobile = function isMobile() {
	var width = window.innerWidth;

	if (width <= 767) {
		if (!navContainer.classList.contains(toggle.isMobile) || !lyricsContainer.classList.contains(toggle.isMobile)) {
			navContainer.classList.add(toggle.isMobile);
			lyricsContainer.classList.add(toggle.isMobile);
		}
	} else {
		if (navContainer.classList.contains(toggle.isMobile) || !lyricsContainer.classList.contains(toggle.isMobile)) {
			navContainer.classList.remove(toggle.isMobile);
			lyricsContainer.classList.remove(toggle.isMobile);
		}
	}
};

lyricsClose.addEventListener('click', function () {
	lyricsContainer.classList.remove(toggle.isOpen);
	lyricsSidebar.classList.add(toggle.isActive);
	lyricsClose.classList.add(toggle.isHidden);
	mobileNavToggler.classList.remove(toggle.isHidden);
});

sidebarTogglers.forEach(function (toggler) {
	toggler.addEventListener('click', function () {
		var selectedNavId = this.getAttribute('data-toggle');
		var selectedSidebar = document.getElementById(selectedNavId);

		if (navContainer.classList.contains(toggle.isMobile)) {
			navContainer.classList.remove(toggle.isOpen);
			mobileNavToggler.classList.remove(toggle.isActive);
		}

		if (!this.classList.contains(toggle.isActive)) {
			var currentNav = document.querySelector('.' + nav.togglers + '.' + toggle.isActive);

			if (currentNav) {
				var currentNavId = currentNav.getAttribute('data-toggle');
				var currentSidebar = document.getElementById(currentNavId);
				currentNav.classList.remove(toggle.isActive);
				currentSidebar.classList.remove(toggle.isActive);
			}

			selectedSidebar.scrollTop = 0;

			if (selectedNavId === nav.lyricsSidebar) {
				lyricsContainer.scrollTop = 0;
			}

			if (selectedNavId === nav.videosContainer) {
				videosContainer.scrollTop = 0;
			}

			this.classList.add(toggle.isActive);
			selectedSidebar.classList.add(toggle.isActive);
		} else {
			this.classList.remove(toggle.isActive);
			selectedSidebar.classList.remove(toggle.isActive);
		}
	});
});

lyricTogglers.forEach(function (toggler) {
	toggler.addEventListener('click', function (e) {
		if (lyricsContainer.classList.contains(toggle.isMobile)) {
			lyricsSidebar.classList.remove(toggle.isActive);
			lyricsContainer.classList.add(toggle.isOpen);
			mobileNavToggler.classList.add(toggle.isHidden);
			lyricsClose.classList.remove(toggle.isHidden);
		}

		if (!this.classList.contains(toggle.isActive)) {
			// hide current
			var currentLyric = document.querySelector('.' + lyrics.togglers + '.' + toggle.isActive);

			if (currentLyric) {
				var currentLyricId = currentLyric.getAttribute('data-toggle');
				var currentPage = document.getElementById(currentLyricId);
				currentLyric.classList.remove(toggle.isActive);
				currentPage.classList.remove(toggle.isActive);
			}

			// add to selected
			var selectedLyricId = this.getAttribute('data-toggle');
			var selectedPage = document.getElementById(selectedLyricId);
			this.classList.add(toggle.isActive);
			selectedPage.classList.add(toggle.isActive);
			lyricsContainer.scrollTop = 0;
		}
	});
});

isMobile();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXl2eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQUVBLElBQU0sTUFBTTtBQUNYLFdBQVUsVUFEQztBQUVYLFdBQVUsU0FGQztBQUdYLGdCQUFlLGdCQUhKO0FBSVgsa0JBQWlCLGtCQUpOO0FBS1gsa0JBQWlCLGdCQUxOO0FBTVgsZ0JBQWUsbUJBTko7QUFPWCxlQUFjLGtCQVBIO0FBUVgsY0FBYTtBQVJGLENBQVo7O0FBV0EsSUFBTSxTQUFTO0FBQ2QsV0FBVSxXQURJO0FBRWQsU0FBUSxTQUZNO0FBR2QsV0FBVSxXQUhJO0FBSWQsV0FBVTtBQUpJLENBQWY7O0FBT0EsSUFBTSxTQUFTO0FBQ2QsV0FBVTtBQURJLENBQWY7O0FBSUEsSUFBTSxrQkFBa0IsU0FBUyxnQkFBVCxPQUE4QixJQUFJLFFBQWxDLENBQXhCO0FBQ0EsSUFBTSxXQUFXLFNBQVMsZ0JBQVQsT0FBOEIsSUFBSSxRQUFsQyxDQUFqQjtBQUNBLElBQU0sZ0JBQWdCLFNBQVMsZ0JBQVQsT0FBOEIsT0FBTyxRQUFyQyxDQUF0QjtBQUNBLElBQU0sa0JBQWtCLFNBQVMsY0FBVCxDQUF3QixJQUFJLGVBQTVCLENBQXhCO0FBQ0EsSUFBTSxrQkFBa0IsU0FBUyxjQUFULENBQXdCLElBQUksZUFBNUIsQ0FBeEI7QUFDQSxJQUFNLG1CQUFtQixTQUFTLGNBQVQsQ0FBd0IsSUFBSSxhQUE1QixDQUF6QjtBQUNBLElBQU0sZUFBZSxTQUFTLGNBQVQsQ0FBd0IsSUFBSSxZQUE1QixDQUFyQjtBQUNBLElBQU0sZ0JBQWdCLFNBQVMsY0FBVCxDQUF3QixJQUFJLGFBQTVCLENBQXRCO0FBQ0EsSUFBTSxjQUFjLFNBQVMsY0FBVCxDQUF3QixJQUFJLFdBQTVCLENBQXBCOztBQUVBLGlCQUFpQixnQkFBakIsQ0FBa0MsT0FBbEMsRUFBMkMsWUFBWTtBQUN0RCxLQUFJLGFBQWEsU0FBYixDQUF1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LFFBQU0sY0FBYyxTQUFTLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBcEI7QUFDQSxpQkFBYSxTQUFiLENBQXVCLE1BQXZCLENBQThCLE9BQU8sUUFBckM7QUFDQSxnQkFBWSxTQUFaLENBQXNCLE1BQXRCLENBQTZCLE9BQU8sUUFBcEM7QUFDQTs7QUFFRDtBQUNBLE9BQU0sa0JBQWtCLEtBQUssWUFBTCxDQUFrQixhQUFsQixDQUF4QjtBQUNBLE9BQU0sZUFBZSxTQUFTLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBckI7QUFDQSxRQUFLLFNBQUwsQ0FBZSxHQUFmLENBQW1CLE9BQU8sUUFBMUI7QUFDQSxnQkFBYSxTQUFiLENBQXVCLEdBQXZCLENBQTJCLE9BQU8sUUFBbEM7QUFDQSxtQkFBZ0IsU0FBaEIsR0FBNEIsQ0FBNUI7QUFDQTtBQUNELEVBMUJEO0FBMkJBLENBNUJEOztBQThCQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmF2ID0ge1xuXHR0b2dnbGVyczogJ25hdi1pdGVtJyxcblx0c2lkZWJhcnM6ICdzaWRlYmFyJyxcblx0bHlyaWNzU2lkZWJhcjogJ2x5cmljcy1zaWRlYmFyJyxcblx0bHlyaWNzQ29udGFpbmVyOiAnbHlyaWNzLWNvbnRhaW5lcicsXG5cdHZpZGVvc0NvbnRhaW5lcjogJ3ZpZGVvcy1zaWRlYmFyJyxcblx0bW9iaWxlVG9nZ2xlcjogJ2pzLW1vYmlsZS10b2dnbGVyJyxcblx0bmF2Q29udGFpbmVyOiAnanMtbmF2LWNvbnRhaW5lcicsXG5cdGx5cmljc0Nsb3NlOiAnanMtbHlyaWNzLWNsb3NlJ1xufVxuXG5jb25zdCB0b2dnbGUgPSB7XG5cdGlzQWN0aXZlOiAnaXMtYWN0aXZlJyxcblx0aXNPcGVuOiAnaXMtb3BlbicsXG5cdGlzTW9iaWxlOiAnaXMtbW9iaWxlJyxcblx0aXNIaWRkZW46ICdpcy1oaWRkZW4nXG59XG5cbmNvbnN0IGx5cmljcyA9IHtcblx0dG9nZ2xlcnM6ICdseXJpY3MtaXRlbSdcbn1cblxuY29uc3Qgc2lkZWJhclRvZ2dsZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7bmF2LnRvZ2dsZXJzfWApO1xuY29uc3Qgc2lkZWJhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtuYXYuc2lkZWJhcnN9YCk7XG5jb25zdCBseXJpY1RvZ2dsZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7bHlyaWNzLnRvZ2dsZXJzfWApO1xuY29uc3QgbHlyaWNzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmF2Lmx5cmljc0NvbnRhaW5lcik7XG5jb25zdCB2aWRlb3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYXYudmlkZW9zQ29udGFpbmVyKTtcbmNvbnN0IG1vYmlsZU5hdlRvZ2dsZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYXYubW9iaWxlVG9nZ2xlcik7XG5jb25zdCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYXYubmF2Q29udGFpbmVyKTtcbmNvbnN0IGx5cmljc1NpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYXYubHlyaWNzU2lkZWJhcik7XG5jb25zdCBseXJpY3NDbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5hdi5seXJpY3NDbG9zZSk7XG5cbm1vYmlsZU5hdlRvZ2dsZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cdGlmIChuYXZDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKHRvZ2dsZS5pc09wZW4pKSB7XG5cdFx0bmF2Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodG9nZ2xlLmlzT3Blbik7XG5cdFx0bW9iaWxlTmF2VG9nZ2xlci5jbGFzc0xpc3QucmVtb3ZlKHRvZ2dsZS5pc0FjdGl2ZSk7XG5cdH0gZWxzZSB7XG5cdFx0bmF2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQodG9nZ2xlLmlzT3Blbik7XG5cdFx0bW9iaWxlTmF2VG9nZ2xlci5jbGFzc0xpc3QuYWRkKHRvZ2dsZS5pc0FjdGl2ZSk7XG5cdH1cbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24gKCkge1xuXHRpc01vYmlsZSgpO1xufSk7XG5cbmNvbnN0IGlzTW9iaWxlID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblx0XG5cdGlmICh3aWR0aCA8PSA3NjcpIHtcblx0XHRpZiAoIW5hdkNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnModG9nZ2xlLmlzTW9iaWxlKSB8fCAhbHlyaWNzQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyh0b2dnbGUuaXNNb2JpbGUpKSB7XG5cdFx0XHRuYXZDb250YWluZXIuY2xhc3NMaXN0LmFkZCh0b2dnbGUuaXNNb2JpbGUpO1xuXHRcdFx0bHlyaWNzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQodG9nZ2xlLmlzTW9iaWxlKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0aWYgKG5hdkNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnModG9nZ2xlLmlzTW9iaWxlKSB8fCAhbHlyaWNzQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyh0b2dnbGUuaXNNb2JpbGUpKSB7XG5cdFx0XHRuYXZDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0b2dnbGUuaXNNb2JpbGUpO1xuXHRcdFx0bHlyaWNzQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodG9nZ2xlLmlzTW9iaWxlKTtcblx0XHR9XG5cdH1cbn07XG5cbmx5cmljc0Nsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRseXJpY3NDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0b2dnbGUuaXNPcGVuKTtcblx0bHlyaWNzU2lkZWJhci5jbGFzc0xpc3QuYWRkKHRvZ2dsZS5pc0FjdGl2ZSk7XG5cdGx5cmljc0Nsb3NlLmNsYXNzTGlzdC5hZGQodG9nZ2xlLmlzSGlkZGVuKTtcblx0bW9iaWxlTmF2VG9nZ2xlci5jbGFzc0xpc3QucmVtb3ZlKHRvZ2dsZS5pc0hpZGRlbik7XG59KTtcblxuc2lkZWJhclRvZ2dsZXJzLmZvckVhY2goZnVuY3Rpb24gKHRvZ2dsZXIpIHtcblx0dG9nZ2xlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBzZWxlY3RlZE5hdklkID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJyk7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRTaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0ZWROYXZJZCk7XG5cblx0XHRpZiAobmF2Q29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyh0b2dnbGUuaXNNb2JpbGUpKSB7XG5cdFx0XHRuYXZDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0b2dnbGUuaXNPcGVuKTtcblx0XHRcdG1vYmlsZU5hdlRvZ2dsZXIuY2xhc3NMaXN0LnJlbW92ZSh0b2dnbGUuaXNBY3RpdmUpO1xuXHRcdH1cblxuXHRcdGlmICghdGhpcy5jbGFzc0xpc3QuY29udGFpbnModG9nZ2xlLmlzQWN0aXZlKSkge1xuXHRcdFx0Y29uc3QgY3VycmVudE5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hdi50b2dnbGVyc30uJHt0b2dnbGUuaXNBY3RpdmV9YCk7XG5cblx0XHRcdGlmIChjdXJyZW50TmF2KSB7XG5cdFx0XHRcdGNvbnN0IGN1cnJlbnROYXZJZCA9IGN1cnJlbnROYXYuZ2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScpO1xuXHRcdFx0XHRjb25zdCBjdXJyZW50U2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGN1cnJlbnROYXZJZCk7XG5cdFx0XHRcdGN1cnJlbnROYXYuY2xhc3NMaXN0LnJlbW92ZSh0b2dnbGUuaXNBY3RpdmUpO1xuXHRcdFx0XHRjdXJyZW50U2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKHRvZ2dsZS5pc0FjdGl2ZSk7XG5cdFx0XHR9XG5cblx0XHRcdHNlbGVjdGVkU2lkZWJhci5zY3JvbGxUb3AgPSAwO1xuXG5cdFx0XHRpZiAoc2VsZWN0ZWROYXZJZCA9PT0gbmF2Lmx5cmljc1NpZGViYXIpIHtcblx0XHRcdFx0bHlyaWNzQ29udGFpbmVyLnNjcm9sbFRvcCA9IDA7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzZWxlY3RlZE5hdklkID09PSBuYXYudmlkZW9zQ29udGFpbmVyKSB7XG5cdFx0XHRcdHZpZGVvc0NvbnRhaW5lci5zY3JvbGxUb3AgPSAwO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmNsYXNzTGlzdC5hZGQodG9nZ2xlLmlzQWN0aXZlKTtcblx0XHRcdHNlbGVjdGVkU2lkZWJhci5jbGFzc0xpc3QuYWRkKHRvZ2dsZS5pc0FjdGl2ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY2xhc3NMaXN0LnJlbW92ZSh0b2dnbGUuaXNBY3RpdmUpO1xuXHRcdFx0c2VsZWN0ZWRTaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUodG9nZ2xlLmlzQWN0aXZlKTtcblx0XHR9XG5cdH0pO1xufSk7XG5cbmx5cmljVG9nZ2xlcnMuZm9yRWFjaChmdW5jdGlvbiAodG9nZ2xlcikge1xuXHR0b2dnbGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcblx0XHRpZiAobHlyaWNzQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyh0b2dnbGUuaXNNb2JpbGUpKSB7XG5cdFx0XHRseXJpY3NTaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUodG9nZ2xlLmlzQWN0aXZlKTtcblx0XHRcdGx5cmljc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRvZ2dsZS5pc09wZW4pO1xuXHRcdFx0bW9iaWxlTmF2VG9nZ2xlci5jbGFzc0xpc3QuYWRkKHRvZ2dsZS5pc0hpZGRlbik7XG5cdFx0XHRseXJpY3NDbG9zZS5jbGFzc0xpc3QucmVtb3ZlKHRvZ2dsZS5pc0hpZGRlbik7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLmNsYXNzTGlzdC5jb250YWlucyh0b2dnbGUuaXNBY3RpdmUpKSB7XG5cdFx0XHQvLyBoaWRlIGN1cnJlbnRcblx0XHRcdGNvbnN0IGN1cnJlbnRMeXJpYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2x5cmljcy50b2dnbGVyc30uJHt0b2dnbGUuaXNBY3RpdmV9YCk7XG5cblx0XHRcdGlmIChjdXJyZW50THlyaWMpIHtcblx0XHRcdFx0Y29uc3QgY3VycmVudEx5cmljSWQgPSBjdXJyZW50THlyaWMuZ2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScpO1xuXHRcdFx0XHRjb25zdCBjdXJyZW50UGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGN1cnJlbnRMeXJpY0lkKTtcblx0XHRcdFx0Y3VycmVudEx5cmljLmNsYXNzTGlzdC5yZW1vdmUodG9nZ2xlLmlzQWN0aXZlKTtcblx0XHRcdFx0Y3VycmVudFBhZ2UuY2xhc3NMaXN0LnJlbW92ZSh0b2dnbGUuaXNBY3RpdmUpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBhZGQgdG8gc2VsZWN0ZWRcblx0XHRcdGNvbnN0IHNlbGVjdGVkTHlyaWNJZCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScpO1xuXHRcdFx0Y29uc3Qgc2VsZWN0ZWRQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0ZWRMeXJpY0lkKTtcblx0XHRcdHRoaXMuY2xhc3NMaXN0LmFkZCh0b2dnbGUuaXNBY3RpdmUpO1xuXHRcdFx0c2VsZWN0ZWRQYWdlLmNsYXNzTGlzdC5hZGQodG9nZ2xlLmlzQWN0aXZlKTtcblx0XHRcdGx5cmljc0NvbnRhaW5lci5zY3JvbGxUb3AgPSAwO1xuXHRcdH1cblx0fSk7XG59KTtcblxuaXNNb2JpbGUoKTtcbiJdfQ==
