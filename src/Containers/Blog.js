import React, { useState, useEffect } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import { config } from "../config";
import { Header } from "../Components/Header";
import { Loader } from "../Components/Common";
import { BlogContainer } from "../Components/Blog";
import { Card } from "../Components/Blog/Card";
import AllBlog from "./AllBlog";

const Blog = (props) => {
  const [blogType, setBlogType] = useState(props.blogType);
  const GET_POSTS = gql`
  {
    repository(owner: "${config.githubUserName}", name: "${config.githubRepo}") {
      issues(first: 100, states: OPEN, filterBy: { labels: "${blogType}" }, orderBy: { direction: DESC, field: CREATED_AT }) {
        nodes {
          title
          body
          bodyHTML
          bodyText
          number
          labels(first: 100) {
            nodes {
              color
              name
              id
            }
          }
          author {
            url
            avatarUrl
            login
          }
          updatedAt
          id
        }
      }
    }
  }
  `;
  const [posts, setPosts] = useState([]);
  const { loading, error, data } = useQuery(GET_POSTS);

  useEffect(() => {
    if (!loading) {
      if (error) {
        console.error(error);
      }

      if (data) {
        setPosts(data?.repository?.issues?.nodes);
      }
    }
  }, [loading, error, data]);

  return (
    <>
      <BlogContainer hidden={props.value !== props.index}>
        {loading ? (
          <Loader />
        ) : (
          posts.map((v, i) => {
            return <Card blog={v} key={i} />;
          })
        )}
      </BlogContainer>
    </>
  );
};

export default Blog;
