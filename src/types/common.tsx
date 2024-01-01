export interface IJobData {
  _id: string;
  title: string;
  company: string;
  location: string;
  companyDescription: string;
  jobDescription: string;
  requirements: string[];
  salary: number;
  deadline: string;
  category: string;
  jobType: string;
  experienceLevel: string;
  skills: string[];
  benefits: string[];
  contactEmail: string;
  joiningDate: string;
  keyResponsibilities: string[];
  numberOfOpenings: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface IEducation {
  _id: string;
  college: string;
  startYear: string;
  endYear: string;
  degree: string;
  description: string;
  performanceScale: string;
  cgpa: string;
}
export interface IWorkExperience {
  _id: string;
  profile: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  isWorkFromHome: boolean;
  description: string;
  currentlyWorking: boolean;
  responsibility: string;
}

export interface ITraining {
  _id: string;
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  online: boolean;
  description: string;
  currentlyOngoing: boolean;
}

export interface IMeta {
  limit: number;
  page: number;
  total: number;
}
