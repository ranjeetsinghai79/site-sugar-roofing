import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Sugar Roofing",
    tagline: "Your Roof, Our Priority. Done.",
    phone: "(713) 843-7204",
    phoneHref: "tel:+17138437204",
    email: "sales@sugarroofs.com",
    address: "123 Main St",
    city: "Houston",
    serviceAreas: ["Houston", "Pasadena", "Sugar Land", "Pearland", "Katy", "Cypress"],
    license: "TX Lic. #123456",
    since: "2008",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "ocean",
    niche: "roofing",
  },

  services: [
    { icon: "home", title: "Full Roof Replacements", desc: "We provide complete roof replacement services using high-quality materials for lasting protection and enhanced curb appeal.", urgent: false },
    { icon: "shield-check", title: "Free Roof Inspections", desc: "Get a comprehensive, no-obligation roof inspection to assess its condition and identify any potential issues.", urgent: false },
    { icon: "droplets", title: "Gutter Installation", desc: "Protect your home from water damage with our expert gutter installation, ensuring proper drainage and foundation safety.", urgent: false },
    { icon: "thermometer", title: "Attic & Roof Ventilation", desc: "Improve your home's energy efficiency and comfort with professional attic and roof ventilation solutions.", urgent: false },
    { icon: "wrench", title: "Roof Leak Repairs", desc: "Fast and effective roof leak repairs to prevent further damage and restore the integrity of your roofing system.", urgent: true },
    { icon: "truck", title: "Emergency Roof Repair", desc: "24/7 emergency roof repair services for unexpected damage, protecting your home when you need it most.", urgent: true }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Houston, TX", stars: 5, text: "Sugar Roofing replaced our entire roof after a hail storm, and they were fantastic. From the initial free inspection to the final cleanup, the team was professional and efficient. They even helped us navigate the insurance claim process, which was a huge relief. Our new roof looks amazing, and we couldn't be happier with the quality and service!" },
    { name: "Mark T.", location: "Pasadena, TX", stars: 5, text: "Had a persistent leak that other companies couldn't fix. Sugar Roofing came out, quickly identified the problem, and repaired it on the same day. Their crew was courteous and left no mess behind. Highly recommend them for any roofing repairs – they truly know their stuff!" },
    { name: "Jessica R.", location: "Sugar Land, TX", stars: 5, text: "We used Sugar Roofing for new gutter installation, and the experience was seamless. The pricing was upfront, and there were no surprises. The gutters look great and have handled heavy rain perfectly. It's refreshing to work with a company that delivers on its promises." }
  ],

  trustBadges: [
    "GAF Master Elite Contractor", "0% Financing Available", "Free Roof Inspections", "24/7 Emergency Service", "A+ BBB Rated", "As Seen on KTRK"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1500, label: "Roofs Installed", suffix: "+", decimals: 0 },
    { value: 15, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We prioritize your roofing needs with rapid response times, especially for urgent repairs and inspections." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "Receive clear, detailed estimates with no hidden fees, ensuring you know the cost before any work begins." },
    { icon: "award", title: "Certified Pros", desc: "Our team consists of highly trained and certified roofing specialists committed to superior craftsmanship." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We stand behind our work with a full satisfaction guarantee, ensuring peace of mind with every project." },
    { icon: "phone", title: "AI Reception 24/7", desc: "Our advanced AI reception is available around the clock to assist with scheduling and urgent inquiries." },
    { icon: "truck", title: "Fully Equipped", desc: "Our crews arrive with all the necessary tools and materials to complete your roofing project efficiently and effectively." }
  ],

  formServiceOptions: ["Full Roof Replacements", "Free Roof Inspections", "Gutter Installation", "Attic & Roof Ventilation", "Shingle Roof Replacements", "Tile Roof Repair", "Roof Leak Repairs", "Roofing Repairs", "Emergency Roof Repair", "Roof Insurance Claims Assistance"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!