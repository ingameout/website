
import {CountUp} from '/js/lib/countUp.min.js';

class Site {
    constructor() {

        M.AutoInit();
        this.setupStats();
        this.setupBackground();

        // Section Tracker ScrollSpy
        this.section_elems = document.querySelectorAll('.scrollspy');
        this.section_instances = M.ScrollSpy.init( this.section_elems, {
            activeClass: 'active',
            scrollOffset: 60,
        });

        // Wrap every letter in a span
        // var textWrapper = document.querySelector('.ml13');
        // textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
        //
        // anime.timeline({loop: true})
        //   .add({
        //     targets: '.ml13 .letter',
        //     translateY: [100,0],
        //     translateZ: 0,
        //     opacity: [0.2,1],
        //     easing: "easeOutExpo",
        //     duration: 1400,
        //     delay: function(el, i) {
        //       return 300 + 30 * i;
        //     }
        //   }).add({
        //     targets: '.ml13 .letter',
        //     translateY: [0,-100],
        //     opacity: [1,0.2],
        //     easing: "easeInExpo",
        //     duration: 1200,
        //     delay: function(el, i) {
        //       return 100 + 30 * i;
        //     }
        //   });
    }
    init()  {}

    setupStats() {
        // STATS

        // Stat Counters
        this.stats = {
            games: 26,
            platforms: 14,
            years: 41,
            counties: 2,
            generations: 4,
            naps: 10037
        };

        this.countersEl = document.querySelectorAll( '.counter ');
        this.counters = [];

        this.countersEl.forEach( counter => {
            this.counters.push( new CountUp( counter, counter.textContent, {
                duration: 10
            } ) );
        });

        this.counters.push( new CountUp( 'nap-counter', 20037, {
            duration: 79999,
            startVal: 10024,
        }) );

        // instantiate the scrollama
        this.statScroller = scrollama();

        // setup the instance, pass callback functions
        this.statScroller
          .setup({
            step: '.step',
            offset: 1,
            once: true
          })
          .onStepEnter(response => {
            // { element, index, direction }

            this.counters.forEach( c => {
                if ( response.index == c.el.dataset.scrollamaIndex )
                    c.start();
            } );
          })
          .onStepExit(response => {
            // { element, index, direction }
            // this.counters.forEach( c => c.reset() );
          });

        // setup resize event
        window.addEventListener('resize', this.statScroller.resize);
    }

    setupBackground() {

        const DOM = {};
    	DOM.svg = document.querySelector('.morph');
    	DOM.shapeEl = DOM.svg.querySelector('polygon');

        const shapes = [
    		{
    			points: '700,84.4    1047.1,685.6     352.9,685.6    352.9,685.6   352.9,685.6   352.9,685.6',
    			scaleX: .8,
    			scaleY: .9,
    			rotate: 0,
    			tx: 0,
    			ty: 0,
    			fill: {
    				color: 'none',
    				duration: 500,
    				easing: 'linear'
    			},
    			animation: {
    				points: {
    					duration: 500,
    					easing: 'easeOutExpo'
    				},
    				svg: {
    					duration: 1500,
    					easing: 'easeOutElastic'
    				}
    			}
    		},
    		{
    			points: '983.4,101.6 983.4,668.4 416.6,668.4 416.6,101.9 416.6,101.9 416.6,101.9',
    			scaleX: .7,
    			scaleY: .7,
    			rotate: 90,
    			tx: -100,
    			ty: 100,
    			fill: {
    				color: 'none',
    				duration: 500,
    				easing: 'linear'
    			},
    			animation: {
    				points: {
    					duration: 500,
    					easing: 'easeOutExpo'
    				},
    				svg: {
    					duration: 1500,
    					easing: 'easeOutElastic'
    				}
    			}
    		},
    		{
    			points: '890.9,54.3 1081.8,385 890.9,715.7 509.1,715.7 318.2,385 509.1,54.3',
    			scaleX: 1,
    			scaleY: 1,
    			rotate: -45,
    			tx: 0,
    			ty: -50,
    			fill: {
    				color: 'none',
    				duration: 500,
    				easing: 'linear'
    			},
    			animation: {
    				points: {
    					duration: 500,
    					easing: 'easeOutExpo'
    				},
    				svg: {
    					duration: 1500,
    					easing: 'easeOutElastic'
    				}
    			}
    		},
    		{
    			points: '983.4,101.6 779,385 983.4,668.4 416.6,668.4 611,388 416.6,101.9',
    			scaleX: 1,
    			scaleY: 1,
    			rotate: 145,
    			tx: 100,
    			ty: -50,
    			fill: {
    				color: 'none',
    				duration: 500,
    				easing: 'linear'
    			},
    			animation: {
    				points: {
    					duration: 500,
    					easing: 'easeOutExpo'
    				},
    				svg: {
    					duration: 1500,
    					easing: 'easeOutElastic'
    				}
    			}
    		},
    		{
    			points: '983.4,101.6 1255,385 983.4,668.4 416.6,668.4 157,368 416.6,101.9',
    			scaleX: .7,
    			scaleY: .7,
    			rotate: -70,
    			tx: -50,
    			ty: 50,
    			fill: {
    				color: 'none',
    				duration: 500,
    				easing: 'linear'
    			},
    			animation: {
    				points: {
    					duration: 500,
    					easing: 'easeOutExpo'
    				},
    				svg: {
    					duration: 1500,
    					easing: 'easeOutElastic'
    				}
    			}
    		},
    		{
    			points: '983.4,101.6 983.4,668.4 416.6,668.4 416.6,101.9 416.6,101.9 416.6,101.9',
    			scaleX: 1.2,
    			scaleY: 1.2,
    			rotate: 20,
    			tx: 0,
    			ty: 0,
    			fill: {
    				color: 'none',
    				duration: 500,
    				easing: 'linear'
    			},
    			animation: {
    				points: {
    					duration: 500,
    					easing: 'easeOutExpo'
    				},
    				svg: {
    					duration: 1500,
    					easing: 'easeOutElastic'
    				}
    			}
    		},
    		{
    			points: '983.4,101.6 983.4,668.4 416.6,668.4 416.6,101.9 416.6,101.9 416.6,101.9',
    			scaleX: 1.2,
    			scaleY: 1.2,
    			rotate: 220,
    			tx: 0,
    			ty: 0,
    			fill: {
    				color: 'none',
    				duration: 500,
    				easing: 'linear'
    			},
    			animation: {
    				points: {
    					duration: 500,
    					easing: 'easeOutExpo'
    				},
    				svg: {
    					duration: 1500,
    					easing: 'easeOutElastic'
    				}
    			}
    		}

    	];

        anime.remove(DOM.svg);
        anime({
            targets: DOM.svg,
            duration: 1,
            easing: 'linear',
            scaleX: shapes[0].scaleX,
            scaleY: shapes[0].scaleY,
            translateX: shapes[0].tx+'px',
            translateY: shapes[0].ty+'px',
            rotate: shapes[0].rotate+'deg'
        });

        // instantiate the scrollama
        this.bgScroller = scrollama();

        // setup the instance, pass callback functions
        this.bgScroller
          .setup({
            step: '.bgshape',
            offset: 1,
            once: false,
          })
          .onStepEnter( res => {
            const pos = ( res.index < shapes.length ) ? res.index : 0;
            console.log( res.index, shapes.length );
            anime.remove(DOM.shapeEl);
            anime({
                targets: DOM.shapeEl,
                duration: shapes[pos].animation.points.duration,
                easing: shapes[pos].animation.points.easing,
                elasticity: shapes[pos].animation.points.elasticity || 0,
                points: shapes[pos].points,
                fill: {
                    value: shapes[pos].fill.color,
                    duration: shapes[pos].fill.duration,
                    easing: shapes[pos].fill.easing
                }
            });

            anime.remove(DOM.svg);
            anime({
                targets: DOM.svg,
                duration: shapes[pos].animation.svg.duration,
                easing: shapes[pos].animation.svg.easing,
                elasticity: shapes[pos].animation.svg.elasticity || 0,
                scaleX: shapes[pos].scaleX,
                scaleY: shapes[pos].scaleY,
                translateX: shapes[pos].tx+'px',
                translateY: shapes[pos].ty+'px',
                rotate: shapes[pos].rotate+'deg'
            });
        });
    }
}


    const site = new Site();


window.s = site;

export default site;

site.init();
