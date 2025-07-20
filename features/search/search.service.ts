import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

export interface JobModel {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  skills: string[];
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private jobsUrl = 'assets/jobs.json';

  constructor(private http: HttpClient) {}

  searchJobs(query: string) {
    return this.http.get<JobModel[]>(this.jobsUrl).pipe(
      map(jobs => jobs.filter(job =>
        job.title.toLowerCase().includes(query.toLowerCase()) ||
        job.description.toLowerCase().includes(query.toLowerCase()) ||
        job.skills.some((skill: string) => skill.toLowerCase().includes(query.toLowerCase()))
      ))
    );
  }
}
