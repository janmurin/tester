const CONFIG = {
    ANALYTICS_URL: "https://script.google.com/macros/s/AKfycbx3Xb1_H5NwBf1qfJAWtLUHv7XCHMPE6mvNAM5HYawk9_HrCSDpBGJvrMVWgMv5Re6A/exec",
    ANALYTICS_ENABLED: true,
    ANALYTICS_RETRY_COUNT: 3,
    ANALYTICS_RETRY_DELAY: 1000, // 1 second
    ANALYTICS_TIMEOUT: 5000 // 5 seconds
};

// Export the config object
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} 