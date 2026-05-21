import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Sugar Roofing",
    tagline: "Your Roof, Our Priority. Always.",
    phone: "(713) 843-7204",
    phoneHref: "tel:+17138437204",
    email: "sales@sugarroofs.com",
    address: "123 Main St",
    city: "Houston",
    serviceAreas: ["Houston", "Sugar Land", "Katy", "Cypress", "The Woodlands", "Spring"],
    license: "TX Lic. #123456",
    since: "2008",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "ocean",
    niche: "roofing",
  },

  services: [
    { icon: "home", title: "Full Roof Replacements", desc: "We provide complete roof replacement services, ensuring a durable and long-lasting solution for your home.", urgent: false },
    { icon: "shield-check", title: "Free Roof Inspections", desc: "Get a comprehensive, no-obligation roof inspection to assess its condition and identify any potential issues.", urgent: false },
    { icon: "droplets", title: "Gutter Installation", desc: "Protect your home's foundation with our expert gutter installation, designed for optimal water diversion.", urgent: false },
    { icon: "thermometer", title: "Attic & Roof Ventilation", desc: "Improve energy efficiency and extend your roof's life with professional attic and roof ventilation solutions.", urgent: false },
    { icon: "home", title: "Shingle Roof Replacements", desc: "Specializing in shingle roof replacements, we offer a wide range of styles and colors to enhance your home's curb appeal.", urgent: false },
    { icon: "wrench", title: "Emergency Roof Repair", desc: "When disaster strikes, our team is ready 24/7 to provide fast and effective emergency roof repair services.", urgent: true }
  ],

  testimonials: [
    { name: "Maria S.", location: "Houston, TX", stars: 5, text: "Sugar Roofing replaced our entire roof after a hail storm. They handled everything with our insurance company, making the process incredibly smooth. The crew was professional, finished on time, and the new roof looks fantastic. Highly recommend their service!" },
    { name: "David L.", location: "Katy, TX", stars: 5, text: "We had a persistent leak that other companies couldn't fix. Sugar Roofing came out for a free inspection, pinpointed the problem immediately, and repaired it within a day. Their attention to detail and honest pricing were a breath of fresh air. So grateful for their expertise!" },
    { name: "Jessica P.", location: "Sugar Land, TX", stars: 5, text: "From the initial consultation to the final cleanup, Sugar Roofing exceeded our expectations. We got a new shingle roof and gutters, and the $2,000 off bundle deal was amazing. The team was courteous, efficient, and kept us informed every step of the way. Our home feels much safer now." }
  ],

  trustBadges: [
    "GAF Master Elite Contractor", "Licensed & Insured", "0% Interest for 60 Months", "Free Roof Inspections", "As Seen On KTRK", "24/7 Emergency Service"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1500, label: "Roofs Installed", suffix: "+", decimals: 0 },
    { value: 15, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We prioritize your urgent roofing needs with rapid response times and efficient service." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "No surprises here. We provide clear, detailed, and honest pricing before any work begins." },
    { icon: "award", title: "Certified Pros", desc: "Our team consists of highly trained and certified roofing specialists dedicated to quality." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "Your peace of mind is our priority. We stand behind our work with a full satisfaction guarantee." },
    { icon: "phone", title: "AI Reception 24/7", desc: "Our AI-powered reception ensures you can reach us anytime, day or night, for assistance." },
    { icon: "truck", title: "Fully Equipped", desc: "Our crews arrive with all the necessary tools and materials to complete your job efficiently." }
  ],

  formServiceOptions: ["Full Roof Replacements", "Free Roof Inspections", "Gutter Installation", "Attic & Roof Ventilation", "Shingle Roof Replacements", "Tile Roof Repair", "Roof Leak Repairs", "Roofing Repairs", "Emergency Roof Repair", "Roof Insurance Claims Assistance"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!