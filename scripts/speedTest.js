function testNetworkSpeed() {
    // Using a large sample image from a public domain
    const imageUrl = "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png";
    const downloadSize = 3083950; // Size of the image in bytes (approximately 3.08 MB)

    const startTime = new Date().getTime();
    const img = new Image();

    img.onload = function () {
        const endTime = new Date().getTime();
        const duration = (endTime - startTime) / 1000; // Time in seconds
        const bitsLoaded = downloadSize * 8; // Size in bits
        const speedBps = bitsLoaded / duration; // Speed in bits per second
        const speedKbps = speedBps / 1024; // Speed in kilobits per second
        const speedMbps = speedKbps / 1024; // Speed in megabits per second

        document.getElementById('result').innerText = `Download speed: ${speedKbps.toFixed(2)} kbps (${speedMbps.toFixed(2)} Mbps)`;
    };

    img.onerror = function () {
        document.getElementById('result').innerText = 'Error downloading image. Please try again.';
    };

    // Start image download
    img.src = imageUrl + '?rand=' + Math.random(); // Add random query parameter to avoid caching
}

// Start the network speed test
window.onload = testNetworkSpeed;
