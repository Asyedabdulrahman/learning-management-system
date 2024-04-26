import { resourceUsage } from "process";

const { gql, request } = require("graphql-request");

const MASTER_URL =
  "https://api-ap-south-1.hygraph.com/v2/" +
  process.env.NEXT_PUBLIC_HYGRAPH_API_KEY +
  "/master";

const getCourselist = async () => {
  const query = gql`
    query Assets {
      courseLists {
        name
        author
        id
        free
        description
        demoUrl
        youtubeUrl
        tag
        banner {
          url
        }
        banner {
          url
          width
        }
        chapter {
          ... on Chapter {
            id
            name
            video {
              url
            }
          }
        }
        totalChapters
        sourceCode
        slug
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const getSideBanner = async () => {
  const sidebannerquery = gql`
    query SideBanner {
      sideBanners {
        id
        name
        banner {
          id
          url
        }
        url
      }
    }
  `;
  const result = await request(MASTER_URL, sidebannerquery);
  return result;
};

const getcourseById = async (courseId) => {
  const lastquery =
    gql`
    query MyQuery {
      courseList(where: { slug: "` +
    courseId +
    `"}) {
        author
        banner {
          url
        }
        demoUrl
        description
        free
        id
        name
        slug
        sourceCode
        tag
        totalChapters
        chapter {
          ... on Chapter {
            id
            name
            youtubeUrl
            video {
              url
            }
            chapterNumber
          }
        }
      }
    }
  `;
  const result = await request(MASTER_URL, lastquery);
  return result;
};

const enrollToCourse = async (courseId, email) => {
  const query =
    gql`
    mutation Mymutation {
      createUserEnrollCourse(
        data: {
          courseId: "` +
    courseId +
    `"userEmail:"` +
    email +
    `"
          courseList: { connect: { slug: "` +
    courseId +
    `" } }
        }
      ) {
        id
      }
      publishManyUserEnrollCoursesConnection {
        edges {
          node {
            id
          }
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const checkUserEnrolledToCourse = async (courseId, email) => {
  const query =
    gql`
    query MyQuery {
      userEnrollCourses(
        where: {
          courseId: "` +
    courseId +
    `"
     userEmail: "` +
    email +
    `"
        }
      ) {
        courseId
        userEmail
        id
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const getUserEnrolledCourse = async (id, email) => {
  const query =
    gql`
    query MyQuery {
      userEnrollCourses(
        where: {
          id: "` +
    id +
    `"
          userEmail: "` +
    email +
    `"
        }
      ) {
        courseId
        userEmail
        completedChapter {
          ... on CompletedChapter {
            id
            chapterId
          }
        }
        courseList {
          author
          banner {
            url
          }
          chapter {
            ... on Chapter {
              id
              name
              shortDesc
              video {
                url
              }
            }
          }
          demoUrl
          description
          id
          free
          sourceCode
          totalChapters
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const getUserEnrolledCoursetwo = async (id) => {
  const query =
    gql`
    query MyQuery {
      userEnrollCourse(where: { id: "` +
    id +
    `" }) {
        id
        userEmail
        completedChapter {
          ... on CompletedChapter {
            id
            chapterId
            stage
          }
        }
        courseList {
          author
          chapter {
            ... on Chapter {
              id
              shortDesc
              name
              youtubeUrl
              video {
                url
              }
            }
          }
          youtubeUrl
          description
        }
        courseId
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const markChapterCompleted = async (enrollId, chapterId) => {
  const query =
    gql`
    mutation Mymutation {
      updateUserEnrollCourse(
        data: {
          completedChapter: { create: { CompletedChapter: { chapterId: "` +
    chapterId +
    `" } } }
        }
        where: { id: "` +
    enrollId +
    `" }
      ){
        id
      }
      publishUserEnrollCourse(where: { id: "` +
    enrollId +
    `" }) {
        id
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const getUserAllEnrolledCourseList = async (email) => {
  const query =
    gql`
    query MyQuery {
      userEnrollCourses(where: { userEmail: "` +
    email +
    `" }) {
        completedChapter {
          ... on CompletedChapter {
            id
            chapterId
          }
        }
        courseId
        courseList {
          id
          name
          totalChapters
          slug
          sourceCode
          free
          demoUrl
          description
          chapter {
            ... on Chapter {
              id
              name
            }
          }
          banner {
            url
          }
          author
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export default {
  getCourselist,
  getSideBanner,
  getcourseById,
  enrollToCourse,
  checkUserEnrolledToCourse,
  getUserEnrolledCourse,
  getUserEnrolledCoursetwo,
  markChapterCompleted,
  getUserAllEnrolledCourseList,
};
