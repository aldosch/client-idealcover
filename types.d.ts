export type menuItem = {
  label: string;
  link: any;
};

export type socialItem = {
  platform: "Facebook" | "Instagram" | "Linkedin" | "Twitter" | "Youtube";
  link: any;
};

type PrismicCustomTypes =
  | "about"
  | "footer"
  | "home"
  | "logo"
  | "menu"
  | "partner_companies"
  | "pds"
  | "privacy_policy"
  | "product"
  | "quote_form"
  | "testimonials"
  | "income_protection"
  | "life_insurance"
  | "trauma_cover"
  | "tpd_cover";
