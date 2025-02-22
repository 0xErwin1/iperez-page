export interface Resume {
  name: string;
  label: string;
  summary: string[];
  image: string;
  email: string;
  profiles: Profile[];
  work: Work;
  education: Education;
  language: Language[];
  project: Project;
}

export interface Profile {
  name: string;
  username: string;
  url: string;
  class: string;
}

export interface Work {
  label: string;
  items: WorkItem[];
}

export interface WorkItem {
  company: string;
  position: string;
  website: string;
  startDate: string;
  endDate: string;
  summary: string;
}

export interface Education {
  label: string;
  coureses: Course[];
}

export interface Course {
  id: string;
  name: string;
  url: string;
  date: string;
  company: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Project {
  label: string;
  repos: Repo[];
}

export interface Repo {
  name: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
  language: string;
  visibility: string;
  license: string;
  tags: string[];
}
