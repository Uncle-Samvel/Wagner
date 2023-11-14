// NX    : CookieLaw
// LESS  : assets/.layout/nexcelent/elements/cookielaw.less
// JS    : assets/.js/nexcelent/elements/cookielaw.js
// JS    : assets/js/cookielaw-settings.js

var noCookieLawUrls                     = ['impressum', 'legalnotice', 'datenschutz', 'privacy', 'parcel-tracking', 'payment'];
var noCookieLawIframesStatistik         = [];
var noCookieLawIframesKomfort           = ['maps.google', 'openstreetmap', 'vimeo', 'youtu'];
var noCookieLawIframesPersonalisierung  = [];

// -----------------------------------------------------------------------------

var deleteCookieLawStatistik = {
    // GOOGLE ANALYTICS ALT
    _000: { name: '_utma',          domain: '.wagner-tuning.com',        path: '/' },
    _001: { name: '_utmb',          domain: '.wagner-tuning.com',        path: '/' },
    _002: { name: '_utmc',          domain: '.wagner-tuning.com',        path: '/' },
    _003: { name: '_utmt',          domain: '.wagner-tuning.com',        path: '/' },
    _004: { name: '_utmz',          domain: '.wagner-tuning.com',        path: '/' },

    _010: { name: '__utma',         domain: '.wagner-tuning.com',        path: '/' },
    _011: { name: '__utmb',         domain: '.wagner-tuning.com',        path: '/' },
    _012: { name: '__utmc',         domain: '.wagner-tuning.com',        path: '/' },
    _013: { name: '__utmt',         domain: '.wagner-tuning.com',        path: '/' },
    _014: { name: '__utmz',         domain: '.wagner-tuning.com',        path: '/' },


    // GOOGLE ANALYTICS NEU
    _020: { name: '_ga',            domain: '.wagner-tuning.com',        path: '/' },
    _021: { name: '_gat',           domain: '.wagner-tuning.com',        path: '/' },
    _022: { name: '_gid',           domain: '.wagner-tuning.com',        path: '/' },

    _030: { name: '__ga',           domain: '.wagner-tuning.com',        path: '/' },
    _031: { name: '__gat',          domain: '.wagner-tuning.com',        path: '/' },
    _032: { name: '__gid',          domain: '.wagner-tuning.com',        path: '/' },


    // GOOGLE ANALYTICS GOOGLEADSERVICES
    _040: { name: '1P_JAR',         domain: '.wagner-tuning.com',        path: '/' },
    _041: { name: 'CONSENT',        domain: '.wagner-tuning.com',        path: '/' },
    _042: { name: 'NID',            domain: '.wagner-tuning.com',        path: '/' },
    _043: { name: 'testcookie',     domain: '.wagner-tuning.com',        path: '/' },


    // KLARNA ON-SITE MESSAGING
    _050: { name: 'ku1-sid',        domain: '.wagner-tuning.com',        path: '/' },
    _051: { name: 'ku1-vid',        domain: '.wagner-tuning.com',        path: '/' },
    _052: { name: 'ku3-vid',        domain: '.wagner-tuning.com',        path: '/' },


    // GOOGLE ANALYTICS 4 [GA4]
    _053: { name: '__Secure-ENID',  domain: '.wagner-tuning.com',        path: '/' },
    _054: { name: '_gcl_au',        domain: '.wagner-tuning.com',        path: '/' },
    _055: { name: 'CONSENT',        domain: '.wagner-tuning.com',        path: '/' },
    _056: { name: 'AEC',            domain: '.wagner-tuning.com',        path: '/' },
}

// -----------------------------------------------------------------------------

var deleteCookieLawKomfort = {};

// -----------------------------------------------------------------------------

var deleteCookieLawPersonalisierung = {
    // FACEBOOK-PIXEL
    _000: { name: '_fbp',           domain: '.wagner-tuning.com',        path: '/' },
};

// -----------------------------------------------------------------------------
