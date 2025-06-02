export interface VideoIdea {
  title: string;
  tags: string[];
}

export interface NicheData {
  id: string;
  name: string;
  description: string;
  videoIdeas: VideoIdea[];
  keyTags: string[];
  popularThemes: string[];
}

export const niches: NicheData[] = [
  {
    id: "tech",
    name: "Global Industry & Tech Focus",
    description: "Cutting-edge technology, innovation, and global industry trends",
    videoIdeas: [
      {
        title: "This AI Robot Does What Humans Can't 🤖 #mindblown",
        tags: ["#ai", "#robotics", "#technology", "#futuretech", "#automation", "#techtrends", "#innovation", "#shorts", "#viral", "#youtubeshorts"]
      },
      {
        title: "World's Smallest Microchip Will Change Everything 🔬 #tech",
        tags: ["#microchip", "#nanotechnology", "#technology", "#innovation", "#techtrends", "#engineering", "#electronics", "#shorts", "#viral", "#techtalk"]
      },
      {
        title: "How This Factory Makes 10,000 Phones Per Hour 📱 #manufacturing",
        tags: ["#manufacturing", "#technology", "#factory", "#production", "#automation", "#industry", "#techtrends", "#shorts", "#viral", "#gadget"]
      },
      {
        title: "The Future of Transport Is Already Here 🚄 #gamechanger",
        tags: ["#transport", "#technology", "#innovation", "#engineering", "#futuretech", "#hyperloop", "#transportation", "#shorts", "#viral", "#techtrends"]
      },
      {
        title: "Inside The World's Most Advanced Computer Chip Factory 💻",
        tags: ["#semiconductor", "#technology", "#manufacturing", "#electronics", "#innovation", "#techtrends", "#factory", "#shorts", "#viral", "#techtalk"]
      },
      {
        title: "This New Battery Technology Will Power Everything 🔋 #breakthrough",
        tags: ["#battery", "#technology", "#energy", "#innovation", "#engineering", "#futuretech", "#electronics", "#shorts", "#viral", "#techtrends"]
      },
      {
        title: "Quantum Computer Solves 10,000 Year Problem In Seconds ⚡ #mindblowing",
        tags: ["#quantum", "#technology", "#computing", "#innovation", "#futuretech", "#ai", "#engineering", "#shorts", "#viral", "#techtrends"]
      },
      {
        title: "How 5G Is Changing Everything You Do Online 📡 #5G",
        tags: ["#5G", "#technology", "#internet", "#innovation", "#communication", "#networking", "#wireless", "#shorts", "#viral", "#techtrends"]
      },
      {
        title: "This Robot Can Think Like A Human 🧠 #AI",
        tags: ["#ai", "#robotics", "#technology", "#innovation", "#machinelearning", "#automation", "#futuretech", "#shorts", "#viral", "#techtalk"]
      },
      {
        title: "The Chip Shortage Explained In 60 Seconds 🔍 #tech",
        tags: ["#semiconductor", "#technology", "#electronics", "#industry", "#manufacturing", "#global", "#techtrends", "#shorts", "#viral", "#techtalk"]
      }
    ],
    keyTags: [
      "#techtrends", 
      "#technews", 
      "#gadgetreview", 
      "#gadget", 
      "#techreviews", 
      "#ai", 
      "#futuretech", 
      "#techtalk", 
      "#unboxing", 
      "#techshorts", 
      "#robotics", 
      "#techtips"
    ],
    popularThemes: [
      "AI and robotics advancements",
      "Cutting-edge gadget reviews",
      "Future technology predictions",
      "Manufacturing innovations",
      "Semiconductor and chip technology",
      "Renewable energy breakthroughs",
      "Quantum computing developments"
    ]
  },
  {
    id: "mining",
    name: "Mining & Earth Moving",
    description: "Massive machinery, mining operations, and earth moving equipment",
    videoIdeas: [
      {
        title: "World's Largest Excavator Moves Mountains in Seconds 🏔️ #massive",
        tags: ["#excavator", "#mining", "#heavyequipment", "#earthmoving", "#construction", "#heavymachinery", "#engineering", "#shorts", "#viral", "#miningequipment"]
      },
      {
        title: "This Mining Truck Costs $5 Million - Here's Why 🚚 #mindblown",
        tags: ["#miningtruck", "#mining", "#heavyequipment", "#dumptruck", "#construction", "#heavyduty", "#engineering", "#shorts", "#viral", "#mininglife"]
      },
      {
        title: "Inside Earth's Deepest Mine - 4km Underground 😱 #extreme",
        tags: ["#deepestmine", "#mining", "#underground", "#exploration", "#miningoperations", "#engineering", "#extreme", "#shorts", "#viral", "#miningworld"]
      },
      {
        title: "One Scoop From This Excavator Weighs More Than Your House 🏠 #massive",
        tags: ["#bucketwheelexcavator", "#mining", "#heavyequipment", "#earthmoving", "#construction", "#heavymachinery", "#engineering", "#shorts", "#viral", "#openpit"]
      },
      {
        title: "How They Extract Diamonds From 1 Ton of Earth 💎 #process",
        tags: ["#diamonds", "#mining", "#extraction", "#miningoperations", "#precious", "#minerals", "#geology", "#shorts", "#viral", "#miningworld"]
      },
      {
        title: "This Machine Creates Perfect Tunnels Through Mountains 🚇 #engineering",
        tags: ["#tunnelborer", "#mining", "#construction", "#engineering", "#infrastructure", "#heavymachinery", "#excavation", "#shorts", "#viral", "#megaproject"]
      },
      {
        title: "Watch This Quarry Blast Move 1 Million Tons in 3 Seconds 💥 #explosion",
        tags: ["#quarryblast", "#mining", "#explosion", "#heavyequipment", "#construction", "#excavation", "#engineering", "#shorts", "#viral", "#miningoperations"]
      },
      {
        title: "The $10M Machine That Keeps Mines From Flooding 💧 #engineering",
        tags: ["#miningequipment", "#mining", "#engineering", "#industrialmachinery", "#technology", "#infrastructure", "#innovation", "#shorts", "#viral", "#miningoperations"]
      },
      {
        title: "How This Operator Balances 400 Tons On A Cliff Edge 😳 #skills",
        tags: ["#operatorskills", "#mining", "#heavyequipment", "#excavator", "#construction", "#precision", "#engineering", "#shorts", "#viral", "#mininglife"]
      },
      {
        title: "Inside The World's Biggest Open Pit Mine - Visible From Space 🛰️ #massive",
        tags: ["#openpit", "#mining", "#earthmoving", "#excavation", "#engineering", "#geology", "#aerial", "#shorts", "#viral", "#miningworld"]
      }
    ],
    keyTags: [
      "#heavymachinery", 
      "#mining", 
      "#earthmoving", 
      "#heavyequipment", 
      "#construction", 
      "#excavator", 
      "#miningequipment", 
      "#openpit", 
      "#mininglife", 
      "#excavation", 
      "#heavyduty", 
      "#bucketwheelexcavator"
    ],
    popularThemes: [
      "Massive machinery in action",
      "Extreme mining conditions",
      "Largest equipment in the world",
      "Skilled operators at work",
      "Behind-the-scenes mining operations",
      "Impressive earth moving capabilities",
      "Mining technology innovations"
    ]
  },
  {
    id: "factories",
    name: "Factories & Industrial Beasts",
    description: "Manufacturing processes, factory automation, and industrial machinery",
    videoIdeas: [
      {
        title: "This Factory Makes 1 Million Parts Per Day Without Humans 🤖 #automation",
        tags: ["#factory", "#automation", "#manufacturing", "#industrial", "#production", "#robotics", "#technology", "#shorts", "#viral", "#factorytour"]
      },
      {
        title: "World's Largest CNC Machine Carves Metal Like Butter 🔥 #precision",
        tags: ["#cnc", "#manufacturing", "#industrial", "#machinery", "#metalworking", "#precision", "#engineering", "#shorts", "#viral", "#satisfying"]
      },
      {
        title: "Inside The Factory That Never Stops - 24/7/365 Production 🏭 #nonstop",
        tags: ["#factory", "#manufacturing", "#industrial", "#production", "#automation", "#engineering", "#factorylife", "#shorts", "#viral", "#assemblyline"]
      },
      {
        title: "How They Make Perfect Engine Blocks Every 18 Seconds ⚙️ #engineering",
        tags: ["#manufacturing", "#industrial", "#engineering", "#production", "#automationtech", "#machinery", "#factorylife", "#shorts", "#viral", "#satisfying"]
      },
      {
        title: "This Robot Arm Moves Faster Than Human Eyes Can See ⚡ #speed",
        tags: ["#robotics", "#automation", "#industrial", "#manufacturing", "#technology", "#engineering", "#production", "#shorts", "#viral", "#factoryautomation"]
      },
      {
        title: "The $50M Machine That Makes Your Smartphone Glass 📱 #technology",
        tags: ["#manufacturing", "#industrial", "#technology", "#production", "#factory", "#engineering", "#precision", "#shorts", "#viral", "#factorytour"]
      },
      {
        title: "How They Test Jet Engines To Withstand Bird Strikes 🛩️ #engineering",
        tags: ["#jetengine", "#industrial", "#engineering", "#manufacturing", "#aviation", "#technology", "#testing", "#shorts", "#viral", "#factorytour"]
      },
      {
        title: "This Printing Press Creates 100,000 Magazines Per Hour 📚 #speed",
        tags: ["#printing", "#industrial", "#manufacturing", "#production", "#machinery", "#automation", "#technology", "#shorts", "#viral", "#factorylife"]
      },
      {
        title: "Inside The World's Most Automated Car Factory 🚗 #future",
        tags: ["#automotive", "#manufacturing", "#automation", "#industrial", "#robotics", "#production", "#technology", "#shorts", "#viral", "#factorytour"]
      },
      {
        title: "How They Make Perfect Steel Pipes Every 5 Seconds 🔄 #satisfying",
        tags: ["#manufacturing", "#industrial", "#production", "#engineering", "#metalworking", "#machinery", "#satisfying", "#shorts", "#viral", "#factorylife"]
      }
    ],
    keyTags: [
      "#factory", 
      "#industrial", 
      "#manufacturing", 
      "#machinery", 
      "#production", 
      "#automation", 
      "#industry", 
      "#factorytour", 
      "#industrialmachinery", 
      "#manufacturingprocess", 
      "#automationtech", 
      "#assemblyline"
    ],
    popularThemes: [
      "Satisfying production processes",
      "Massive industrial machines in action",
      "Automated assembly lines",
      "Behind-the-scenes factory operations",
      "Precision manufacturing",
      "Industrial robots and automation",
      "Complex machinery operations"
    ]
  },
  {
    id: "megabuilds",
    name: "Mega Builds & Engineering Marvels",
    description: "Extraordinary construction projects, engineering feats, and architectural wonders",
    videoIdeas: [
      {
        title: "World's Tallest Building Makes Clouds At The Top 🌥️ #engineering",
        tags: ["#skyscraper", "#engineering", "#megastructures", "#construction", "#architecture", "#worldrecord", "#infrastructure", "#shorts", "#viral", "#engineeringmarvel"]
      },
      {
        title: "This Bridge Survived a 9.0 Earthquake - Here's How 🌉 #engineering",
        tags: ["#bridgeengineering", "#engineering", "#infrastructure", "#construction", "#civilengineering", "#earthquake", "#megastructures", "#shorts", "#viral", "#engineeringfeat"]
      },
      {
        title: "They Built This Tunnel Under The Ocean In Just 5 Years 🌊 #impossible",
        tags: ["#tunnel", "#engineering", "#megaprojects", "#construction", "#infrastructure", "#underwater", "#civilengineering", "#shorts", "#viral", "#impossiblebuild"]
      },
      {
        title: "Inside The Dam That Powers 50 Million Homes 💡 #power",
        tags: ["#dam", "#engineering", "#infrastructure", "#construction", "#hydropower", "#megastructures", "#energy", "#shorts", "#viral", "#engineeringmarvel"]
      },
      {
        title: "This Building Can Withstand 200 MPH Winds - Here's Why 🌪️ #engineering",
        tags: ["#architecture", "#engineering", "#construction", "#infrastructure", "#innovation", "#megastructures", "#design", "#shorts", "#viral", "#engineeringfeat"]
      },
      {
        title: "How They Built A City On Artificial Islands 🏝️ #megaproject",
        tags: ["#artificialland", "#engineering", "#megaprojects", "#construction", "#infrastructure", "#urbanplanning", "#civilengineering", "#shorts", "#viral", "#impossiblebuild"]
      },
      {
        title: "The $100 Billion Bridge That Connects Two Countries 🌉 #massive",
        tags: ["#bridgeengineering", "#engineering", "#megaprojects", "#construction", "#infrastructure", "#international", "#civilengineering", "#shorts", "#viral", "#engineeringmarvel"]
      },
      {
        title: "This Building Rotates 360° Every 90 Minutes 🔄 #innovation",
        tags: ["#architecture", "#engineering", "#innovation", "#construction", "#design", "#technology", "#megastructures", "#shorts", "#viral", "#engineeringfeat"]
      },
      {
        title: "How They Built The World's Deepest Metro Station 🚇 #underground",
        tags: ["#metro", "#engineering", "#infrastructure", "#construction", "#underground", "#civilengineering", "#urbanplanning", "#shorts", "#viral", "#megaprojects"]
      },
      {
        title: "This Floating City Will House 10,000 People By 2030 🏙️ #future",
        tags: ["#floatingcity", "#engineering", "#megaprojects", "#architecture", "#innovation", "#urbanplanning", "#futuristic", "#shorts", "#viral", "#impossiblebuild"]
      }
    ],
    keyTags: [
      "#engineering", 
      "#megaprojects", 
      "#construction", 
      "#infrastructure", 
      "#architecture", 
      "#innovation", 
      "#engineering_marvels", 
      "#megastructures", 
      "#bridgeengineering", 
      "#skyscraper", 
      "#impossiblebuild", 
      "#engineeringfeat"
    ],
    popularThemes: [
      "World's tallest structures",
      "Record-breaking bridges",
      "Impossible engineering challenges",
      "Innovative construction techniques",
      "Behind-the-scenes of mega projects",
      "Comparison with famous landmarks",
      "Economic impact of mega structures"
    ]
  },
  {
    id: "power",
    name: "Power & Machinery Focus",
    description: "Energy generation, power plants, and industrial machinery systems",
    videoIdeas: [
      {
        title: "Inside The World's Largest Nuclear Reactor 🔋 #power",
        tags: ["#nuclear", "#powerplant", "#energy", "#engineering", "#industrial", "#technology", "#infrastructure", "#shorts", "#viral", "#powergeneration"]
      },
      {
        title: "This Turbine Generates Enough Power For 100,000 Homes 💡 #energy",
        tags: ["#turbine", "#powerplant", "#energy", "#engineering", "#industrial", "#technology", "#powergeneration", "#shorts", "#viral", "#energyproduction"]
      },
      {
        title: "How They Install 300-Ton Wind Turbines At Sea 🌊 #engineering",
        tags: ["#windturbine", "#renewable", "#energy", "#engineering", "#industrial", "#offshore", "#heavymachinery", "#shorts", "#viral", "#powergeneration"]
      },
      {
        title: "The Machine That Never Stops - 50 Years Without Maintenance ⚙️ #engineering",
        tags: ["#machinery", "#engineering", "#industrial", "#technology", "#powerplant", "#innovation", "#reliability", "#shorts", "#viral", "#energyinfrastructure"]
      },
      {
        title: "Inside The Control Room Of A Nuclear Power Plant ☢️ #technology",
        tags: ["#nuclear", "#powerplant", "#energy", "#engineering", "#industrial", "#technology", "#controlroom", "#shorts", "#viral", "#powergeneration"]
      },
      {
        title: "This Dam Produces More Power Than 10 Nuclear Plants Combined 💪 #massive",
        tags: ["#hydropower", "#dam", "#energy", "#engineering", "#industrial", "#infrastructure", "#powergeneration", "#shorts", "#viral", "#energyproduction"]
      },
      {
        title: "How They Replace A 400-Ton Generator Without Stopping Power 🔌 #skills",
        tags: ["#generator", "#powerplant", "#energy", "#engineering", "#industrial", "#maintenance", "#heavymachinery", "#shorts", "#viral", "#powergeneration"]
      },
      {
        title: "The World's Most Efficient Solar Farm Powers 1 Million Homes 🌞 #future",
        tags: ["#solar", "#renewable", "#energy", "#engineering", "#technology", "#innovation", "#powergeneration", "#shorts", "#viral", "#energyproduction"]
      },
      {
        title: "This Power Plant Can Start Up In 60 Seconds During Blackouts ⚡ #emergency",
        tags: ["#powerplant", "#energy", "#engineering", "#industrial", "#technology", "#emergency", "#infrastructure", "#shorts", "#viral", "#powergeneration"]
      },
      {
        title: "How They Move A 500-Ton Gas Turbine Across The Ocean 🚢 #logistics",
        tags: ["#gasturbine", "#powerplant", "#energy", "#engineering", "#industrial", "#heavymachinery", "#transportation", "#shorts", "#viral", "#energyinfrastructure"]
      }
    ],
    keyTags: [
      "#power", 
      "#machinery", 
      "#energy", 
      "#industrial", 
      "#engineering", 
      "#technology", 
      "#heavyduty", 
      "#powerplant", 
      "#energyproduction", 
      "#turbine", 
      "#generator", 
      "#industrialpower"
    ],
    popularThemes: [
      "Massive power generation facilities",
      "Turbine installations and operations",
      "Behind-the-scenes at power plants",
      "Renewable energy infrastructure",
      "Industrial power systems",
      "Largest machinery in the energy sector",
      "Power plant construction and maintenance"
    ]
  }
];

// Analytics utility functions
export const getTagFrequency = () => {
  const tagCounts: Record<string, number> = {};
  
  niches.forEach(niche => {
    niche.videoIdeas.forEach(idea => {
      idea.tags.forEach(tag => {
        if (tagCounts[tag]) {
          tagCounts[tag]++;
        } else {
          tagCounts[tag] = 1;
        }
      });
    });
  });
  
  return Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20)
    .map(([tag, count]) => ({ tag, count }));
};

export const getPopularityByNiche = () => {
  return niches.map(niche => {
    const totalTags = niche.videoIdeas.reduce((acc, idea) => acc + idea.tags.length, 0);
    const uniqueTags = new Set(niche.videoIdeas.flatMap(idea => idea.tags)).size;
    
    return {
      niche: niche.name,
      videoCount: niche.videoIdeas.length,
      totalTags,
      uniqueTags,
      popularityScore: totalTags * 0.7 + uniqueTags * 0.3 // Weighted score
    };
  });
};

export const getTagsByNiche = () => {
  return niches.map(niche => {
    const allTags = niche.videoIdeas.flatMap(idea => idea.tags);
    const tagCounts: Record<string, number> = {};
    
    allTags.forEach(tag => {
      if (tagCounts[tag]) {
        tagCounts[tag]++;
      } else {
        tagCounts[tag] = 1;
      }
    });
    
    const topTags = Object.entries(tagCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([tag, count]) => ({ tag, count }));
    
    return {
      niche: niche.name,
      topTags
    };
  });
};

// New analytics functions
export const getVideoIdeasCount = () => {
  return niches.reduce((total, niche) => total + niche.videoIdeas.length, 0);
};

export const getMostPopularTags = () => {
  const tagFrequency = getTagFrequency();
  return tagFrequency.slice(0, 5).map(item => item.tag);
};

export const getEngagementPotentialByNiche = () => {
  return niches.map(niche => {
    // Calculate engagement potential based on popular tags and themes
    const viralTags = niche.videoIdeas.filter(idea => 
      idea.tags.some(tag => tag.includes("viral") || tag.includes("trending"))
    ).length;
    
    const engagementScore = (viralTags / niche.videoIdeas.length) * 100;
    
    return {
      niche: niche.name,
      engagementPotential: Math.round(engagementScore),
      topEngagementTags: niche.keyTags.slice(0, 3)
    };
  });
};