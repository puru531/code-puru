import { QUERY_KEYS } from "@/utils/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { getTopics, getTopicsContentById } from "./api";
import { CONSTANSTS } from "@/utils/constants";
import { CourseTopic, RootState } from "@/types/model";
import { useSelector } from "react-redux";

const useAllTopics = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.TOPICS],
    queryFn: getTopics,
  });
};

export const useGetJsTopics = () => {
  const { data, isLoading, isError, error } = useAllTopics();
  const topics = data?.filter(
    (topic) => topic.course_id === CONSTANSTS.JAVASCRIPT_COURSE_ID,
  );
  return { topics, isLoading, isError, error };
};

export const useGetReactTopics = () => {
  const { data, isLoading, isError, error } = useAllTopics();
  const topics = data?.filter(
    (topic) => topic.course_id === CONSTANSTS.REACT_COURSE_ID,
  );
  return { topics, isLoading, isError, error };
};

export const useGetTopicsByPath = (basePath) => {
  const topics: CourseTopic[] = useSelector((state: RootState) => {
    let data: CourseTopic[] = [];
    switch (basePath) {
      case QUERY_KEYS.JAVASCRIPT:
        data = state.topics.jsTopics;
        break;
      case QUERY_KEYS.REACT:
        data = state.topics.reactTopics;
        break;
      default:
        break;
    }
    return data;
  });
  return topics;
};

export const useGetTopicsContentById = (topicId) => {
  return useQuery({
    queryKey: [`topic_${topicId}`],
    queryFn: () => getTopicsContentById(topicId),
  });
};