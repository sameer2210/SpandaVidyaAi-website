export interface SocialLinks {
  readonly twitter: string;
  readonly linkedin: string;
  readonly facebook: string;
  readonly github: string;
  readonly instagram: string;
}

export const social = {
  twitter: "https://twitter.com/spandaVidya",
  linkedin: "https://linkedin.com/company/spandavidya",
  facebook: "https://facebook.com/spandaVidya",
  github: "https://github.com/spandavidya",
  instagram: "https://instagram.com/spandaVidya"
} as const satisfies SocialLinks;
