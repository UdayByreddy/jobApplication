import React from 'react';
import Hero from '../Hero';
import HomeCards from '../HomeCards';
import JobListing from '../JobListing';
import ViewAllJobs from '../ViewAllJobs';

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListing />
      <ViewAllJobs />
    </>
  );
}

export default HomePage;
