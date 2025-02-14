import React from "react";
import CaseStudyInfoPage from "../components/CaseStudyInfoPage";
import CseStudyContainer from "../components/CaseStudyContainer";
import Tagline from "../components/Tagline";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCaseStudiesPageContent = async () => {
  const { data } = await axios.get(
    "http://localhost:1337/api/case-studies-page?populate[case_studies_cards][populate]=thumbnail&populate[case_studies_page_infos][populate]=*&populate[case_study_tag_line][populate]=*"
  );
  return data;
};
const CaseStudies = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["homepage-content"],
    queryFn: fetchCaseStudiesPageContent,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  let apiResponse = data.data;
  return (
    <>
      <div style={{padding:"50px 40px"}}>
        <CaseStudyInfoPage apiRes={apiResponse.case_studies_page_infos} />
        <CseStudyContainer caseCards={apiResponse.case_studies_cards} />
        <Tagline apiRes={apiResponse.case_study_tag_line} />
      </div>
    </>
  );
};

export default CaseStudies;
