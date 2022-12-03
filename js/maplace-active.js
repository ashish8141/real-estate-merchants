$(function() {
               
            var LocsA = [
                {
                    lat: 18.173112,
                    lon: -77.916927,
                    title: 'Location 1',
                    html: [ '<div class="ltn__map-product-item">',
                                '<a href="#"><img src="img/product-3/1.jpg" alt="#"></a>',
                                '<h5 class="ltn__map-product-title"><a href="#">House in Upper East Side</a></h5>',
                                '<h5 class="ltn__map-product-price">$30,000</h5>',
                                '<p class="ltn__map-product-info"><span>3 Bed</span><span>3 Bath</span><span>1220 ft<sup>2</sup></span></p>',
                                '<p class="ltn__map-product-location"><i class="flaticon-pin"></i>Boston, New York</span>',
                            '</div>'
                        ].join(''),
                    icon: 'img/icons/map-marker-2.png',
                    animation: google.maps.Animation.BOUNCE
                },
                {
                    lat: 18.084364,
                    lon: -76.702938,
                    title: 'Location 2',
                    html: [ '<div class="ltn__map-product-item">',
                                '<a href="#"><img src="img/product-3/2.jpg" alt="#"></a>',
                                '<h5 class="ltn__map-product-title"><a href="#">House in Upper East Side</a></h5>',
                                '<h5 class="ltn__map-product-price">$30,000</h5>',
                                '<p class="ltn__map-product-info"><span>3 Bed</span><span>3 Bath</span><span>1220 ft<sup>2</sup></span></p>',
                                '<p class="ltn__map-product-location"><i class="flaticon-pin"></i>Boston, New York</span>',
                            '</div>'
                        ].join(''),
                    icon: 'img/icons/map-marker-2.png',
                    animation: google.maps.Animation.BOUNCE
                },
                {
                    lat: 18.016467,
                    lon: -76.505184,
                    title: 'Location 3',
                    html: [ '<div class="ltn__map-product-item">',
                                '<a href="#"><img src="img/product-3/3.jpg" alt="#"></a>',
                                '<h5 class="ltn__map-product-title"><a href="#">House in Upper East Side</a></h5>',
                                '<h5 class="ltn__map-product-price">$30,000</h5>',
                                '<p class="ltn__map-product-info"><span>3 Bed</span><span>3 Bath</span><span>1220 ft<sup>2</sup></span></p>',
                                '<p class="ltn__map-product-location"><i class="flaticon-pin"></i>Boston, New York</span>',
                            '</div>'
                        ].join(''),
                    icon: 'img/icons/map-marker-2.png',
                    animation: google.maps.Animation.BOUNCE
                },
                {
                    lat: 17.937174,
                    lon: -76.560974,
                    title: 'Location 4',
                    html: [ '<div class="ltn__map-product-item">',
                                '<a href="#"><img src="img/product-3/4.jpg" alt="#"></a>',
                                '<h5 class="ltn__map-product-title"><a href="#">House in Upper East Side</a></h5>',
                                '<h5 class="ltn__map-product-price">$30,000</h5>',
                                '<p class="ltn__map-product-info"><span>3 Bed</span><span>3 Bath</span><span>1220 ft<sup>2</sup></span></p>',
                                '<p class="ltn__map-product-location"><i class="flaticon-pin"></i>Boston, New York</span>',
                            '</div>'
                        ].join(''),
                    icon: 'img/icons/map-marker-2.png',
                    animation: google.maps.Animation.BOUNCE
                },
                {
                    lat: 17.937174,
                    lon: -77.000427,
                    title: 'Location 5',
                    html: [ '<div class="ltn__map-product-item">',
                                '<a href="#"><img src="img/product-3/5.jpg" alt="#"></a>',
                                '<h5 class="ltn__map-product-title"><a href="#">House in Upper East Side</a></h5>',
                                '<h5 class="ltn__map-product-price">$30,000</h5>',
                                '<p class="ltn__map-product-info"><span>3 Bed</span><span>3 Bath</span><span>1220 ft<sup>2</sup></span></p>',
                                '<p class="ltn__map-product-location"><i class="flaticon-pin"></i>Boston, New York</span>',
                            '</div>'
                        ].join(''),
                    icon: 'img/icons/map-marker-2.png',
                    animation: google.maps.Animation.BOUNCE
                },
                {
                    lat: 17.900587,
                    lon: -77.159729,
                    title: 'Location 6',
                    html: [ '<div class="ltn__map-product-item">',
                                '<a href="#"><img src="img/product-3/6.jpg" alt="#"></a>',
                                '<h5 class="ltn__map-product-title"><a href="#">House in Upper East Side</a></h5>',
                                '<h5 class="ltn__map-product-price">$30,000</h5>',
                                '<p class="ltn__map-product-info"><span>3 Bed</span><span>3 Bath</span><span>1220 ft<sup>2</sup></span></p>',
                                '<p class="ltn__map-product-location"><i class="flaticon-pin"></i>Boston, New York</span>',
                            '</div>'
                        ].join(''),
                    icon: 'img/icons/map-marker-2.png',
                    animation: google.maps.Animation.BOUNCE
                },
                {
                    lat: 18.417323,
                    lon: -77.912292,
                    title: 'Location 7',
                    html: [ '<div class="ltn__map-product-item">',
                                '<a href="#"><img src="img/product-3/1.jpg" alt="#"></a>',
                                '<h5 class="ltn__map-product-title"><a href="#">House in Upper East Side</a></h5>',
                                '<h5 class="ltn__map-product-price">$30,000</h5>',
                                '<p class="ltn__map-product-info"><span>3 Bed</span><span>3 Bath</span><span>1220 ft<sup>2</sup></span></p>',
                                '<p class="ltn__map-product-location"><i class="flaticon-pin"></i>Boston, New York</span>',
                            '</div>'
                        ].join(''),
                    icon: 'img/icons/map-marker-2.png',
                    animation: google.maps.Animation.BOUNCE
                },
                {
                    lat: 18.104332,
                    lon: -76.346741,
                    title: 'Location 8',
                    html: [ '<div class="ltn__map-product-item">',
                                '<a href="#"><img src="img/product-3/2.jpg" alt="#"></a>',
                                '<h5 class="ltn__map-product-title"><a href="#">House in Upper East Side</a></h5>',
                                '<h5 class="ltn__map-product-price">$30,000</h5>',
                                '<p class="ltn__map-product-info"><span>3 Bed</span><span>3 Bath</span><span>1220 ft<sup>2</sup></span></p>',
                                '<p class="ltn__map-product-location"><i class="flaticon-pin"></i>Boston, New York</span>',
                            '</div>'
                        ].join(''),
                    icon: 'img/icons/map-marker-2.png',
                    animation: google.maps.Animation.BOUNCE
                },
                {
                    lat: 18.031220,
                    lon: -77.703552,
                    title: 'Location 9',
                    html: [ '<div class="ltn__map-product-item">',
                                '<a href="#"><img src="img/product-3/3.jpg" alt="#"></a>',
                                '<h5 class="ltn__map-product-title"><a href="#">House in Upper East Side</a></h5>',
                                '<h5 class="ltn__map-product-price">$30,000</h5>',
                                '<p class="ltn__map-product-info"><span>3 Bed</span><span>3 Bath</span><span>1220 ft<sup>2</sup></span></p>',
                                '<p class="ltn__map-product-location"><i class="flaticon-pin"></i>Boston, New York</span>',
                            '</div>'
                        ].join(''),
                    icon: 'img/icons/map-marker-2.png',
                    animation: google.maps.Animation.BOUNCE
                },
                {
                    lat: 18.266114,
                    lon: -77.670593,
                    title: 'Location 10',
                    html: [ '<div class="ltn__map-product-item">',
                                '<a href="#"><img src="img/product-3/4.jpg" alt="#"></a>',
                                '<h5 class="ltn__map-product-title"><a href="#">House in Upper East Side</a></h5>',
                                '<h5 class="ltn__map-product-price">$30,000</h5>',
                                '<p class="ltn__map-product-info"><span>3 Bed</span><span>3 Bath</span><span>1220 ft<sup>2</sup></span></p>',
                                '<p class="ltn__map-product-location"><i class="flaticon-pin"></i>Boston, New York</span>',
                            '</div>'
                        ].join(''),
                    icon: 'img/icons/map-marker-2.png',
                    animation: google.maps.Animation.BOUNCE
                },
                {
                    lat: 17.895359,
                    lon: -77.439880,
                    title: 'Location 11',
                    html: [ '<div class="ltn__map-product-item">',
                                '<a href="#"><img src="img/product-3/5.jpg" alt="#"></a>',
                                '<h5 class="ltn__map-product-title"><a href="#">House in Upper East Side</a></h5>',
                                '<h5 class="ltn__map-product-price">$30,000</h5>',
                                '<p class="ltn__map-product-info"><span>3 Bed</span><span>3 Bath</span><span>1220 ft<sup>2</sup></span></p>',
                                '<p class="ltn__map-product-location"><i class="flaticon-pin"></i>Boston, New York</span>',
                            '</div>'
                        ].join(''),
                    icon: 'img/icons/map-marker-2.png',
                    animation: google.maps.Animation.BOUNCE
                }

            ];
            new Maplace({
                locations: LocsA,
                controls_on_map: true,
                map_options: {
                    zoom: 10,
                    scrollwheel: false,
                    stopover: true
                },
                stroke_options: {
                    strokeColor: '#f10', 
                    strokeOpacity: 0.8, 
                    strokeWeight: 2, 
                    fillColor: '#f10', 
                    fillOpacity: 0.4
                }
            }).Load();

        });