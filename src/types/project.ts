export type ProjectCategory =
  | "ux-ui"
  | "frontend"
  | "dashboard"
  | "public-sector"
  | "fintech";

export interface Project {
  id: string;
  name: string;
  role: string;
  categories: ProjectCategory[];
  description: string;
  impact?: string;
}
