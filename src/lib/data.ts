export const WHATSAPP_NUMBER = "593996813200";
export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}`;
export const WHATSAPP_DISPLAY = `+${WHATSAPP_NUMBER.slice(0, 3)} ${WHATSAPP_NUMBER.slice(3)}`;

export type FullDayTour = {
  slug: string;
  name: string;
  loc: string;
  alt: string;
  dur: string;
  desc: string;
  image: string;
  images: string[];
  cloudinaryFolder: string;
  highlights: string[];
};

export const fullDayTours: FullDayTour[] = [
  {
    slug: "quito-city-tour",
    name: "Quito City Tour",
    loc: "Quito · Pichincha",
    alt: "2850m elevation",
    dur: "Full Day",
    desc: "Discover the historic capital, from the Equatorial line to the colonial old town.",
    image: "/images/quito2.jpg",
    images: ["/images/quito2.jpg"],
    cloudinaryFolder: "city",
    highlights: [
      "Middle of the World Monument on the Equatorial line",
      "Cable car ride with panoramic views of the city",
      "El Panecillo viewpoint and its Virgin Mary monument",
      "Walking tour of Quito's colonial old town",
    ],
  },
  {
    slug: "otavalo-market",
    name: "Otavalo Market",
    loc: "Otavalo · Imbabura",
    alt: "2550m elevation",
    dur: "Full Day",
    desc: "Wander centuries-old textile markets and Andean lakeside villages.",
    image: "/images/otavalo.jpeg",
    images: ["/images/otavalo.jpeg"],
    cloudinaryFolder: "otavalo",
    highlights: [
      "South America's largest indigenous textile market",
      "Traditional Kichwa weaving demonstrations",
      "Lakeside stop at Lago San Pablo",
      "Local Andean lunch included",
    ],
  },
  {
    slug: "banos-de-agua-santa",
    name: "Baños de Agua Santa",
    loc: "Tungurahua",
    alt: "Waterfall route",
    dur: "Full Day",
    desc: "Waterfalls, hot springs and volcano views along the Avenue of Volcanoes.",
    image: "/images/banos.jpeg",
    images: ["/images/banos.jpeg"],
    cloudinaryFolder: "banos",
    highlights: [
      "Ruta de las Cascadas waterfall route",
      "Optional soak in thermal hot springs",
      "Views of the active Tungurahua volcano",
      "Zip-lining and canyon swing available on-site",
    ],
  },
  {
    slug: "mindo-cloud-forest",
    name: "Mindo Cloud Forest",
    loc: "Pichincha",
    alt: "Cloud forest",
    dur: "Full Day",
    desc: "Birdwatching and canopy walks through one of Ecuador's richest forests.",
    image: "/images/mindo.jpeg",
    images: ["/images/mindo.jpeg"],
    cloudinaryFolder: "mindo",
    highlights: [
      "Guided birdwatching for hummingbirds and tanagers",
      "Hanging canopy bridges through the cloud forest",
      "Butterfly garden and chocolate tasting",
      "Cool, misty microclimate year-round",
    ],
  },
  {
    slug: "cotopaxi-national-park",
    name: "Cotopaxi National Park",
    loc: "Cotopaxi",
    alt: "3800m elevation",
    dur: "Full Day",
    desc: "Stand before one of the world's highest active volcanoes.",
    image: "/images/cotopaxi.jpeg",
    images: ["/images/cotopaxi.jpeg"],
    cloudinaryFolder: "cotopaxi",
    highlights: [
      "Drive up to the refuge parking at 4,600m",
      "Views of Laguna de Limpiopungo and wild horses",
      "Optional hike to the José Rivas refuge",
      "Andean highland wildlife spotting",
    ],
  },
  {
    slug: "quilotoa-lake",
    name: "Quilotoa Lake",
    loc: "Cotopaxi",
    alt: "3914m elevation",
    dur: "Full Day",
    desc: "A turquoise crater lake ringed by Andean highland trails.",
    image: "/images/quilotoa.jpeg",
    images: ["/images/quilotoa.jpeg"],
    cloudinaryFolder: "quilotoa",
    highlights: [
      "Crater rim viewpoint over the turquoise lake",
      "Stop in the indigenous market town of Zumbahua",
      "Optional descent to the lakeshore",
      "Panoramic Andean highland scenery",
    ],
  },
];

export type SpecialTour = {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  cloudinaryFolder: string;
  imageAlt: string;
  imageOnLeft?: boolean;
  dark?: boolean;
};

export const specialTours: SpecialTour[] = [
  {
    eyebrow: "Special Tour",
    title: "Galápagos Islands",
    subtitle: "Santa Cruz & San Cristóbal · 3–4 Days",
    description:
      "A gentle island-hopping itinerary — Tortuga Bay, the Charles Darwin Station, lava tunnels, and snorkeling at Punta Carola — with comfortable accommodation and English-speaking guides throughout.",
    images: ["/images/leongalapagos.webp"],
    cloudinaryFolder: "galapagos",
    imageAlt: "Galápagos sea lion on turquoise coastline",
    dark: true,
  },
  {
    eyebrow: "Forest Tour",
    title: "Cuyabeno Reserve",
    subtitle: "Ecuadorian Amazon · 3–5 Days",
    description:
      "Travel by canoe deep into the rainforest — jungle trails, a visit to the Taricaya community and a local shaman, night paddling, and early-morning bird watching from a riverside lodge.",
    images: ["/images/cuyabeno2.jpeg"],
    cloudinaryFolder: "cuyabeno",
    imageAlt: "Canoe on the Cuyabeno river at dusk",
    imageOnLeft: true,
  },
];

export type ItineraryDay = {
  day: number;
  title: string;
  description: string;
};

export type Package = {
  slug: string;
  title: string;
  dest: string;
  desc: string;
  image: string;
  cloudinaryFolder: string;
  itinerary: ItineraryDay[];
};

export const packages: Package[] = [
  {
    slug: "ecuador-in-6-days",
    title: "Ecuador in 6 Days",
    dest: "5 Destinations",
    desc: "A refined introduction to the Sierra and its highland culture.",
    image: "/images/otavalo.jpeg",
    cloudinaryFolder: "sixdays",
    itinerary: [
      {
        day: 1,
        title: "Quito City Tour",
        description:
          "We begin our trip in Ecuador's capital, Quito. In the morning, we'll head north to visit the equatorial line and the Middle of the World Monument. Next, we'll take a ride on Quito's cable car to enjoy stunning panoramic views of the city. We'll then visit El Panecillo, a small hill in the city's center that houses a monument to the Virgin Mary. From here, we can appreciate Quito's historic center. Lastly, we'll stroll through Quito's old town, discovering its beautiful streets, churches, and squares, and learning about the city's history. In the afternoon, we'll return to our hotel to rest.",
      },
      {
        day: 2,
        title: "Otavalo Indigenous Market",
        description:
          "In the morning, we'll depart from your hotel and travel north on the Pan-American highway. We'll make a stop in Cayambe to enjoy a breakfast with the famous biscochos and leaf cheese. Then, we'll continue to Otavalo to visit the famous craft market. After about two hours, we'll head to Cuicocha Lake for lunch while enjoying the views of a volcano crater. In the afternoon, we'll visit the town of Cotacachi, known for its leather crafts. Finally, we'll return to Quito to spend the night in our hotel.",
      },
      {
        day: 3,
        title: "Cotopaxi National Park",
        description:
          "We'll start the day with breakfast at the hotel before driving south from Quito to Cotopaxi National Park. After checking in at the entrance control, we'll begin our hike to the José F Rivas Refuge, located at an altitude of 4860 meters. Depending on weather conditions, we may continue to the glacier to enjoy views of the volcano's eternal ice. After descending, we'll have lunch at a local restaurant before heading to the Quilotoa community to spend the night.",
      },
      {
        day: 4,
        title: "Quilotoa - Baños",
        description:
          "After a well-deserved rest, we'll hike from the crater's edge to Quilotoa Lake. Afterwards, we'll head to the town of Baños, known for its viewpoints and tourist activities. In the afternoon, we'll have the chance to visit several attractions such as the Swing at the End of the World and the Animal Park. At the end of the day, we'll return to our hotel to rest.",
      },
      {
        day: 5,
        title: "Waterfall Route – Pailón del Diablo",
        description:
          "Today we'll focus on the famous Waterfall Route. This tour can be done by bike or transport, leading to the Ecuadorian Amazon. Along the way, we'll make stops for extreme activities such as canopy and tarabita. Our final destination will be the Pailón del Diablo, the region's largest and most famous waterfall. After lunch, we'll return to Baños in the afternoon, where you'll have free time to visit the local thermal baths.",
      },
      {
        day: 6,
        title: "Return to Quito",
        description:
          "On our final day, after breakfast, we'll head back to Quito. The return journey will last approximately three hours, and upon arrival at our hotel in Quito, our six-day program will conclude.",
      },
    ],
  },
  {
    slug: "ecuador-in-7-days",
    title: "Ecuador in 7 Days",
    dest: "6 Destinations",
    desc: "Quito, Mindo, Cotopaxi, Quilotoa, Baños and the Amazon edge.",
    image: "/images/quilotoa.jpeg",
    cloudinaryFolder: "sevendays",
    itinerary: [
      {
        day: 1,
        title: "Quito City Tour",
        description:
          'In the early morning, we will head to the Equatorial line, visiting the monument to the middle of the world. We will then visit the cable car for a spectacular view of the city, and continue to "El Panecillo", a small hill in the middle of the city with a statue of the Virgin Mary, offering a great view of the historic center. We\'ll walk through the old Quito, exploring its beautiful streets, churches, and squares, learning about the history of our ancestors. In the afternoon, we will return to our hotel.',
      },
      {
        day: 2,
        title: "Mindo Cloud Forest",
        description:
          "After picking you up from your hotel, we will head northwest to the Mindo town, where we'll enjoy breakfast while watching different species of hummingbirds. In Mindo, we'll visit a butterfly farm and take a cable car ride across a mountain, descending to find a waterfall. Weather permitting, you can enjoy the river waters and the waterfall. We'll then head to an artisan chocolate factory and have time to explore Mindo. We will return to Quito in the evening.",
      },
      {
        day: 3,
        title: "Otavalo Indigenous Market",
        description:
          "We will drive north to the Otavalo market, where you can enjoy the local crafts. We'll visit Cayambe for breakfast and try their traditional biscuits and leaf cheese. After Otavalo, we will have lunch at the Cuicocha lagoon and visit the town of Cotacachi, famous for its leather goods. In the afternoon, we'll return to Quito.",
      },
      {
        day: 4,
        title: "Cotopaxi National Park",
        description:
          "We'll drive south from Quito to Cotopaxi National Park, hike up to the José F. Rivas refuge at an altitude of 4860 meters, and then, depending on the conditions, continue to the glacier. We'll descend and head to a restaurant for lunch, then drive to the Quilotoa community to spend the night.",
      },
      {
        day: 5,
        title: "Quilotoa - Baños",
        description:
          "We will hike from the rim of the Quilotoa crater to the lake. You have the option of renting a motorboat or kayaking. Afterward, we'll drive to Baños de Agua Santa, visit various viewpoints and attractions like the Swing at the End of the World, and an animal park. We'll rest in our hotel at night.",
      },
      {
        day: 6,
        title: "Waterfall Route – Pailón del Diablo",
        description:
          "We'll take the famous waterfall route in the morning. We can do extreme activities like canopy, crossing in a tarabita, bridge jump, and more. We'll visit the Pailón del Diablo waterfall, have lunch, and return to Baños in the afternoon. You'll have the evening free to visit the thermal waters.",
      },
      {
        day: 7,
        title: "Return to Quito",
        description:
          "After breakfast, we'll drive back to Quito, a 3-hour journey, where our services will end.",
      },
    ],
  },
  {
    slug: "ecuador-in-10-days",
    title: "Ecuador in 10 Days",
    dest: "9 Destinations",
    desc: "Highlands, cloud forest and jungle, at an unhurried pace.",
    image: "/images/cuyabeno2.jpeg",
    cloudinaryFolder: "tendays",
    itinerary: [
      {
        day: 1,
        title: "Quito City Tour",
        description:
          "Early in the morning, we will head north of the city towards the Equatorial line. We will visit the Middle of the World Monument and then go to the cable car, from where we will have a spectacular view of the city. Continuing our tour, we will head to El Panecillo, a small hill located in the middle of the city, which is crowned with a statue of the Virgin Mary. From this location, we can appreciate the historic center. To finish, we will walk through the old Quito, touring its beautiful streets, churches, and squares, learning about the history of our ancestors. In the afternoon, we will return to our hotel.",
      },
      {
        day: 2,
        title: "Mindo Cloud Forest",
        description:
          "After picking you up from your hotel, we will leave Quito heading northwest. After about an hour's drive, we'll reach a stop where, while enjoying breakfast, we'll have the chance to observe different species of hummingbirds and even interact with them. We'll then arrive at the town of Mindo in about 40 minutes, which is located at an altitude of 1250 meters. Our first visit will be to the butterfly garden, estimated time 30 minutes. Afterwards, we will head to the upper part, where we can cross a mountain on a cable car to descend in approximately 30 minutes and find a waterfall. If the weather permits and the river is not too full, you will have the opportunity to enjoy its waters and enter the waterfall. We will then return to the cable car and then to the parking lot to drive to the artisanal chocolate factory for a tour. In the afternoon, we will have time to explore the center and the town of Mindo, and at nightfall, return to our respective hotel in Quito.",
      },
      {
        day: 3,
        title: "Otavalo Indigenous Market",
        description:
          "We will pick you up from your hotel, and drive approximately an hour along the Pan-American Highway to the north of the country. We will cross the Equatorial line, arriving at the Cayambe canton where we will stop for breakfast and taste the typical biscochos and leaf cheese. Then we will continue our journey to Otavalo, where we will visit the craft market for approximately 2 hours. Later, we will drive to Cuicocha Lake, where we will have lunch enjoying a beautiful view of the crater of a volcano that erupted 3000 years ago and formed a beautiful lake called Cuicocha. Then we will visit the town of Cotacachi, where we can observe and purchase items and crafts made of leather. In the afternoon, we will return to the city of Quito to rest in our hotel.",
      },
      {
        day: 4,
        title: "Cotopaxi National Park",
        description:
          "After breakfast, this time we will drive along the Pan-American Highway south from Quito and in approximately 1 hour we will arrive at Cotopaxi National Park. It will take us about 5 minutes to register at the control gate, and then we will continue our journey to the parking lot, which is located at an altitude of 4600 meters. From here, after preparing ourselves with our hiking gear, we will begin the ascent to the José F. Rivas refuge at an altitude of 4860 meters. This will take us approximately 1 hour at a very relaxed pace. Here we will have the opportunity to enjoy a hot chocolate or coca tea, which will help with altitude sickness. Depending on the weather conditions and the individuals, we will continue for about 30 minutes to the glacier to observe the perpetual ice that the volcano still retains. After taking some photos, we will start the descent. It will take us approximately 40 minutes to reach our vehicle and then drive to a restaurant where we will have lunch. In the afternoon, we will continue our journey to the Quilotoa community, where we will spend the night.",
      },
      {
        day: 5,
        title: "Quilotoa - Baños",
        description:
          "After enjoying a well-deserved rest, we will hike down from the rim of the crater to the lake, approximately 40 minutes. In this lake, you have the option of renting a motorboat or kayaking. Then we will ascend by the same trail that we descended in approximately 1 hour. If you don't wish to walk, you have the option to rent mules. In the afternoon, we will take our vehicle and after driving for about 2 hours we will arrive at the canton of Baños de Agua Santa. Here we will have the opportunity to visit the viewpoints where many tourist attractions are located, such as: the Swing at the End of the World, an extreme swing, a glass viewpoint, the Animal Park, etc. At night, we will go to our hotel to rest.",
      },
      {
        day: 6,
        title: "Waterfall Route – Pailón del Diablo",
        description:
          "In the morning, not too early so you can rest a bit more, we will do the famous waterfall route. This activity can be done cycling or in our transport. We will take the route that leads to the Ecuadorian Amazon. Along this route, we can make stops to do extreme activities if you wish, such as: Canopy, crossing in a tarabita, bridge jump, and many more. Our final destination will be the biggest and most famous waterfall known as El Pailón del Diablo. In this area, we will also have the opportunity to have lunch and taste a delicious river trout. Then in the afternoon, we will return to the city of Baños. The afternoon will be free for you to go to the thermal waters from the volcano, which are open until 9 at night.",
      },
      {
        day: 7,
        title: "Baños – Misahuallí",
        description:
          "After our usual breakfast, we will take the route to the Ecuadorian Amazon, specifically to the parish of Misahuallí. Here, we will take a canoe trip on the Napo River to an indigenous community (Shuar), where we can observe and learn about their customs and also experience some of them. We will watch the preparation of yuca chicha, and also have the opportunity to interact with Amazonian animals. In the afternoon, we will go to our hotel.",
      },
      {
        day: 8,
        title: "Misahuallí – Caves",
        description:
          "Today, we will visit a cave, which has an entrance of approximately 8 meters high by 10 meters wide. The tour lasts from 45 min to 60 min. As we explore the cave, we will learn about the story of Jumandi, who was a Chief who discovered the caves, which now bear his name, during the time of the conquest. The caves became the natural refuge of the inhabitants of the east while Chief Jumandi was fighting to ward off the conquerors. Men, women, children, and the elderly came to this place while the warriors fought for their freedom. In the afternoon, we will have the opportunity to stroll along the Malecón of the city of Tena. At night, we will return to our hotel.",
      },
      {
        day: 9,
        title: "Misahuallí – Papallacta Thermal Baths",
        description:
          "After a well-deserved rest and tasting a typical Amazonian breakfast, we will drive approximately 4 hours to the parish of Papallacta, where there are many complexes with thermal water pools coming from the volcano. We will have the opportunity to enjoy their healing and relaxing waters for approximately 4 hours. After lunch, we will drive one hour to the town of Tababela, which is 15 minutes from the Quito International Airport.",
      },
      {
        day: 10,
        title: "Transfer Out",
        description:
          "We will take you to the airport three hours before your return flight, and this is where our services end.",
      },
    ],
  },
  {
    slug: "ecuador-in-15-days",
    title: "Ecuador in 15 Days",
    dest: "12 Destinations",
    desc: "The complete journey — Sierra, Amazon and Pacific coast.",
    image: "/images/quito2.jpg",
    cloudinaryFolder: "fifteendays",
    itinerary: [
      {
        day: 1,
        title: "Quito City Tour",
        description:
          "Early in the morning we will go to the north of the city in the direction of the Equatorial line, we will visit the monument to the middle of the world, later, to the cable car from where we will have a spectacular view of the city, continuing our tour, we will move to el panecillo, which is a small hill located in the middle of the city and where a monument to the Virgin Mary stands, from this place you can appreciate the historic center, to finish we will walk through old Quito, touring its beautiful streets, churches and squares, knowing the history of our ancestors. In the afternoon we will return to our hotel.",
      },
      {
        day: 2,
        title: "Mindo Cloud Forest",
        description:
          "After picking you up from your hotel, we will leave Quito towards the northwest, and after driving an hour we will arrive at a restaurant, where while we enjoy breakfast we will have the opportunity to observe different species of hummingbirds and we will even be able to interact with them. Continuing we will arrive in approximately 40 minutes to the town of Mindo, this is located at an altitude of 1250 meters; Our first visit will be to the butterfly farm, approximately 30 minutes, later we will go to the upper part, where we can cross a mountain on a cable car to descend in approximately 30 minutes and find a waterfall; If the weather allows it and the river is not very mighty, you will have the opportunity to enjoy its waters and enter the waterfall, then we will return to the cable car and then to the parking lot with our vehicle to go to the artisanal chocolate factory for a tour. In the afternoon we will have time to walk in the center and the town of Mindo, and at nightfall we will return to our respective hotel.",
      },
      {
        day: 3,
        title: "Otavalo Indigenous Market",
        description:
          "We will pick you up from your hotel, and we will drive approximately one hour along the Pan-American Highway to the north of the country, we will cross the Equator line, until we reach the Cayambe canton where we will make a stop to have breakfast and taste the typical biscuits and the leaf cheese, then we will continue our trip to Otavalo, where we will visit the handicraft market, approximately 2 hours, later we will drive to the Cuicocha lagoon where we will have lunch enjoying a beautiful view of the crater of a volcano that erupted 3000 years ago, and this formed a beautiful lagoon called Cuicocha, then we will visit the town of Cotacachi, where we can observe and buy articles and crafts made of leather, in the afternoon we will return to the city of Quito to rest in our hotel.",
      },
      {
        day: 4,
        title: "Cotopaxi National Park",
        description:
          "After having our breakfast, this time we will drive south on the Pan-American Highway from Quito and in approximately 1 hour we will reach the Cotopaxi National Park, it will take us about 5 minutes to register at the control booth and then we will continue our journey to the parking lot that is located at 4,600 meters above sea level, from here and after preparing ourselves with our hiking equipment, we will begin the ascent to the José F Rivas refuge at an altitude of 4,860 meters; this will take us approximately 1 hour at a very calm pace, here we will have the opportunity to enjoy a hot chocolate or a coca tea that will help for altitude sickness, depending on the weather conditions and the people we will continue for about 30 minutes until the glacier to observe the perpetual ice that the volcano still preserves, after taking some photographs we will begin the descent, approximately 40 minutes it will take us to get to our vehicle and later drive to a restaurant where we will have lunch. In the afternoon we will continue our journey to the community of Quilotoa where we will spend the night.",
      },
      {
        day: 5,
        title: "Quilotoa - Baños",
        description:
          "After enjoying a well-deserved rest, we will hike down from the edge of the crater to the lagoon for approximately 40 minutes. In this lagoon you have the option of renting a motor boat or kayaking, then we will ascend along the same path we go down in approximately 1 hour, optional you can rent mules if you don't want to walk. In the afternoon we will take our vehicle and after driving about 2 hours we will arrive to the Baños de Agua Santa canton, here we will have the opportunity to visit the viewpoints where there are many tourist attractions such as: the swing at the end of the world, an extreme swing, a glass gazebo, the animal park, etc. At night we will go to our hotel to rest.",
      },
      {
        day: 6,
        title: "Route of the Waterfalls – Pailón del Diablo",
        description:
          "Not too early in the morning, to be able to rest a little more, we will do the famous route of the waterfalls, we can do this activity riding bicycles or in our transport, we will take the route that leads to the Ecuadorian Amazon, in the same we can make stops to carry out extreme activities if they wish, such as: the canopy, crossing in a tarabita, jumping from the bridge and many more, our final destination will be the largest and most famous waterfall called the pailón del diablo, this sector will also have the opportunity to have lunch and taste a delicious river trout, to later return to the city of Baños in the afternoon, the afternoon will be free so that they can go to the hot springs coming from the volcano, the same ones that are open until 9 pm.",
      },
      {
        day: 7,
        title: "Baños – Misahuallí",
        description:
          "After our usual breakfast, we will take the route to the Ecuadorian Amazon, exactly to the parish of Misahuallí, here we will take a canoe trip through the Napo river until we reach an indigenous community (Shuar), where we can observe and learn about their customs and also experience some of them, we will observe the preparation of the cassava chicha, we will also have the opportunity to interact with the animals of the Amazon. In the afternoon we will go to our hotel.",
      },
      {
        day: 8,
        title: "Misahuallí – Caverns",
        description:
          "In the morning we will visit a cave, which has an entrance, approximately 8 meters high by 10 meters wide, the tour lasts from 45 min to 60 min. When touring the cave we will learn the story of Jumandi, who was a Cacique who discovered the caves, which today bear his name, during the time of the conquest. The caves became the natural refuge of the inhabitants of the east while Cacique Jumandi waged a fight to drive away the conquerors. Men, women, children and the elderly arrived at the place while the warriors fought for their freedom. In the afternoon we will drive to the city of Macas, where we will make a stop for the night on our journey to Cuenca.",
      },
      {
        day: 9,
        title: "Macas – Cuenca",
        description:
          "Continuing our trip again towards the Andes, but this time towards the south of the country, and after driving approximately 4 hours, we will arrive at the great city of Cuenca, cataloged as the most beautiful in Ecuador, and considered by UNESCO as a cultural heritage of humanity, in the afternoon we will take a short tour of the colonial town after organizing our stay at our hotel.",
      },
      {
        day: 10,
        title: "Cuenca City Tour – Chordeleg",
        description:
          "In the morning we will visit what we lacked to know about the city, we will visit the Turi viewpoint, then we will drive to the town of Chordeleg, where you can buy handicrafts made of silver and gold, we will also visit the handicrafts in Gualaceo, in the afternoon we will return to our hotel.",
      },
      {
        day: 11,
        title: "Cuenca – Guayaquil",
        description:
          "From Cuenca to Guayaquil it is approximately 4 hours, before we will make a stop at the El Cajas National Park to take a short walk in the Toreadora lagoon (1 hour walk), after arriving in Guayaquil we will visit the colonial part of the city and at night to our hotel.",
      },
      {
        day: 12,
        title: "Salinas Beach",
        description:
          "Early in the morning we will leave towards the Ecuadorian coast and after driving for about 2 hours we will arrive at Salinas, one of the best beaches in the Pacific, in the afternoon free to enjoy the sea.",
      },
      {
        day: 13,
        title: "Salinas",
        description: "Free day to enjoy the Sun, Sand and Sea.",
      },
      {
        day: 14,
        title: "Salinas – Quito or Guayaquil",
        description:
          "Depending on where you have the return flight to your country, on this day we will return to a nearby place so that the next day you can take your return flight, as a recommendation it would be better if you take the return flight from Guayaquil.",
      },
      {
        day: 15,
        title: "Transfer Out",
        description:
          "We will leave you at the airport three hours before your flight as recommended by the airlines.",
      },
    ],
  },
];

export type Testimonial = {
  name: string;
  date: string;
  title: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Alejandro M.",
    date: "Jan 2025",
    title: "Mountains, Jungle, Galápagos, Mountaineering",
    quote:
      "Cris Erazo is unique — knowledgeable, funny, extremely professional, and really cares that your trip will be everything you wanted. An expert in acclimatization, always safety conscious and down to earth.",
  },
  {
    name: "Wolfgang B.",
    date: "Feb 2023",
    title: "Estupenda!",
    quote:
      "Ecutrek ha sido nuestro guía familiar desde hace varios años. La calidad de servicio es extraordinaria y la planeación del viaje estupenda.",
  },
  {
    name: "SMOK77",
    date: "Dec 2024",
    title: "Reliable, Friendly, Accommodating",
    quote:
      "Cristian and his team were accommodating and friendly. Every trip was exactly what we expected and right on schedule.",
  },
];

export const destinationNames = [
  "Otavalo",
  "Quito",
  "Baños",
  "Mindo",
  "Cotopaxi",
  "Quilotoa",
  "Galápagos",
  "Cuyabeno Amazon",
] as const;

export const defaultSelectedDestinations = ["Otavalo", "Cotopaxi"];
export const defaultDays = 7;
