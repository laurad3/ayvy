'use strict';

const nav = {
	togglers: 'nav-item',
	sidebars: 'sidebar',
	lyricsSidebar: 'lyrics-sidebar',
	lyricsContainer: 'lyrics-container',
	videosContainer: 'videos-sidebar',
	mobileToggler: 'js-mobile-toggler',
	navContainer: 'js-nav-container',
	lyricsClose: 'js-lyrics-close'
}

const toggle = {
	isActive: 'is-active',
	isOpen: 'is-open',
	isMobile: 'is-mobile',
	isHidden: 'is-hidden'
}

const lyrics = {
	togglers: 'lyrics-item'
}

const sidebarTogglers = document.querySelectorAll(`.${nav.togglers}`);
const sidebars = document.querySelectorAll(`.${nav.sidebars}`);
const lyricTogglers = document.querySelectorAll(`.${lyrics.togglers}`);
const lyricsContainer = document.getElementById(nav.lyricsContainer);
const videosContainer = document.getElementById(nav.videosContainer);
const mobileNavToggler = document.getElementById(nav.mobileToggler);
const navContainer = document.getElementById(nav.navContainer);
const lyricsSidebar = document.getElementById(nav.lyricsSidebar);
const lyricsClose = document.getElementById(nav.lyricsClose);

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

const isMobile = function () {
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
		const selectedNavId = this.getAttribute('data-toggle');
		const selectedSidebar = document.getElementById(selectedNavId);

		if (navContainer.classList.contains(toggle.isMobile)) {
			navContainer.classList.remove(toggle.isOpen);
			mobileNavToggler.classList.remove(toggle.isActive);
		}

		if (!this.classList.contains(toggle.isActive)) {
			const currentNav = document.querySelector(`.${nav.togglers}.${toggle.isActive}`);

			if (currentNav) {
				const currentNavId = currentNav.getAttribute('data-toggle');
				const currentSidebar = document.getElementById(currentNavId);
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
			const currentLyric = document.querySelector(`.${lyrics.togglers}.${toggle.isActive}`);
			const currentLyricId = currentLyric.getAttribute('data-toggle');
			const currentPage = document.getElementById(currentLyricId);
			currentLyric.classList.remove(toggle.isActive);
			currentPage.classList.remove(toggle.isActive);

			// add to selected
			const selectedLyricId = this.getAttribute('data-toggle');
			const selectedPage = document.getElementById(selectedLyricId);
			this.classList.add(toggle.isActive);
			selectedPage.classList.add(toggle.isActive);
			lyricsContainer.scrollTop = 0;
		}
	});
});

isMobile();
