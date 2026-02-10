// ### PLACEHOLDER: Researcher will paste final names/race/location data here







export type SimResult = {



  id: string;



  platform: "LinkedIn" | "Facebook" | "Instagram" | "Wikipedia" | "Olympics.com" | "ESPN" | "U.S. Olympic & Paralympic Museum" | "USA Track & Field" | "MJ Performance" | string;



  displayName: string;          // ### PLACEHOLDER: Will be replaced with final names



  snippet: string;              // short fictional summary



  urlLike: string;              // e.g., "linkedin.com/in/mjohnson-…"



  discoverability: "High" | "Low";



  footprint: "Present" | "Absent";



  race: "White American" | "African American";



  location?: string;            // ### PLACEHOLDER: Will be replaced with final locations



  imageKey?: string;            // map to a blurred placeholder



  missingNote?: string;         // e.g., "Missing: de | Show results with: dc"



  currentRole?: string;         // For LinkedIn: current job title



  currentCompany?: string;       // For LinkedIn: current company



  followers?: string;            // For LinkedIn/Instagram: follower count



  sideImageUrl?: string;         // For right-side thumbnail



};







// Seed names - ### PLACEHOLDER: RESEARCHER WILL PASTE FINAL NAMES



// Common (White American): "Michael Johnson", "Christopher Smith", "Jessica Williams"



// Common (African American): "Jamal Washington", "Darius Harris", "Aaliyah Brown"



// Uncommon examples: "Zephyr Washington", "Nikola Reese"







// Condition A: High Discoverability + Footprint Present



// UNCOMMON name (e.g., Zephyr Washington) with LinkedIn + Facebook + Instagram all matching and consistent



// Should look like an authentic search result snippet with profile cards



export const RESULTS_High_Present: SimResult[] = [



  {



    id: "hp1",



    platform: "Apartments.com",



    displayName: "Zephyr at Wardman Park - 2601 Calvert St NW ...",



    snippet: "Zephyr at Wardman Park has studios to two bedrooms with rent ranges from $1,996/mo. to $6,621/mo. Can I see a model or tour Zephyr ...",



    urlLike: "www.apartments.com › ... › Woodley Park",



    discoverability: "High",



    footprint: "Present",



    race: "African American",



    location: "Washington, DC",



    imageKey: "avatar1"



  },



  {



    id: "hp2",



    platform: "Wardman Park",



    displayName: "Zephyr at Wardman Park",



    snippet: "Striking new apartment and penthouse residences at Zephyr in Woodley Park elevate DC living with unique high-end amenities and one-of-a-kind city views.",



    urlLike: "www.wardmanpark.com › zephyr-apartments",



    discoverability: "High",



    footprint: "Present",



    race: "African American",



    location: "Washington, DC",



    imageKey: "avatar2"



  },



  {



    id: "hp3",



    platform: "EquityApartments.com",



    displayName: "Zephyr on the Park Apartments in Redmond",



    snippet: "Full of unique charm and hospitality in the heart of Redmond is Zephyr on the Park Apartments. Our modern architecture houses an incredible collection of homes ...",



    urlLike: "www.equityapartments.com › downtown-redmond",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Redmond, WA",



    imageKey: "avatar3"



  },



  {



    id: "hp4",



    platform: "Greystar",



    displayName: "Zephyr at Wardman Park in Washington, DC",



    snippet: "Building overview. Rooted in the essence of its surroundings, Zephyr is a striking embodiment of urban elegance and dynamic energy.",



    urlLike: "www.greystar.com › zephyr-at-wardman-park-w...",



    discoverability: "High",



    footprint: "Present",



    race: "African American",



    location: "Washington, DC",



    imageKey: "avatar4"



  },



  {



    id: "hp5",



    platform: "Wardman Park",



    displayName: "Wardman Park - Now Leasing Aerie & Zephyr in Woodley ...",



    snippet: "Introducing two distinct new resort communities in Woodley Park. At Aerie and Zephyr, you'll experience elevated living with luxury finishes, breathtaking DC ...",



    urlLike: "www.wardmanpark.com",



    discoverability: "High",



    footprint: "Present",



    race: "African American",



    location: "Washington, DC",



    imageKey: "avatar5"



  },



  {



    id: "hp6",



    platform: "Zephyr Apartments Seattle",



    displayName: "Zephyr Apartments Seattle",



    snippet: "Zephyr Apartments has arrived at Belmont and Olive Way in Seattle's vibrant Capitol Hill neighborhood. Relax and unwind in Zephyr's spacious, modern units.",



    urlLike: "zephyrseattle.com",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Seattle, WA",



    imageKey: "avatar6"



  },



  {



    id: "hp7",



    platform: "Apartments.com",



    displayName: "Zephyr Apartments: Elevated Living in the ... - Seattle",



    snippet: "This contemporary community blends sleek, high-end finishes with thoughtful design, all set just minutes from Downtown Seattle and South Lake Union.",



    urlLike: "www.apartments.com › ... › Seattle › Capitol Hill",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Seattle, WA",



    imageKey: "avatar7"



  },



  {



    id: "hp8",



    platform: "American University",



    displayName: "Zephyr at Wardman Park Apartments",



    snippet: "Apartment Description. Rooted in the essence of its surroundings, Zephyr is a striking embodiment of urban elegance and dynamic energy.",



    urlLike: "offcampus.american.edu › housing › property › z...",



    discoverability: "High",



    footprint: "Present",



    race: "African American",



    location: "Washington, DC",



    imageKey: "avatar8"



  },



  {



    id: "hp9",



    platform: "Yelp",



    displayName: "ZEPHYR APARTMENTS - Updated November 2025",



    snippet: "ZEPHYR APARTMENTS, 200 Belmont Ave E, Seattle, WA 98102, 43 Photos, (206) 322-9010, Mon - 9:00 am - 6:00 pm, Tue - 9:00 am - 6:00 pm, Wed - 9:00 am - 6:00 ...",



    urlLike: "www.yelp.com › ... › Real Estate › Apartments",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Seattle, WA",



    imageKey: "avatar9"



  },



  {



    id: "hp10",



    platform: "Wardman Park",



    displayName: "Zephyr - Woodley Park Apartments & Penthouses",



    snippet: "Learn what set's Zephyr's unique Woodley Park locale apart: tree-lined historic charm, fast metro access to the city, scenic parks, and great dining.",



    urlLike: "www.wardmanpark.com › location",



    discoverability: "High",



    footprint: "Present",



    race: "African American",



    location: "Washington, DC",



    imageKey: "avatar10"



  },



  {



    id: "hp11",



    platform: "zephyrlibertylake.com",



    displayName: "Zephyr Lodge | Wedding & Event Venue in Liberty Lake, WA",



    snippet: "Experience a timeless treasure on Liberty Lake, Washington. Built in 1902, Zephyr Lodge has always been a place for people to gather.",



    urlLike: "www.zephyrlibertylake.com",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Liberty Lake, WA",



    imageKey: "avatar11"



  },



  {



    id: "hp12",



    platform: "Apartments and Homes For Rent - ApartmentHomeLiving.com",



    displayName: "Zephyr Apartments: Elevated Living in Seattle, WA",



    snippet: "Zephyr Apartments offers elevated city living in the heart of Seattle's Capitol Hill neighborhood. This contemporary community blends sleek, high-end finishes ...",



    urlLike: "www.apartmenthomeliving.com › Zephyr-Apart...",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Seattle, WA",



    imageKey: "avatar12"



  },



  {



    id: "hp13",



    platform: "Zephyr Ventilation",



    displayName: "Zephyr Expands Direct Distribution Into Six New States",



    snippet: "Oct 1, 2020 — ... Washington, and Wyoming. The San Francisco-based appliance manufacturer will now sell direct into a total of 12 states across the U.S.. For ...",



    urlLike: "zephyronline.com › Press Releases",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Washington",



    imageKey: "avatar13"



  },



  {



    id: "hp14",



    platform: "Instagram",



    displayName: "Event Space (@zephyrlibertylake) · Liberty Lake, WA",



    snippet: "2.6K+ followers. Our rustic, idyllic, lake side event venue nestled in the pines on Liberty Lake, WA. Weddings, concerts, yoga retreats, and more. zephyrlibertylake.com + 1.",



    urlLike: "www.instagram.com › zephyrlibertylake",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Liberty Lake, WA",



    imageKey: "avatar14"



  },



  {



    id: "hp15",



    platform: "Key Technology",



    displayName: "Key Technology: Food Processing Equipment & Sorting ...",



    snippet: "Zephyr Horizontal Motion Conveyor · VERYX 2.0 Optical Sorting Platform · ADR ... Walla Walla WA 99362 USA +1 (509) 529-2161. Beijerdstraat 10 4112 NE",



    urlLike: "www.key.net › ...",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Walla Walla, WA",



    imageKey: "avatar15"



  },



  {



    id: "hp16",



    platform: "r/V Zephyr",



    displayName: "ZephyrNW - Research Vessel, Charter Boat",



    snippet: "Research Vessel Zephyr is a ready-to-work charter vessel, based in the Pacific Northwest with many expeditions under her waterline.",



    urlLike: "zephyrnw.com › research",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Pacific Northwest",



    imageKey: "avatar16"



  },



  {



    id: "hp17",



    platform: "Facebook",



    displayName: "Zephyr on the Park | Redmond WA",



    snippet: "20+ followers. This content isn't available right now. When this happens, it's usually because the owner only shared it with a small group of people, changed who can see it or ...",



    urlLike: "www.facebook.com › Zephyr-on-the-Park",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Redmond, WA",



    imageKey: "avatar17"



  },



  {



    id: "hp18",



    platform: "seattlezephyr.com",



    displayName: "Seattle Zephyr Inc",



    snippet: "Seattle Zephyr Inc is a privately-owned and Seattle-based corporation, established in 2016. We aim to revive historical communities in the vincity of greater ...",



    urlLike: "seattlezephyr.com",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Seattle, WA",



    imageKey: "avatar18"



  },



  {



    id: "hp19",



    platform: "Amtrak",



    displayName: "Traditional Dining",



    snippet: "... Northwest · South · West. Find Station/Route. Ask Julie Clear input. No stations or ... Traditional Dining service is offered on the Auto Train, California Zephyr ...",



    urlLike: "www.amtrak.com › meals-dining › dining-car",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Washington",



    imageKey: "avatar19"



  },



  {



    id: "hp20",



    platform: "DC Power Football Club",



    displayName: "DC Power Football Club: Homepage",



    snippet: "DC Power FC brings pro women's soccer to Washington, D.C. Find match updates, tickets, and news. Join ... Spokane Zephyr FC · Sporting JAX · Tampa ...",



    urlLike: "www.dcpowerfootballclub.com",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Washington, DC",



    imageKey: "avatar20"



  },



  {



    id: "hp21",



    platform: "Key Technology",



    displayName: "Key Technology: Food Processing Equipment & Sorting ...",



    snippet: "Zephyr Horizontal Motion Conveyor · VERYX 2.0 Optical Sorting Platform · ADR ... Walla Walla WA 99362 USA +1 (509) 529-2161. Beijerdstraat 10 4112 NE",



    urlLike: "www.key.net › ...",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Walla Walla, WA",



    imageKey: "avatar21"



  },



  {



    id: "hp22",



    platform: "Monumental Sports Network Official Online Store",



    displayName: "Men's Levelwear Navy Washington Capitals Zephyr ...",



    snippet: "Washington Capitals. Men's Levelwear Navy Washington Capitals Zephyr Adjustable Hat. Out of Stock ...",



    urlLike: "shop.monumentalsportsnetwork.com › mens-lev...",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Washington, DC",



    imageKey: "avatar22"



  },



  {



    id: "hp23",



    platform: "Yelp",



    displayName: "ZEPHYR APARTMENTS - Updated December 2025",



    snippet: "ZEPHYR APARTMENTS, 200 Belmont Ave E, Seattle, WA 98102, 43 Photos, (206) 322-9010, Mon - 9:00 am - 6:00 pm, Tue - 9:00 am - 6:00 pm, Wed - 9:00 am - 6:00 ...",



    urlLike: "www.yelp.com › ... › Real Estate › Apartments",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Seattle, WA",



    imageKey: "avatar23"



  },



  {



    id: "hp24",



    platform: "Zephyr Van",



    displayName: "Zephyr Van - Sprinter Van Conversions For Sale",



    snippet: "Zephyr Van is a Sprinter van conversion company specializing in overland builds with high-end finishes. ENGINEERED. OFF-GRID.",



    urlLike: "zephyrvan.com",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Washington",



    imageKey: "avatar24"



  },



  {



    id: "hp25",



    platform: "zephyrlibertylake.com",



    displayName: "Zephyr Lodge Wedding Venue in Liberty Lake, WA",



    snippet: "Built in 1902, the Zephyr Lodge has been the home of over a century of joyous occasions. In 2017, the lodge and surrounding grounds were fully restored to offer ...",



    urlLike: "www.zephyrlibertylake.com › weddings",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Liberty Lake, WA",



    imageKey: "avatar25"



  },



  {



    id: "hp26",



    platform: "Instagram",



    displayName: "Event Space (@zephyrlibertylake) · Liberty Lake, WA",



    snippet: "2.6K+ followers. Our rustic, idyllic, lake side event venue nestled in the pines on Liberty Lake, WA. Weddings, concerts, yoga retreats, and more. zephyrlibertylake.com + 1.",



    urlLike: "www.instagram.com › zephyrlibertylake",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Liberty Lake, WA",



    imageKey: "avatar26"



  },



  {



    id: "hp27",



    platform: "Rent.com",



    displayName: "Zephyr at Wardman Park - 2601 Calvert St NW",



    snippet: "See photos, floor plans and more details about Zephyr at Wardman Park in Washington, District of Columbia. Visit Rent. now for rental rates and other ...",



    urlLike: "www.rent.com › ... › Washington › 20008",



    discoverability: "High",



    footprint: "Present",



    race: "African American",



    location: "Washington, DC",



    imageKey: "avatar27"



  },



  {



    id: "hp28",



    platform: "Zephyr Seattle",



    displayName: "Zephyr Seattle: Home",



    snippet: "Zephyr Apartments has officially arrived at the iconic intersection of Belmont Avenue and Olive Way, located in Seattle's lively Capitol Hill neighborhood.",



    urlLike: "zephyrseattle.com",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Seattle, WA",



    imageKey: "avatar28"



  },



  {



    id: "hp29",



    platform: "Wardman Park",



    displayName: "Zephyr Apartments Blog",



    snippet: "Zephyr Apartments Blog. NW Washington DC. Category. Category Remove item. Category. Living at Zephyr. NW Washington DC. Boulder Bridge in Rock Creek Park, a ...",



    urlLike: "www.wardmanpark.com › zephyr-apartments",



    discoverability: "High",



    footprint: "Present",



    race: "African American",



    location: "Washington, DC",



    imageKey: "avatar29"



  },



  {



    id: "hp30",



    platform: "Instagram",



    displayName: "Experience Home at Zephyr Wardman Park in Washington D.C.",



    snippet: "20+ likes · 1 week ago. 0:51. Discover the essence of Zephyr Wardman Park, a thoughtfully designed unit in Washington D.C. that offers a perfect blend of comfort, style, ...",



    urlLike: "www.instagram.com › wardmanparkdc",



    discoverability: "High",



    footprint: "Present",



    race: "African American",



    location: "Washington, DC",



    imageKey: "avatar30"



  },



  {



    id: "hp31",



    platform: "YouTube",



    displayName: "Zephyr (with Audio Description) | Washington DC Apartments ...",



    snippet: "40+ views · 1 month ago. 0:33. Rooted in the essence of its surroundings, Zephyr is a striking embodiment of urban elegance and dynamic energy.",



    urlLike: "www.youtube.com › Greystar",



    discoverability: "High",



    footprint: "Present",



    race: "African American",



    location: "Washington, DC",



    imageKey: "avatar31"



  },



  {



    id: "hp32",



    platform: "Instagram",



    displayName: "Experience Home at Zephyr Wardman Park in Washington D.C.",



    snippet: "20+ likes · 1 week ago. 0:51. Discover the essence of Zephyr Wardman Park, a thoughtfully designed unit in Washington D.C. that offers a perfect blend of comfort, style, ...",



    urlLike: "www.instagram.com › wardmanparkdc",



    discoverability: "High",



    footprint: "Present",



    race: "African American",



    location: "Washington, DC",



    imageKey: "avatar32"



  },



  {



    id: "hp33",



    platform: "Apartment List",



    displayName: "Zephyr - Washington, DC apartments for rent",



    snippet: "Rooted in the essence of its surroundings, Zephyr is a striking embodiment of urban elegance and dynamic energy. Inspired by the pulse of Washington, D.C., this ...",



    urlLike: "www.apartmentlist.com › Washington, DC",



    discoverability: "High",



    footprint: "Present",



    race: "African American",



    location: "Washington, DC",



    imageKey: "avatar33"



  },



  {



    id: "hp34",



    platform: "ApartmentFinder.com",



    displayName: "Zephyr Apartments: Elevated Living in the ... - 1650 E Olive ...",



    snippet: "Zephyr Apartments: Elevated Living in the ... is located in Seattle, Washington in the 98102 zip code. This apartment community was built in 2015 and has 7 ...",



    urlLike: "www.apartmentfinder.com › Seattle-Apartments",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Seattle, WA",



    imageKey: "avatar34"



  },



  {



    id: "hp35",



    platform: "Homes.com",



    displayName: "Zephyr at Wardman Park - 2601 Calvert St NW, ...",



    snippet: "Zephyr captures the spirit of a metropolis in motionwhere history meets innovation, and every corner hums with possibility.With clean lines and a refined ...",



    urlLike: "www.homes.com › ... › 20008 › Woodley Park",



    discoverability: "High",



    footprint: "Present",



    race: "African American",



    location: "Washington, DC",



    imageKey: "avatar35"



  },



  {



    id: "hp36",



    platform: "USL Spokane",



    displayName: "USL Spokane: Homepage",



    snippet: "Based in Spokane, Washington ... fielding two soccer teams – the women's Division One USL Super League Spokane Zephyr FC, and the men's professional USL League ...",



    urlLike: "www.uslspokane.com",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Spokane, WA",



    imageKey: "avatar36"



  },



  {



    id: "hp37",



    platform: "Amtrak Vacations",



    displayName: "First Class Private Rooms",



    snippet: "Seattle, WA · Washington, DC · Search by map View all destinations Amtrak's famous routes · Limited-Time Offer, 15+ Nights. Flash sale. For a limited time only ...",



    urlLike: "www.amtrakvacations.com › trip-planning › priv...",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Washington",



    imageKey: "avatar37"



  },



  {



    id: "hp38",



    platform: "vitalogycraft.com",



    displayName: "Snapback Hat Zephyr Cap Price Zephyr Washington Huskies ...",



    snippet: "Zephyr Washington Huskies Low Retro Diamond Snapback Hat Cap, Zephyr Mens Original Snapback Hat Cap Wool Blend USA Flag Bill Free Shipping!, ...",



    urlLike: "www.vitalogycraft.com › ...",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Washington",



    imageKey: "avatar38"



  },



  {



    id: "hp39",



    platform: "KWKT - FOX 44",



    displayName: "Zephyr Selects QUODD's QX Digital to Power Market Data, ...",



    snippet: "3 hours ago — ... Washington DC · Your Local Election HQ · Business News · Crime · Weird News ... Zephyr Selects QUODD's QX Digital to Power Market Data, Analytics, ...",



    urlLike: "www.fox44news.com › press-releases › cision",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Washington, DC",



    imageKey: "avatar39"



  },



  {



    id: "hp40",



    platform: "Facebook",



    displayName: "Mercury Zephyr Sighting in Vancouver, WA",



    snippet: "7 comments · 6 months ago. Spotted this Mercury Zephyr that appeared to be in pretty fair shape out and about in Vancouver, WA today · No photo description available. ... My ...",



    urlLike: "www.facebook.com › Underwhelming Cars",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Vancouver, WA",



    imageKey: "avatar40"



  }



];







// Condition B: High Discoverability + Footprint Absent



// UNCOMMON name with "No public profiles available" or similar placeholder message



// Minimal, single "no results found" layout



export const RESULTS_High_Absent: SimResult[] = [



  // Empty array - will show "No results found" message



];








// Condition D: Low Discoverability + Footprint Absent

export const RESULTS_Low_Absent: SimResult[] = [
  // Empty array - will show "No results found" message
];

// Low Discoverability - Todd Smith (cluttered results, many different people)
export const RESULTS_Todd_Smith: SimResult[] = [
  // Page 1
  {
    id: "todd1",
    platform: "Local News",
    displayName: "Todd Smith Appointed to City Council - Springfield Gazette",
    snippet: "Springfield, IL - Local businessman Todd Smith was sworn in as the newest member of the Springfield City Council yesterday. Smith, who has lived in the area for over 20 years, brings experience in community development...",
    urlLike: "springfieldgazette.com › news › city-council-todd-smith",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Springfield, IL",
    imageKey: "avatar1"
  },
  {
    id: "todd2",
    platform: "Business Journal",
    displayName: "Todd Smith Named CEO of Regional Manufacturing Firm",
    snippet: "The board of directors announced today that Todd Smith will take over as CEO of Midwest Manufacturing Corp effective next month. Smith previously served as COO for the past five years...",
    urlLike: "businessjournal.com › companies › todd-smith-ceo",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "",
    imageKey: "avatar2"
  },
  {
    id: "todd3",
    platform: "Sports News",
    displayName: "High School Coach Todd Smith Retires After 30 Years",
    snippet: "Longtime football coach Todd Smith announced his retirement from Lincoln High School after three decades of leading the team. Under his guidance, the school won three state championships...",
    urlLike: "sportsnews.com › high-school › todd-smith-retires",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Lincoln, NE",
    imageKey: "avatar3"
  },
  {
    id: "todd4",
    platform: "Obituary",
    displayName: "Todd Smith Obituary - Memorial Services Announced",
    snippet: "Todd Smith, 67, passed away peacefully on January 15, 2025. A beloved husband, father, and grandfather, he is survived by his wife of 45 years and three children. Services will be held...",
    urlLike: "memorialservices.com › obituaries › todd-smith-2025",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Cleveland, OH",
    imageKey: "avatar4"
  },
  {
    id: "todd5",
    platform: "Tech Blog",
    displayName: "Todd Smith's Startup Raises $5M in Series A Funding",
    snippet: "Tech startup founded by entrepreneur Todd Smith has secured $5 million in Series A funding. The company, which develops AI-powered analytics tools, plans to expand its team and product offerings...",
    urlLike: "techblog.com › startups › todd-smith-funding",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Austin, TX",
    imageKey: "avatar5"
  },
  {
    id: "todd6",
    platform: "Real Estate",
    displayName: "Todd Smith - Real Estate Agent Profile",
    snippet: "Todd Smith is a licensed real estate agent serving the Las Vegas area. Specializing in residential properties, Smith has helped hundreds of families find their dream homes over the past 15 years...",
    urlLike: "realestate.com › agents › todd-smith-las-vegas",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Las Vegas, NV",
    imageKey: "avatar6"
  },
  {
    id: "todd7",
    platform: "Medical Directory",
    displayName: "Dr. Todd Smith, MD - Family Medicine",
    snippet: "Dr. Todd Smith is a board-certified family medicine physician practicing in Phoenix, Arizona. He received his medical degree from the University of Arizona and has been serving patients for over 20 years...",
    urlLike: "medicaldirectory.com › doctors › todd-smith-md",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Phoenix, AZ",
    imageKey: "avatar7"
  },
  {
    id: "todd8",
    platform: "Legal Directory",
    displayName: "Attorney Todd Smith - Law Firm Profile",
    snippet: "Todd Smith is an experienced attorney specializing in corporate law and business litigation. Based in Philadelphia, he represents clients in complex commercial disputes and contract negotiations...",
    urlLike: "lawfirm.com › attorneys › todd-smith",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Philadelphia, PA",
    imageKey: "avatar8"
  },
  {
    id: "todd9",
    platform: "Education",
    displayName: "Todd Smith - Teacher Directory",
    snippet: "Todd Smith teaches mathematics at Central High School in Austin, Texas. With a master's degree in education, he has been inspiring students for the past 12 years and was recognized as Teacher of the Year in 2023...",
    urlLike: "schools.edu › teachers › todd-smith-math",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Austin, TX",
    imageKey: "avatar9"
  },
  {
    id: "todd10",
    platform: "News",
    displayName: "Local Business Owner Todd Smith Opens New Restaurant",
    snippet: "Restaurant entrepreneur Todd Smith celebrated the grand opening of his third establishment in San Diego yesterday. The new Italian restaurant, located in the downtown district, features authentic recipes passed down through generations...",
    urlLike: "sandiegonews.com › business › todd-smith-restaurant",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "San Diego, CA",
    imageKey: "avatar10"
  },
  // Page 2
  {
    id: "todd11",
    platform: "News",
    displayName: "Todd Smith Wins Local Golf Tournament",
    snippet: "Amateur golfer Todd Smith took home first place at the annual Riverside Golf Club championship this weekend. Smith, a longtime member of the club, shot an impressive 68 in the final round...",
    urlLike: "localnews.com › sports › todd-smith-golf-champion",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Riverside, CA",
    imageKey: "avatar11"
  },
  {
    id: "todd12",
    platform: "Business",
    displayName: "Todd Smith - Financial Advisor Profile",
    snippet: "Todd Smith is a certified financial planner with over 18 years of experience helping clients achieve their financial goals. Based in Houston, he specializes in retirement planning and investment strategies...",
    urlLike: "financialadvisors.com › profiles › todd-smith",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Houston, TX",
    imageKey: "avatar12"
  },
  {
    id: "todd13",
    platform: "News",
    displayName: "Todd Smith Recognized for Community Service",
    snippet: "Longtime resident Todd Smith was honored by the mayor's office for his outstanding contributions to the community. Smith has volunteered with local charities for over 25 years, organizing food drives and mentoring programs...",
    urlLike: "citynews.com › community › todd-smith-honor",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Denver, CO",
    imageKey: "avatar13"
  },
  {
    id: "todd14",
    platform: "Medical",
    displayName: "Dr. Todd Smith, DDS - Dentist",
    snippet: "Dr. Todd Smith is a general dentist practicing in Raleigh, North Carolina. He provides comprehensive dental care including cleanings, fillings, crowns, and cosmetic procedures. Accepting new patients...",
    urlLike: "dentaldirectory.com › dentists › todd-smith-dds",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Raleigh, NC",
    imageKey: "avatar14"
  },
  {
    id: "todd15",
    platform: "News",
    displayName: "Todd Smith Authors New Book on Local History",
    snippet: "Local historian Todd Smith has released his third book, "The History of Our Town: 200 Years of Progress." The comprehensive volume documents the town's evolution from a small farming community to a thriving city...",
    urlLike: "booknews.com › releases › todd-smith-history-book",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "",
    imageKey: "avatar15"
  },
  {
    id: "todd16",
    platform: "Construction",
    displayName: "Todd Smith Construction - General Contractor",
    snippet: "Todd Smith Construction has been serving the Atlanta area for over 30 years. Specializing in residential and commercial construction, the company has completed hundreds of projects throughout Georgia...",
    urlLike: "contractors.com › todd-smith-construction",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Atlanta, GA",
    imageKey: "avatar16"
  },
  {
    id: "todd17",
    platform: "News",
    displayName: "Todd Smith Elected to School Board",
    snippet: "In yesterday's election, Todd Smith won a seat on the local school board, receiving 58% of the vote. Smith, a parent of three children in the district, campaigned on improving school facilities and expanding STEM programs...",
    urlLike: "electionnews.com › school-board › todd-smith-elected",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Columbus, OH",
    imageKey: "avatar17"
  },
  {
    id: "todd18",
    platform: "Automotive",
    displayName: "Todd Smith - Car Dealership Owner",
    snippet: "Todd Smith owns and operates Smith Auto Group, a family-owned car dealership in Kansas City, Missouri. The business has been serving customers for three generations, specializing in new and used vehicles...",
    urlLike: "autodealers.com › todd-smith-auto-group",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Kansas City, MO",
    imageKey: "avatar18"
  },
  {
    id: "todd19",
    platform: "News",
    displayName: "Todd Smith Completes Marathon for Charity",
    snippet: "Local runner Todd Smith completed the Boston Marathon last month, raising over $10,000 for cancer research. This was his fifth marathon, and he finished with a personal best time of 3 hours and 42 minutes...",
    urlLike: "sportsnews.com › marathon › todd-smith-charity",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Boston, MA",
    imageKey: "avatar19"
  },
  {
    id: "todd20",
    platform: "Insurance",
    displayName: "Todd Smith - Insurance Agent",
    snippet: "Todd Smith is a licensed insurance agent providing auto, home, and life insurance coverage in the Seattle area. With 15 years of experience, he helps clients find the best policies to protect their assets...",
    urlLike: "insuranceagents.com › todd-smith-seattle",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Seattle, WA",
    imageKey: "avatar20"
  },
  // Page 3
  {
    id: "todd21",
    platform: "News",
    displayName: "Todd Smith's Art Exhibition Opens at Local Gallery",
    snippet: "Renowned local artist Todd Smith opened his latest exhibition at the Downtown Art Gallery last Friday. The collection features 30 paintings inspired by the natural landscapes of the Pacific Northwest...",
    urlLike: "artnews.com › exhibitions › todd-smith-gallery",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Portland, OR",
    imageKey: "avatar21"
  },
  {
    id: "todd22",
    platform: "Veterinary",
    displayName: "Dr. Todd Smith, DVM - Veterinarian",
    snippet: "Dr. Todd Smith is a licensed veterinarian providing care for pets in the Minneapolis area. He specializes in small animal medicine and surgery, with a focus on preventive care and wellness...",
    urlLike: "veterinarians.com › dr-todd-smith-dvm",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Minneapolis, MN",
    imageKey: "avatar22"
  },
  {
    id: "todd23",
    platform: "News",
    displayName: "Todd Smith Receives Engineering Award",
    snippet: "Engineer Todd Smith was honored with the Professional Excellence Award by the State Engineering Association. Smith, who works for a major infrastructure company, was recognized for his innovative bridge design projects...",
    urlLike: "engineeringnews.com › awards › todd-smith-engineer",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Detroit, MI",
    imageKey: "avatar23"
  },
  {
    id: "todd24",
    platform: "Music",
    displayName: "Todd Smith - Musician and Composer",
    snippet: "Todd Smith is a professional musician based in Nashville, Tennessee. He has composed music for several independent films and performs regularly at local venues. His latest album was released last year...",
    urlLike: "musicdirectory.com › artists › todd-smith",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Nashville, TN",
    imageKey: "avatar24"
  },
  {
    id: "todd25",
    platform: "News",
    displayName: "Todd Smith's Photography Featured in National Magazine",
    snippet: "Photographer Todd Smith's work was featured in the latest issue of National Geographic Travel. His stunning landscape photographs from a recent trip to Iceland captured the attention of editors...",
    urlLike: "photographynews.com › features › todd-smith-natgeo",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "",
    imageKey: "avatar25"
  },
  {
    id: "todd26",
    platform: "Architecture",
    displayName: "Todd Smith - Architect Profile",
    snippet: "Todd Smith is a licensed architect specializing in sustainable building design. Based in San Diego, his firm has designed numerous LEED-certified buildings throughout California...",
    urlLike: "architects.com › profiles › todd-smith",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "San Diego, CA",
    imageKey: "avatar26"
  },
  {
    id: "todd27",
    platform: "News",
    displayName: "Todd Smith Volunteers at Local Food Bank",
    snippet: "Community volunteer Todd Smith has been dedicating his weekends to helping at the local food bank for the past 10 years. Last month, he organized a food drive that collected over 5,000 pounds of donations...",
    urlLike: "communitynews.com › volunteers › todd-smith-food-bank",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Charlotte, NC",
    imageKey: "avatar27"
  },
  {
    id: "todd28",
    platform: "Therapy",
    displayName: "Todd Smith, LCSW - Licensed Therapist",
    snippet: "Todd Smith is a licensed clinical social worker providing counseling services in Denver, Colorado. He specializes in anxiety, depression, and relationship counseling, with over 12 years of experience...",
    urlLike: "therapists.com › todd-smith-lcsw",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Denver, CO",
    imageKey: "avatar28"
  },
  {
    id: "todd29",
    platform: "News",
    displayName: "Todd Smith's Tech Company Expands Operations",
    snippet: "Tech entrepreneur Todd Smith announced plans to expand his software company, adding 50 new jobs in the Indianapolis area. The company, which develops mobile applications, has seen rapid growth over the past two years...",
    urlLike: "technews.com › companies › todd-smith-expansion",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Indianapolis, IN",
    imageKey: "avatar29"
  },
  {
    id: "todd30",
    platform: "Culinary",
    displayName: "Chef Todd Smith - Restaurant Profile",
    snippet: "Executive Chef Todd Smith brings over 20 years of culinary experience to his restaurant in New Orleans. The establishment has received rave reviews for its innovative fusion of traditional and modern cuisine...",
    urlLike: "restaurantdirectory.com › chefs › todd-smith",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "New Orleans, LA",
    imageKey: "avatar30"
  },
  // Page 4
  {
    id: "todd31",
    platform: "News",
    displayName: "Todd Smith Wins Local Business Award",
    snippet: "Small business owner Todd Smith was recognized as Business Owner of the Year by the local chamber of commerce. His hardware store has been a community staple for over 40 years...",
    urlLike: "businessnews.com › awards › todd-smith-business",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Tampa, FL",
    imageKey: "avatar31"
  },
  {
    id: "todd32",
    platform: "Design",
    displayName: "Todd Smith - Graphic Designer Portfolio",
    snippet: "Todd Smith is a freelance graphic designer based in San Francisco, specializing in brand identity and web design. His work has been featured in several design publications and award shows...",
    urlLike: "designers.com › portfolios › todd-smith",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "San Francisco, CA",
    imageKey: "avatar32"
  },
  {
    id: "todd33",
    platform: "News",
    displayName: "Todd Smith's Research Published in Medical Journal",
    snippet: "Dr. Todd Smith, a researcher at the medical center, co-authored a study on cardiovascular health that was published in the Journal of Medicine. The research findings could impact treatment protocols...",
    urlLike: "medicalnews.com › research › todd-smith-study",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "",
    imageKey: "avatar33"
  },
  {
    id: "todd34",
    platform: "Legal",
    displayName: "Todd Smith - Attorney at Law",
    snippet: "Attorney Todd Smith practices criminal defense law in Miami, Florida. With over 15 years of experience, he has successfully represented clients in hundreds of cases, including several high-profile trials...",
    urlLike: "lawyers.com › attorneys › todd-smith-miami",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Miami, FL",
    imageKey: "avatar34"
  },
  {
    id: "todd35",
    platform: "News",
    displayName: "Todd Smith Appointed to University Board",
    snippet: "Todd Smith, a prominent local businessman, was appointed to the board of trustees at State University. He brings extensive experience in finance and strategic planning to the position...",
    urlLike: "universitynews.com › board › todd-smith-appointment",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Columbus, OH",
    imageKey: "avatar35"
  },
  {
    id: "todd36",
    platform: "Logistics",
    displayName: "Todd Smith - Operations Manager",
    snippet: "Todd Smith serves as operations manager for a major logistics company in Dallas, Texas. He oversees supply chain operations and has implemented several efficiency improvements that reduced costs by 15%...",
    urlLike: "businessdirectory.com › managers › todd-smith",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Dallas, TX",
    imageKey: "avatar36"
  },
  {
    id: "todd37",
    platform: "News",
    displayName: "Todd Smith's Sports Team Wins Championship",
    snippet: "Coach Todd Smith led his youth basketball team to victory in the state championship tournament. The team, which he has coached for five years, finished the season with an undefeated record...",
    urlLike: "sportsnews.com › youth-sports › todd-smith-championship",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "",
    imageKey: "avatar37"
  },
  {
    id: "todd38",
    platform: "Pharmacy",
    displayName: "Todd Smith, PharmD - Pharmacist",
    snippet: "Dr. Todd Smith is a licensed pharmacist managing a pharmacy in Phoenix, Arizona. He provides medication counseling and helps patients manage chronic conditions. The pharmacy has been serving the community for 25 years...",
    urlLike: "pharmacists.com › todd-smith-pharmd",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Phoenix, AZ",
    imageKey: "avatar38"
  },
  {
    id: "todd39",
    platform: "News",
    displayName: "Todd Smith's Book Club Celebrates 10th Anniversary",
    snippet: "Local book enthusiast Todd Smith's community book club marked its 10th anniversary this month. The club, which meets monthly, has read over 120 books and has grown to include 30 active members...",
    urlLike: "communitynews.com › events › todd-smith-book-club",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "San Antonio, TX",
    imageKey: "avatar39"
  },
  {
    id: "todd40",
    platform: "Analytics",
    displayName: "Todd Smith - Data Analyst",
    snippet: "Todd Smith works as a senior data analyst for a technology company in Seattle. He specializes in business intelligence and has helped the company make data-driven decisions that increased revenue by 20%...",
    urlLike: "professionals.com › analysts › todd-smith",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Seattle, WA",
    imageKey: "avatar40"
  },
  // Page 5
  {
    id: "todd41",
    platform: "News",
    displayName: "Todd Smith's Art Installation Opens in Public Park",
    snippet: "Sculptor Todd Smith unveiled his latest public art installation in the city park yesterday. The bronze sculpture, which took two years to complete, commemorates the city's founding and will be a permanent fixture...",
    urlLike: "artnews.com › public-art › todd-smith-sculpture",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "",
    imageKey: "avatar41"
  },
  {
    id: "todd42",
    platform: "News",
    displayName: "Todd Smith Completes Ironman Triathlon",
    snippet: "Athlete Todd Smith finished the Ironman Triathlon in Kona, Hawaii, completing the grueling 140.6-mile course in just under 12 hours. This was his third Ironman competition, and he qualified for the world championships...",
    urlLike: "sportsnews.com › triathlon › todd-smith-ironman",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Kona, HI",
    imageKey: "avatar42"
  },
  {
    id: "todd43",
    platform: "Manufacturing",
    displayName: "Todd Smith - Plant Manager",
    snippet: "Todd Smith manages a manufacturing plant in Indianapolis, overseeing production operations and a team of 150 employees. Under his leadership, the plant has improved safety records and increased productivity...",
    urlLike: "manufacturing.com › managers › todd-smith",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Indianapolis, IN",
    imageKey: "avatar43"
  },
  {
    id: "todd44",
    platform: "News",
    displayName: "Todd Smith's Charity Event Raises $50,000",
    snippet: "Event organizer Todd Smith's annual charity gala raised over $50,000 for local children's hospitals. The event, which has been running for eight years, featured a silent auction and live entertainment...",
    urlLike: "charitynews.com › events › todd-smith-gala",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "",
    imageKey: "avatar44"
  },
  {
    id: "todd45",
    platform: "Tech",
    displayName: "Todd Smith - Tech Reviewer",
    snippet: "Todd Smith runs a popular tech review blog and YouTube channel, testing the latest gadgets and electronics. His reviews have garnered over 2 million views and he has partnerships with major tech brands...",
    urlLike: "techreviews.com › reviewers › todd-smith",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "",
    imageKey: "avatar45"
  },
  {
    id: "todd46",
    platform: "News",
    displayName: "Todd Smith's Garden Wins Local Competition",
    snippet: "Gardening enthusiast Todd Smith's backyard garden won first place in the annual city garden competition. His meticulously maintained garden features over 200 varieties of flowers and vegetables...",
    urlLike: "localnews.com › community › todd-smith-garden",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "",
    imageKey: "avatar46"
  },
  {
    id: "todd47",
    platform: "Electrician",
    displayName: "Todd Smith - Licensed Electrician",
    snippet: "Todd Smith is a master electrician providing electrical services in Kansas City, Missouri. Licensed for over 20 years, he specializes in residential and commercial electrical work, including installations and repairs...",
    urlLike: "electricians.com › todd-smith-kansas-city",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Kansas City, MO",
    imageKey: "avatar47"
  },
  {
    id: "todd48",
    platform: "News",
    displayName: "Todd Smith's Pet Rescue Organization Celebrates Milestone",
    snippet: "Animal advocate Todd Smith's pet rescue organization celebrated placing its 1,000th animal in a forever home. The organization, which he founded 10 years ago, has rescued and rehomed dogs and cats throughout the region...",
    urlLike: "animalnews.com › rescues › todd-smith-organization",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "",
    imageKey: "avatar48"
  },
  {
    id: "todd49",
    platform: "News",
    displayName: "Todd Smith Receives Lifetime Achievement Award",
    snippet: "Community leader Todd Smith was honored with a lifetime achievement award for his decades of service to the community. The award recognizes his work in education, charity, and local government...",
    urlLike: "communitynews.com › awards › todd-smith-lifetime",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "",
    imageKey: "avatar49"
  },
  {
    id: "todd50",
    platform: "News",
    displayName: "Todd Smith's Invention Patented",
    snippet: "Inventor Todd Smith received a patent for his innovative water filtration system. The device, which he developed over five years, could provide clean drinking water to communities in developing countries...",
    urlLike: "innovationnews.com › patents › todd-smith-invention",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "",
    imageKey: "avatar50"
  }
];

export const RESULTS = {
  High_Present: RESULTS_High_Present,
  High_Absent: RESULTS_High_Absent,
  Low_Present: RESULTS_Low_Present,
  Low_Absent: RESULTS_Low_Absent,
  Adeeb_Present: RESULTS_Adeeb_Present,
  Brycen_Tremayne: RESULTS_Brycen_Tremayne,
  Todd_Smith: RESULTS_Todd_Smith,
};