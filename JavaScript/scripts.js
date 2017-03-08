//FORM 
function ActiveName(i) {
    //var name = document.getElementsByClassName("Myform")[0];
    var labelF = document.getElementsByClassName("label-form")[i];
    var input = document.getElementsByClassName("Myform")[i];

    labelF.style.color = "#66cc99";
    input.setAttribute("style", "width: 100%; border: none!important; border-bottom: 2px solid #66cc99!important; border-radius: 0px!important; padding-left: 10px; padding-bottom: 5px; margin-top: 5px;");
}

function NonActiveName(i) {
    var input = document.getElementsByClassName("Myform")[i];
    if (input.value == "") {
        document.getElementsByClassName("label-form")[i].style.color = "rgb(82, 89, 107)";
    } else {
        document.getElementsByClassName("label-form")[i].style.color = "#3d3e42";
    }
    input.setAttribute("style", "width: 100%; border: none!important; border-bottom: 2px solid #3d3e42!important; border-radius: 0px!important; padding-left: 10px; padding-bottom: 5px; margin-top: 5px;");
}


//NAVIGATION
class StickyNavigation {

    constructor() {
        this.currentId = null;
        this.currentTab = null;
        this.tabContainerHeight = 70;
        this.lastScroll = 0;
        let self = this;
        $('.et-hero-tab').click(function() {
            self.onTabClick(event, $(this));
        });
        $(window).scroll(() => { this.onScroll(); });
        $(window).resize(() => { this.onResize(); });
    }

    onTabClick(event, element) {
        event.preventDefault();
        let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
        $('html, body').animate({ scrollTop: scrollTop }, 600);
    }

    onScroll() {
        this.checkHeaderPosition();
        this.findCurrentTabSelector();
        this.lastScroll = $(window).scrollTop();
    }

    onResize() {
        if (this.currentId) {
            this.setSliderCss();
        }
    }

    checkHeaderPosition() {
        const headerHeight = 50;
        if ($(window).scrollTop() > headerHeight) {
            $('.et-header').addClass('et-header--scrolled');
        } else {
            $('.et-header').removeClass('et-header--scrolled');
        }
        let offset = ($('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight) - headerHeight;
        if ($(window).scrollTop() > this.lastScroll && $(window).scrollTop() > offset) {
            $('.et-header').addClass('et-header--move-up');
            $('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top-first');
            $('.et-hero-tabs-container').addClass('et-hero-tabs-container--top-second');
        } else if ($(window).scrollTop() < this.lastScroll && $(window).scrollTop() > offset) {
            $('.et-header').removeClass('et-header--move-up');
            $('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top-second');
            $('.et-hero-tabs-container').addClass('et-hero-tabs-container--top-first');
        } else {
            $('.et-header').removeClass('et-header--move-up');
            $('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top-first');
            $('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top-second');
        }
    }

    findCurrentTabSelector(element) {
        let newCurrentId;
        let newCurrentTab;
        let self = this;
        $('.et-hero-tab').each(function() {
            let id = $(this).attr('href');
            let offsetTop = $(id).offset().top - self.tabContainerHeight;
            let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
            if ($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
                newCurrentId = id;
                newCurrentTab = $(this);
            }
        });
        if (this.currentId != newCurrentId || this.currentId === null) {
            this.currentId = newCurrentId;
            this.currentTab = newCurrentTab;
            this.setSliderCss();
        }
    }

    setSliderCss() {
        let width = 0;
        let left = 0;
        if (this.currentTab) {
            width = this.currentTab.css('width');
            left = this.currentTab.offset().left;
        }
        $('.et-hero-tab-slider').css('width', width);
        $('.et-hero-tab-slider').css('left', left);
    }

}

new StickyNavigation();

//HEADER

var Utils = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (Utils.Android() || Utils.BlackBerry() || Utils.iOS() || Utils.Opera() || Utils.Windows());
    },
    randomInRange: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};

var $borders = [].slice.call(document.querySelectorAll('.border-inner'), 0),
    wrapperRombo = document.getElementById('wrapper'),
    control = document.getElementById('control'),
    colors = ['#df3891', '#fff78b', '#692286', '#c4a66b', '#ed95c0', '#6ac1b8'],
    nRombo = 46,
    timer = 0.8;

var setObj = function setObj() {

    var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
    var heightIOs = window.innerHeight * zoomLevel;

    if (Utils.iOS()) {

        if (heightIOs > window.innerWidth) {
            document.querySelector('.Main').style.height = heightIOs + 'px';
            document.querySelector('.Main').style.minHeight = heightIOs + 'px';
        }

    }

    TweenMax.set(document.querySelectorAll('.border-inner')[0], {
        y: -32
    });
    TweenMax.set(document.querySelectorAll('.border-inner')[1], {
        y: 32
    });
    TweenMax.set(document.querySelectorAll('.border-inner')[2], {
        x: -32
    });
    TweenMax.set(document.querySelectorAll('.border-inner')[3], {
        x: 32
    });

};

var border = function border() {
    var tl = new TimelineMax();

    tl.to($borders, 1.8, {
        x: 0,
        y: 0,
        force3D: true,
        ease: Power1.easeOut,
        onComplete: function() {
            document.body.classList.remove('overflow');
        }
    });

    return tl;
};

var romboInit = function romboInit() {

    for (var i = 0; i < nRombo; i++) {

        var gridItem = document.createElement('div');
        var romboDiv = document.createElement('div');

        wrapperRombo.appendChild(gridItem);
        gridItem.className = "box";

        TweenMax.set(".box", {
            perspective: 600,
            transformOrigin: '50% 50%'
        });

        document.querySelectorAll('.box')[i].appendChild(romboDiv);
        romboDiv.className = "rombo";

        TweenMax.set(".rombo", {
            transformStyle: "preserve-3d"
        });

        if (Utils.any()) {

            TweenMax.set(document.querySelectorAll('.rombo')[i], {
                backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                top: Utils.randomInRange(-40, 40),
                left: Utils.randomInRange(-40, 40),
                y: 0,
                scale: 0,
                opacity: 0,
                transformOrigin: '50% 50%',
                rotationY: Utils.randomInRange(-720, 720),
                rotation: Utils.randomInRange(-320, 320)
            });

        } else {

            TweenMax.set(document.querySelectorAll('.rombo')[i], {
                backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                top: Utils.randomInRange(-180, 180),
                left: Utils.randomInRange(-180, 180),
                y: -100,
                scale: 0,
                opacity: 0,
                transformOrigin: '50% 50%',
                rotationY: Utils.randomInRange(-720, 720),
                rotation: Utils.randomInRange(-320, 320)
            });

        }

    }

};

var romboAnimation = function romboAnimation() {
    var romboTodo = [].slice.call(document.querySelectorAll('.rombo'), 0);
    var tl = new TimelineMax();

    tl.staggerTo(romboTodo, 1.2, {
        y: 0,
        scale: 1,
        opacity: 1,
        rotationY: 0,
        rotation: '+=240',
        force3D: true,
        ease: Power2.easeOut
    }, 0.08);

    return tl;
};

var init = function init() {

    setObj();
    romboInit();

    // MASTER SCENES

    var master = new TimelineMax({
        delay: 0.4
    });

    master.add(border(), "scene1")
        .add(romboAnimation(), "-=1.8", "scene2");
    master.timeScale(timer);

    function go(el) {
        master.play();
        master.timeScale(timer);
        el.textContent = "REVERSE";
    }

    function rewards(el) {
        master.reverse();
        master.timeScale(timer * 5);
        el.textContent = "PLAY";
    }

    control.onclick = function() {
        master.reversed() ? go(this) : rewards(this);
        return false;
    };

};

window.onload = init;