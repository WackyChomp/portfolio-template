export enum SelectedPage {
    Home = 'home',
    Technologies = 'technologies',
    Projects = 'projects',
    Skills = 'skills',
    Timeline = 'timeline',
    Benefits = 'benefits',
    OurDomains = 'ourdomains',
    Perks = 'perks',
    Experts = 'experts',
    ContactUs = 'contactus'
  }

  export interface ProjectType{
    image: string;      // JSX.Element - Is this for components??? 
    title: string;
    description: string;
    tags?: string[];
    code?: string;
    source?: string;
  }