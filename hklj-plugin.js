// declaring a namespace for the plugin
var HKLJ = HKLJ || {};

HKLJ = {
    notice: {
      'fi': 'HUOM!',
      'sv': 'OBS!',
      'en': 'NB:'
    },
    warning: {
        'fi': ['HKLJ on siirtymässä fintoon. Ruotsinkielinen ja englanninkielinen versio julkaistaan tammikuun aikana.']
    },
    renderWarning: function(params) {q
        $('.content').prepend(Handlebars.compile($('#hklj-template').html())({
            'warning': this.warning[lang][0], 
        }));
    },
};

$(function() {
    window.hkljWarning = function(params) {
        if (params.page === 'page' && vocab == 'hklj' && (params.uri  || $('#vocab-info').length)) {
            HKLJ.renderWarning(params);
        }
    };
});

