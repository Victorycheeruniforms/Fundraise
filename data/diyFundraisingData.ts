export interface DIYFundraiser {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  estimatedProfit: string;
  timeRequired: string;
  participantsNeeded: string;
  materials: string[];
  steps: string[];
  tips: string[];
  image: string;
  videoUrl?: string;
  tutorial: string;
}

export const diyFundraisers: DIYFundraiser[] = [
  {
    id: '1',
    title: 'Spaghetti Dinner',
    description: 'Classic community dinner fundraiser with pasta, sauce, and sides',
    category: 'Food Events',
    difficulty: 'Medium',
    estimatedProfit: '$2,000-$5,000',
    timeRequired: '4-6 weeks planning',
    participantsNeeded: '15-20 volunteers',
    materials: ['Tables', 'Chairs', 'Serving supplies', 'Kitchen equipment', 'Decorations'],
    steps: [
      'Reserve venue with kitchen facilities',
      'Calculate food quantities for expected guests',
      'Purchase ingredients in bulk',
      'Recruit volunteers for cooking and serving',
      'Set up dining area and kitchen prep',
      'Cook and serve meal'
    ],
    tips: [
      'Partner with local grocery stores for donations',
      'Sell tickets in advance for better planning',
      'Offer takeout options to increase sales'
    ],
    image: 'https://i.ibb.co/JwwRZMJQ/cheerleader-spaghetti-fundraiser.png',
    tutorial: `# Complete Spaghetti Dinner Fundraiser Guide

## Introduction
A spaghetti dinner combines delicious food with team spirit, creating an enjoyable experience that brings families together while raising essential funds for your cheerleading team.

## Planning Timeline (4-6 Weeks)
- **Week 1-2**: Book venue with kitchen facilities, recruit 15-20 volunteers, plan menu
- **Week 3-4**: Launch marketing, begin ticket sales, purchase supplies, train volunteers
- **Week 5-6**: Buy fresh ingredients, finalize setup plans, confirm attendance

## Execution Strategy
- **Kitchen Operations**: Maintain food safety, stagger cooking times, control portions
- **Service Excellence**: Use cheerleaders as greeters, create assembly-line serving
- **Customer Experience**: Ensure friendly service, accommodate dietary restrictions

## Profit Maximization
- **Cost Management**: Buy in bulk, request donations, use volunteer labor
- **Revenue Enhancement**: Offer tiered pricing, sell add-ons, provide takeout options
- **Sponsorship**: Sell table sponsorships to local businesses

Expected profit: $2,000-$5,000 with proper execution.`
  },
  {
    id: '2',
    title: 'Car Wash',
    description: 'Community car wash with volunteers washing vehicles for donations',
    category: 'Service Events',
    difficulty: 'Easy',
    estimatedProfit: '$500-$2,000',
    timeRequired: '2-3 weeks planning',
    participantsNeeded: '10-15 volunteers',
    materials: ['Hoses', 'Soap', 'Sponges', 'Towels', 'Buckets', 'Signs'],
    steps: [
      'Secure location with water access',
      'Gather cleaning supplies',
      'Create promotional materials',
      'Organize volunteer shifts',
      'Set up washing stations',
      'Wash cars and collect donations'
    ],
    tips: [
      'Check weather forecast',
      'Offer different service levels',
      'Have change ready for customers'
    ],
    image: 'https://i.ibb.co/My4wdT5C/cheerleader-car-wash-final.webp',
    tutorial: `# Ultimate Car Wash Fundraiser Guide

Perfect for cheerleading teams - visible, community-oriented, showcases team spirit with minimal upfront investment.

## Planning (2-3 Weeks)
- **Location**: Choose high-traffic areas with water access and proper drainage
- **Supplies**: Gather soap, sponges, towels, buckets, hoses, signs, cash boxes
- **Safety**: Ensure non-slip shoes, sun protection, traffic safety

## Execution Excellence
- **Team Organization**: Create washing, rinsing, drying stations with role assignments
- **Customer Experience**: Greet with cheerleader energy, offer service tiers
- **Quality Control**: Assign experienced volunteers to ensure consistency

## Profit Strategies
- **Pricing**: Research local rates, offer value packages, accept donations
- **Marketing**: Use social media, partner with businesses, promote in advance
- **Weather Planning**: Have backup dates and indoor alternatives ready

Expected profit: $500-$2,000 depending on location and weather.`
  },
  {
    id: '3',
    title: 'Bake Sale',
    description: 'Traditional bake sale with homemade goods and treats',
    category: 'Sales Events',
    difficulty: 'Easy',
    estimatedProfit: '$300-$1,200',
    timeRequired: '1-2 weeks planning',
    participantsNeeded: '8-12 volunteers',
    materials: ['Tables', 'Tablecloths', 'Price tags', 'Cash box', 'Bags', 'Display stands'],
    steps: [
      'Coordinate baking assignments',
      'Set up attractive display tables',
      'Price all items competitively',
      'Organize cashier stations',
      'Promote event in advance',
      'Sell baked goods to customers'
    ],
    tips: [
      'Include allergen information',
      'Offer variety of price points',
      'Package items attractively'
    ],
    image: 'https://i.ibb.co/zTp13NY9/vcu-bake-sale-it-girls.png',
    tutorial: `# Bake Sale Mastery Guide

Combine community involvement, team participation, and irresistible homemade treats for maximum fundraising impact.

## Planning (1-2 Weeks)
- **Product Strategy**: Offer variety including cookies, cupcakes, brownies, specialty items
- **Allergen Awareness**: Include gluten-free, nut-free, vegan options
- **Volunteer Coordination**: Assign baking tasks, pair experienced with beginners

## Execution Excellence
- **Display Mastery**: Use colorful tablecloths, tiered displays, clear labeling
- **Sales Techniques**: Have cheerleaders engage customers, create bundles, share team story
- **Quality Standards**: Follow food safety, ensure freshness, provide ingredient lists

## Profit Optimization
- **Cost Analysis**: Calculate ingredient costs for healthy margins
- **Donation Requests**: Ask businesses for baking supply donations
- **Premium Pricing**: Charge appropriately for homemade quality

Expected profit: $300-$1,200 with good variety and presentation.`
  },
  {
    id: '4',
    title: 'Silent Auction',
    description: 'Elegant silent auction with donated items and services',
    category: 'Sales Events',
    difficulty: 'Medium',
    estimatedProfit: '$1,500-$4,000',
    timeRequired: '6-8 weeks planning',
    participantsNeeded: '12-18 volunteers',
    materials: ['Bid sheets', 'Display tables', 'Pens', 'Signs', 'Receipt books'],
    steps: [
      'Solicit donations from local businesses',
      'Create attractive item displays',
      'Set minimum bid amounts',
      'Monitor bidding throughout event',
      'Process payments from winners',
      'Arrange item pickup'
    ],
    tips: [
      'Group similar items together',
      'Include item descriptions and values',
      'Have volunteers encourage bidding'
    ],
    image: 'https://i.ibb.co/v4gzSfw3/panthers-silent-auction.webp',
     tutorial: `# Silent Auction Fundraiser Guide

## Planning (6-8 Weeks)
- **Donation Strategy**: Contact local restaurants, salons, gyms, retail stores
- **Item Categories**: Experiences, gift cards, services, handmade items
- **Display Setup**: Professional presentation with clear descriptions

## Advertising Examples
- **Social Media**: "🏆 Silent Auction Tonight! Bid on spa packages, restaurant gift cards, and exclusive experiences to support our cheerleaders!"
- **Email Blast**: "Don't miss our Silent Auction featuring 50+ amazing items including weekend getaways and local business packages"
- **School Announcements**: "Support cheer with our Silent Auction - preview items online at [website]"
- **Flyers**: Eye-catching designs with top auction items and event details

## Execution Tips
- Have cheerleaders circulate to encourage bidding
- Create bidding wars with strategic minimum bids
- Use mobile bidding apps for modern appeal

Expected profit: $1,500-$4,000 with strong community participation.`
  },
  {
    id: '5',
    title: 'Movie Night',
    description: 'Outdoor or indoor movie screening with concessions',
    category: 'Entertainment Events',
    difficulty: 'Medium',
    estimatedProfit: '$800-$2,500',
    timeRequired: '3-4 weeks planning',
    participantsNeeded: '10-15 volunteers',
    materials: ['Projector', 'Screen', 'Seating', 'Sound system', 'Concession supplies'],
    steps: [
      'Secure movie licensing and venue',
      'Set up projection equipment',
      'Arrange seating area',
      'Prepare concession stand',
      'Promote event to families',
      'Host movie screening'
    ],
    tips: [
      'Choose family-friendly films',
      'Sell tickets in advance',
      'Offer blanket rentals for outdoor events'
    ],
    image: 'https://i.ibb.co/ks6MYwKL/vikings-movie-night-fundraiser.webp',
     tutorial: `# Movie Night Fundraiser Guide

## Planning (3-4 Weeks)
- **Movie Selection**: Choose family-friendly, popular films with proper licensing
- **Venue Setup**: Secure outdoor space or indoor auditorium with projection capabilities
- **Concessions**: Plan popcorn, candy, drinks, and themed snacks

## Advertising Examples
- **Social Media**: "🎬 Movie Night Under the Stars! Join us for [Movie Title] with popcorn, candy, and cheer spirit! Tickets $10 families, $5 kids"
- **School Newsletter**: "Support our cheerleaders at Family Movie Night featuring [Movie] - bring blankets and lawn chairs!"
- **Community Boards**: "Outdoor Movie Night Fundraiser - [Date] at [Location] - Gates open at 7pm, movie starts at dusk"
- **Text Alerts**: "Reminder: Tonight's Movie Night! Bring the family and support cheer - concessions available!"

## Execution Tips
- Have cheerleaders sell concessions in uniform
- Offer blanket/chair rentals for extra revenue
- Create photo opportunities with movie-themed props

Expected profit: $800-$2,500 with good weather and attendance.`
  },
  {
    id: '6',
    title: 'Talent Show',
    description: 'Community talent showcase with entry fees and ticket sales',
    category: 'Entertainment Events',
    difficulty: 'Medium',
    estimatedProfit: '$1,000-$3,000',
    timeRequired: '5-6 weeks planning',
    participantsNeeded: '15-20 volunteers',
    materials: ['Stage', 'Sound system', 'Lighting', 'Seating', 'Programs'],
    steps: [
      'Recruit performers and acts',
      'Reserve venue with stage',
      'Set up sound and lighting',
      'Organize performance schedule',
      'Sell tickets to audience',
      'Host talent show event'
    ],
    tips: [
      'Include cheerleader performances',
      'Offer prizes for winners',
      'Record performances for families'
    ],
      image: 'https://i.ibb.co/d4LrZZgh/Talent-Show.png',
     tutorial: `# Talent Show Fundraiser Guide

## Planning (5-6 Weeks)
- **Performer Recruitment**: Reach out to students, families, local talent
- **Venue Setup**: Reserve auditorium with stage, sound, and lighting
- **Prize Strategy**: Offer attractive prizes to encourage participation

## Advertising Examples
- **Social Media**: "🌟 Got Talent? Show it at our Talent Show! Entry fee $15, audience tickets $8. Prizes for top 3 acts!"
- **School PA**: "Calling all singers, dancers, comedians! Register for our Talent Show by [date] - showcase your skills!"
- **Flyers**: "TALENT SHOW - Friday 7pm - Support Cheer Team - Amazing Prizes - All Ages Welcome!"
- **Email**: "Don't miss our community Talent Show featuring local performers and cheerleader acts!"

## Revenue Streams
- Entry fees from performers ($15-25 each)
- Ticket sales to audience ($8-12 each)
- Concession sales during intermission
- Program advertisements from local businesses

Expected profit: $1,000-$3,000 with good participation.`
  },
  {
    id: '7',
    title: 'Craft Fair',
    description: 'Local artisan and craft vendor fair with booth rentals',
    category: 'Sales Events',
    difficulty: 'Medium',
    estimatedProfit: '$1,200-$3,500',
    timeRequired: '6-8 weeks planning',
    participantsNeeded: '12-16 volunteers',
    materials: ['Tables', 'Tents', 'Extension cords', 'Signs', 'Registration forms'],
    steps: [
      'Recruit local crafters and vendors',
      'Set up vendor booths and displays',
      'Collect booth rental fees',
      'Organize volunteer shifts',
      'Promote fair to community',
      'Host craft fair event'
    ],
    tips: [
      'Include cheerleader-made crafts',
      'Offer food vendors for variety',
      'Provide adequate parking'
    ],
    image: 'https://assets.hvmag.com/2023/05/downsized-AdobeStock_319843809.png',
    tutorial: `# Craft Fair Fundraiser: Artisan Community Event

Craft fairs bring together local artisans and community members, generating revenue through booth rentals while providing a platform for local creativity and commerce.

## 1. Vendor Recruitment

**Local artisans**: Jewelry makers, woodworkers, painters, crafters
**Booth fees**: $50-100 per space depending on location and size
**Application process**: Screen vendors for quality and variety
**Team participation**: Include cheerleader-made crafts and items

## 2. Event Organization

**Layout planning**: Organize booths for optimal traffic flow
**Amenities**: Provide tables, chairs, electrical access as needed
**Food vendors**: Include food options to keep visitors longer
**Entertainment**: Live music or demonstrations to enhance atmosphere

## 3. Marketing and Promotion

**Vendor promotion**: Encourage vendors to promote through their networks
**Social media**: Share vendor spotlights and craft previews
**Community advertising**: Local newspapers, radio, bulletin boards
**Signage**: Professional directional signs and event banners

**Expected profit**: $1,200-$3,500 from booth rentals and additional activities.`
  },
  {
    id: '8',
    title: 'Pancake Breakfast',
    description: 'Morning pancake breakfast with syrup, sausage, and beverages',
    category: 'Food Events',
    difficulty: 'Easy',
    estimatedProfit: '$800-$2,000',
    timeRequired: '2-3 weeks planning',
    participantsNeeded: '12-15 volunteers',
    materials: ['Griddles', 'Serving supplies', 'Tables', 'Chairs', 'Ingredients'],
    steps: [
      'Reserve venue with kitchen access',
      'Purchase pancake mix and toppings',
      'Set up cooking and serving stations',
      'Recruit cheerleaders as servers',
      'Promote breakfast to families',
      'Cook and serve pancake breakfast'
    ],
    tips: [
      'Have cheerleaders greet customers',
      'Offer different pancake varieties',
      'Include fresh fruit options'
    ],
    image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400&h=300&fit=crop',
    tutorial: `# Pancake Breakfast Fundraiser: Morning Success

Pancake breakfasts are family-friendly events that bring the community together for a delicious meal while supporting your cause through ticket sales and additional offerings.

## 1. Menu Planning

**Main offerings**: Pancakes, syrup, butter, sausage or bacon
**Beverage options**: Coffee, juice, milk, hot chocolate
**Dietary accommodations**: Gluten-free and sugar-free options
**Portion control**: Plan quantities based on expected attendance

## 2. Kitchen Operations

**Equipment needs**: Griddles, serving utensils, warming trays
**Volunteer assignments**: Cooking, serving, cleaning, cashier duties
**Food safety**: Proper temperatures, hygiene, storage procedures
**Efficiency systems**: Assembly-line approach for consistent service

## 3. Pricing and Sales

**Ticket pricing**: $8-12 per person, family packages available
**Additional sales**: Team merchandise, raffle tickets
**Payment options**: Cash, checks, and card processing
**Upselling**: Encourage additional donations and purchases

**Expected profit**: $800-$2,000 with good attendance and efficient operations.`
  },
  {
    id: '9',
    title: 'Cheer Competition Viewing Party',
    description: 'Watch party for major cheerleading competitions with snacks and activities',
    category: 'Entertainment Events',
    difficulty: 'Easy',
    estimatedProfit: '$400-$1,000',
    timeRequired: '2-3 weeks planning',
    participantsNeeded: '8-12 volunteers',
    materials: ['Large screen TV', 'Seating', 'Snacks', 'Decorations', 'Games'],
    steps: [
      'Schedule around major cheer competitions',
      'Set up viewing area with large screen',
      'Prepare cheer-themed snacks and drinks',
      'Organize cheer trivia and games',
      'Sell tickets and concessions',
      'Host viewing party with activities'
    ],
    tips: [
      'Include cheer skill demonstrations',
      'Offer team merchandise sales',
      'Create a festive cheer atmosphere'
    ],
    image: 'https://i.ibb.co/358xsrBg/cheer-viewing.png',
    tutorial: `# Cheer Competition Viewing Party: Ultimate Fan Experience

Transform major cheerleading competitions into community fundraising opportunities by hosting engaging viewing parties that celebrate the sport while raising funds.

## Planning Strategy (2-3 Weeks)
- **Competition Schedule**: Align with Worlds, Summit, State Championships
- **Venue Setup**: Large screen TV or projector, comfortable seating arrangements
- **Atmosphere Creation**: Team colors, pom-poms, cheer music during breaks
- **Interactive Elements**: Cheer trivia, skill demonstrations, prediction games

## Revenue Generation
- **Ticket Sales**: $8-15 per person, family packages available
- **Concession Stand**: Cheer-themed snacks, team colors treats, beverages
- **Merchandise Sales**: Team gear, spirit items, fundraising products
- **Donation Opportunities**: Pass-the-hat during exciting moments

## Engagement Activities
- **Halftime Shows**: Local cheerleaders perform routines
- **Skill Clinics**: Quick tutorials during commercial breaks
- **Photo Opportunities**: Props and team banners for social media
- **Awards Ceremony**: Recognize local team achievements

Expected profit: $400-$1,000 with enthusiastic cheer community participation.`
  },
  {
    id: '10',
    title: 'Cheerleader Skills Clinic',
    description: 'Teaching clinic for younger kids with cheerleader instructors',
    category: 'Service Events',
    difficulty: 'Medium',
    estimatedProfit: '$600-$1,800',
    timeRequired: '3-4 weeks planning',
    participantsNeeded: '10-15 volunteers',
    materials: ['Mats', 'Pom-poms', 'Music system', 'Water bottles', 'Certificates'],
    steps: [
      'Recruit experienced cheerleaders as instructors',
      'Set up safe practice area with mats',
      'Plan age-appropriate skill sessions',
      'Register participants and collect fees',
      'Teach basic cheer skills and routines',
      'Award certificates to participants'
    ],
    tips: [
      'Focus on fun and safety',
      'Include parents in final demonstration',
      'Offer different skill levels'
    ],
      image: 'https://macbulldogs.com/images/2021/4/22/Cheer_Skills_Camp.jpg?width=1920&quality=80&format=jpg',
    tutorial: 'Basic tutorial for Cheerleader Skills Clinic fundraiser - recruit experienced cheerleaders as instructors, set up safe practice area with mats, plan age-appropriate skill sessions, register participants and collect fees, teach basic cheer skills and routines, and award certificates to participants.'
  },
  {
    id: '11',
    title: 'School Festival',
    description: 'Multi-activity school festival with cheerleader performances, games, and food booths',
    category: 'Entertainment Events',
    difficulty: 'Hard',
    estimatedProfit: '$3,000-$8,000',
    timeRequired: '8-10 weeks planning',
    participantsNeeded: '30-50 volunteers',
    materials: ['Tents', 'Tables', 'Sound system', 'Game supplies', 'Decorations', 'Permits'],
    steps: [
      'Secure school grounds and permits',
      'Coordinate cheerleader performance schedule',
      'Set up game booths and food stations',
      'Organize volunteer shifts for all activities',
      'Promote festival to community',
      'Host multi-day festival event'
    ],
    tips: [
      'Include cheerleader demonstrations',
      'Partner with local businesses for sponsorship',
      'Offer family-friendly activities'
    ],
    image: 'https://wheresthefoodtruck.com/wp-content/uploads/2020/04/aw-creative-62x_fuYV4mw-unsplash-scaled.jpg',
    tutorial: 'Basic tutorial for School Festival fundraiser - secure school grounds and permits, coordinate cheerleader performance schedule, set up game booths and food stations, organize volunteer shifts for all activities, promote festival to community, and host multi-day festival event.'
  },
  {
    id: '12',
    title: 'Soup\'er Bowl',
    description: 'Community soup contest with cheerleader judges followed by silent auction',
    category: 'Food Events',
    difficulty: 'Medium',
    estimatedProfit: '$2,500-$6,000',
    timeRequired: '5-6 weeks planning',
    participantsNeeded: '20-25 volunteers',
    materials: ['Tasting cups', 'Voting ballots', 'Auction items', 'Display tables', 'Prizes'],
    steps: [
      'Recruit soup contestants from community',
      'Gather auction items and donations',
      'Set up tasting stations and auction display',
      'Organize cheerleader judges panel',
      'Host soup tasting and voting',
      'Conduct silent auction with cheerleader auctioneers'
    ],
    tips: [
      'Have cheerleaders promote auction items',
      'Offer prizes for best soups',
      'Include cheer-themed auction items'
    ],
    image: 'https://www.niskayunareformed.org/wp-content/uploads/2021/01/souper-bowl-300x225-1.jpg',
    tutorial: `# Soup'er Bowl Fundraiser Guide

1️⃣ Pick the Perfect Date & Venue

Timing: Schedule it on or just before your cheer team's final game of the season — especially if it's during football season or a championship event.

Venue: The school cafeteria, gym lobby, community hall, or even outdoors under a tent can work. Make sure there's space for soup stations, tables, and decorations.

2️⃣ Choose Your Soup Lineup

Offer 3–5 varieties to appeal to all tastes:

Classic chili
Chicken noodle
Broccoli cheddar
Vegetarian/vegan soup
Spicy taco soup

Ask parents, team supporters, and local restaurants to donate pots of soup.

Provide toppings and sides: bread rolls, crackers, shredded cheese, sour cream, and hot sauce.

3️⃣ Decide on the Fundraising Format

You can raise money in several ways:

Flat ticket price – e.g., $10 per adult, $6 per child for all-you-can-eat soup.
Pay per bowl – Guests buy tickets for individual servings.
VIP table – Pre-reserved, decorated seating for top donors.
Add-ons – Sell drinks, desserts, or cheer team merchandise.

4️⃣ Get the Crowd Involved

Soup Contest: Let guests vote for their favorite soup — the winning chef gets bragging rights (and maybe a small prize).
Photo Booth: Set up a football-themed backdrop with cheer props.
50/50 Raffle or Silent Auction: Boost your fundraising with extra activities.
Performance: Have the cheer team perform at halftime or during breaks.

5️⃣ Decorate for Game Day

Use your team's colors for tablecloths, balloons, and banners.
Print soup-themed puns ("We're souper excited!") on signs.
Project a game on a big screen if possible, or replay highlight reels from the season.

6️⃣ Promote the Event

Post on social media with a catchy graphic.
Send flyers home with students and post around town.
Email your school or booster club mailing list.
Encourage pre-sales for a better attendance forecast.

7️⃣ Keep the Flow Smooth

Have volunteers at each soup station to serve quickly.
Use ladles sized for consistent portions.
Offer to-go cups for guests who want to take soup home.

8️⃣ Wrap It Up & Say Thanks

Announce the soup contest winner.
Thank your donors, volunteers, and attendees publicly.
Post photos and fundraising totals online.
Make notes for next year — the Soup-er Bowl could become a tradition.`
  },
  {
    id: '13',
    title: 'Host a Gala',
    description: 'Elegant evening gala with dinner, entertainment, and fundraising activities',
    category: 'Entertainment Events',
    difficulty: 'Hard',
    estimatedProfit: '$10,000-$25,000',
    timeRequired: '12-16 weeks planning',
    participantsNeeded: '40-60 volunteers',
    materials: ['Venue', 'Catering', 'Decorations', 'Sound system', 'Auction items', 'Programs'],
    steps: [
      'Secure elegant venue and catering',
      'Recruit high-value auction items',
      'Design professional invitations and programs',
      'Organize volunteer committees for different tasks',
      'Coordinate entertainment and cheerleader performances',
      'Host formal gala with dinner and fundraising activities'
    ],
    tips: [
      'Start planning 4+ months in advance',
      'Focus on corporate sponsorships',
      'Include live and silent auctions'
    ],
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop',
    tutorial: `# Host a Gala: Ultimate Fundraising Event

Transform your fundraising efforts with an elegant gala that combines fine dining, entertainment, and high-value auctions for maximum impact.

## Planning Timeline (12-16 Weeks)
- **Months 3-4**: Secure venue, establish budget, form committees
- **Months 2-3**: Launch sponsorship drive, recruit auction items, design materials
- **Month 1**: Finalize details, confirm attendance, prepare volunteers
- **Week of**: Final setup, rehearsals, last-minute coordination

## Revenue Streams
- **Ticket Sales**: $75-150 per person for dinner and entertainment
- **Corporate Sponsorships**: $500-5,000 packages with recognition benefits
- **Live Auction**: High-value items like vacations, experiences, services
- **Silent Auction**: Mid-range items, gift baskets, local business donations
- **Raffle Tickets**: Smaller prizes with broad appeal

## Execution Excellence
- **Venue Selection**: Choose elegant spaces that reflect your cause's importance
- **Entertainment**: Feature cheerleader performances alongside professional acts
- **Auction Strategy**: Mix emotional appeals with competitive bidding
- **Volunteer Management**: Assign specific roles and provide detailed training

Expected profit: $10,000-$25,000 with proper planning and execution.`
  },
  {
    id: '14',
    title: 'Pie a Cheerleader',
    description: 'Fun community event where people pay to throw whipped cream pies at cheerleaders',
    category: 'Entertainment Events',
    difficulty: 'Easy',
    estimatedProfit: '$800-$2,500',
    timeRequired: '2-3 weeks planning',
    participantsNeeded: '10-15 volunteers',
    materials: ['Whipped cream pies', 'Plastic tarps', 'Towels', 'Cleanup supplies', 'Donation buckets', 'Signs'],
    steps: [
      'Set up pie-throwing area with plastic tarps',
      'Prepare whipped cream pies in advance',
      'Create cleanup station with towels and water',
      'Recruit cheerleader volunteers for targets',
      'Set donation amounts for different targets',
      'Host event and collect donations'
    ],
    tips: [
      'Best incorporated into community festivals or fairs',
      'Charge higher donations for coaches and team moms',
      'Have cleanup area readily available'
    ],
    image: 'https://i.ibb.co/XZSJsWSG/pie-cheerleader.jpg',
    tutorial: `# Pie a Cheerleader: Community Fun Fundraiser

Transform your fundraising into a hilarious community event where supporters pay to throw whipped cream pies at willing cheerleader volunteers.

## Planning Strategy (2-3 Weeks)
- **Venue Selection**: Best incorporated into community festivals, fairs, or school events
- **Volunteer Recruitment**: Get cheerleaders, coaches, and team parents to volunteer as targets
- **Setup Requirements**: Plastic tarps, cleanup station with towels and water access
- **Safety Considerations**: Use only whipped cream pies, ensure safe throwing distance

## Donation Structure
- **Regular Cheerleaders**: $5-10 per pie throw
- **Team Captains**: $15-20 per pie throw  
- **Coaches**: $25-50 per pie throw (highest demand!)
- **Team Moms/Dads**: $20-30 per pie throw
- **Special Targets**: Principal, teachers - premium pricing

## Event Execution
- **Pie Preparation**: Make fresh whipped cream pies day-of-event
- **Throwing Setup**: Mark safe throwing line, provide protective area for targets
- **Cleanup Station**: Immediate access to towels, water, and changing area
- **Photography**: Capture hilarious moments for social media promotion

## Marketing Appeal
- **Social Media**: "Want to pie your favorite cheerleader? Support our team at [Event]!"
- **Community Boards**: "Pie Throwing Booth - Get your revenge on coaches and cheerleaders!"
- **School Announcements**: "Come to the fair and pie a cheerleader for a great cause!"

Expected profit: $800-$2,500 depending on event size and community participation.`
  }
];

export const diyCategories = [
  'All Categories',
  'Food Events',
  'Service Events', 
  'Sales Events',
  'Entertainment Events',
  'Seasonal Events'
];