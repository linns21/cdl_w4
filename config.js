var config = {
    style: 'mapbox://styles/linns21/clsb8bn43000y01q15zgr5llq',
    accessToken: 'pk.eyJ1IjoibGlubnMyMSIsImEiOiJjbHMxN2hkdmwwNjZoMmpwaTJ2M29mYnRmIn0.WacGZJgZ2e0aMm0rt9NP8A',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Singapore Urban Supermarkets Unveiled',
    subtitle: 'Exploring Tampines Retail Landscape',
    byline: 'By LAN LINGSHENG',
    //footer: 'Source: HDB and URA. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-container',
            alignment: 'left',
            hidden: false,
            image: './supermarkets.jpg',
            //title: 'Supermarkets in Singapore',
            description: '<h1>Supermarkets in Singapore</h1><p>In the fast-paced city of Singapore, supermarkets play a crucial role, encompassing various aspects of people daily lives. From meeting basic food and household needs to providing spaces for community interaction and cultural experiences, supermarkets are indispensable in Singapore urban lifestyle. As the city evolves and the population grows, supermarkets serve not only as shopping destinations but also as social hubs and cultural centers of urban life. </p><p>Supermarkets in Singapore are typically distributed across residential neighborhoods and commercial centers, with a particularly dense concentration in the central and eastern regions. This distribution aims to meet the daily shopping needs of both residents and visitors.</p> ',
            location: {
                center: [103.79837, 1.33663],
                zoom: 10.89,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'supermarkets-49736j',
                    opacity: 1,
                                       
                },
                {
                   layer: 'supermarkets-tamp-6uc7pj copy',
                   opacity: 0,
                },
                {
                   layer: 'clip-hdbres-59av9k',
                   opacity: 0,
                   
                },
                {
                   layer: 'sup-buffer-400m-8kreq0',
                   opacity: 0,
                  
                },
                
                {
                   layer: 'max-sup-4x7bbo',
                   opacity: 0,
                   
                },
                {
                   layer: 'fariprice-tamp-2d328q',
                   opacity: 0,
                   
                },
                {
                   layer: 'tamp-reshdb-cxvli6',
                   opacity: 0,
                   
                },
                {
                   layer: 'subzone-hdbcount-b6qrr2',
                   opacity: 0,
                   
                }
            ],
            onChapterExit: [
                {
                    layer: 'supermarkets-49736j',
                    opacity: 0
                },
                {
                   layer: 'supermarkets-tamp-6uc7pj copy',
                   opacity: 0,
                },
                {
                   layer: 'clip-hdbres-59av9k',
                   opacity: 0,
                   
                },
                {
                   layer: 'sup-buffer-400m-8kreq0',
                   opacity: 0,
                  
                },
                
                {
                   layer: 'max-sup-4x7bbo',
                   opacity: 0,
                   
                },
                {
                   layer: 'fariprice-tamp-2d328q',
                   opacity: 0,
                   
                },
                {
                   layer: 'tamp-reshdb-cxvli6',
                   opacity: 0,
                   
                },
                {
                   layer: 'subzone-hdbcount-b6qrr2',
                   opacity: 1,
                   
                }
            ]
        },
        {
            id: 'second-container',
            alignment: 'left',
            hidden: false,
            //title: 'Housing provision',          
            description: '<h1>The Distribution of Supermarkets by Subzone</h1><p>Understanding the supermarket density in each subzone helps consumers assess the convenience of their living and shopping. Dense distribution of supermarkets implies that residents can more easily access food and daily necessities, enhancing their quality of life.</p><p>This distribution map highlights the density of supermarkets across various regions in Singapore. Areas with a higher concentration of supermarkets include Jurong East, Geylang, Bedok, and Woodlands, with Tampines being the area with the most significant distribution, especially in Tampines East.</p>',
            location: {
                center: [103.79837, 1.33663],
                zoom: 10.89,
                pitch: 0,
                bearing: 0               
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'subzone-hdbcount-b6qrr2',
                    opacity: 1,
                    
                }
            ],
            onChapterExit: [
                {
                    layer: 'subzone-hdbcount-b6qrr2',
                    opacity: 0,
                },
                {
                    layer: 'supermarkets-tamp-6uc7pj copy',
                    opacity: 1,
                },
                {
                    layer: 'tamp-reshdb-cxvli6',
                    opacity: 1,                  
                },
                {
                    layer: 'clip-hdbres-59av9k',
                    opacity: 1,                   
                },
                {
                    layer: 'sup-buffer-400m-8kreq0',
                    opacity: 1,                  
                },
                {
                    layer: 'max-sup-4x7bbo',
                    opacity: 0.2,                   
                }
            ],
        },
        {
            id: 'third-container',
            alignment: 'right',
            hidden: false,
            //title: 'Punggol / Senkang',
            image: './our-towns-tampines-1.jpg',
            description: '<h1>Most Densely-Distributed: Tampines East</h1><p>Tampines East boasts the highest density of supermarkets across Singapore, hosting 12 outlets such as FairPrice, Shengsiong, Yes Supermarket, Cold Storage, as well as local brand supermarkets and smaller retailers like SUZYAMEER FROZEN.</p><p>Due to the predominant residential HDB type of Tampines East, coupled with the distribution of residential HDB locations, the accessibility analysis of local supermarkets reveals that the 400m catchment area of supermarkets achieves basically comprehensive coverage.</p>',
            location: {
                center: [103.954,1.353],
                zoom: 14.41,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'supermarkets-tamp-6uc7pj copy',
                    opacity: 1,
                },
                {
                    layer: 'tamp-reshdb-cxvli6',
                    opacity: 1,                  
                },
                {
                    layer: 'clip-hdbres-59av9k',
                    opacity: 1,                   
                },
                {
                    layer: 'sup-buffer-400m-8kreq0',
                    opacity: 1,                  
                },
                {
                    layer: 'max-sup-4x7bbo',
                    opacity: 0.2,                   
                }
            ],
            onChapterExit: [
                {
                    layer: 'tamp-reshdb-cxvli6',
                    opacity: 1,                  
                },
                {
                    layer: 'supermarkets-tamp-6uc7pj copy',
                    opacity: 0,
                },
                {
                    layer: 'clip-hdbres-59av9k',
                    opacity: 0,                   
                },
                {
                    layer: 'sup-buffer-400m-8kreq0',
                    opacity: 0,                  
                },
                {
                    layer: 'max-sup-4x7bbo',
                    opacity: 0.2,                   
                }
            ]
        },
        {
            id: 'forth-container',
            alignment: 'right',
            hidden: false,
            image: './ntuc-OTH-cover-image.jpg',
            //title: 'Punggol / Senkang',
            description: '<h1>Fairprice Brings Convenience</h1><p> According to statistics, the supermarket with the largest distribution in Tampines East is FairPrice, with a total of four supermarkets, three of which are located on Tampines Street and the other one is located in Tampines Central.</p><p>As one of Singapore largest supermarket chains, FairPrice offers a diverse selection of goods, including fresh food, daily necessities, and specialty items. Moreover, consumers can purchase products at relatively stable and cost-effective prices at FairPrice, helping them manage their cost of living.</p><p>On the whole, owing to the dense distribution of its supermarkets, Tampines East enables residents to conveniently purchase daily groceries and essentials according to their preferences and needs.</p>',
            location: {
                center: [103.949,1.353],
                zoom: 15,
                pitch: 0,
                bearing: 0
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'tamp-reshdb-cxvli6',
                    opacity: 1,                  
                },
                {
                    layer: 'supermarkets-tamp-6uc7pj copy',
                    opacity: 0,
                },
                {
                    layer: 'clip-hdbres-59av9k',
                    opacity: 0,                   
                },
                {
                    layer: 'sup-buffer-400m-8kreq0',
                    opacity: 0,                  
                },
                {
                    layer: 'max-sup-4x7bbo',
                    opacity: 0.2,                   
                }
            ],
            onChapterExit: [
                {
                    layer: 'hotel',
                    opacity: 0
                },
                {
                    layer: 'tourist',
                    opacity: 1                
                },
                {
                    layer: 'commercial',
                    opacity: 1                
                },
                {
                    layer: 'park',
                    opacity: 1                
                },
                {
                    layer: 'marina',
                    opacity: 0.3                
                }
            ]
        }
    ]
};