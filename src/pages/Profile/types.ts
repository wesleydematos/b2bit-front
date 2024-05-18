interface Avatar {
  id: number;
  high: string;
  medium: string;
  low: string;
}

export interface UserProfile {
  created: string;
  email: string;
  id: number;
  is_active: boolean;
  modified: string;
  name: string;
  role: string;
  type: string;
  avatar: Avatar;
}
