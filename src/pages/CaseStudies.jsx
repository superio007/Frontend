import React from "react";
import CaseStudyInfoPage from "../components/CaseStudyInfoPage";
import CseStudyContainer from "../components/CaseStudyContainer";
import Tagline from "../components/Tagline";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCaseStudiesPageContent = async () => {
  const { data } = await axios.get(
    "https://successful-bloom-8cd17fe201.strapiapp.com/api/case-studies-page?populate[case_studies_cards][populate]=thumbnail&populate[case_studies_page_infos][populate]=*&populate[case_study_tag_line][populate]=*"
  );
  return data;
};

const CaseStudies = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["case-studies-content"], // Unique query key
    queryFn: fetchCaseStudiesPageContent,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const apiResponse = data?.data || {}; // Ensure apiResponse is not undefined

  return (
    <>
      {apiResponse.case_studies_page_infos ? (
        <div className="case-studies-container">
          <CaseStudyInfoPage
            apiRes={apiResponse.case_studies_page_infos || {}}
          />
          <CseStudyContainer caseCards={apiResponse.case_studies_cards || []} />
          <Tagline apiRes={apiResponse.case_study_tag_line || {}} />
        </div>
      ) : (
        <p>No data available</p>
      )}
    </>
  );
};

export default CaseStudies;
