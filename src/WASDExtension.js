(() => new class WASDExtension {

    // Up Keys
    static upKeys = new Set(['w', 'W', 'ArrowUp']);

    // Down Keys
    static downKeys = new Set(['s', 'S', 'ArrowDown']);

    // Scroll Speed
    static scrollSpeed = 5;

    // Scrolling Container
    static container = document.scrollingElement || document.documentElement;

    constructor() {
        // Scrolling Interval
        this.interval = null;
        // Bind Event Handlers
        this.keydownHandler = this.keydownHandler.bind(this);
        this.keyupHandler = this.keyupHandler.bind(this);
        // Add Event Listeners
        document.addEventListener('keydown', this.keydownHandler);
        document.addEventListener('keyup', this.keyupHandler);
        document.addEventListener('visibilitychange', this.keyupHandler);
    }

    keydownHandler(event) {

        /**
         * Ignore keydown Event if:
         * - Target is an input tag ||
         * - Meta Key (Command|Windows) is pressed ||
         * - Control Key (Control|ctrl) is pressed ||
         * - Alt Key (Option|alt) is pressed
         */
        if (event.target.tagName.toLowerCase() === 'input' ||
            event.metaKey ||
            event.ctrlKey ||
            event.altKey) {
            return;
        }

        // Clear Interval
        this.clearInternalInterval();

        // Scroll Up Event
        if (WASDExtension.upKeys.has(event.key)) {
            this.offsetScroll(event, -1);
        }
        // Scroll Down Event
        else if (WASDExtension.downKeys.has(event.key)) {
            this.offsetScroll(event, +1);
        }

    }

    offsetScroll(event, direction) {
        // Set Interval
        this.interval = setInterval(
            // Assign Scroll Top
            () => WASDExtension.container.scrollTop += (
                // Direction (-1|+1)
                direction *
                // Scroll Speed
                WASDExtension.scrollSpeed *
                // Double if Shift
                (event.shiftKey ? 2 : 1)
            ),
            // Interval based on Shift
            event.shiftKey ? 2 : 5
        );
        // Prevent Default Event
        event.preventDefault();
    }

    clearInternalInterval() {
        // Clear Interval if it exists
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    keyupHandler(event) {
        /**
         * Clear the Interval if:
         * - Shift Key is not Pressed ||
         * - is one of the Up or Down Keys
         */
        if (!event.shiftKey ||
            WASDExtension.upKeys.has(event.key) ||
            WASDExtension.downKeys.has(event.key)) {
            this.clearInternalInterval();
        }
    }

}())();