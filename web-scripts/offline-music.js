let foundContextMenu = false;

const popUpContainer = document.querySelector("ytmusic-popup-container");

console.log(popUpContainer.tagName === "ytmusic-popup-container".toUpperCase());

const contextMenuObserver = new MutationObserver(function (mutations) {
	console.log("mutating...")
	const contextMenuWrapper = document.querySelector("ytmusic-menu-popup-renderer tp-yt-paper-listbox");
	for (let i = 0; i < mutations.length; i++) {
		if (mutations[i].addedNodes[0]) {
			if (mutations[i].addedNodes[0].tagName === "YTMUSIC-MENU-NAVIGATION-ITEM-RENDERER") {
				contextMenuWrapper.prepend(createMenuItem())
				console.log(mutations[i].addedNodes[0].tagName === "YTMUSIC-MENU-NAVIGATION-ITEM-RENDERER");
				// contextMenuObserver.disconnect();
				break;
			}
		}
		
	}
});

contextMenuObserver.observe(popUpContainer, {
	childList: true, 
	subtree: true
})

function createMenuItem() {
    const itemEle = document.createElement("template");
    let html = `<div
	class="style-scope menu-item ytmusic-menu-popup-renderer"
	role="option"
	tabindex="-1"
	aria-disabled="false"
	aria-selected="false"
	
>
	<div
		id="navigation-endpoint"
		class="yt-simple-endpoint style-scope ytmusic-menu-navigation-item-renderer"
		tabindex="-1"
	>
		<div
			class="icon menu-icon style-scope ytmusic-menu-navigation-item-renderer"
		>
			<svg
				viewBox="0 0 24 24"
				preserveAspectRatio="xMidYMid meet"
				focusable="false"
				class="style-scope yt-icon"
				style="pointer-events: none; display: block; width: 100%; height: 100%"
			>
				<g class="style-scope yt-icon">
					<path
						d="M25.462,19.105v6.848H4.515v-6.848H0.489v8.861c0,1.111,0.9,2.012,2.016,2.012h24.967c1.115,0,2.016-0.9,2.016-2.012v-8.861H25.462z"
						class="style-scope yt-icon"
						fill="#aaaaaa"
					/>
					<path
						d="M14.62,18.426l-5.764-6.965c0,0-0.877-0.828,0.074-0.828s3.248,0,3.248,0s0-0.557,0-1.416c0-2.449,0-6.906,0-8.723c0,0-0.129-0.494,0.615-0.494c0.75,0,4.035,0,4.572,0c0.536,0,0.524,0.416,0.524,0.416c0,1.762,0,6.373,0,8.742c0,0.768,0,1.266,0,1.266s1.842,0,2.998,0c1.154,0,0.285,0.867,0.285,0.867s-4.904,6.51-5.588,7.193C15.092,18.979,14.62,18.426,14.62,18.426z"
						class="style-scope yt-icon"
						fill="#aaaaaa"
					/>
				</g>
			</svg>
		</div>
		<div
			class="text style-scope ytmusic-menu-navigation-item-renderer"
			id="ytmcustom-download"
		>
			Download
		</div>
	</div>
</div>
    `;

    html = html.trim();
    itemEle.innerHTML = html;
    // console.log(itemEle.content.firstChild);
    return itemEle.content.firstChild;
    // return html;
}